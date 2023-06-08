import { useRouter } from "next/router"
import { getAllCategory, getAllPost, getActiveCategory } from "api/endpoint"
import Layout from "components/layout/layout"
import Grid from "@mui/material/Grid"
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { CATEGORY, CATEGORY_LEVEL, CATEGORY_MAP } from "utils/constant"
import {
  CategoryTitle, SubCategoryTitle
} from "components/category/category-style"
import Card from "components/category/card"
import styled from "styled-components"
import ArrowDown from "components/icons/arrow-down"
import { useState } from "react"

const CategoryFilter = styled.div`
display: block;
@media only screen and (max-width: 1120px) {
  display: none;
}
`
const MobileCategoryFilterContainer = styled.div`
position: relative;
`
const MobileCategoryFilter = styled.div`
display: none;
@media only screen and (max-width: 1120px) {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 15px 14px 15px;
  gap: 15px;
  background: #515151;
  border-radius: 20px;
}
`
const MobileSelectedCategory = styled.h1`
font-family: 'Roboto';
font-weight: 500;
font-size: 16px;
line-height: 0px;
color: #DCCAC4;
`
const MobileCategoryDropdown = styled.div<{ visible: boolean }>`
display: ${(props) => (props.visible ? "flex" : "none")};
flex-direction: column;
position: absolute;
background: #515151;
border-radius: 15px;
padding: 5px 35px 10px 18px;
right: 0;
top: 60px;
`
const MobileCategoryDropdownItem = styled.h1`
font-family: 'Roboto';
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #DCCAC4;
`
const Main = styled.div`
display: flex;
flex-direction: column;
width: 75%;
@media only screen and (max-width: 600px) {
  width: 100%;
}
`
const ListArticle = ({ posts, categories }: any) => {
  const router = useRouter()
  const { catId, subId, page }: any = router.query
  const { total, items } = posts
  const totalPage = Math.ceil(total / 10)

  const SUB_CATEGORIES = [{ id: 0, label: 'Tất cả' }]
  categories.map((i: any) => {
    if (i.level === CATEGORY_LEVEL.LEVEL_2 && i.parentId === parseInt(catId)) {
      SUB_CATEGORIES.push({ id: i.id, label: i.name })
    }
  })

  const [visibleMobileCategoryFilter, setVisibleMobileCategoryFilter] = useState(false)

  const renderMobileCategoryDropdown = SUB_CATEGORIES.map((item, index) => (
    <MobileCategoryDropdownItem onClick={() => setVisibleMobileCategoryFilter(false)} key={index}>{item.label}</MobileCategoryDropdownItem>
  ))
  
  const renderSubCategory = SUB_CATEGORIES.map((item, index) => (
    <SubCategoryTitle
      onClick={() => {
        router.push({
          pathname: '/category/[catId]/sub-category/[subId]/page/[page]',
          query: {
            catId,
            subId: item.id,
            page: 1
          }
        })
      }}
      active={parseInt(subId) === item.id}
      key={index}
    >{item.label}</SubCategoryTitle>
  ))

  const renderListArticle = items.map((item: any, index: any) => (
    <Grid key={index} item xs={12}>
      <Card id={item.id} title={item.title} thumbnailUrl={item.image} />
    </Grid>
  ))

  return (
    <Layout>
      <Grid marginTop={"25px"} marginBottom={"50px"} container>
        <Main>
          <Grid container item xs={12} alignItems={'center'} justifyContent={'space-between'} marginTop={'10px'} marginBottom={'15px'}>
            <Grid item xs={'auto'}>
              <CategoryTitle>{CATEGORY_MAP.get(catId)}</CategoryTitle>
            </Grid>
            <Grid item xs={'auto'}>
              <CategoryFilter>
                <Stack justifyContent={'flex-end'} direction="row">
                  {renderSubCategory}
                </Stack>
              </CategoryFilter>
              <MobileCategoryFilterContainer>
                <MobileCategoryFilter onClick={() => setVisibleMobileCategoryFilter(!visibleMobileCategoryFilter)}>
                  <MobileSelectedCategory>Tất cả</MobileSelectedCategory>
                  <ArrowDown />
                </MobileCategoryFilter>
                <MobileCategoryDropdown visible={visibleMobileCategoryFilter}>
                  {renderMobileCategoryDropdown}
                </MobileCategoryDropdown>
              </MobileCategoryFilterContainer>
            </Grid>
          </Grid>
          <Grid container item xs={12} rowSpacing={3} marginBottom={items.length == 1 ? '200px' : ''}>
            {renderListArticle}
          </Grid>
          <Grid marginTop={'70px'} container item xs={12}>
            <Pagination
              hidePrevButton
              hideNextButton
              page={parseInt(page)}
              count={totalPage}
              onChange={(e, page) => {
                router.push({
                  pathname: '/category/[catId]/sub-category/[subId]/page/[page]',
                  query: {
                    catId,
                    subId,
                    page
                  }
                })
              }}
            />
          </Grid>
        </Main>
      </Grid>
    </Layout>
  )
}

export default ListArticle

export async function getStaticPaths() {
  const categories = await getAllCategory({ page: 1, limit: 1000 })
  const categoryItems = categories.items
  const programSubCategories = categoryItems
    .filter((i: any) => i.level === CATEGORY_LEVEL.LEVEL_2 && i.parentId === CATEGORY.PROGRAM.VALUE)
    .map((i: any) => i.id)
  const designSubCategories = categoryItems
    .filter((i: any) => i.level === CATEGORY_LEVEL.LEVEL_2 && i.parentId === CATEGORY.DESIGN.VALUE)
    .map((i: any) => i.id)
  const languageSubCategories = categoryItems
    .filter((i: any) => i.level === CATEGORY_LEVEL.LEVEL_2 && i.parentId === CATEGORY.LANGUAGE.VALUE)
    .map((i: any) => i.id)

  const posts = await getAllPost({ page: 1, limit: 10000 })

  let paths: any = []

  await generatePath(programSubCategories, CATEGORY.PROGRAM.VALUE, paths, posts.items)
  await generatePath(designSubCategories, CATEGORY.DESIGN.VALUE, paths, posts.items)
  await generatePath(languageSubCategories, CATEGORY.LANGUAGE.VALUE, paths, posts.items)

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
  const { catId, subId, page } = params
  const categories = await getActiveCategory()
  if (parseInt(subId) === 0) {
    const posts = await getAllPost({ page, limit: 10, categoryId: catId })
    return { props: { posts, categories } }
  } else {
    const posts = await getAllPost({ page, limit: 10, subCategoryId: subId })
    return { props: { posts, categories } }
  }
}

const generatePath = async (subCats: any, parentId: any, paths: any, posts: any) => {
  subCats.push(0)
  subCats.map((subCategory: any) => {
    if (parseInt(subCategory) === 0) {
      const totalPost = posts.filter((i: any) => i.categoryId === parentId).length
      const maxPage = Math.ceil(totalPost / 10)
      for (let j = 1; j <= maxPage; j++) {
        paths.push({
          params: { 
            catId: parentId.toString(),  
            subId: subCategory.toString(),
            page: j.toString()
          }
        })
      }
    } else {
      const totalPost = posts.filter((i: any) => i.subCategoryId === subCategory).length
      const maxPage = Math.ceil(totalPost / 10)
      for (let j = 1; j <= maxPage; j++) {
        paths.push({
          params: {
            catId: parentId.toString(),
            subId: subCategory.toString(),
            page: j.toString()
          }
        })
      }
    }
  })
}

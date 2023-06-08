import { useRouter } from 'next/router'
import { METHOD, sendRequest } from 'api/config'
import { GET_POST, GET_ALL_POST } from 'api/endpoint'
import Layout from 'components/layout/layout'
import Grid from '@mui/material/Grid'
import { CATEGORY } from 'utils/constant'
import {
  TocHeading,
  TocSubHeading,
  ArticleTitle,
  ArticleCreatedDate,
  ArticleContentHeading,
  ArticleContentParagraph,
  RelateArticle
} from 'components/article/article-style'
import {
  CoverPost,
  CoverArticleSubCategoryTitle,
  CoverArticleTitle,
  CoverArticleButton,
  DesktopCategorySection,
  MobileCategorySection,
  MobileHeader
} from 'components/home/home-style'
import BigCard from 'components/card/big-card'
import NormalCard from 'components/card/normal-card'
import SmallCard from 'components/card/small-card'
import Divider from '@mui/material/Divider'
import { Button } from 'components/button/button-style'
import { Container } from 'components/layout/layout-style'
import Footer from 'components/footer/footer'
import { FullPageBackground, NavContainer, Logo, NavItemContainer, NavItem } from 'components/home/home-style'
import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { CATEGORY_MAP, NAV_ITEMS } from 'utils/constant'
import Slide from 'components/home/slide-section'
import Hamburger from 'components/icons/hamburger'
import Carousel from 'components/home/carousel'
import { CarouselItem } from 'components/home/carousel-style'
import styled from 'styled-components'

const MobileSideSection = styled.div`
  transform: rotateX(180deg);
  display: flex;
  overflow-x: scroll;
  gap: 15px;
  ::-webkit-scrollbar {
    height: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #515151;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #8a7783;
  }
`
const MobileSlideItem = styled.div`
  transform: rotateX(180deg);
  flex: 0 0 100%;
  padding-top: 20px;
  padding-bottom: 20px;
`

const MobileNavDropdown = styled.div<{ visible: boolean }>`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  background: #ffffff;
  border-radius: 15px;
  padding-left: 15px;
  padding-right: 30px;
  right: 15px;
  top: 45px;
  z-index: 1;
`
const MobileNavItem = styled.h1`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #515151;
  cursor: pointer;
`

const Home = ({ recentPosts, programPosts, designPosts, languagePosts }: any) => {
  const router = useRouter()
  const [visibleMobileNav, setVisibleMobileNav] = useState(false)

  const renderListSmallCard = (posts: any) =>
    posts.map((item: any) => {
      return (
        <Grid key={item.id} item xs={4}>
          <SmallCard id={item.id} title={item.title} category={item.subCategory} thumbnailUrl={item.image} />
        </Grid>
      )
    })

  const renderMobileListSmallCard = (posts: any) =>
    posts.map((item: any) => {
      return (
        <Grid key={item.id} item xs={12}>
          <SmallCard id={item.id} title={item.title} category={item.subCategory} thumbnailUrl={item.image} />
        </Grid>
      )
    })

  const renderCategoryPostSection = (sectionName: any, posts: any, viewMorePath: any) => {
    const bigCardContent = posts[0]
    const normalCardContent = posts[1]
    const smallCardContent = posts.slice(2, posts.length)
    return (
      <Grid container item xs={12} rowSpacing={2}>
        <Grid marginTop={'10px'} container item xs={12}>
          <RelateArticle>{sectionName}</RelateArticle>
        </Grid>
        <Grid container item xs={12} columnSpacing={2}>
          <Grid item xs={8}>
            <BigCard
              id={bigCardContent.id}
              title={bigCardContent.title}
              category={bigCardContent.subCategory}
              thumbnailUrl={bigCardContent.image}
            />
          </Grid>
          <Grid item xs={4}>
            {normalCardContent && (
              <NormalCard
                id={normalCardContent.id}
                title={normalCardContent.title}
                category={normalCardContent.subCategory}
                thumbnailUrl={normalCardContent.image}
              />
            )}
          </Grid>
        </Grid>
        {smallCardContent && smallCardContent.length > 0 && (
          <Grid container item xs={12} columnSpacing={2}>
            {renderListSmallCard(smallCardContent)}
          </Grid>
        )}
        <Grid justifyContent={'center'} marginTop={'5px'} container item xs={12} columnSpacing={2}>
          <Link href={viewMorePath}><Button>Xem thêm</Button></Link>
        </Grid>
      </Grid>
    )
  }

  const renderMobileCategoryPostSection = (sectionName: any, posts: any, viewMorePath: any) => (
    <Grid container item xs={12} rowSpacing={1}>
      <Grid container item xs={12}>
        <RelateArticle>{sectionName}</RelateArticle>
      </Grid>
      {renderMobileListSmallCard(posts)}
      <Grid justifyContent={'center'} container item xs={12}>
        <Link href={viewMorePath}><Button>Xem thêm</Button></Link>
      </Grid>
    </Grid>
  )

  const renderMobileRecentPostSection = (posts: any) => {
    const renderMobileListNormalCard = (posts: any) =>
      posts.map((item: any) => {
        return (
          <MobileSlideItem key={item.id}>
            <NormalCard id={item.id} title={item.title} categoryId={item.subCategory} thumbnailUrl={item.image} />
          </MobileSlideItem>
        )
      })

    return (
      <div>
        <RelateArticle>Mới cập nhật</RelateArticle>
        <MobileSideSection>{renderMobileListNormalCard(posts)}</MobileSideSection>
      </div>
    )
  }

  const renderNavItem = NAV_ITEMS.map((item) => (
    <li key={item.NAME}>
      <Link href={item.PATH}>
        <NavItem active={item.PATH === '/'}>{item.NAME}</NavItem>
      </Link>
    </li>
  ))

  const renderMobileNavItem = NAV_ITEMS.map((item) => (
    <Link key={item.NAME} href={item.PATH}>
      <MobileNavItem>{item.NAME}</MobileNavItem>
    </Link>
  ))

  const renderFullPageBackground = () => {
    const post = recentPosts[0]
    const otherPosts = recentPosts.slice(1)
    return (
      <FullPageBackground backgroundUrl={post.image}>
        <NavContainer>
          <Link href='/'>
            <Logo>fancy things</Logo>
          </Link>
          <NavItemContainer>{renderNavItem}</NavItemContainer>
        </NavContainer>
        <MobileHeader>
          <Grid
            justifyContent={'space-between'}
            alignItems={'center'}
            paddingLeft={'15px'}
            paddingRight={'15px'}
            container
            item
            xs={12}
          >
            <Link href='/'>
              <Logo>fancy things</Logo>
            </Link>
            <div onClick={() => setVisibleMobileNav(!visibleMobileNav)}>
              <Hamburger />
            </div>
            <MobileNavDropdown visible={visibleMobileNav}>{renderMobileNavItem}</MobileNavDropdown>
          </Grid>
        </MobileHeader>
        <CoverPost>
          <CoverArticleSubCategoryTitle>{post.category}</CoverArticleSubCategoryTitle>
          <CoverArticleTitle>{post.title}</CoverArticleTitle>
          <CoverArticleButton onClick={() => {
            router.push({
              pathname: '/articles/[id]',
              query: {
                id: post.id
              }
            })
          }}>Đọc tiếp</CoverArticleButton>
        </CoverPost>
        <Slide posts={otherPosts} />
      </FullPageBackground>
    )
  }

  return (
    <div>
      {renderFullPageBackground()}
      <Container>
        <Grid marginTop={'10px'} container>
          <DesktopCategorySection>
            <Grid item xs={9} marginBottom={'50px'}>
              {renderCategoryPostSection('Lập trình', programPosts, `/category/${CATEGORY.PROGRAM.VALUE}/sub-category/0/page/1`)}
              {renderCategoryPostSection('Thiết kế', designPosts, `/category/${CATEGORY.DESIGN.VALUE}/sub-category/0/page/1`)}
              {renderCategoryPostSection('Ngoại ngữ', languagePosts, `/category/${CATEGORY.LANGUAGE.VALUE}/sub-category/0/page/1`)}
            </Grid>
          </DesktopCategorySection>
          <MobileCategorySection>
            <Grid item xs={12} marginBottom={'20px'}>
              {renderMobileRecentPostSection(recentPosts)}
              {renderMobileCategoryPostSection('Lập trình', programPosts, `/category/${CATEGORY.PROGRAM.VALUE}/sub-category/0/page/1`)}
              {renderMobileCategoryPostSection('Thiết kế', designPosts, `/category/${CATEGORY.DESIGN.VALUE}/sub-category/0/page/1`)}
              {renderMobileCategoryPostSection('Ngoại ngữ', languagePosts, `/category/${CATEGORY.LANGUAGE.VALUE}/sub-category/0/page/1`)}
            </Grid>
          </MobileCategorySection>
        </Grid>
      </Container>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const recentPosts = await getRecentPosts()
  const programPosts = await getProgramPosts()
  const designPosts = await getDesignPosts()
  const languagePosts = await getLanguagePosts()
  return { props: { recentPosts, programPosts, designPosts, languagePosts } }
}

const getRecentPosts = async () => {
  const { data, error }: any = await sendRequest(METHOD.POST, GET_ALL_POST, { page: 1, limit: 10 })
  if (data) {
    return data.data.items
  } else {
    return []
  }
}

const getProgramPosts = async () => {
  const { data, error }: any = await sendRequest(METHOD.POST, GET_ALL_POST, {
    page: 1,
    limit: 5,
    categoryId: CATEGORY.PROGRAM.VALUE
  })
  if (data) {
    return data.data.items
  } else {
    return []
  }
}

const getDesignPosts = async () => {
  const { data, error }: any = await sendRequest(METHOD.POST, GET_ALL_POST, {
    page: 1,
    limit: 5,
    categoryId: CATEGORY.DESIGN.VALUE
  })
  if (data) {
    return data.data.items
  } else {
    return []
  }
}

const getLanguagePosts = async () => {
  const { data, error }: any = await sendRequest(METHOD.POST, GET_ALL_POST, {
    page: 1,
    limit: 5,
    categoryId: CATEGORY.LANGUAGE.VALUE
  })
  if (data) {
    return data.data.items
  } else {
    return []
  }
}

export default Home

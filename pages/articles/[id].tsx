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
  Heading,
  Category,
  CardContainer
} from "components/card/big-card-style"
import BigCard from 'components/card/big-card'
import NormalCard from 'components/card/normal-card'
import SmallCard from 'components/card/small-card'
import Divider from '@mui/material/Divider'
import { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Dot } from 'components/icons'
import Image from 'next/image'

const FirstListCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 16px;
  margin-top: 10px;
  @media only screen and (max-width: 640px) {
    flex-direction: column;
  }
`
const BigCardContainer = styled.div`
  flex: 2;
`
const NormalCardContainer = styled.div`
  flex: 0 0 32%;
`
const ListSmallCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 16px;
  margin-top: 6px;
  @media only screen and (max-width: 640px) {
    flex-direction: column;
  }
`
const SmallCardContainer = styled.div`
  flex: 1;
`
const Main = styled.div`
    display: flex:
    flex-direction: column;
    width: 75%;
    @media only screen and (max-width: 860px) {
      width: 100%;
    }
  `
const TableOfContent = styled.div`
  position: fixed;
  top: 115px;
  right: 5%;
  left: 80%;
  @media only screen and (max-width: 860px) {
    display: none;
  }
`
export const Thumbnail = styled.div<{ backgroundUrl: string }>`
position: relative;
background: url(${props => props.backgroundUrl});
background-size: contain;
background-repeat: no-repeat;
background-position: center center;
border-radius: 15px;
width: 100%;
height: 350px;
margin-top: 30px;
margin-bottom: 30px;
`
export const ThumbnailShadow = styled.div<{ backgroundUrl: string }>`
position: absolute;
width: 80%;
height: 80%;
left: 12px;
bottom: -5px;
z-index: -1;

background: url(${props => props.backgroundUrl});
background-size: contain;
background-repeat: no-repeat;
background-position: center center;
filter: blur(54px);
border-radius: 15px;
opacity: 0.5;
`

const Article = ({ post }: any) => {
  const titleRef: any = useRef()
  let listRef: any = useRef([])

  const bigCardContent = post.relatedArticles[0]
  const normalCardContent = post.relatedArticles[1]
  const smallCardContent = post.relatedArticles.slice(2)

  const content = JSON.parse(post.content)
  const toc = content.filter((i: any) => i.type === 'header').map((i: any) => i.data.text)

  const [currentToc, setCurrentToc] = useState(0)

  const [y, setY] = useState(0)

  const TOC_THRESHOLD = 200

  const handleNavigation = useCallback(
    (e: any) => {
      if (y > window.scrollY) {
        if (currentToc === 0) return
        if (listRef.current[currentToc].getBoundingClientRect().top > TOC_THRESHOLD) {
          setCurrentToc(currentToc - 1)
        }
      } else if (y < window.scrollY) {
        if (currentToc === toc.length - 1) return
        if (listRef.current[currentToc + 1].getBoundingClientRect().top < TOC_THRESHOLD) {
          setCurrentToc(currentToc + 1)
        }
      }
      setY(window.scrollY)
    },
    [currentToc, listRef, y, toc.length]
  )

  useEffect(() => {
    window.addEventListener('scroll', handleNavigation)

    return () => {
      window.removeEventListener('scroll', handleNavigation)
    }
  }, [handleNavigation])

  useEffect(() => {
    titleRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }, [])

  const renderToc = toc.map((item: any, index: any) => (
    <Grid key={index} item xs={12}>
      <TocSubHeading
        onClick={() => {
          setCurrentToc(index)
          listRef.current[index].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }}
        active={index === currentToc}
      >
        {item}
      </TocSubHeading>
    </Grid>
  ))
  const renderContent = content.map((item: any, i: any) => {
    const { type, data } = item
    switch (type) {
      case 'header':
        const key = toc.indexOf(data.text)
        return (
          <ArticleContentHeading ref={(el) => (listRef.current[key] = el)} key={`${i}-heading`}>
            {data.text}
          </ArticleContentHeading>
        )
      case 'list':
        const { style, items } = data
        if (style === 'ordered') {
          return items.map((listItem: any, j: any) => (
            <ArticleContentParagraph key={`${j}-order-list`}>
              {j + 1}. {listItem}
            </ArticleContentParagraph>
          ))
        } else {
          return items.map((listItem: any, j: any) => (
            <ArticleContentParagraph key={`${j}-unorder-list`}>
              <span style={{marginRight: '20px'}}><Dot /></span>
              {listItem.replace('<br>', '')}
            </ArticleContentParagraph>
          ))
        }
      case 'paragraph':
        const content = data.text.replace('&nbsp;', ' ')
        return <ArticleContentParagraph key={`${i}-paragraph`}>{content}</ArticleContentParagraph>
      case 'image':
        return (
          <Thumbnail backgroundUrl={data.description}>
            <ThumbnailShadow backgroundUrl={data.description}/>
          </Thumbnail>
        )
      default:
        return
    }
  })
  const renderListSmallCard = smallCardContent.map((item: any) => {
    return (
      <SmallCardContainer key={item.id}>
        <SmallCard id={item.id} title={item.title} category={item.subCategory} thumbnailUrl={item.image} />
      </SmallCardContainer>
    )
  })
  return (
    <Layout>
      <Grid ref={titleRef} marginTop={'25px'} marginBottom={'50px'} container>
        <Main>
          <Grid item xs={12}>
            <ArticleTitle>{post.title}</ArticleTitle>
            <ArticleCreatedDate>{post.createdAt}</ArticleCreatedDate>
            {renderContent}
          </Grid>
          <Grid container item xs={12} rowSpacing={2}>
            <Grid marginTop={'70px'} marginBottom={'10px'} container item xs={12}>
              <RelateArticle>Các bài viết liên quan</RelateArticle>
            </Grid>
            <FirstListCardContainer>
              <BigCardContainer>
                <BigCard
                  id={bigCardContent.id}
                  title={bigCardContent.title}
                  category={bigCardContent.subCategory}
                  thumbnailUrl={bigCardContent.image}
                />
              </BigCardContainer>
              <NormalCardContainer>
                <NormalCard
                  id={normalCardContent.id}
                  title={normalCardContent.title}
                  category={normalCardContent.subCategory}
                  thumbnailUrl={normalCardContent.image}
                />
              </NormalCardContainer>
            </FirstListCardContainer>
            <ListSmallCardContainer>{renderListSmallCard}</ListSmallCardContainer>
          </Grid>
        </Main>
        <TableOfContent>
          <Grid container item xs={12}>
            <Grid item xs={12}>
              <TocHeading>Mục lục</TocHeading>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            {renderToc}
          </Grid>
        </TableOfContent>
      </Grid>
    </Layout>
  )
}

export async function getStaticPaths() {
  const { data, error }: any = await sendRequest(METHOD.POST, GET_ALL_POST, { page: 1, limit: 10000 })
  // Get the paths we want to pre-render based on posts
  const paths = data.data.items.map((post: any) => ({
    params: { id: post.id.toString() }
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const { data, error }: any = await sendRequest(METHOD.POST, GET_POST, { id: params.id })
  // Pass post data to the page via props
  return { props: { post: data.data } }
}

export default Article

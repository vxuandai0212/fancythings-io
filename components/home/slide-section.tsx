import {
  CoverArticleSubCategoryTitle,
  SlideSection,
  SlideCardItemThumbnail,
  SlideCardItemThumbnailShadow,
  SlideCardItemCategory,
  SlideCardItemTitle,
  SlideCardItemContainer,
  ListCardContainer
} from 'components/home/home-style'
import Link from 'next/link'
import { CATEGORY_MAP, CATEGORY } from 'utils/constant'
import { Grid, Stack } from '@mui/material'
import NormalCard from 'components/card/normal-card'

const Slide = ({ posts }: any) => {
  const renderListCard = posts.map(({ id, title, category, image }: any) => (
    <Grid key={id} container item xs='auto'>
      <Link href={`/articles/${id}`}>
        <SlideCardItemContainer>
          <Grid container item xs={12}>
            <SlideCardItemThumbnail backgroundUrl={image}>
              <SlideCardItemThumbnailShadow backgroundUrl={image}></SlideCardItemThumbnailShadow>
            </SlideCardItemThumbnail>
          </Grid>
          <Grid paddingTop={'5px'} paddingLeft={'20px'} paddingRight={'20px'} container item xs={12}>
            <Grid container item xs={12}>
              <SlideCardItemCategory>{category}</SlideCardItemCategory>
            </Grid>
            <Grid marginTop={'10px'} container item xs={12}>
              <SlideCardItemTitle>{title}</SlideCardItemTitle>
            </Grid>
          </Grid>
        </SlideCardItemContainer>
      </Link>
    </Grid>
  ))

  return (
    <SlideSection>
      <CoverArticleSubCategoryTitle>Mới cập nhật</CoverArticleSubCategoryTitle>
      <ListCardContainer>
        <Stack direction={'row'}>{renderListCard}</Stack>
      </ListCardContainer>
    </SlideSection>
  )
}

export default Slide

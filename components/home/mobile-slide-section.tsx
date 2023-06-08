import {
  CoverArticleSubCategoryTitle,
  SlideSection,
  SlideCardItemThumbnail,
  SlideCardItemThumbnailShadow,
  SlideCardItemCategory,
  SlideCardItemTitle,
  SlideCardItemContainer,
  ListCardContainer,
  MobileSlideContainer
} from "components/home/home-style"
import Link from "next/link"
import { CATEGORY_MAP, CATEGORY } from "utils/constant"
import { Grid, Stack } from "@mui/material"
import NormalCard from 'components/card/normal-card'

const MobileSlideSection = ({ posts }: any) => {
  const renderListCard = posts.map(({ id, title, categoryId, thumbnailUrl }: any) => (
    <Grid key={id} container item xs="auto">
      <Link href={`/articles/${id}`}>
        <SlideCardItemContainer>
          <Grid container item xs={12}>
            <SlideCardItemThumbnail backgroundUrl={thumbnailUrl}>
              <SlideCardItemThumbnailShadow backgroundUrl={thumbnailUrl}></SlideCardItemThumbnailShadow>
            </SlideCardItemThumbnail>
          </Grid>
          <Grid paddingTop={'5px'} paddingLeft={'20px'} paddingRight={'20px'} container item xs={12}>
            <Grid container item xs={12}>
              <SlideCardItemCategory>{CATEGORY_MAP.get(categoryId)}</SlideCardItemCategory>
            </Grid>
            <Grid marginTop={'10px'} container item xs={12}>
              <SlideCardItemTitle>{title}</SlideCardItemTitle>
            </Grid>
          </Grid>
        </SlideCardItemContainer>
      </Link>
    </Grid>
  )
)
  const post = {
    id: 5,
    title: "Một số trò chơi vui nhộn giúp bạn học và thực hành CSS",
    categoryId: CATEGORY.PROGRAM.VALUE,
    subCategoryId: CATEGORY.PROGRAM.SUB_CATEGORY.WEBSITE.VALUE,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1545296664-39db56ad95bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1701&q=80",
  }
  const { id, title, categoryId, subCategoryId, thumbnailUrl } = post
  return (
    <SlideSection>
      <CoverArticleSubCategoryTitle>Mới cập nhật</CoverArticleSubCategoryTitle>
      <ListCardContainer>
        <Stack direction={'row'}>
          {renderListCard}
        </Stack>
      </ListCardContainer>
    </SlideSection>
  )
}

export default MobileSlideSection
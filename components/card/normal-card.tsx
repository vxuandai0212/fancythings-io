import {
  Heading,
  Category,
  CardContainer,
  Thumbnail,
  ThumbnailShadow
} from "components/card/normal-card-style"
import Grid from '@mui/material/Grid'
import Link from "next/link"
import { CATEGORY_MAP } from "utils/constant"

const NormalCard = ({ id, title, category, thumbnailUrl }: any) => {
  return (
    <Grid container>
      <Link href={`/articles/${id}`}>
        <CardContainer>
          <Grid container item xs={12}>
            <Thumbnail backgroundUrl={thumbnailUrl}>
              <ThumbnailShadow backgroundUrl={thumbnailUrl}/>
            </Thumbnail>
          </Grid>
          <Grid paddingTop={'20px'} paddingLeft={'20px'} paddingRight={'20px'} container flexDirection={'column'} item xs={12}>
            <Category>{category}</Category>
            <Heading>{title}</Heading>
          </Grid>
        </CardContainer>
      </Link>
    </Grid>
  )
}

export default NormalCard
import {
  Heading,
  Category,
  CardContainer,
  Thumbnail,
  ThumbnailShadow
} from "components/card/big-card-style"
import Grid from '@mui/material/Grid'
import Link from "next/link"
import { CATEGORY_MAP } from "utils/constant"

const BigCard = ({ id, title, category, thumbnailUrl }: any) => {
  return (
      <Link href={`/articles/${id}`}>
        <CardContainer>
          <Grid container item xs={12}>
            <Grid container item xs={6}>
              <Thumbnail backgroundUrl={thumbnailUrl}>
                <ThumbnailShadow backgroundUrl={thumbnailUrl}/>
              </Thumbnail>
            </Grid>
            <Grid flexDirection={'column'} justifyContent={'center'} paddingLeft={'20px'} paddingRight={'20px'} container item xs={6}>
              <Category>{category}</Category>
              <Heading>{title}</Heading>
            </Grid>
          </Grid>
        </CardContainer>
      </Link>
    
  )
}

export default BigCard
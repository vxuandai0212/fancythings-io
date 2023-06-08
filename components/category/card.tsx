import {
  Heading,
  CardContainer,
  Thumbnail,
  ThumbnailShadow
} from "components/category/card-style"
import Grid from '@mui/material/Grid'
import Link from "next/link"

const Card = ({ id, title, thumbnailUrl }: any) => {
  return (
      <Link href={`/articles/${id}`}>
        <CardContainer>
          <Grid container item xs={12}>
            <Grid container item xs={6}>
              <Thumbnail backgroundUrl={thumbnailUrl}>
                <ThumbnailShadow backgroundUrl={thumbnailUrl}/>
              </Thumbnail>
            </Grid>
            <Grid paddingLeft={'20px'} paddingRight={'20px'} alignContent={'center'} container item xs={6}>
              <Heading>{title}</Heading>
            </Grid>
          </Grid>
        </CardContainer>
      </Link>
    
  )
}

export default Card
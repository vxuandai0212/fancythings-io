import {
  Heading,
  Category,
  CardContainer,
  ThumbnailShadow
} from "components/card/small-card-style"
import Grid from '@mui/material/Grid'
import Link from "next/link"
import { CATEGORY_MAP } from "utils/constant"

const SmallCard = ({ id, title, category, thumbnailUrl }: any) => {
  return (
      <Link href={`/articles/${id}`}>
        <CardContainer backgroundUrl={thumbnailUrl}>
          <ThumbnailShadow backgroundUrl={thumbnailUrl}/>
          <Category>{category}</Category>
          <Heading>{title}</Heading>
        </CardContainer>
      </Link>
  )
}

export default SmallCard
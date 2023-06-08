import styled from 'styled-components'

export const Heading = styled.h1`
font-family: 'Roboto';
font-weight: 700;
font-size: 24px;
line-height: 32px;
color: #515151;
overflow: hidden;
max-height: 191px;
`

export const CardContainer = styled.div`
* {
  cursor: pointer;
}
height: 242px;
background: rgba(230, 231, 217, 0.3);
border-radius: 15px;
&:hover {
  background: rgba(220, 202, 196, 0.3);
  h1 {
    color: #8A7783;
  }
}
`
export const Thumbnail = styled.div<{ backgroundUrl: string }>`
position: relative;
background: url(${props => props.backgroundUrl});
background-size: cover;
border-radius: 15px;
width: 100%;
height: 242px;
`
export const ThumbnailShadow = styled.div<{ backgroundUrl: string }>`
position: absolute;
width: 80%;
height: 80%;
left: 12px;
bottom: -5px;
z-index: -1;

background: url(${props => props.backgroundUrl});
background-size: cover;
filter: blur(54px);
border-radius: 15px;
`
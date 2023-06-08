import styled from 'styled-components'

export const Heading = styled.h1`
padding-left: 15px;
padding-right: 15px;
font-family: 'Roboto';
font-weight: 700;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
height: 50px;
overflow: hidden;
`
export const Category = styled.h2`
padding-top: 15px;
padding-left: 15px;
font-family: 'Roboto';
font-weight: 900;
font-size: 14px;
line-height: 16px;
color: #9FADB0;
text-transform: uppercase;
`

export const CardContainer = styled.div<{ backgroundUrl: string }>`
* {
  cursor: pointer;
}
height: 106px;
border-radius: 15px;
&:hover {
  h1 {
    color: #DCCAC4;
  }
}
background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props => props.backgroundUrl});
background-size: cover;
position: relative;
`
export const ThumbnailShadow = styled.div<{ backgroundUrl: string }>`
position: absolute;
width: 80%;
height: 80px;
left: 12px;
bottom: -5px;
z-index: -1;

background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props => props.backgroundUrl});
background-size: cover;
filter: blur(54px);
border-radius: 15px;
`
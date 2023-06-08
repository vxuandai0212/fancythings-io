import styled from 'styled-components'

export const Container = styled.div`
margin-top: 50px;
margin-bottom: 50px;
width: 100%;
overflow: hidden;
`
export const Heading = styled.h1`
font-family: 'Roboto';
font-weight: bold;
font-size: 60px;
color: #515151;
margin-bottom: 30px;
margin-top: 0;
@media only screen and (max-width: 720px) {
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  color: #515151;
}
`
export const ProjectContainer = styled.div`
display: flex;
flex-direction: row;
@media only screen and (max-width: 840px) {
  flex-direction: column;
  gap: 20px;
}
` 
export const ProjectItem = styled.div`
* {
  cursor: pointer;
}
margin-right: 20px;
width: 347px;
background: rgba(230, 231, 217, 0.3);
border-radius: 15px;
&:hover {
    background: rgba(220, 202, 196, 0.3); 
}
align-self: center;
@media only screen and (max-width: 428px) {
  width: 100%;
  margin: 0;
}
`
export const Thumbnail = styled.div<{ backgroundUrl: string }>`
position: relative;
width: 327px;
height: 194px;
margin-left: 10px;
margin-top: 10px;
background: url(${props => props.backgroundUrl});
background-size: cover;
border-radius: 15px;
@media only screen and (max-width: 428px) {
  width: auto;
  margin-right: 10px;
}
`
export const ThumbnailShadow = styled.div<{ backgroundUrl: string }>`
position: absolute;
width: 302px;
height: 157px;
left: 12px;
bottom: -5px;
z-index: -1;

background: url(${props => props.backgroundUrl});
background-size: cover;
filter: blur(54px);
border-radius: 15px;
@media only screen and (max-width: 428px) {
  width: 90%;
}
`
export const TitleSection = styled.div`
margin-top: 5px;
margin-left: 10px;
margin-right: 10px;
overflow: hidden;
display: flex;
align-items: center;
`
export const Title = styled.h2`
font-family: 'Roboto';
font-size: 16px;
font-weight: 900;
line-height: 24px;
color: #515151;
margin-right: 20px;
`
export const Category = styled.h2`
font-family: 'Roboto';
font-size: 16px;
font-weight: 500;
line-height: 24px;
color: #DCCAC4;
padding-top: 8px;
padding-right: 12px;
padding-left: 12px;
padding-bottom: 6px;
background: #515151;
border-radius: 20px;
`
export const ProjectDescription = styled.div`
height: 30px;
overflow: hidden;
color: #515151;
margin-left: 10px;
margin-right: 10px;
margin-bottom: 20px;
`
export const TechDescription = styled.div`
height: 57px;
overflow: hidden;
color: #515151;
margin-left: 10px;
margin-right: 10px;
margin-bottom: 20px;
`
export const Description = styled.h2`
font-family: 'Roboto';
font-weight: 700;
font-size: 18px;
line-height: 27px;
margin-top: 5px;
`
export const AccessButtonContainer = styled.div`
margin-bottom: 35px;
`
export const AccessButton = styled.div`
width: 120px;
margin: auto;
background: rgba(255, 255, 255, 0.7);
box-shadow: 0px 40px 70px rgba(0, 0, 0, 0.25);
border-radius: 80px;
font-family: 'Roboto';
font-weight: 700;
font-size: 14px;
color: #515151;
padding-top: 12px;
padding-bottom: 12px;
padding-left: 32px;
padding-right: 32px;
`
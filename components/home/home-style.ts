import styled from 'styled-components'

export const FullPageBackground = styled.div<{ backgroundUrl: string }>`
  background-image: linear-gradient(0deg, rgba(255, 160, 160, 0.5), rgba(255, 160, 160, 0.2)),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(${(props) => props.backgroundUrl});
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 548px) {
    height: 400px;
  }
`
export const NavContainer = styled.div`
  left: 80px;
  top: 5px;
  position: absolute;
  display: flex;
  @media only screen and (max-width: 928px) {
    display: none;
  }
`
export const Logo = styled.h1`
  font-family: 'Poppins';
  font-weight: bold;
  font-size: 24px;
  color: #ffffff;
  float: left;
  line-height: 40px;
  cursor: pointer;
  text-transform: uppercase;

  @media only screen and (max-width: 548px) {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 16px;
    line-height: 32px;
  }
`
export const HamburgerContainer = styled.div`
display: none;
@media only screen and (max-width: 548px) {
  display: inline-block;
}
`
export const NavItemContainer = styled.div`
  margin: 0;
  padding: 0;
  margin-left: 70px;
  li {
    display: inline-block;
    line-height: 40px;
    margin-right: 30px;
  }
  display: flex;
  align-items: center;

  @media only screen and (max-width: 548px) {
    display: none;
  }
`
export const NavItem = styled.h1<{ active: boolean }>`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 18px;
  color: ${(props) => (props.active ? '#E6E7D9' : '#FFFFFF')};
  cursor: pointer;
  &:active,
  &:hover {
    color: #e6e7d9;
  }
`
export const CoverPost = styled.div`
  position: absolute;
  top: 20%;
  left: 15%;
  width: 429px;
  @media only screen and (max-width: 548px) {
    top: 120px;
    left: 0;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
  }
`
export const CoverArticleSubCategoryTitle = styled.h1`
  font-family: 'Roboto';
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  cursor: default;
  @media only screen and (max-width: 548px) {
    font-family: 'Roboto';
    font-weight: 900;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
  }
`
export const CoverArticleTitle = styled.h1`
  font-family: 'Roboto';
  font-weight: 900;
  font-size: 34px;
  line-height: 40px;
  color: #ffffff;
  cursor: default;
  @media only screen and (max-width: 548px) {
    font-family: 'Roboto';
    font-weight: 900;
    font-size: 28px;
    line-height: 33px;
    color: #FFFFFF;
  }
`
export const CoverArticleButton = styled.h1`
  cursor: pointer;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #515151;
  &:hover {
    color: #8a7783;
  }
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 58px;
  padding-right: 58px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 40px 70px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  border-radius: 80px;
  width: 177px;
  @media only screen and (max-width: 548px) {
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 30px;
    padding-right: 30px;
    width: 120px;
  }
`
export const MobileHeader = styled.div`
display: none;
@media only screen and (max-width: 928px) {
  display: block;
}
`
export const SlideSection = styled.div`
  position: absolute;
  bottom: 40px;
  right: 0;
  width: 50%;
  @media only screen and (max-width: 548px) {
    display: none;
  }
`
export const MobileSlideContainer = styled.div`
display: none;
@media only screen and (max-width: 548px) {
  display: block;
}
`
export const ListCardContainer = styled.div`
  border-radius: 15px;
  padding-bottom: 20px;
  margin-top: 12px;
  transform: rotateX(180deg);
  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 2px;
    height: 4px;
  }
  ::-webkit-scrollbar-button {
    background: #ccc;
  }
  ::-webkit-scrollbar-track-piece {
    background: #888;
    border-radius: 15px;
  }
  ::-webkit-scrollbar-thumb {
    background: #eee;
    border-radius: 15px;
  }
`
export const SlideCardItemThumbnail = styled.div<{ backgroundUrl: string }>`
  position: relative;
  margin: 10px;
  width: 327px;
  height: 194px;
  background: url(${(props) => props.backgroundUrl});
  background-size: cover;
  border-radius: 15px;
`
export const SlideCardItemThumbnailShadow = styled.div<{ backgroundUrl: string }>`
  position: absolute;
  width: 302px;
  height: 155px;
  bottom: -5px;
  left: 12px;
  background: url(${(props) => props.backgroundUrl});
  background-size: cover;
  border-radius: 15px;
  filter: blur(54px);
  z-index: -1;
`
export const SlideCardItemCategory = styled.div`
  font-family: 'Roboto';
  font-weight: 900;
  font-size: 16px;
  color: #515151;
`
export const SlideCardItemTitle = styled.div`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 18px;
  color: #515151;
`
export const SlideCardItemContainer = styled.div`
  transform: rotateX(180deg);
  width: 347px;
  height: 320px;
  margin-right: 20px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  &:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(100px);
    ${SlideCardItemThumbnailShadow} {
      bottom: 5px;
    }
    ${SlideCardItemTitle} {
      color: #8a7783;
    }
  }

  @media only screen and (max-width: 548px) {
    margin-right: 0;
  }
`
export const DesktopCategorySection = styled.div`
display: block;
@media only screen and (max-width: 548px) {
  display: none;
}
`
export const MobileCategorySection = styled.div`
display: none;
@media only screen and (max-width: 548px) {
  display: block;
  width: 100%;
}
`
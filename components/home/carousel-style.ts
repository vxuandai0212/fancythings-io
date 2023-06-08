import styled from 'styled-components'

export const CarouselContainer = styled.div`
  width: 400px;
  height: 300px;
  background: rgba(201, 165, 118, 0.37);
  direction: rtl;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
`
export const CarouselMain = styled.div<{ width: string, height: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(0px);
  width: ${props => props.width};
  height: ${props => props.height};
`
export const CarouselItem = styled.div<{ width: string, height: string, margin: string }>`
  background: coral;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    position: relative;
    top: -5px;
    font-size: 5rem;
    font-weight: bold;
    color: #fff;
    user-select: none;
  }
  &:first-child { margin-right: 0px !important;}
  &:last-child { margin-left: 0px !important;}
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
`
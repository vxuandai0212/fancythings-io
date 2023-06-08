import { useCallback, useRef, useState } from "react"
import { CarouselContainer, CarouselMain } from 'components/home/carousel-style'

const Carousel = (props: any) => {
  const [active, setActive] = useState(false)
  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [transLeftOffset, setTransLeftOffset] = useState(0)
  const { dragSpeed, _data, itemWidth, itemHeight, itemSideOffsets } = props
  const cWrapperStyle = {
    width: `${_data.length * (itemWidth + (2 * itemSideOffsets))}px`,
    height: `${itemHeight}px`
  }

  const cRef: any = useRef()

  const resetTransition = useCallback((e: any) => {
    const carousel = cRef.current
    const x = e.pageX - carousel.offsetLeft
    const walk = (x - startX) * dragSpeed
    carousel.firstChild.style.cssText = `
      transform: translateX(${transLeftOffset + walk}px);
      transition: transform 0.0s ease-in-out;
    `;
  }, [startX, transLeftOffset, dragSpeed])

  const handleMouseDown = (e: any) => {
    const carousel = cRef.current
    e.persist()
    console.log('hello')
    setActive(true)
    const _startX = e.pageX - carousel.offsetLeft
    const _transLeftOffset = giveMeIntValOf(carousel.firstChild.style.transform)
    setIsDown(true)
    setStartX(_startX)
    setTransLeftOffset(_transLeftOffset)
    resetTransition(e)
  }

  const handleMouseLeave = (e: any) => {
    handleSnap()
  }

  const handleMouseUp = (e: any) => {
    handleSnap()
  }

  const handleMouseMove = (e: any) => {
    const carousel = cRef.current

    if(!isDown) return 
    e.preventDefault()

    const x = e.pageX - carousel.offsetLeft
    const walk = (x - startX) * dragSpeed
    
    carousel.firstChild.style.transform = `translateX(${transLeftOffset + walk}px)`;
  }

  const handleSnap = () => {
    const carousel = cRef.current

    setIsDown(false)
    setActive(false)

    // handeling Threshold
    // (1) getting transValue
    const tempThresholdOffset = giveMeIntValOf(carousel.firstChild.style.transform)
    // (2) items width - 30(first & last item removed margins) - containerWidth(b/c of ending part)
    const end = _data.length * (itemWidth + (2 * itemSideOffsets)) - 30 - carousel.offsetWidth

    // (3) check if we passing from threshold ( handeling Snap To Sides )
    if (tempThresholdOffset < 0 || tempThresholdOffset > end) {
      setIsDown(false)
      carousel.firstChild.style.cssText = `
        transform: translateX(${ tempThresholdOffset < 0 ? 0 : end}px);
        transition: transform 0.5s cubic-bezier(.25,.72,.51,.96);
      `;
    }
  }

  const giveMeIntValOf = (el: any) => {
    return parseInt(el.replace('translateX(', '').replace('px)',''), 10)
  } 

  return (
    <CarouselContainer>
      <CarouselMain width={cWrapperStyle.width} height={cWrapperStyle.height}>
        {props.children}
      </CarouselMain>
    </CarouselContainer>
  )
}

export default Carousel
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  carousel: {
    marginBottom: '2em',
  },
})

const CarouselComponent = props => {
  const classes = useStyles()
  return (
    <Carousel
      className={classes.carousel}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
    >
      {props.children}
    </Carousel>
  )
}

export default CarouselComponent

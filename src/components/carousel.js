import React from "react"
import { Row } from "reactstrap"
import { Carousel }  from "react-responsive-carousel"
import { StaticImage } from "gatsby-plugin-image"
import "../scss/carousel.scss"


const CarouselSwiper = () => {
    return(
        <Row className="no-gutters w-100 mx-0 ">
            <div className="py-3 text-center">
                <h3 className="border-bottom pb-2">Top 3 Dietary Supplements</h3>
            </div>
            <Carousel className="carousel mx-auto" infiniteLoop="true" swipeable={true} showThumbs={false}>
              <div>
                <StaticImage src="../images/magnesium.jpg" alt="Magnesium"/>
                <p>1. Magnesium</p>
              </div>
              <div>
                <StaticImage src="../images/protein.jpg" alt="Protein"/>
                <p>2. Protein</p>
              </div>
              <div>
                <StaticImage src="../images/iron.jpg" alt="Iron"/>
                <p>3. Iron</p>
              </div>
            </Carousel>
          </Row>
    )
}
export default CarouselSwiper
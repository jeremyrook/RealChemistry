import React from "react";
import {Row, Col} from "reactstrap"
import { StaticImage } from "gatsby-plugin-image"


const ImageContainer = (image) => {
    return(
        <Row>
            <Col>
                <StaticImage src = "../images/food_pour.jpg"  alt="Food Pouring" placeholder="blurred"/>
            </Col>
        </Row>
    )
}
export default ImageContainer
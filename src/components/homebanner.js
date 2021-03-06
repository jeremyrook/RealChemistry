import React from "react"
import {Row, Col} from "reactstrap"
import { StaticImage } from "gatsby-plugin-image"
import "../scss/homebanner.scss"

const HomeBanner = () => {
    return(
        <Row className="banner no-gutters w-100 mx-auto border-bottom align-items-center">
            <Col md="6">
                <StaticImage src="../images/medical_people.jpeg"  alt="Medical people" placeholder="blurred"/>
            </Col>
            <Col className="px-3 pt-3 py-md-3 banner-description" md="6">
                <p className="banner-description-text">Many adults and children in the United States take one or more vitamins or other dietary supplements. 
              In addition to vitamins, dietary supplements can contain minerals, herbs or other botanicals, amino acids, enzymes, and many other ingredients.
              Popular supplements include vitamins D and B12; minerals like calcium and iron; herbs such as echinacea and garlic; and products like glucosamine, probiotics, and fish oils.
                </p>
            </Col>
          </Row>
    )
}
export default HomeBanner
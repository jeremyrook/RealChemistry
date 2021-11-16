import React from "react"
import {Row, Col, Button} from "reactstrap"
import Layout from "../components/layout/layout"
import { StaticImage } from "gatsby-plugin-image"
import TwoColCard from "../components/2col"
import { Carousel } from "react-responsive-carousel"
import "../scss/index.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

// markup
export default class IndexPage extends React.Component {

  async componentDidMount(){
    const URL = "https://api.digitalmedia.hhs.gov/api/v2/resources/campaigns.json";
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.results)
  }
 
  render(){
    return(

      <Layout>
        <div className="text-center">
          <h1 className="py-5 px-3 font-weight-bold text-center site-title">ODS Consumer Fact Sheets</h1>
          <Row className="banner no-gutters w-100 mx-auto border-bottom">
            <Col className="py-2" md="6">
              <StaticImage src="../images/food_pour.jpg"  alt="Food pouring; https://ods.od.nih.gov/" placeholder="blurred"/>
            </Col>
            <Col className="py-2 banner-description" md="6">
              <p className="banner-description-text">Many adults and children in the United States take one or more vitamins or other dietary supplements. 
              In addition to vitamins, dietary supplements can contain minerals, herbs or other botanicals, amino acids, enzymes, and many other ingredients.
              Dietary supplements come in a variety of forms, including tablets, capsules, gummies, and powders, as well as drinks and energy bars. 
              Popular supplements include vitamins D and B12; minerals like calcium and iron; herbs such as echinacea and garlic; and products like glucosamine, probiotics, and fish oils.
             </p>
             </Col>
          </Row>

          <TwoColCard />

          

          {/* Carousel */}
          {/* <Row>
            <div className="py-3"><h5>Top 3 Dietary Supplements</h5></div>
            <Carousel className="carousel mx-auto" infiniteLoop="true">
              <div>
                <StaticImage src="../images/magnesium.jpg" alt="Magnesium"/>
                <p>Magnesium</p>
              </div>
              <div>
                <StaticImage src="../images/protein.jpg" alt="Protein"/>
                <p>Protein</p>
              </div>
              <div>
                <StaticImage src="../images/iron.jpg" alt="Iron"/>
                <p>Iron</p>
              </div>
            </Carousel>
          </Row> */}
        </div>
      </Layout>
        
    )
  }
}



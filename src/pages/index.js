import React from "react"
import Layout from "../components/layout/layout"
import HomeBanner from "../components/homebanner"
import TwoColCard from "../components/twocolcard"
import CarouselSwiper from "../components/carousel"
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
      
      // src/components/layout/layout  
      <Layout>
        
          <h1 className="py-5 px-3 font-weight-bold text-center site-title">ODS Consumer Fact Sheets</h1>

          {/* src/components/homebanner.js */}
          <HomeBanner />

          {/* src/components/2card.js */}
          <TwoColCard />

          {/* src/components/carousel.js */}
          <CarouselSwiper />

      </Layout>
    )
  }
}



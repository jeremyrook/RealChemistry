import React from "react"
import {Col} from "reactstrap"
import Layout from "../components/layout/layout"

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
]

// markup
export default class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      campaign : [],
    }
  }

  async componentDidMount(){
    const URL = "https://api.digitalmedia.hhs.gov/api/v2/resources/campaigns.json";
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.results)
  }
 
  
  render(){
    // let campaignData = this.state.campaign[6].results((data) => {
    //   return data

    // })
    return(

      <Layout>
        <div className="text-center">
          <h1 className="mb-5 pb-4 font-weight-bold border-bottom text-center">Index Page</h1>
          <Col className="d-flex">
            <Col className="d-flex">
              {/* {campaignData} */}
            </Col>
          </Col>
        </div>

      </Layout>
        
    )
  }
}



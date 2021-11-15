import React from "react"
import {Col} from "reactstrap"
import Layout from "../components/layout/layout"
import 'bootstrap/dist/css/bootstrap.min.css';

// data
// const links = [
//   {
//     text: "Tutorial",
//     url: "https://www.gatsbyjs.com/docs/tutorial/",
//     description:
//       "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
//     color: "#E95800",
//   },
// ]

// markup
export default class IndexPage extends React.Component {
  constructor() {
    super();
    
  }

  async componentDidMount(){
    const URL = "https://api.digitalmedia.hhs.gov/api/v2/resources/campaigns.json";
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.results)
  }
 
  
  render(){
    return(

      <Layout>
        <div className="text-center py-5">
          <h1 className="font-weight-bold text-center">ODS Consumer Fact Sheets</h1>
          
        </div>

      </Layout>
        
    )
  }
}



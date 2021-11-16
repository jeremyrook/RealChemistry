import React from "react"
import { Row, Col, Button } from "reactstrap"
import { StaticImage } from "gatsby-plugin-image"
import "../scss/twocolcard.scss"


export default class TwoColCard extends React.Component{
    render(){
        // data
        const CardA = {alt:"Vitamins; https://ods.od.nih.gov/", title: "Fact Sheet", description: "This collection of fact sheets and other resources from the NIH Office of Dietary Supplements and other federal government sources presents information about dietary supplements and their ingredients.", buttonText: "Go To List"}
        const CardB = {alt:"Covid-19; https://ods.od.nih.gov/", title: "COVID-19", description: "COVID-19, the disease caused by the novel severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2).", buttonText:"See Covid-19"}
        
        return(
          <Row className="py-5 no-gutters w-100 text-center mx-auto">
            
            {/* Card 1 */}
            <Col className="p-1 mb-4" md="6">
              <Col className="mx-auto" >
                  <StaticImage src="../images/vitamins.jpg"  alt={CardA.alt} placeholder="blurred" height={300} width={300}/>
              </Col>
              <Col className="mx-auto" >
                <h5 className="py-2">{CardA.title}</h5>
                <p>{CardA.description}</p>
                <Button className="button" href="https://ods.od.nih.gov/factsheets/list-all/">{CardA.buttonText}</Button>
              </Col>
            </Col>

            {/* Card 2 */}
            <Col className="p-1 mb-4" md="6">
              <Col className="mx-auto" >
                <StaticImage src="../images/covid.png"  alt={CardB.alt} placeholder="blurred" height={300} width={300}/>
              </Col>
              <Col className="mx-auto" >
                <h5 className="py-2">{CardB.title}</h5>
                <p>{CardB.description}</p>
                <Button className="button" href="https://ods.od.nih.gov/factsheets/COVID19-HealthProfessional/">{CardB.buttonText}</Button>
              </Col>
            </Col>
          </Row>
        )
    }
}
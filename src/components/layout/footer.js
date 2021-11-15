import React from "react";
import {Row, Col} from "reactstrap"

const Footer = () => {
    return(
        <div>
        <Row>
            <Col md={6}>
            
            <p>Listed Item</p>
            
            </Col>
            <Col md={6}>
            
            <p>Listed Item</p>
            
            </Col>
        </Row>
        <Row>
            <Col> © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a></Col>
        </Row>
        </div>
    )
}
export default Footer
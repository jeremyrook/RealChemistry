import React from "react";
import {Row, Col} from "reactstrap"

const Footer = () => {
    return(
        <div className="border-top py-3">
        <Row className="text-center m-0">
            <Col className="p-0" md={6}>
            <p>Listed Item</p>
            </Col>
            <Col className="p-0" md={6}>
            <p>Listed Item</p>
            </Col>
        </Row>
        <Row className="text-center m-0">
            <Col> © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a></Col>
        </Row>
        </div>
    )
}
export default Footer
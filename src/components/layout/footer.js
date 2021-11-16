import React from "react";
import {Row, Col} from "reactstrap"
import "../../scss/footer.scss"

const Footer = () => {
    return(
        <div className="border-top py-3 footer">
            <Row className="footer-main text-center mx-auto py-2 text-center">
                <Col className="p-0" md={6}>
                    <a className="text-decoration-none footer-link" href="https://ods.od.nih.gov/About/Site_Policies.aspx">Site Policies</a>
                </Col>
                <Col className="p-0" md={6}>
                    <a className="text-decoration-none footer-link" href="https://ods.od.nih.gov/About/Contact_Us.aspx">Contact Us</a>
                </Col>
            </Row>
            <Row className="text-center m-0">
                <Col> © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </Col>
            </Row>
        </div>
    )
}
export default Footer
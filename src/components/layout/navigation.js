import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import {NavbarBrand, Collapse, NavItem, NavLink, Navbar, Nav, NavbarToggler} from "reactstrap";
import '../../scss/navigation.scss';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
}

toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render(){
    return(
        <div className="">
            <Navbar className="navigation-items mx-auto" color="faded" dark fixed="top">
                <NavbarBrand  className="me-auto" href="/">
                    <StaticImage className="mx-1"src="../../images/health_snake.png" alt="Rod Of Asclepius" width={40}/>
                ODS Health
                </NavbarBrand>
                <NavbarToggler
                className="me-2"
                onClick={this.toggle}
                />
                <Collapse className={this.state.isOpen ? "show" : null} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="https://ods.od.nih.gov/HealthInformation/healthprofessional.aspx">
                                Health Professionals
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://ods.od.nih.gov/factsheets/list-all/">
                                Dietary Supplements
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
        )
    }
}
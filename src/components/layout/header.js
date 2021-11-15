import React from "react";
import {NavbarBrand, Collapse, NavItem, NavLink, Navbar, Nav, NavbarToggler, DropdownMenu, DropdownItem, NavbarText} from "reactstrap";


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
        <div>
            
            <Navbar color="light" expand="md" fixed="top" light>
                <NavbarBrand href="/">
                ODS Health
                </NavbarBrand>

                <NavbarToggler onClick={this.toggle} />
                <Collapse navbar>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink href="https://ods.od.nih.gov/HealthInformation/healthprofessional.aspx">
                            Health Information
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://ods.od.nih.gov/factsheets/list-all/">
                            Facts Sheet
                        </NavLink>
                    </NavItem>
                    <DropdownMenu end>
                        <DropdownItem>
                        Option 1
                        </DropdownItem>
                        <DropdownItem>
                        Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                    </DropdownMenu>
                </Nav>                
                </Collapse>
  </Navbar>
  
</div>
        )
}
}
import React, { Component } from 'react';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import {Icon} from 'react-fa';

export default class MenuNavegacao extends Component {
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

    render() {
        return (
            <div>
                <Navbar id="myNavbar" className="navbar navbar-expand-lg navbar-dark My-bg-primary fixed-top" expand="md">
                    <NavbarBrand className="my-text-navbrand-color" href="/"><img src={logo} alt="Logo navbar" style={{width: 45, height: 45}}/>
                        Esthetic Center
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className="my-text-navbar-color">
                                    Cabelos
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem href="/progressiva">
                                        Progressiva
                                    </DropdownItem>
                                    <DropdownItem href="/luzes">
                                        Luzes
                                    </DropdownItem>
                                    <DropdownItem>
                                        Mega Hair
                                    </DropdownItem>    
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className="my-text-navbar-color">
                                    Maquiagem
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        Noivas
                                    </DropdownItem>
                                    <DropdownItem>
                                        Festa
                                    </DropdownItem>
                                    <DropdownItem>
                                        Formatura
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className="my-text-navbar-color">
                                    Penteados
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        Noivas
                                    </DropdownItem>
                                    <DropdownItem>
                                        Festa
                                    </DropdownItem>
                                    <DropdownItem>
                                        Formatura
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className="my-text-navbar-color">
                                    Pé e Mão
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        Teste
                                    </DropdownItem>
                                    <DropdownItem>
                                        Teste
                                    </DropdownItem>
                                    <DropdownItem>
                                        Teste
                                    </DropdownItem>
                                </DropdownMenu>    
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className="my-text-navbar-color">
                                    Outros Serviços
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        Teste
                                    </DropdownItem>
                                    <DropdownItem>
                                        Teste
                                    </DropdownItem>
                                    <DropdownItem>
                                        Teste
                                    </DropdownItem>
                                </DropdownMenu>    
                            </UncontrolledDropdown>
                            <NavItem style={styles.my_contact_navbar}>
                                Marque seu horário: 
                                <i> <Icon name="whatsapp" size="lg"/> </i>
                                (51) 98512-9806 / 
                                <i> <Icon name="phone-square" size="lg" /> </i> 
                                (51) 3024-4732
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

const styles = ({
    my_contact_navbar: {
        color: '#d4bdb7',
        fontSize: '14px',
        padding: '9px',
        paddingLeft: '280px'
    }
});

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    //NavItem,
    //NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

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
                <Navbar className="navbar navbar-expand-lg navbar-dark My-bg-primary fixed-top" expand="md">
                    <NavbarBrand href="/">Home</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className="my-text-navbar-color">
                                    Cabelos
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        Progressiva
                                    </DropdownItem>
                                    <DropdownItem>
                                        Luzes
                                    </DropdownItem>
                                    <DropdownItem>
                                        Mega Hair
                                    </DropdownItem>    
                                    <DropdownItem divider />
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
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

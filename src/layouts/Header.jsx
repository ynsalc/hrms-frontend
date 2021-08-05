import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle
} from "reactstrap";

export default function Header() {
  return (
    <div>
      <div className="container">
        <Navbar light expand="md">
          <NavbarBrand tag={Link} to="/">Human Resources Management System</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="mr-auto ml-3" navbar>
              <NavItem>
                <NavLink tag={Link} to="/advertList">İş İlanları</NavLink>
              </NavItem>
              <NavItem className="ml-3">
                <NavLink tag={Link} to="/advert/add">İş İlanı Ver</NavLink>
              </NavItem>
            </Nav>
            <Button className="btn btn-danger btn-md mr-2">Üye Olarak Giriş Yap</Button>
            <Button className="btn btn-danger btn-md mr-2">İşveren Olarak Giriş Yap</Button>
            <div class="dropdown">
              <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Üye Ol
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">İş Arayan</a>
                <a class="dropdown-item" href="#">İş Veren</a>
              </div>
            </div>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
}

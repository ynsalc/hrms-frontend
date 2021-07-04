import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";

export default function Header() {
  return (
    <div>
      <div className="container">
        <Navbar light expand="md">
          <NavbarBrand href="/">Human Resources Management System</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="mr-auto ml-3" navbar>
              <NavItem>
                <NavLink href="/">İş İlanları</NavLink>
              </NavItem>
              <NavItem className="ml-3">
                <NavLink href="/">İş İlanı Ver</NavLink>
              </NavItem>
            </Nav>
            <Button className="btn btn-danger btn-md mr-2">Üye Olarak Giriş Yap</Button>
            <Button className="btn btn-danger btn-md mr-2">İşveren Olarak Giriş Yap</Button>
            <Button className="btn btn-warning btn-md">Kayıt Ol</Button>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
}

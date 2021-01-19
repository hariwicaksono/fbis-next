import React, {Component} from 'react';
import Head from 'next/head';
import Link from './link';
import {siteName, siteTitle, siteParent} from './layout';
import {Container, Navbar, Nav, NavItem, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import API from '../libs/axios';
import {MdBrightness4} from 'react-icons/md';
import SearchForm from './searchForm';

class MyNavbar extends Component{
  constructor(props) {
    super(props)
    this.state = {
       
    }
  }

componentDidMount = () => {
 
  
  }
  render(){
        
    return(
      <header id="header" className="shadow border-bottom sticky-top">
        <Container>

    <Navbar bg="primary" variant="dark" expand="lg">
    <div className="navbar-top pt-3 pb-1">
                <div className="d-flex justify-content-between align-items-center">
                <Nav className="navbar-top-left-menu">
                <Navbar.Brand className="text-light d-none d-sm-none d-md-block"><img src="/logo_uap.png" style={{width: '30px'}} /> {siteParent}</Navbar.Brand>
      <Navbar.Brand className="text-light d-block d-sm-block d-md-none d-lg-none d-xl-none"><img src="/logo_uap.png" style={{width: '30px'}} /> UAP</Navbar.Brand>
      </Nav>

    <Nav className="navbar-top-right-menu">
      <SearchForm/>
      <Nav.Item>
        <Nav.Link>
        <MdBrightness4 size="1.2rem"/>
        </Nav.Link>
       </Nav.Item>
    </Nav>
          </div>
    </div>

    <div className="navbar-bottom py-3">
                <div className="d-flex justify-content-between align-items-center">
    <Link href="/" passHref><Navbar.Brand className="text-uppercase text-light d-none d-sm-none d-md-block font-weight-bold">{siteTitle}</Navbar.Brand></Link>
    <Link href="/" passHref><Navbar.Brand className="text-light d-block d-sm-block d-md-none d-lg-none d-xl-none font-weight-bold">{siteName}</Navbar.Brand></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" >
      <Navbar.Toggle className="float-right" aria-controls="basic-navbar-nav" />

        <Nav className="mr-auto">
        <Nav.Item>
        <Link href="/" activeClassName="active" passHref><Nav.Link>Beranda</Nav.Link></Link>
        </Nav.Item>
        <NavDropdown title="Profil" id="basic-nav-dropdown">
            <Link href="#" passHref><NavDropdown.Item>Visi Misi</NavDropdown.Item></Link>
            <Link href="#" passHref><NavDropdown.Item>Tujuan</NavDropdown.Item></Link>
            <Link href="#" passHref><NavDropdown.Item>Struktur Organisasi</NavDropdown.Item></Link>
        </NavDropdown>
        <NavDropdown title="Program Studi" id="basic-nav-dropdown">
            <Link href="#" passHref><NavDropdown.Item>Ilmu Komunikasi</NavDropdown.Item></Link>
            <Link href="#" passHref><NavDropdown.Item>Bisnis Digital</NavDropdown.Item></Link>
            <Link href="#" passHref><NavDropdown.Item>Bahasa Inggris</NavDropdown.Item></Link>
        </NavDropdown>
        <NavDropdown title="Informasi" id="basic-nav-dropdown">
            <Link href="#" passHref><NavDropdown.Item>Arsip Berita</NavDropdown.Item></Link>
            <Link href="#" passHref><NavDropdown.Item>Informasi Kampus</NavDropdown.Item></Link>
        </NavDropdown>
        <Nav.Item>
        <Link href="/kontak" activeClassName="active" passHref><Nav.Link>Kontak <span className="mdi mdi-home"></span></Nav.Link></Link>
        </Nav.Item>

      
        </Nav>
        
    </Navbar.Collapse>
    </div>
    </div>
    </Navbar>
    </Container>
    </header>
    );
  }
}

export default MyNavbar;
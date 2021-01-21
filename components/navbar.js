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

    <Navbar bg="" variant="dark" expand="lg" style={{backgroundColor: '#1E90FF !important'}}>
    <div className="navbar-top pt-3 pb-0">
        <div className="d-flex justify-content-between align-items-center">
      <Nav className="navbar-top-left-menu">
      <Nav.Item>
        <Link href="/kontak" activeClassName="active" passHref><Nav.Link>Advertise</Nav.Link></Link>
        </Nav.Item>
        <Nav.Item>
        <Link href="/kontak" activeClassName="active" passHref><Nav.Link>Events</Nav.Link></Link>
        </Nav.Item>
        <Nav.Item>
        <Link href="/kontak" activeClassName="active" passHref><Nav.Link>Write for Us</Nav.Link></Link>
        </Nav.Item>
        <Nav.Item>
        <Link href="/kontak" activeClassName="active" passHref><Nav.Link>In the Press</Nav.Link></Link>
        </Nav.Item>
      </Nav>

    <Nav className="navbar-top-right-menu">
      <SearchForm/>

      <Nav.Item>
        <Nav.Link>
        <MdBrightness4 size="1.5rem"/>
        </Nav.Link>
       </Nav.Item>

    </Nav>
          </div>
    </div>

    <div className="navbar-bottom pt-3 pb-3">
        <div className="d-flex justify-content-between align-items-center">
      <Link href="/" passHref>
      <Navbar.Brand className="brand text-uppercase text-light d-none d-sm-none d-md-block">
      <img id="logo" src="/logo_uap.png" style={{width: '60px'}} />
      <span>{siteParent}<b>{siteTitle}</b></span>
      </Navbar.Brand>
      </Link>
      <Link href="/" passHref><Navbar.Brand className="text-light d-block d-sm-block d-md-none d-lg-none d-xl-none">
      <img id="logo" src="/logo_uap.png" style={{width: '50px'}} /> <span><b>{siteName}</b></span></Navbar.Brand>
      </Link>
      
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
        <Link href="/kontak" activeClassName="active" passHref><Nav.Link>Kontak</Nav.Link></Link>
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
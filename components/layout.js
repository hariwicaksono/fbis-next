import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import Navbar from './navbar';
import Footer from './footer';

export const siteName = 'FBIS'
export const siteTitle = 'Fakultas Bisnis dan Ilmu Sosial'
export const siteParent = 'Universitas Amikom Purwokerto'
export const siteDesc = 'Fakultas Bisnis dan Ilmu Sosial Universitas Amikom Purwokerto terbagi dalam 3 program studi ILMU KOMUNIKASI (S1), BISNIS DIGITAL (S1), BAHASA INGGRIS (D3/PSDKU)'

class Layout extends Component {

  render() {
    const { children, home } = this.props;
  
  return (
    <>
      <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content={siteDesc} />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />

      </Head>

      <Navbar />
      
      {!home ? 
      <>
      <Container>
      <div className="mb-3">
      <Link href="/" passHref>
              <a>← Kembali</a>
            </Link>
      </div> 
      </Container>
      {children}
      </>
      :
      <>{children}</>
      }
      
      <Footer />
      <style jsx global>{`
        .nav-link {
         text-transform: capitalize;
        }
      `}</style>
    </>
 );
}
}
export default Layout;

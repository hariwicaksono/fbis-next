import React,{Component} from 'react';
import Link from 'next/link';
import { Container, Row, Col} from 'react-bootstrap';
import {siteName, siteTitle, siteParent} from './layout';
import {FaHeart, FaMap, FaPhoneSquare} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';

class Footer extends Component{
    render(){
     
        return(  
               
            <footer className="text-dark border-0 py-4" style={{backgroundColor:'#ADD8E6'}}>
              <Container>
            <Row>

                <Col md={8}>
                <h4>Hubungi Kami</h4>
                <h4 className="mb-0 font-weight-normal">{siteParent}</h4>
                <h4 className="font-weight-bold">{siteTitle}</h4>
                <p className="mt-0 lead text-dark"><FaMap /> Jl. Let. Jend. Pol. Soemarto (depan SPN) Purwokerto / Lt.1<br/>
                <FaPhoneSquare /> (0281) 623321 / (fax) (0281) 623196<br/>
                <MdEmail /> amikom@amikompurwokerto.ac.id
                
                </p>
            
                </Col>

                <Col md={4}>
                <h5>Tautan Penting</h5>
                <Link href="https://amikompurwokerto.ac.id" passHref><a><img src="/images/link_amikom.png" width="250" className="mb-3" /></a></Link>
                <Link href="https://www.ristekbrin.go.id" passHref><a><img src="/images/link_ristek.png" width="250" className="mb-3" /></a></Link>
                <Link href="http://www.banpt.or.id" passHref><a><img src="/images/link_banpt.png" width="250" className="mb-3" /></a></Link>
                </Col>

            </Row>

            <hr/>
           
            <div className="text-dark mt-3 text-center">Hak Cipta © {(new Date().getFullYear())} Hak cipta dilindungi Undang-undang. {siteTitle} ({siteName}) {siteParent}<br/>This site is made with <FaHeart className="text-danger" /> by <Link href="https://plt.amikompurwokerto.ac.id" passHref><a className="">UPT Pengembangan Laboratorium dan Teknologi</a></Link></div>
            </Container>
            </footer>


        )
    }
}

export default Footer;
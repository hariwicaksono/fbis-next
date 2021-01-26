import React, {Component} from 'react';
import Head from 'next/head';
import Layout, {siteName, siteTitle, siteParent} from '../components/layout';
import API from '../libs/axios';
import {Container, Row, Col, Alert, Card, Spinner, Button, Form} from 'react-bootstrap';
import Slideshow from '../components/slideshow';
import Skeleton from 'react-loading-skeleton';

class Index extends Component{
  constructor(props) {
    super(props)
    this.state = {
      Slideshow: [],
      loading: true
    }
  
  }
  componentDidMount() {
    API.GetSlideshow().then(res => {
      setTimeout(() => this.setState({
          Slideshow: res.data,
          loading: false
      }), 100);
  }) 
  } 
  render(){
        
    return(
      <Layout home>
      <Head>
        <title>Home - {siteName} | {siteTitle} {siteParent}</title>
      </Head>

      <section className="py-3">
      <Container>
      { this.state.loading ?
          <>
            <Skeleton height={400} />
          </>
        :
        <Slideshow data={this.state.Slideshow} />
        }
       </Container>
      </section>

      <main className="py-3">
        <Container>
        
        <Row>
          <Col md="12">
          <h1>FBIS</h1>

          </Col>
        </Row>
        
        </Container>
      </main>
      </Layout>
    );
  }
}

export default Index;
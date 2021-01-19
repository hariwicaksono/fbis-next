import React, {Component} from 'react';
import Head from 'next/head';
import Layout, {siteName, siteTitle, siteParent} from '../components/layout';
import {Container, Row, Col, Alert, Card, Spinner, Button, Form} from 'react-bootstrap';

class Index extends Component{
  constructor(props) {
    super(props)
    this.state = {
        
    }
  
}
    componentDidMount() {
     
  } 
  render(){
        
    return(
      <Layout home>
      <Head>
        <title>Home - {siteName} | {siteTitle} {siteParent}</title>
      </Head>

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
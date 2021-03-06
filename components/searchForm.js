import React, { Component } from 'react';
//import {Redirect,Link} from 'react-router-dom'
import API from '../libs/axios';
import SearchResult from './searchResult';
//import { NotificationManager } from 'react-notifications'
import { Form, Button, Spinner } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
//import Form from 'react-formal'
//import * as yup from 'yup'

//const schema = yup.object({
    //query: yup.string().required(),
  //}); 

class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            results: [],
            loading: false
        }
        this.handlerChange = this.handlerChange.bind(this)
        this.handlerSubmit = this.handlerSubmit.bind(this)
        
    }

    handlerChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handlerSubmit = (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const query=this.state.query;
        API.SearchBlog(query).then(res=>{
            //console.log(res)
            setTimeout(() => this.setState({
              results: res.data,
              loading: false,
            }), 100);
        });  
    }

    
    render() {

        return (
           
                <Form className="w-100" onSubmit={this.handlerSubmit}>
                <div className="input-group">
                    <Form.Control size="lg" type="text" name="query" placeholder="Pencarian" onChange={this.handlerChange} required />
                    <span className="input-group-append">
                    <Button className="border text-light py-0" type="submit" variant="primary">
                    {
                        this.state.loading
                        ?
                        <><Spinner as="span" animation="grow" size="sm"  role="status" aria-hidden="true" /></>
                        :   
                    <><FaSearch size="1.2em" /></>}
                    </Button>
                </span>

                </div>

                {this.state.results.length > 0 && (
                
                <SearchResult data={this.state.results} />

               )}

               
                </Form>   
        )
    }

}

export default SearchForm;
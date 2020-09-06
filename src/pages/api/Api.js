import React, { Component } from 'react';
import './api.scss'

import Axios from 'axios'
import adminImg from '../../images/contacts/pngegg.png'
import Element from './Element';

class Api extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            delete: false,
        }
    }
    
    componentDidMount(){
        this.get()
    }

    get = () => {
        let access = localStorage.getItem("admin");
        console.log(access);
        if(access){
            Axios.get('https://blueladder-backend.herokuapp.com/users/customer')
                .then(res => {
                    if(res.data){
                        this.setState({data: res.data})
                    }
                }
                )
        } else {
            window.location.replace("/#/admin");
            }
        }

    deleteCustomer = (id) => {
        Axios.delete(`https://blueladder-backend.herokuapp.com/users/customer/${id}`)
          .then(res => {
            if(res.data){
                console.log(id);
                this.setState({delete: true})
                setTimeout(() => {
                   this.setState({delete: false})
                }, 3000);
              this.get()
            }
          })
          .catch(err => console.log(err))
      }
      
    render() {

        return (
            <>
                {
                    this.state.delete &&
                        <div className="error-handler api-delete">User successfully deleted.</div>
                }
                <div className="admin-logo">
                    <img src={adminImg} className="admin-image" alt="admin-img"/>
                    <div className="admin-logo-text">Admin panel</div>
                </div>
                <div className="customers">
                    <div className="customers-header">Customers {this.state.data.length}</div>
                    <div className="customers-info">
                        <Element data={this.state.data} deleteCustomer={this.deleteCustomer}/>
                    </div>
                </div>
            </>
        );
    }
}

export default Api;
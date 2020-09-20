import React , {Component, useEffect, useState}from 'react';
import {Form, FormGroup, Label, Input, Row, Col,CardTitle,Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {connect} from "react-redux";
import {Actions} from "../../../internal/modules/Actions";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
        }
    }

    navigation=()=>{
        this.props.commonNavigation("/signup")
     }

    addValue = (type,text)=>{
      if(type==="EMAIL"){
          this.setState({email: text});
      } else{
        this.setState({password: text});
      }
    }

    sendValue =()=>{
        const {email,password}=this.state;
        const {loginUser}=this.props;
        loginUser({email,password});
    }

   render(){
       const {email,password}=this.state;
       const isDisableButton = email.length > 0 && password.length > 0;
    return(
        <div className="cardItemCenter">
                  <Form>
                     <FormGroup>
                          <Label for="email">Email</Label>
                          <Input 
                              type="email"
                               name="email"
                                id="email" 
                                value={email}
                                onChange={(e) => {
                                   this.addValue('EMAIL', e.target.value)
                               }}
                                />
                      </FormGroup>
                      <FormGroup>
                          <Label for="passward">Password</Label>
                          <Input 
                               type="password"
                                name="passward"
                                 id="passward" 
                                 value={password}
                                 onChange={(e) => {
                                    this.addValue('PASSWORD', e.target.value)
                                }}/>
                      </FormGroup>
                      <Button disabled={!isDisableButton} onClick={this.sendValue}>Login</Button>
          <p><b> If You don't have an Account please <big  className="custom" onClick={()=>this.navigation()}>Sign Up</big></b></p>
                  </Form> 
        </div>
  
     );
   }
}

export default connect(
    state => ({
    }),
    ({
        commonNavigation: Actions.hotel.commonNavigation,
        loginUser: Actions.user.loginUser,
    })
  )(Login);
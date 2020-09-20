import React,{Component} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Actions} from "../../../internal/modules/Actions";
import {connect} from "react-redux";

const TYPE = {FNAME:"FNAME",LNAME:"LNAME",EMAIL:"EMAIL",BIRTHDATE:"BIRTHDATE", PASSWORD:"PASSWORD",CONFIRMED:"CONFIRMED",
              ADDRESS:"ADDRESS",CITY:"CITY", STATE:"STATE",PHONE:"PHONE",COUNTRY:"COUNTRY",ZIP:"ZIP"};

class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstName:"",
          lastName:"",
          email:"",
          birthdate:"",
          city:"",
          address:"",
          state:"",
          country:"",
          phone:"",
          password:"",
          ConfirmedPassword:"",
          zipCode:"",
        }
    }

    addValue(type,text){
      switch(type){
          case TYPE.FNAME:{
            this.setState({firstName:text});
            return;
          };
          case TYPE.LNAME:{
            this.setState({lastName:text});
            return;
          };
          case TYPE.EMAIL:{
            this.setState({email:text});
            return;
          };
          case TYPE.PHONE:{
            this.setState({phone:text});
            return;
          };
          case TYPE.BIRTHDATE:{
            this.setState({birthdate:text});
            return;
          };
          case TYPE.ADDRESS:{
            this.setState({address:text});
            return;
          };
          case TYPE.CITY:{
            this.setState({city:text});
            return;
          };
          case TYPE.STATE:{
            this.setState({state:text});
            return;
          };
          case TYPE.ZIP:{
            this.setState({zipCode:text});
            return;
          };
          case TYPE.COUNTRY:{
            this.setState({country:text});
            return;
          };
          case TYPE.PASSWORD:{
            this.setState({password:text});
            return;
          };
          case TYPE.CONFIRMED:{
            this.setState({ConfirmedPassword:text});
            return;
          };
          default: return;
      }
    }

    navigation=()=>{
       this.props.commonNavigation("/login")
    }

    saveFun =()=>{
        const { firstName,lastName,email,birthdate,city,address,state,country,phone, password, 
            ConfirmedPassword,zipCode} = this.state;
            const data = {
                auth:{email,password},
                object: {
                    email,
                    billingDetails: {
                        firstName,lastName,email,birthdate,city,address,state,country,phone,zipCode
                    }

                }
            }
        this.props.singUp(data);
    }

  render(){
      const { firstName,lastName,email,birthdate,city,address,state,country,phone, password, 
        ConfirmedPassword,zipCode} = this.state;
    return (
        <div className="bookingFrame">
            <Form>
            <Row form>
            <Col md={4}>
              <FormGroup>
                <Label>First Name</Label>
                <Input type="text"  
                value={firstName}
                 onChange={(e) => {
                                   this.addValue(TYPE.FNAME, e.target.value)
                               }}/>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label >Last Name</Label>
                <Input type="text"  value={lastName}
                 onChange={(e) => {
                                   this.addValue(TYPE.LNAME, e.target.value)
                               }}/>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail"  value={email}
                 onChange={(e) => {
                                   this.addValue(TYPE.EMAIL, e.target.value)
                               }}/>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword"  value={password}
                 onChange={(e) => {
                                   this.addValue(TYPE.PASSWORD, e.target.value)
                               }} />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label >Confirm Password</Label>
                <Input type="password" name="password"  value={ConfirmedPassword}
                 onChange={(e) => {
                                   this.addValue(TYPE.CONFIRMED, e.target.value)
                               }}  />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label >Phone</Label>
                <Input type="tel"  value={phone}
                 onChange={(e) => {
                                   this.addValue(TYPE.PHONE, e.target.value)
                               }}/>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label>Birth Date</Label>
                <Input type="date"  value={birthdate}
                 onChange={(e) => {
                                   this.addValue(TYPE.BIRTHDATE, e.target.value)
                               }}/>
              </FormGroup>
            </Col>
            <Col md={8}>
                <FormGroup>
                <Label for="exampleAddress">Address</Label>
                <Input type="text" name="address" id="exampleAddress"  value={address}
                 onChange={(e) => {
                                   this.addValue(TYPE.ADDRESS, e.target.value)
                               }}/>
            </FormGroup>
            </Col>
            
          </Row>
         
          <Row form>
            <Col md={3}>
              <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input type="text" name="city" id="exampleCity"  value={city}
                 onChange={(e) => {
                                   this.addValue(TYPE.CITY, e.target.value)
                               }}/>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="exampleState">State</Label>
                <Input type="text" name="state" id="exampleState"  value={state}
                 onChange={(e) => {
                                   this.addValue(TYPE.STATE, e.target.value)
                               }}/>
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleZip">Zip</Label>
                <Input type="text" name="zip" id="exampleZip"  value={zipCode}
                 onChange={(e) => {
                                   this.addValue(TYPE.ZIP, e.target.value)
                               }}/>
              </FormGroup>  
            </Col>
            <Col md={4}>
                <FormGroup>
                     <Label  check>Country</Label>
                    <Input type="text"  value={country}
                 onChange={(e) => {
                                   this.addValue(TYPE.COUNTRY, e.target.value)
                               }} />
                </FormGroup>
            </Col>
          </Row>
          
          <Button onClick={this.saveFun}>Sign Up</Button>
          <p><b> If You have an Account please <big  className="custom" onClick={()=>this.navigation()}>login</big></b></p>
        </Form>
        </div>
      );
  }
};

export default connect(
    state => ({
    }),
    ({
        commonNavigation: Actions.hotel.commonNavigation,
        singUp: Actions.user.singUp,
    })
  )(Signup);

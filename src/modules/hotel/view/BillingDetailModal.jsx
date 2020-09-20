import React , {Component, useEffect, useState}from 'react';
import {Form, FormGroup, Label, Input, Row, Col,CardTitle,Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {TYPE} from "../constant";

export default ({isOpen=false, toggle = ()=>{}, updateData,
fName, lName, e_mail, bdate,phoneNO,address1,city1,state1,zip,country1})=>{

 const [firstName, setFirstName]= useState(fName);
 const [lastName, setLastName]= useState(lName);
 const [email, setEmail]= useState(e_mail);
 const [birthdate, setBD]= useState(bdate);
 const [phone, setPhon]= useState(phoneNO);
 const [address, setAddress]= useState(address1);
 const [city, setCity]= useState(city1);
 const [state, setStateText]= useState(state1);
 const [zipCode, setZipCode]= useState(zip);
 const [country, setCountry]= useState(country1);

   return(
      <div>
          <Modal isOpen={isOpen} toggle={toggle} >
            <ModalHeader toggle={toggle}>Billing Detail</ModalHeader>
            <ModalBody>
               <Form>
                    <Row form>
                        <Col md={6}>
                        <FormGroup>
                            <Label >First Name</Label>
                            <Input type="text"
                               value={firstName}
                                onChange={(e) => {
                                    setFirstName(e.target.value)
                                  
                               }}/>
                        </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                            <Label>Last Name</Label>
                            <Input type="text"
                             value={lastName}
                                onChange={(e) => {
                                    setLastName(e.target.value)
                                   
                               }}/>
                        </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup check>
                        <Label for="exampleEmail" check>Email</Label>
                        <Input type="email" name="email" id="exampleEmail" 
                              value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                   
                               }}/>
                    </FormGroup>
                    <Row form>
                        <Col md={6}>
                        <FormGroup>
                            <Label >Birthdate</Label>
                            <Input type="date"
                               value={birthdate}
                                onChange={(e) => {
                                    setBD(e.target.value)
                                  
                               }} />
                        </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                            <Label>Phone</Label>
                            <Input type="tel" 
                            value={phone}
                                onChange={(e) => {
                                    setPhon(e.target.value)
                                   
                               }}/>
                        </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="exampleAddress">Address</Label>
                        <Input type="text" name="address" id="exampleAddress" 
                        value={address}
                                onChange={(e) => {
                                    setAddress(e.target.value)
                                  
                               }}/>
                    </FormGroup>
                    
                    <Row form>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="exampleCity">City</Label>
                            <Input type="text" name="city" id="exampleCity" value={city}
                                onChange={(e) => {
                                    setCity(e.target.value)
                                   
                               }}/>
                        </FormGroup>
                        </Col>
                        <Col md={4}>
                        <FormGroup>
                            <Label for="exampleState">State</Label>
                            <Input type="text" name="state" id="exampleState" value={state}
                                onChange={(e) => {
                                    setStateText(e.target.value)
                                   
                               }}/>
                        </FormGroup>
                        </Col>
                        <Col md={2}>
                        <FormGroup>
                            <Label for="exampleZip">Zip</Label>
                            <Input type="text" name="zip" id="exampleZip" value={zipCode}
                                onChange={(e) => {
                                    setZipCode(e.target.value)
                                   
                               }}/>
                        </FormGroup>  
                        </Col>
                    </Row>
                    <FormGroup check>
                        <Label for="exampleCountry" check>Country</Label>
                        <Input type="text" name="country" id="exampleCountry" 
                              value={country}
                                onChange={(e) => {
                                    setCountry(e.target.value)
                               }}/>
                    </FormGroup>
                   
                </Form> 
            </ModalBody>
            <ModalFooter>
                <Button color="dark"  onClick={()=> updateData({
                    billingDetails:{
                        firstName,lastName,email,birthdate,phone,address,city,state,zipCode,country
                    }
                })} >Update</Button>{' '}
                <Button color="warning" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
      </div>

   );
}
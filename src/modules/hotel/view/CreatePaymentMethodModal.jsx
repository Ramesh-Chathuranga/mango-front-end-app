import React , {Component, useEffect, useState}from 'react';
import {Form, FormGroup, Label, Input, Row, Col,CardTitle,Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

export default ({isOpen=false, addCard,toggle = ()=>{}})=>{
    const [cardNumber, setCard] = useState('');
    const [type, setCardType] = useState('VISA');
    const [cvv, setCvv] = useState('');
    const [expiryDate, setExpDateVal] = useState(new Date());
    const [nameOfCard, setcardName] = useState('');

   return(
      <div>
          <Modal isOpen={isOpen} toggle={toggle}  >
            <ModalHeader toggle={toggle}>Billing Detail</ModalHeader>
            <ModalBody>
               <Form>
                    <Row form>
                        <Col md={6}>
                        <FormGroup>
                            <Label >Card Number</Label>
                            <Input type="text" value={cardNumber}
                                onChange={(e) => {
                                    setCard(e.target.value)
                                  
                               }}/>
                        </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                            <Label>Card Type</Label>
                            <Input type="select" onChange={(e) => {
                                    setCardType(e.target.value)
                                  
                               }}>
                                 <option value="VISA">VISA</option>
                                 <option value="MASTER" >MASTER</option>
                                 <option value="AMEX">AMEX</option>
                            </Input>
                        </FormGroup>
                        </Col>
                    </Row>
                    
                    <Row form>
                        <Col md={10}>
                        <FormGroup>
                            <Label >Name Of Card</Label>
                            <Input type="text" value={nameOfCard}
                                onChange={(e) => {
                                    setcardName(e.target.value)
                                  
                               }}/>
                        </FormGroup>
                        </Col>
                        <Col md={2}>
                        <FormGroup>
                            <Label>CVV</Label>
                            <Input type="text" value={cvv}
                                onChange={(e) => {
                                    setCvv(e.target.value)
                                  
                               }} />
                        </FormGroup>
                        </Col>
                    </Row> 
                        <FormGroup>
                          <Label>Expiry Date</Label><br/>
                          <DatePicker
                                selected={expiryDate}
                                onChange={date => setExpDateVal(date)}
                                startDate={new Date()}
                                dateFormat="MM/yyyy"
                                showMonthYearPicker/>
                        </FormGroup>  
                </Form> 
            </ModalBody>
            <ModalFooter>
                <Button color="dark" onClick={()=>{
                    addCard({
                        card: {
                            cardNumber, nameOfCard, cvv, expiryDate: moment(expiryDate).format('MM/YYYY'), type
                        }
                    })
                }}>Save</Button>{' '}
                <Button color="warning" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
      </div>

   );
}
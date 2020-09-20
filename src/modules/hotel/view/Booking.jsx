import React , {Component}from 'react';
import {connect} from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {ButtonToggle, Card,CardBody,Container, Row, Col,CardTitle,Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MASTER from "../../../assets/img/mastercardLogo.png";
import VISA from "../../../assets/img/card_visa.png";
import AMEX from "../../../assets/img/card_amex.png";
import BillingDetailToggleButton from "./BillingDetailModal";
import CreatePaymentMethod from "./CreatePaymentMethodModal";
import {Actions} from "../../../internal/modules/Actions";
import {TYPE, Type} from "../constant";
import moment from "moment";
import _ from "lodash";


class Booking extends Component{
  constructor(props){
      super(props);
      const {currentUser}=props;
      this.state = {
        isBillingModalOpen:false,
        isCreatePaymentMethodModalOpen:false,
        selectedMethod:{

        },
        isDisabled: true
      }
  }
//activeClass
  selectPaymentMethod = (params)=>{
    // alert(process.env.REACT_APP_FIREBASE_SENDER_ID)
    this.setState({selectedMethod: params,isDisabled:false});
  }

  toggleBillingDetail = ()=>{
    this.setState({isBillingModalOpen: !this.state.isBillingModalOpen});
  }

  toggleCreatePaymentMethod = ()=>{
    this.setState({isCreatePaymentMethodModalOpen: !this.state.isCreatePaymentMethodModalOpen});
  }

  update = ({billingDetails})=>{
    this.toggleBillingDetail();
    const {currentUser,updateUser}=this.props;
    const newUseDetails = {
      ...currentUser,
      billingDetails,
    };
    
   updateUser(newUseDetails);
  }

  
  addNewCard = ({card})=>{
    this.toggleCreatePaymentMethod()
    const {currentUser,updateUser}= this.props;  
    let cardList = _.get(currentUser,'cardList',[]);
    cardList = [...cardList, card];  
    updateUser({...currentUser,cardList});   
  }
  
  bookingHotel = ()=>{
    const {tempBookingData,booking}=this.props;
    const {selectedMethod}=this.state;

    const reservationData = {...tempBookingData, selectedPaymentMethod: selectedMethod};
    booking(reservationData);
  }
 

  render(){
      const {isBillingModalOpen,isCreatePaymentMethodModalOpen,selectedMethod,isDisabled} = this.state;
        const {currentUser,tempBookingData}=this.props;
        const cardList = _.get(currentUser,'cardList',[]);
      return(
          <div class="bookingFrame">
               <Container className="themed-container" fluid={true}>
                   <Row>
                       <Col md="8">
                           <div style={{display:'flex',justifyContent:'center'}}>
                                <Card className="cardNew" style={{marginRight:"20px"}}>
                                    <CardBody>
                                    <CardTitle className="cardTitle"><ul>Billing Detail</ul></CardTitle>
                                    <div>
                                        <label className="cardName"> First Name: <span className="cardNameValue">{_.get(currentUser,'billingDetails.firstName','')}</span> </label><br></br>
                                        <label  className="cardName"> last Name: <span className="cardNameValue">{_.get(currentUser,'billingDetails.lastName','')}</span> </label> <br></br>
                                        <label className="cardName"> Email: <span className="cardNameValue">{_.get(currentUser,'billingDetails.email','')}</span> </label><br></br>
                                        <label className="cardName"> Birth Date: <span className="cardNameValue">{_.get(currentUser,'billingDetails.birthdate','')}</span> </label><br></br>
                                        <label className="cardName"> Phone Number: <span className="cardNameValue">{_.get(currentUser,'billingDetails.phone','')} </span> </label><br></br>
                                        <label className="cardName"> Address: <span className="cardNameValue">{_.get(currentUser,'billingDetails.address','')}</span> </label><br></br>
                                        <label className="cardName"> City:<span className="cardNameValue"> {_.get(currentUser,'billingDetails.city','')}</span> </label><br></br>
                                        <label className="cardName"> State/Province:<span className="cardNameValue">{_.get(currentUser,'billingDetails.state','')} </span> </label><br></br>
                                        <label className="cardName"> Zip:<span className="cardNameValue">{_.get(currentUser,'billingDetails.zipCode','')} </span> </label><br></br>
                                        <label className="cardName">Country:<span className="cardNameValue">{_.get(currentUser,'billingDetails.country','')}</span> </label><br></br>
                                    </div>
                                    <div className="editBtn" onClick={this.toggleBillingDetail}>Edit</div>
                                    </CardBody>
                                </Card>

                                <Card className="cardNew">
                                    <CardBody>
                                    <CardTitle className="cardTitle"><ul>Bill</ul></CardTitle>
                                    <div>
                                    <label className="cardName"> {_.get(tempBookingData,'selectedHotel.title','')}</label><br></br>
                                    <label className="cardName"> {_.get(tempBookingData,'selectedRoom.title','')}</label><br></br>
                                    <label className="cardName">Package :<span className="cardNameValue"> {_.get(tempBookingData,'selectedPackage.title','')}   <small> ${_.get(tempBookingData,'selectedPackage.price','')} /day</small> </span>  </label><br></br>
                                    <label className="cardName"> CheckIn:<span className="cardNameValue"> {moment(_.get(tempBookingData,'checkInDate','')).format('LLL')}</span> </label><br></br>
                                    <label className="cardName"> CheckOut:<span className="cardNameValue">{moment(_.get(tempBookingData,'checkOutDate','')).format('LLL')}</span> </label><br></br>
                                    <label className="cardName"> Total Day(s):<span className="cardNameValue"> {_.get(tempBookingData,'days','')} day</span> </label><br></br>
                                    <label className="cardName"> Total Price:<span className="cardNameValue"> ${_.get(tempBookingData,'selectedPackage.price','')} * {_.get(tempBookingData,'days','')} = ${_.get(tempBookingData,'total','')}</span> </label><br></br>
                                    </div>
                                    </CardBody>
                                </Card>
                           </div>
                           <div className="cardItemTopSpace cardItemCenter">
                                     <ButtonToggle disabled={isDisabled} color="dark" className="bookingBtn" onClick={this.bookingHotel}>Booking (${_.get(tempBookingData,'total','')})</ButtonToggle>
                            </div>
                       </Col>
                       <Col md="4">
                           <div className="rightFrame">
                               <div>

                                   <div className="paymentMethodCard" onClick={()=>this.selectPaymentMethod({type:'Cash'})}>
                                       <Card className={selectedMethod.type==="Cash"?"activeClass":"paymentCard"}>
                                           <CardBody>
                                              <div className="payCardBody">
                                                  <div className="iconBox">
                                                     <AttachMoneyIcon/>
                                                  </div> 

                                                  <div>
                                                      Pay At Venue
                                                  </div>
                                              </div>
                                           </CardBody>
                                       </Card>
                                   </div>

                                   {cardList.map((item,index)=>{
                                       let iconName = VISA;
                                       if(item.type === "AMEX"){
                                           iconName = AMEX;
                                       }
                                       if(item.type==="MASTER"){
                                           iconName = MASTER;
                                       }
                                      
                                       const cardNO = item.cardNumber.substring(item.cardNumber.length - 4, item.cardNumber.length);

                                       return (
                                        <div className="paymentMethodCard" onClick={()=>this.selectPaymentMethod(item)}>
                                        <Card className={selectedMethod.type===item.type && selectedMethod.cardNumber===item.cardNumber?"activeClass":"paymentCard"}>
                                            <CardBody>
                                               <div className="payCardBody">
                                                   <div className="iconBox">
                                                       <img src={iconName} style={{backgroundSize:"cover", height: "40px", width:"50px"}} />
                                                   </div> 
 
                                                   <div>
                                                      <p>Pay with {item.type} Card *********{cardNO}{index}</p>
                                                        <p>Expiry date: {item.expiryDate}</p>
                                                   </div>
              
                                               </div>
                                            </CardBody>
                                        </Card>
                                    </div>
                                       );
                                   })}

                               </div>

                                 <div className="cardItemCenter">
                                     <ButtonToggle  color="success" onClick={this.toggleCreatePaymentMethod}>Add New Payment Method</ButtonToggle>
                                 </div>
                           </div>
                       </Col>
                   </Row>
               </Container>
               <BillingDetailToggleButton 
                    isOpen={isBillingModalOpen} 
                    toggle={()=>{this.toggleBillingDetail()}}
                    fName={_.get(currentUser,'billingDetails.firstName','')} 
                    lName={_.get(currentUser,'billingDetails.lastName','')} 
                    e_mail={_.get(currentUser,'billingDetails.email','')} 
                    bdate={_.get(currentUser,'billingDetails.birthdate','')} 
                    phoneNO={_.get(currentUser,'billingDetails.phone','')} 
                    address1={_.get(currentUser,'billingDetails.address','')}
                    city1={_.get(currentUser,'billingDetails.city','')}
                    state1={_.get(currentUser,'billingDetails.state','')}
                    zip={_.get(currentUser,'billingDetails.zipCode','')}
                    country1={_.get(currentUser,'billingDetails.country','')}
                    updateData={(data)=>this.update(data)}
                    />
               <CreatePaymentMethod 
                    addCard={(data)=>this.addNewCard(data)}
                    isOpen={isCreatePaymentMethodModalOpen} 
                    toggle={()=>{this.toggleCreatePaymentMethod()}}/>
          </div>
      )
  }
}

export default connect(
    state => ({
        currentUser: state.user.get('currentUser'),
        tempBookingData: state.hotel.get('tempBookingData'),
    }),
    ({
      updateUser: Actions.user.updateUser,
      booking: Actions.user.booking, 
    })
  )(Booking);
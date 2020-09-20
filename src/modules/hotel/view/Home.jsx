import React , {Component}from 'react';
import {connect} from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container, Row, Col,Dropdown, DropdownToggle, DropdownMenu, DropdownItem,FormGroup,Label,Input,ButtonToggle } from 'reactstrap';
import {Actions} from "../../../internal/modules/Actions";
import MangoLake from "../../../assets/img/mangoLake.jpg";
import MangoHill from "../../../assets/img/mangoHill.jpg";
import MangoSea from "../../../assets/img/mangoSea.jpg";


class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoginOn: false,
        }
    }

    toggleLogin = ()=>{
        this.setState({isLoginOn: !this.state.isLoginOn});
    }

    render(){
        const {commonNavigation,getUserData} = this.props;
        const {isLoginOn}=this.state;
        return(
            <div className="bookingFrame">
               <div className="goreservationbutton">
                  <ButtonToggle color="success" onClick={()=>{
                         commonNavigation('/reseravtion')
                      }}>Go to Reservation</ButtonToggle> 
               </div>
               <div>
               <Container className="themed-container" fluid={true}>
                   <Row>
                       <Col md="4">
                          <img className="imageOfScreen" src={MangoLake}/>
                          <div className="textContainer"><h2>Mango Sun</h2></div>
                       </Col>
                       <Col md="4">
                       <img className="imageOfScreen" src={MangoHill}/>
                        <div className="textContainer"><h2>Mango Sea</h2></div>
                       </Col>
                       <Col md="4">
                       <img className="imageOfScreen" src={MangoSea}/>
                       <div className="textContainer"><h2>Mango Hills</h2></div>
                       </Col>
                    </Row>
                </Container>       
               </div>
            </div>
        )
    }
};

export default connect(
    state => ({
    }),
    ({
        commonNavigation: Actions.hotel.commonNavigation,
        getUserData:Actions.user.getUserData,
    })
  )(Home);
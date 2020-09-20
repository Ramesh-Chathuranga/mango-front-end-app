import React , {Component}from 'react';
import {connect} from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem,FormGroup,Label,Input,ButtonToggle } from 'reactstrap';
import {Actions} from "../../../internal/modules/Actions";
import _ from "lodash";
import moment from "moment"
;
class DashBoard extends Component{
    constructor(props){
        super(props);
        this.state = {
            checkInDate:new Date(),
            checkOutDate: new Date(),
            dropdownOpen: false,
            selectedHotelTitle:"",
            dropdownRoomOpen:false,
            selectedRoomTitle:"",
            selectedCategory:"",
            dropdownCtOpen:false,
            selectedHotel:{},
            selectedRoom:{},
            selectedPackage:{},
            packagesList:[],
            specialNote:'',
            isParkingNeed:false,
            isAmenitiesNeed:false
        }
    }

    handleChangeCheckIn = date => {
        this.setState({
            checkInDate: date
        });
      };

      handleChangeCheckOut = date => {
        this.setState({
            checkOutDate: date
        });
      };


      toggle = ()=>{
          this.setState({dropdownOpen: !this.state.dropdownOpen});
      }

      changeValue = (e)=>{
          const key = e._targetInst.key;
          const {hotelList} = this.props;
          const selectedHotel = hotelList.find(item => e.currentTarget.textContent === item.title);
        this.setState({selectedHotelTitle: e.currentTarget.textContent, selectedHotel})
      }

      toggleRoom =()=>{
        this.setState({dropdownRoomOpen: !this.state.dropdownRoomOpen});
     }

     changeRoomValue=(e)=>{
        const key = e._targetInst.key;
        const {roomList} = this.props;
          const selectedRoom = roomList.find(item => e.currentTarget.textContent === item.title);
          const packagesList = selectedRoom.packages;
          
      this.setState({selectedRoomTitle: e.currentTarget.textContent, selectedRoom, packagesList})
    }

    changeValueOfCatergory=(e)=>{
        const key = e._targetInst.key;
        const {packagesList} = this.state;
        const selectedPackage = packagesList.find(item => e.currentTarget.textContent === item.title);
      this.setState({selectedCategory: e.currentTarget.textContent,selectedPackage})
    }

    toggleCatagorey=()=>{
        this.setState({dropdownCtOpen: !this.state.dropdownCtOpen});
     }

     onPressNextButton =()=>{
        const{keepReservationData,currentUser}=this.props;
        const { selectedHotel,selectedRoom,selectedPackage,specialNote,isParkingNeed,isAmenitiesNeed, checkInDate,checkOutDate} = this.state;
        const diff= moment.duration(moment(checkOutDate).diff(moment(checkInDate)));
        let days = diff.asDays();
        days = parseInt(parseFloat(days).toFixed(2));
        let total = _.get(selectedPackage,'price',0) * days;
        total = parseFloat(total).toFixed(2);
        if(total > 0){
            keepReservationData({
                checkInTimeStamp : new Date(checkInDate).getTime(),checkOutTimeStamp : new Date(checkOutDate).getTime(),
                total,days,checkInDate,checkOutDate,selectedPackage,roomId:_.get(selectedRoom,'id',''),hotelId:_.get(selectedHotel,'id',''),currentuserId: currentUser.uid,specialNote,isParkingNeed,isAmenitiesNeed
            });
        }
        
    }

    addValue = (text)=>{
      this.setState({specialNote:text});
    }
    addAmenties =(val)=>{
        this.setState({isAmenitiesNeed: !this.state.isAmenitiesNeed});
    }

    addParking = (val)=>{
        this.setState({isParkingNeed:!this.state.isParkingNeed});
    }

    render(){
        const{checkInDate,checkOutDate,dropdownOpen,selectedHotelTitle,packagesList,specialNote,isParkingNeed, isAmenitiesNeed,
            dropdownRoomOpen,selectedRoomTitle,selectedCategory,dropdownCtOpen} = this.state;
        const selectedHotelName =selectedHotelTitle.length>0 ? selectedHotelTitle: 'SELECT A HOTEL';
        const selectedRoomName = selectedRoomTitle.length>0 ? selectedRoomTitle:'SELECT A ROOM';
        const {hotelList,roomList} = this.props;
        return(
            <div >
               <div style={{display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"30px"}}>
                  <h3>Make Your Reservation</h3>
               </div>
              
              
               <div style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"50px",flexDirection:'row', marginBottom:"50px"}}>
                
                        <div style={{marginRight:"50px"}}>
                           <Dropdown isOpen={dropdownOpen} toggle={this.toggle}>
                               <DropdownToggle style={{width:"200px"}} caret>{selectedHotelName} </DropdownToggle>
                                    <DropdownMenu>
                                        {hotelList.map((item,index)=>{
                                            return  (<DropdownItem >
                                                    <div key={item.id} onClick={this.changeValue}>{item.title}</div>
                                                </DropdownItem>);
                                        })}
                                    </DropdownMenu>
                            </Dropdown>
                        </div>
                        <div>
                           <Dropdown isOpen={dropdownRoomOpen} toggle={this.toggleRoom}>
                               <DropdownToggle style={{width:"200px"}} caret>{selectedRoomName} </DropdownToggle>
                                    <DropdownMenu>
                                        {roomList.map((item,index)=>{
                                            return  (<DropdownItem >
                                                    <div key={item.id} onClick={this.changeRoomValue}>{item.title}</div>
                                                </DropdownItem>);
                                        })}
                                    </DropdownMenu>
                            </Dropdown>
                        </div>
 
               </div>

               <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                  <div style={{display:'flex', flexDirection:'row', marginRight:"50px"}}>
                    <div>
                    <label style={{marginRight:"20px"}}>
                          Check In  Date: 
                      </label>
                      <DatePicker
                       selected={checkInDate}
                       onChange={this.handleChangeCheckIn}
                       timeInputLabel="Time:"
                       dateFormat="MM/dd/yyyy h:mm aa"
                       showTimeInput
                       disabled={false}
                       minDate={new Date()}
                     />
                    </div>
                  </div>
                  <div style={{display:'flex', flexDirection:'row', marginLeft:"20"}}>
                    <div>
                    <label style={{marginRight:"20px"}}>
                          Check out  Date: 
                      </label>
                      <DatePicker
                       selected={checkOutDate}
                       onChange={this.handleChangeCheckOut}
                       timeInputLabel="Time:"
                       dateFormat="MM/dd/yyyy h:mm aa"
                       showTimeInput
                       disabled={false}
                       minDate={new Date()}
                     />
                    </div>
                  </div>
               </div>

               <div style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"50px",flexDirection:'row'}}>
                
                    
                            <label style={{marginRight:"20px"}}>
                                Menu Category: 
                            </label>
                            <Dropdown isOpen={dropdownCtOpen} toggle={this.toggleCatagorey}>
                                <DropdownToggle style={{width:"200px"}} caret>{selectedCategory} </DropdownToggle>
                                        <DropdownMenu>
                                            {packagesList.map((item,index)=>{
                                                return  (<DropdownItem >
                                                        <div key={item.id} onClick={this.changeValueOfCatergory}>{item.title}</div>
                                                    </DropdownItem>);
                                            })}
                                        </DropdownMenu>
                                </Dropdown>
                   
                </div>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"50px",flexDirection:'row'}}>
                   <div style={{display:"flex", marginRight:"20px"}}>
                      <label style={{marginRight:"20px"}}>Vehicle Parking Spot </label>
                      <input type="checkbox"  name="vehicleParking" value={isParkingNeed} onChange={(e) => {
                                   this.addParking( e.target.value)}}></input>
                   </div>
                   <div style={{display:"flex"}}>
                      <label style={{marginRight:"20px"}}>Amenities(Free of Charge) </label>
                      <input type="checkbox"  name="vehicleParking" value={isAmenitiesNeed} onChange={(e) => {
                                   this.addAmenties( e.target.value)
                               }} ></input>
                   </div>
                </div>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"50px",flexDirection:'row'}}>
                    <Label style={{marginRight:"20px"}}>Special Note :</Label>
                    <FormGroup>
                        <Input style={{width:"500px"}} type="textarea" name="text" id="exampleText" value={specialNote}
                        onChange={(e) => {
                                   this.addValue( e.target.value)
                               }} />
                    </FormGroup>
                </div>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"20px",flexDirection:'row'}}>
                  <ButtonToggle color="primary" onClick={this.onPressNextButton}>Next</ButtonToggle>
                </div>
            </div>
        )
    }
};

export default connect(
    state => ({
        hotelList: state.hotel.get('hotelList'),
        roomList: state.hotel.get('roomList'),
        currentUser: state.user.get('currentUser'),
    }),
    ({
        keepReservationData: Actions.hotel.keepReservationData,
    })
  )(DashBoard);
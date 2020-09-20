import React from 'react';
import {connect} from 'react-redux';
import {Actions} from '../../internal/modules/Actions';
import Drawer from '../../assets/img/drawer.svg';
import Logo from '../../assets/img/mango.png';
import Notification from '../../assets/img/notification.svg';
import Message from '../../assets/img/message.svg';
import Profile from '../../assets/img/user-profile.png';
import UpArrow from "../../assets/img/up_arrow.png";
import DownArrow from "../../assets/img/down_arrow.png";
//import FileHelper from '../../internal/helper/FileHelper';
import _ from 'lodash';
// import Sidebar from '../Sidebar/Sidebar';
// import {Route, Switch} from "react-router-dom";
//import routes from 'routes.js';

class UserNavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  navigate = (params)=>{
    const {commonNavigation}=this.props;
    commonNavigation(params)
  }

  render() {
    const {currentUser} =this.props;
    console.info("ppppp",currentUser)
    const {toggleSideBar=false, organizationForOlgId="1",toggleNotificationbar=false,
    showNotificationBar=false,showMessageBar=false,toggleMessagebar=false, unseenMessageList=[],
     notificationList=[]} = this.props;
    const picture = Profile;
    const name = "Mango Hotel Group Reservation Site";
    const isLogin = false;
    const unseenNotificationCount = _.filter(notificationList, function(item) { return !item.isChecked; });
    return (
      <>
        <div class="headerContainer">
          <div class="headNavNew" > 
            <img  src={Logo} className="profile custom" width="50" height="35" onClick={()=>this.navigate("/")}/>
            <div class="headerText">{name}</div>
          </div>
          
          <div class="userImg">
           <img src={ Profile} class="profile" marginRight="0"/>
           {!_.isNull(currentUser)? <div class="singUpSingIn">
           <p style={{color:'#ffffff'}}>{`Hi ${currentUser.billingDetails['firstName']} ${currentUser.billingDetails['lastName']}  Welcome`}</p>
           <img src={ DownArrow}  />
           </div>:<div class="singUpSingIn"><p style={{color:'#ffffff'}} onClick={()=>this.navigate("/signup")}>Sign Up/Sing In</p></div>}
          </div>
        </div>
      </>
    );
  }
}

export default connect(
  state => ({
    currentUser: state.user.get('currentUser'),
  }),
  {
    commonNavigation: Actions.hotel.commonNavigation,
  },
)(UserNavBar);


 //export default UserNavBar;

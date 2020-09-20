import React,{useContext} from "react";
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";
import _ from "lodash";

const PrivateRouter = ({currentUser, RoutComponent, path, to="/login"})=>{
    //const {currentUser} = useContext(null);
   if(!_.isNull(currentUser)){
    return <Route exact path={path} render={props => <RoutComponent {...props} />} />
   }else{
    return <Redirect from={path} to={to}/>
   }
    
    // return (<Route exact path={path} render={(props)=> !_.isNull(currentUser)? (<RoutComponent {...props}/>):
    // (<Redirect to="/"/>)
    // }>
    // </Route>);
}

export default connect(
    state => ({
       currentUser: state.user.get('currentUser'),
    }),
    ({
    })
  )(PrivateRouter);
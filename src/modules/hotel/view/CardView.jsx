import React, { Component } from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Card } from "react-bootstrap";
import { Actions } from "../../../internal/modules/Actions";
import MangoLake from "../../../assets/img/mangoLake.jpg";
import MangoHill from "../../../assets/img/mangoHill.jpg";
import MangoSea from "../../../assets/img/mangoSea.jpg";

class CardView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleLogin = () => {
    this.setState({ isLoginOn: !this.state.isLoginOn });
  };

  render() {
    const { getcardData } = this.props;
    console.log("getcardData", getcardData);
    // [{ pic: MangoLake }, { pic: MangoHill }, { pic: MangoSea }]
    return (
      <div className={"cardPade"}>
        {getcardData.map((item, index) => {
          return (
            <Card
              style={{
                width: "18rem",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <Card.Img variant="top" src={item.picture} />
              <Card.Body>
                <Card.Title>{`${item.firstName} ${item.lastName}`}</Card.Title>
                <Card.Text>
                  {`Hi I'm ${item.firstName} ${item.lastName} and my email is ${item.email} and my id is ${item.id}`}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    getcardData: state.hotel.get("getcardData"),
  }),
  {
    commonNavigation: Actions.hotel.commonNavigation,
    getUserData: Actions.user.getUserData,
  }
)(CardView);

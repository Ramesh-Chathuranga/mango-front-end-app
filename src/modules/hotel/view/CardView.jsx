import React, { Component } from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import { Scrollbars } from "react-custom-scrollbars";
import "react-datepicker/dist/react-datepicker.css";
import { Card, Row, Col } from "react-bootstrap";
import _ from "lodash";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
  Label,
  Input,
  ButtonToggle,
} from "reactstrap";
import { Actions } from "../../../internal/modules/Actions";
import { GENDER } from "../constant";
import MangoLake from "../../../assets/img/mangoLake.jpg";
import MangoHill from "../../../assets/img/mangoHill.jpg";
import MangoSea from "../../../assets/img/mangoSea.jpg";

class CardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOn: false,
      selectedType: GENDER.ALL,
      dropdownOpen: false,
      isSort: false,
    };
  }

  addValue = (isSort) => {
    this.setState({ isSort: !isSort });
  };

  toggleLogin = () => {
    this.setState({ isLoginOn: !this.state.isLoginOn });
  };

  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };
  changeValue = (e) => {
    const { getAllCardData, getCardDataByGender } = this.props;
    const selectedType = e.currentTarget.textContent;
    if (selectedType === GENDER.ALL) {
      getAllCardData();
    } else {
      getCardDataByGender(selectedType.toLowerCase());
    }
    this.setState({
      selectedType,
    });
  };

  render() {
    const { getcardData } = this.props;
    const { selectedType, dropdownOpen, isSort } = this.state;
    let list = getcardData;
    if (isSort) {
      list = _.sortBy(list, ["firstName", "lastName"]);
    }
    return (
      <>
        <Row style={{ height: window.innerHeight - 120 }}>
          <Col sm={4}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <Dropdown isOpen={dropdownOpen} toggle={this.toggle}>
                <DropdownToggle style={{ width: "200px" }} caret>
                  {selectedType}{" "}
                </DropdownToggle>
                <DropdownMenu>
                  {[
                    { type: GENDER.ALL },
                    { type: GENDER.MALE },
                    { type: GENDER.FEMALE },
                  ].map((item, index) => {
                    return (
                      <DropdownItem
                        style={{
                          backgroundColor:
                            selectedType === item.type
                              ? "rgba(0,0,0,0.6)"
                              : "white",
                        }}
                      >
                        <div key={item.index} onClick={this.changeValue}>
                          {item.type}
                        </div>
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </Dropdown>
            </div>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FormGroup check>
                <Input
                  type="checkbox"
                  name="check"
                  value={isSort}
                  onChange={(e) => {
                    const isCheck = e.target.value === "true";
                    this.addValue(isCheck);
                  }}
                />
                <Label for="exampleCheck" check>
                  Order By Name
                </Label>
              </FormGroup>
            </div>
          </Col>
          <Col sm={8}>
            <Scrollbars autoHide className="main-scroll profile-container">
              <div className={"cardPade"}>
                {list.map((item, index) => {
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
            </Scrollbars>
          </Col>
        </Row>
      </>
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
    getCardDataByGender: Actions.hotel.getCardDataByGender,
    getAllCardData: Actions.hotel.getAllCardData,
  }
)(CardView);

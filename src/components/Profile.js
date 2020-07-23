import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProfile } from "../redux/actions";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import styled from "styled-components";

class Profile extends Component {
  componentDidMount() {
    console.log("In profile");
    this.props.getProfile();
    console.log(this.props.user);
  }
  render() {
    return (
      <div className="d-flex justify-content-center">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.user.photo} />
          <Card.Body>
            <Card.Title>
              <b>Welcome</b> {this.props.user.username}
            </Card.Title>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
            <div>
              <Link to="/home">
                <Button className="my-2" variant="primary">
                  Check your Expenses!
                </Button>
              </Link>
              <a href="https://ancient-mountain-80140.herokuapp.com/api/auth/logout">
                <Button variant="primary">Logout</Button>
              </a>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.data.user,
});
const mapActionToProps = { getProfile };

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  getProfile: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapActionToProps)(Profile);

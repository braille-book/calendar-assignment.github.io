import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header,Form, Menu } from 'semantic-ui-react';

class Calendar extends React.Component {

  render() {
    return (
        <Container style={{backgroundColor: "goldenrod"}} textAlign="left">
    <Header as='h1'>Please This Form Out For Your Event!</Header>
    <form class="ui form">
        <div class="field">
        <label>Please Enter Date For Event</label>
    <input placeholder="Please Enter Date For Event" />
    </div>
    </form>
    <form class="ui form">
        <div class="field">
        <label>Please Enter Time For Event</label>
    <input placeholder="Please Enter Time For Event" />
    </div>
    </form>
    <form class="ui form">
        <div class="field">
        <label>Please Enter Time Frame For Event</label>
    <input placeholder="Please Enter Date For Event" />
    </div>
    </form>
    <form class="ui form">
        <div class="field">
        <label>Please Enter Description For Event</label>
    <input placeholder="Please Enter the Description For Event" />
    </div>
    </form>
    <form class="ui form">
        <div class="field">
        <label>Please Enter Location For Event</label>
    <input placeholder="Please Enter the Location For Event" />
    </div>
    </form>
    <form class="ui form">
        <div class="field">
        <label>Invite any Guest to The Event</label>
    <input placeholder="Please Enter the Guest Email" />
    </div>
    </form>
    <form class="ui success form">
        <div class="field">
        <label>Email</label>
        <div class="ui input"><input type="text" placeholder="joe@schmoe.com" /></div>
        </div>
        <div class="ui success message">
        <div class="content">
        <div class="header">Form Completed</div>
    <p>You&#x27;re all signed up for the newsletter</p>
    </div>
    </div>
    <button class="ui button">Submit</button>
        </form>

    </Container>
  );
  }
}

ReactDOM.render(<Calendar/>, document.getElementById('root'));
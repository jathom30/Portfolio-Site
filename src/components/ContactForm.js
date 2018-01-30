import React, { Component } from 'react';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      animation: false,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handleMessageChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const {name, email, message} = this.state;
    return (
      <div>
        <form method="POST" onSubmit={this.handleSubmit}>
        <h4>Contact me</h4>
        <p>with any comment or questions.</p>
          <fieldset>
              <input type="text" value={name} onChange={this.handleNameChange} placeholder="name"/>
          </fieldset>
          <fieldset>
            <input type="text" value={email} onChange={this.handleEmailChange} placeholder="email"/>
          </fieldset>
          <fieldset>
            <textarea value={message} onChange={this.handleMessageChange} placeholder="hello..."/>
          </fieldset>
          <input id="submit" type="submit" name="submit" />
        </form>
      </div>
    );
  }
}
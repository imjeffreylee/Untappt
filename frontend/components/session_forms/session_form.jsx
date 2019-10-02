import React from 'react';
import merge from "lodash/merge";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.target.value
    })
  }

  renderErrors() {
    const err = this.props.errors.map((error, i) => {
      <li key={i}>{error}</li>
    });
    return (
      <ul>
        {err}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.props.formType} or {this.props.navLink}
          <br/>
          <label>Username:
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
            />
          </label>
          <br/>
          <label>Password:
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>
          <br/>
          <button>{this.props.formType}</button>
          <br/>
          {this.renderErrors()}
        </form>
      </div>
    )
  }
}

export default SessionForm;
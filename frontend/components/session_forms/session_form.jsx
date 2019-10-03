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
    return (
      <ul>
        {this.props.errors.map((err, i) => {
          return (
            <li key={i}>{err}</li>
          )
        })}
      </ul>
    )
  }

  render() {
    return (
      <div>
        <h1 className='josefin'>UNTAPPT</h1>
        <form onSubmit={this.handleSubmit}>
          <p>
            {this.props.formType} or {this.props.navLink}
          </p>
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
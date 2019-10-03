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
            <li key={i} className="err-msg">
              {err}  <span>\(^Д^)/</span>
            </li>
          )
        })}
      </ul>
    )
  }

  render() {
    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="login-signup">
          <div className="inner-session-form-container">
            <div className="form-header josefin">
              <h2>UNTAPPT</h2>
              <h6>DRINK SOCIALLY</h6>          
            </div>
            {this.renderErrors()}
            <div className="input-holder">
              <div className="icon-input-wrapper">
                <i className="fas fa-user"></i>
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  placeholder="Username"
                  className="input-username"
                />
              </div>
              <div className="icon-input-wrapper">
                <i className="fas fa-unlock"></i>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                  className="input-password"
                />
              </div>
            </div>
            <span className="button-holder">
              <button>{this.props.formType}</button>
            </span>
            <p className="login-signup-switch">
              {this.props.formType} or {this.props.navLink}
            </p>
          </div>
        </form>
      </div>
    )
  }
}

export default SessionForm;
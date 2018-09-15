import React, { Component } from "react";
import { Link } from "react-router-dom";
import validateEmail from "../../helpers/validateEmail";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        firstName:"",
        lastName:"",
        email: "",
        password: ""
      },
      validEmail: true,
      route: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = event => {
    let creds = this.state.credentials;
    creds[event.target.name] = event.target.value;
    this.setState({ credentials: creds });
  };

  onSubmit = event => {
    event.preventDefault();
    if (validateEmail(this.state.credentials.email)) {
      // dispatch it to redux reducer
      let user = {
        email: this.state.credentials.email,
        password: this.state.credentials.password,
        firstName:this.state.credentials.firstName,
        lastName: this.state.credentials.lastName
      };

      this.props.registerUser(user, this.props.history);
    } else {
      // if its a wrong message then i will need to inject jsx into the dom
      this.setState({ route: "/signup" });

      alert("no");
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card bg-light ">
              <header className="card-header headerting">
                <a href="/" className="float-right btn btn-outline-primary mt-1">
                  Log in
                </a>
                <h4 className="card-title mt-2 black">Sign up</h4>
                <small className="float-center form-text text-muted">
                  If you already have an account click 'Log In'{" "}
                </small>
              </header>
              <article className="card-body">
                <form>
                  <div className="form-row">
                		<div className="col form-group">
                			<label>First name </label>
                		  	<input
                          name="firstName"
                          type="text"
                          className="form-control"
                          placeholder=""
                          onChange={this.onChange}
                        />
                		</div>
                		<div className="col form-group">
                			<label>Last name</label>
                		  	<input
                          name='lastName'
                          type="text"
                          className="form-control"
                          placeholder=" "
                          onChange={this.onChange}
                        />
                		</div>
                	</div>
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder=""
                      onChange={this.onChange}
                    />
                    <small className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <label>Create password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <Link
                      to={this.state.route}
                      className="btn btn-primary btn-block"
                      onClick={this.onSubmit}
                    >
                      Register{" "}
                    </Link>
                    {/* <a
                      href="/Initialcalorie"
                      class="btn btn-primary btn-block"
                      onClick={this.onSubmit}
                    >
                      Register{" "}
                    </a> */}
                  </div>
                  {/* <small class="text-muted">By clicking the 'Sign Up' button, you confirm that you accept our <br/> Terms of use and Privacy Policy.</small> */}
                </form>
              </article>
              {/* <div className="border-top card-body text-center">Have an account? <a href="/">Log In</a></div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Signup);

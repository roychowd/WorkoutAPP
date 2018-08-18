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
        password: this.state.credentials.password
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
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card bg-light ">
              <header class="card-header headerting">
                <a href="/" class="float-right btn btn-outline-primary mt-1">
                  Log in
                </a>
                <h4 class="card-title mt-2">Sign up</h4>
                <small class="float-center form-text text-muted">
                  If you already have an account click 'Log In'{" "}
                </small>
              </header>
              <article class="card-body">
                <form>
                  <div class="form-row">
                		<div class="col form-group">
                			<label>First name </label>
                		  	<input type="text" class="form-control" placeholder=""/>
                		</div>
                		<div class="col form-group">
                			<label>Last name</label>
                		  	<input type="text" class="form-control" placeholder=" "/>
                		</div>
                	</div>
                  <div class="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      placeholder=""
                      onChange={this.onChange}
                    />
                    <small class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class="form-group">
                    <label>Create password</label>
                    <input
                      class="form-control"
                      type="password"
                      name="password"
                      onChange={this.onChange}
                    />
                  </div>
                  <div class="form-group">
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
              {/* <div class="border-top card-body text-center">Have an account? <a href="/">Log In</a></div> */}
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

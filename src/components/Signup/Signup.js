import React,{Component} from 'react';

class Signup extends Component{

  // handleRegister = () => {
  //   redirect('/Dashboard');
  // }


  render() {
    return(
      <div class='container'>
        <div class="row justify-content-center">
        <div class="col-md-6">
        <div class="card bg-light ">
        <header class="card-header headerting">
        	<a href="/" class="float-right btn btn-outline-primary mt-1">Log in</a>
        	<h4 class="card-title mt-2">Sign up</h4>
          <small class="float-right form-text text-muted">If you already have an account </small>
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
        		<input type="email" class="form-control" placeholder=""/>
        		<small class="form-text text-muted">We'll never share your email with anyone else.</small>
        	</div>
        	<div class="form-group">
        			<label class="form-check form-check-inline">
        		  <input class="form-check-input" type="radio" name="gender" value="option1"/>
        		  <span class="form-check-label"> Male </span>
        		</label>
        		<label class="form-check form-check-inline">
        		  <input class="form-check-input" type="radio" name="gender" value="option2"/>
        		  <span class="form-check-label"> Female</span>
        		</label>
        	</div>
        	<div class="form-group">
        		<label>Create password</label>
        	    <input class="form-control" type="password"/>
        	</div>
            <div class="form-group">
                <a href='/Initialcalorie' class="btn btn-primary btn-block" >Register </a>
            </div>
            <small class="text-muted">By clicking the 'Sign Up' button, you confirm that you accept our <br/> Terms of use and Privacy Policy.</small>
        </form>
        </article>
        <div class="border-top card-body text-center">Have an account? <a href="/">Log In</a></div>
        </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Signup;

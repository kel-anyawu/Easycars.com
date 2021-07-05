import React from 'react';
import background from "../images/cars.jpg";
import  {Link} from "react-router-dom";



const Login = () => {
    return (
        <div >
            <body className="main-bg" style={{backgroundImage: `url(${background})` , "marginTop" : "40px"}}>
        		<div className="login-container text-c animated flipInX">
					<div>
						<h1 className="logo-badge text-whitesmoke"><span class="fa fa-user-circle"></span></h1>
					</div>
                    <h3 className="text-whitesmoke">Sign In</h3>
                	<div className="container-content">
                    	<form className="margin-t">
							<div classname="form-group">
								<input type="text" classname="form-control" placeholder="Username" required=""/>
							</div>
							<div classname="form-group">
								<input type="password" classname="form-control" placeholder="Password" required=""/>
							</div>
                        	<button type="submit" classname="form-button button-l margin-b">Sign In</button><br />
        
							<Link to="/" classname="text-darkyellow"><small>Forgot your password?</small></Link>
							<p classname="text-light text-center">Do not have an account?</p>
							<Link to="/Register" classname="text-darkyellow">Sign Up</Link>
						</form>
                	</div>
            	</div>
			</body>
        </div>
    )
}

export default Login

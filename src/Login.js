

// //right now not using for future refference 




// import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import authentication from "./firebase";



// function Login() {
// 	const history = useHistory();
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");

// 	const signIn = (e) => {
// 		e.preventDefault();
// 		authentication
// 			.signWithEmailAndPassword(email, password)
// 			.then((auth) => {
// 				history.pushState("/");
// 			})
// 			.catch((error) => {
// 				alert(error.message);
// 			});
// 	};

// 	const register = (e) => {
// 		e.preventDefault();
// 		authentication
// 			.craeteUserWithEmailAndPassword(email, password)
// 			.then((auth) => {
// 				history.push("/");
// 			})
// 			.catch((error) => {
// 				alert(error. message);
// 			});
// 	};

// 	return (
// 		<div className="login">
// 			<Link to="/">
// 				<img
// 					className="login__logo"
// 					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
// 					alt=""
// 				/>
// 			</Link>

// 			<div className="login__container">
// 				<h1>Sign-in</h1>

// 				{/* We use e.preventDefault() to prevent the page from reloading because of the form tag. */}
// 				<form>
// 					<h5>E-mail</h5>
// 					<input
// 						type="email"
// 						value={email}
// 						onChange={(e) => setEmail(e.target.value)}
// 					/>
// 					<h5>Password</h5>
// 					<input
// 						type="password"
// 						value={password}
// 						onChange={(e) => setPassword(e.target.value)}
// 					/>
// 					<button
// 						type="submit"
// 						onClick={signIn}
// 						className="login__signInButton"
// 					>
// 						Sign In
// 					</button>
// 				</form>
// 				<p>
// 					By signing-in you agree to the AMAZON's CLONE Conditions of Use &
// 					Sale. Please see our Privacy Notice, our Cookies Notice and our
// 					Interest-Based Ads Notice.
// 				</p>
// 				<button onClick={register} className="login__registerButton">
// 					Create your Amazon Account
// 				</button>
// 			</div>
// 		</div>
// 	);
// }

// export default Login;

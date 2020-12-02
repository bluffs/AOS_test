import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

import './Login.css';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [badAuth, setBadAuth] = useState(false);
    const history = useHistory();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        fetch("http://localhost:9000/v2/posts", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    // go to success page
                    history.push('/success');
                }
                if (res.status === 401) {
                    console.log("bad auth");
                    setBadAuth(true);
                }
            })
            .catch(err => {
                console.log("error" + err);
            })
    }

    return (
        <div className="login" >
            {badAuth ? <div className="login__error">Bad authentication</div> : null}
            <form onSubmit={handleSubmit}>
                <label>Email
                    <br />
                    <input type="text" placeholder="email" value={email} onChange={handleEmail} />
                </label>
                <label>Password
                    <br />
                    <input type="password" placeholder="password" value={password} onChange={handlePassword} />
                </label>
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login

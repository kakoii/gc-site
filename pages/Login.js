import React, { useState } from 'react';
import './Login.css'
import LoginForm from '../components/LoginForm'

function App() {
    const adminUser = {
        username: "theboys",
        password: "admin123"
    }
    

    const [user, setUser] = useState({name: "", username: ""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if (details.username == adminUser.username && details.password == adminUser.password) {
        console.log("Logged in");
        setUser({
            name: details.name,
            username: details.username
        });
    } else {
        console.log("Details do not match");
        setError("Details do not match");
    }
}
    const Logout = () => {
        console.log("Logout");
        setUser({ name: "", username: ""});
    }

    return (
        <div className="App">
            {(user.username != "") ? (
                <div className="welcome">
                <h2> Welcome, <span>{user.name}</span></h2>
                <a href="/landing">
                <button>Continue to Site</button>
                </a>
                <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <LoginForm Login={Login} error={error} />
            )}
        </div>
    );
}

export default App;
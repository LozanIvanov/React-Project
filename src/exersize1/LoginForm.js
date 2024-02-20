import React from "react";

export default function LoginForm(props) {
    return (
        <div>
            <div>
                <label>Username</label>
                <input type="text"
                    name="username"
                    onInput={props.handleinput}
                />
            </div>
            <div>
                <label>Password</label>
                <input type="password"
                    name="password"
                    onInput={props.handleinput}
                />
            </div>
            <div>
                <button onClick={props.login} type="button">Login</button>
            </div>
        </div>
    )
}
import React, {useState} from 'react';

export default function AppLogin() {
    const [formdata, setformdata] = useState({
        username: '',
        password: ''
    });

    const [isLogged, setisLogged] = useState(false);

    function handleInput(event) {
        const {name, value} = event.target;
        setformdata({...formdata, [name]: value });
    }
    function Login(){
        if(formdata.username == 'user' && formdata.password=='111'){
            setisLogged(true)
        }
    }
    return (
        <div>
            {!isLogged &&
                <div>
                    <div>
                        <label>Username</label>
                        <input  
                        type="text"
                            name="username"
                            onInput={handleInput}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password"
                            name="password"
                            onInput={handleInput}
                        />
                    </div>
                    <div>
                        <button onClick={Login} type="button">Login</button>
                    </div>
                </div>
            }
            {isLogged && <div>Hello user</div>}
        </div>
    )
}
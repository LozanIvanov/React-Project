import React, {useState} from 'react';

export default function AppLogin() {
    const [data, setdata] = useState({
        username: '',
        password: ''
    });

    const [isLogged, setisLogged] = useState(false);

    function Input(event) {
        const {name, value} = event.target;
        setdata({...data, [name]: value });
    }
    function Login(){
        if(data.username == 'user' && data.password=='111' ){
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
                            onInput={Input}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password"
                            name="password"
                            onInput={Input}
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
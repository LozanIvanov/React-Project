import React, { useState } from 'react';

export default function Form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [city, setCity] = useState('');
    const [gender, setGender] = useState('');
    const [music, setMusic] = useState([]);

    const [error, setError] = useState({
        name: '',
        email: '',
        password: '',
        city: '',
        gender: '',
        music: '',
    })
    const color = { color: 'red' };
    return (
        <div>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" onInput={(e) => {
                        setName(e.target.value)
                    }} />
                    <span style={color}>{error.name}</span>
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" onInput={(e) => {
                        setEmail(e.target.value)
                    }} />
                    <span style={color}>{error.email}</span>
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" onInput={(e) => {
                        setPassword(e.target.value)
                    }} />
                    <span style={color}>{error.password}</span>
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" onInput={(e) => {
                        setPasswordConfirm(e.target.value)
                    }} />
                    <span style={color}>{error.password}</span>
                </div>
                <div>
                    <label>Town</label>
                    <select onChange={(e) => {
                        setCity(e.target.value)
                    }} >
                        <option value="">Choise</option>
                        <option value="Plovdiv">Plovdiv</option>
                        <option value="Sofia">Sofia</option>
                    </select>
                    <span style={color}>{error.city}</span>
                </div>
                <div>
                    <label>Man</label>
                    <input type="radio" onClick={() => {
                        setGender('male')
                    }} name="gender" />
                    <label>Women</label>
                    <input type="radio" onClick={() => {
                        setGender('famale')
                    }} name="gender" />
                    <span style={color}>{error.gender}</span>
                </div>
                <div>
                    <label>Rock</label>
                    <input onClick={(e) => {
                        if (e.target.checked == true) {
                            setMusic([...music, 'rock'])
                        } else {
                            setMusic(music.filter(x => x != 'rock'))
                        }
                    }}
                        type="checkbox" />
                    <label>Pop</label>
                    <input onClick={(e) => {
                        if (e.target.checked == true) {
                            setMusic([...music, 'pop'])
                        } else {
                            setMusic(music.filter(x => x != 'pop'))
                        }
                    }} type="checkbox" />
                    <label>Rap</label>
                    <input onClick={(e) => {
                        if (e.target.checked == true) {
                            setMusic([...music, 'rap'])
                        } else {
                            setMusic(music.filter(x => x != 'rap'))
                        }
                    }} type="checkbox" />
                    <span style={color}>{error.music}</span>
                </div>
                <div>
                    <button onClick={()=>{
                        let err=error;
                        if(name.length<4){
                            err.name='invalid name'
                        }
                        else{
                            err.name='';
                        }

                        if(email ==''){
                            err.email='invalid email';
                        }else{
                            err.email='';
                        }
                        if(password=='' ||password!=passwordConfirm){
                            err.password='invalid pass';
                        }
                        else{
                            err.password='';
                        }
                        if(city==''){
                            err.city='invalid city'
                        }
                        else{
                            err.city='';
                        }
                        if(gender==''){
                            err.gender='invalid gender'
                        }
                        else{
                            err.gender='';
                        }
                        if(music.length==0){
                            err.music='invalid music'
                        }else{
                            err.music='';
                        }
                        setError({...error,err})
                    }} type="button">Registration</button>
                </div>
            </form>
        </div>
    )
}
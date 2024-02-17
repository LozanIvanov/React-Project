import React, { useState } from "react";


/* Създайте контактна форма със следните полета и валидации: 
Име (задължително поле, поне 3 символа)
Имейл (задължително поле)
Тема (задължително поле – поне 10 символа)
Съобщение (задължително поле, textarea)
Бутон изпрати.*/

 export default function Forms() {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [subject, setsubject] = useState('');
    const [message, setmessage] = useState('');

    const color = { color: 'red' };
    return (
        <div>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" onInput={(e) => {
                        setname(e.target.value)
                    }} />
                    <span style={color}>{name.length < 3 ? 'error' : ''}</span>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" onInput={(e) => {
                        setemail(e.target.value)
                    }} />
                    <span style={color}>{email.length ==0 ? 'error' : ''}</span>
                </div>
                <div>
                    <label>Subject</label>
                    <input type="text" onInput={(e) => {
                        setsubject(e.target.value)
                    }} />
                    <span style={color}>{subject.length < 6 ? 'error' : ''}</span>
                </div>
                <div>
                    <label>Message</label>
                    <input type="textarea" onInput={(e) => {
                        setmessage(e.target.value)
                    }} />
                    <span style={color}>{message.length < 3 ? 'error' : ''}</span>
                </div>
                <div>
                    <button type="button" >Send </button>
                </div>

            </form>
        </div>
    )
}

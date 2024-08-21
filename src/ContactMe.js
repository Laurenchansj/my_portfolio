import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function ContactMe() {
    const [input_name, setInputName] = useState('');
    const [input_email, setInputEmail] = useState('');
    const [input_message, setInputMessage] = useState('');

    const handleNameChange = (e) => {
        setInputName(e.target.value);
    };
    const handleEmailChange = (e) => {
        setInputEmail(e.target.value);
    };
    const handleMessageChange = (e) => {
        setInputMessage(e.target.value);
    };

    const clean = () => {
        setInputName('');
        setInputEmail('');
        setInputMessage('');
    };

    const form = useRef();
    const service_id = process.env.REACT_APP_MY_SERVICE_ID;
    const template_id = process.env.REACT_APP_MY_TEMPLATE_ID;
        const user_id = process.env.REACT_APP_MY_PUBLIC_KEY;


    const sendEmail = (e) => {
        e.preventDefault();

        // console.log("check: ", service_id, template_id, user_id);

        emailjs
        .sendForm(service_id, template_id, form.current, {
            publicKey: user_id,
        })
        .then(
            () => {
            console.log('SUCCESS!');
            // const res = "Thank you" + {input_name} +"! Email sent successfully from " + {input_email} + " !";
            alert("Thank you! Email sent successfully");
            clean();
            },
            (error) => {
            console.log('FAILED...', error.text);
            // alert("Sorry, Email sent unsuccessfully. Please try again. Error: ", error.text);
            alert("Sorry, Email sent unsuccessfully. This functionality will be fixed soon.");
            },
        );
    };

return (
    <div className='contact-div'>
        <h3 className='section-title'>Contact Me</h3>
        <form ref={form} onSubmit={sendEmail}>
            <table className='contact_form_table'>
                <tbody>
                    <tr className='contact_each_row'>
                        <th>
                            Name
                        </th>
                        <td>
                            <input type="text" placeholder="Please enter your name" name="user_name" className='contact_input' value={input_name} onChange={handleNameChange} required/>
                        </td>
                    </tr>
                    <tr className='contact_each_row'>
                        <th>
                            Email
                        </th>
                        <td>
                            <input type="email" placeholder="Please enter your email" name="user_email" className='contact_input' value={input_email} onChange={handleEmailChange} required/>
                        </td>
                    </tr>
                    <tr className='contact_each_row'>
                        <th>
                            Message
                        </th>
                        <td>
                            <textarea name="message" className='contact_message_input' value={input_message} onChange={handleMessageChange} required/>
                        </td>
                    </tr>
                </tbody>
            </table>
            <input type="submit" value="Send" className='contact_submit_btn'/>
        </form>
    </div>
);
};
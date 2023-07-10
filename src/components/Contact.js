import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

    export default function Contact(){

  
        const form = useRef();

        const [client, setClient] = useState([]);
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [subject, setSubject] = useState('');
        const [msg, setMsg] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            
            // collect input1  
            const emailData = {
                name: name,
                to: 'steven.lawson22@gmail.com',
                from: email,
                subject: subject,
                message: msg
            };

            emailjs.sendForm('service_n0ylxe7', 'template_5zpp8pk', form.current, 'odJXnCl_F4SXHyh22')
            .then((result) => {
                console.log(result.text);
                // Clear form data
                setName('');
                setEmail('');
                setSubject('');
                setMsg('');
            }, (error) => {
                console.log(error.text);
                alert("Email unsuccessful.", error.text)
            });

            alert("Email Sent Successfully.")
            
        }


    return (
        <>
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Contact</h2>
                </div>

                <div className="row mt-1">
                    <div className="mt-5 mt-lg-0">
                        <form ref={form} action="forms/contact.php" method="post" role="form" className="php-email-form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)} required />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" value={subject} onChange={(e)=>setSubject(e.target.value)} required />
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" rows="5" placeholder="Message" value={msg} onChange={(e)=>setMsg(e.target.value)} required></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center">
                                <button type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

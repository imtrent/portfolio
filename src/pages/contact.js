import React, { useState } from 'react';
import Layout from '../components/layout';

const Contact = () => {
    return (
        <Layout>
            <div className="grid-container medium">
                <h1>Get In Touch</h1>
                <p>
                    Have a project in mind, or just want to talk? Feel free to
                    send me a message!
                </p>
                <form
                    action="POST"
                    name="contact"
                    data-netlify
                    data-netlify-honeypot="bot-field"
                >
                    <div className="input-group">
                        <div className="input">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" />
                        </div>
                        <div className="input">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" />
                        </div>
                    </div>
                    <div className="input">
                        <label htmlFor="subject">Subject</label>
                        <input type="subject" id="subject" name="subject" />
                    </div>
                    <div className="input">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message"></textarea>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </Layout>
    );
};

export default Contact;

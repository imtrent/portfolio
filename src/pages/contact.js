import React from 'react';
import Layout from '../components/layout';

const Contact = () => {
    return (
        <Layout className="contact">
            <div className="grid-container medium">
                <h1>Get In Touch</h1>
                <p>
                    Have a project in mind, or just want to talk? Feel free to
                    send me a message!
                </p>
                <form
                    method="POST"
                    name="contact"
                    action="/success"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                >
                    <input name="bot-field" type="hidden" />
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="form-group">
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
                        <input type="text" id="subject" name="subject" />
                    </div>
                    <div className="input">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message"></textarea>
                    </div>
                    <button className="button primary" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default Contact;

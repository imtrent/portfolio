import React, { useState } from 'react';
import Layout from '../components/layout';
import { Container, Row, Column } from '../components/grid/styles';
import {
    Title,
    Subtitle,
    Description,
    Direct,
} from '../components/settings/styles';

import { InputGroup, InputField } from './../components/form/styles';

const Contact = () => {
    return (
        <Layout>
            <Container className="medium">
                <Title>Get In Touch</Title>
                <Description fontBreakOne="2rem" fontSize="2rem" margin="0">Have a project in mind, or just want to talk? Feel free to send me a message!</Description>
                <form action="POST" name="contact" data-netlify data-netlify-honeypot="bot-field">
                    <InputGroup>
                        <InputField>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" />
                        </InputField>
                        <InputField>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" />
                        </InputField>
                    </InputGroup>
                    <InputField>
                        <label htmlFor="subject">Subject</label>
                        <input type="subject" id="subject" name="subject" />
                    </InputField>
                    <InputField>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message"></textarea>
                    </InputField>
                </form>
            </Container>
        </Layout>
    );
}

export default Contact;
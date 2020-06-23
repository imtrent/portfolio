import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Contact = () => {
  return (
    <Layout className="contact">
      <SEO title="Contact Me" description="Have a project in mind or just want to talk? Feel free to send me a message!" />
      <div className="contain-sm mt-8 md:mt-16">
        <h1 className="text-3xl md:text-4xl md:text-5xl">Get In Touch</h1>
        <p className="text-mdgray my-4 md:text-lg">Have a project in mind or just want to talk? Feel free to send me a message!</p>
        <form method="POST" name="contact" action="/success" data-netlify="true" netlify-honeypot="bot-field">
          <input name="bot-field" type="hidden" />
          <input type="hidden" name="form-name" value="contact" />
          <div className="my-6 flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/2 sm:mr-4">
              <label htmlFor="name" className="block mb-1 leading-5 text-mdgray">
                Name
              </label>
              <input type="text" id="name" name="name" className="mb-6 sm:mb-0 appearance-none border rounded w-full py-2 px-2 text-mdgray leading-tight focus:border-ltgray focus:outline-none" required />
            </div>
            <div className="w-full sm:w-1/2 sm:ml-4">
              <label htmlFor="email" className="block mb-1 leading-5 text-mdgray">
                Email
              </label>
              <input type="email" id="email" name="email" className="appearance-none border rounded w-full py-2 px-2 text-mdgray leading-tight focus:border-ltgray focus:outline-none" required />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block mb-1 leading-5 text-mdgray">
              Subject
            </label>
            <input type="text" id="subject" name="subject" className="appearance-none border rounded w-full py-2 px-2 text-mdgray leading-tight focus:border-ltgray focus:outline-none" required />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 leading-5 text-mdgray">
              Message
            </label>
            <textarea type="text" id="message" name="message" className="h-40 resize-none appearance-none border rounded w-full py-2 px-2 text-mdgray leading-tight focus:border-ltgray focus:outline-none" required></textarea>
          </div>
          <button className="mt-5 bg-primary text-white px-6 py-2 rounded">Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;

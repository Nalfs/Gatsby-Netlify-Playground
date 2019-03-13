import React from 'react'
import './styles.css';

const Contact = () => (
    <form
    className="contact-form"
    name="contact-form"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    data-netlify-recaptcha="true"
    >
    <input hidden className="hidden" name="bot-field" />
    <div className="field half first">
    <label htmlFor="name">Name</label>
    <input type="text" name="name" id="name" />
    </div>

    <div className="field half">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
    </div>
    
    <div className="field">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="6"></textarea>
    </div>

    <div data-netlify-recaptcha="true"></div>
    <button type="submit">Send</button>
</form>
)

export default Contact
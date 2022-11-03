import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <main className="container">
      <div className="form-container">
        <header>
          <h1>Contact Me</h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </header>
        <form>
          <fieldset>
            <div class="row">
              <div class="form-group">
                <label for="first_name">First name </label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="Enter your first name"
                />
              </div>
              <div class="form-group">
                <label for="last_name">Last name</label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="yourname@email.com"
              />
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                placeholder="Send me a message and I'll reply as soon as possible..."
              />
            </div>

            <div class="form-group">
              <input type="checkbox" />
              <label for="checkbox">
                You agree to providing your data to Alvin who may contact you.
              </label>
            </div>
          </fieldset>
          <button type="submit" id="btn__submit">
            Send message
          </button>
        </form>
      </div>
    </main>
  );
}

export default Contact;

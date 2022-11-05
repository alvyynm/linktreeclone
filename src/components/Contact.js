import React from "react";
import "./Contact.css";

function Contact({ name }) {
  function onFormSubmit(e) {
    e.preventDefault();
    const firstName = document.querySelector("#first_name");
    const fname = document.querySelector(".fname");

    const lastName = document.querySelector("#last_name");
    const lname = document.querySelector(".lname");

    const email = document.querySelector("#email");
    const ewarning = document.querySelector(".email");

    const textarea = document.querySelector("#message");
    const textareaWarning = document.querySelector(".textarea");

    if (!firstName.value) {
      fname.classList.remove("hidden");
    }
    if (!lastName.value) {
      lname.classList.remove("hidden");
    }
    if (!email.value) {
      ewarning.classList.remove("hidden");
    }
    if (!textarea.value) {
      textareaWarning.classList.remove("hidden");
    }
  }

  return (
    <main className="container">
      <div className="form-container">
        <header>
          <h1>Contact Me</h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </header>
        <form onSubmit={onFormSubmit}>
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
                <small class="warningtext hidden fname">
                  Please enter your first name
                </small>
              </div>
              <div class="form-group">
                <label for="last_name">Last name</label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Enter your last name"
                />
                <small class="warningtext hidden lname">
                  Please enter your last name
                </small>
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
              <small class="warningtext hidden email">
                Please enter a valid email
              </small>
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                placeholder="Send me a message and I'll reply as soon as possible..."
              />
              <small class="warningtext hidden textarea">
                Please enter a message
              </small>
            </div>

            <div class="form-group unique">
              <input type="checkbox" />
              <label for="checkbox">
                You agree to providing your data to {name} who may contact you.
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

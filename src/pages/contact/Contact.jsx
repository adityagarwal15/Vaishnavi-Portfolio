import React, { useRef } from "react";
import Transition from "../../components/transition/Transition";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import "./contact.css";
import MagneticButton from "../../components/magneticbutton/MagneticButton";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "your_service_id",      // <-- Replace with your actual Service ID
      "your_template_id",     // <-- Replace with your actual Template ID
      form.current,
      "your_public_key"       // <-- Replace with your actual Public Key
    ).then(
      (result) => {
        console.log(result.text);
        toast.success("Message sent successfully! ✅");
      },
      (error) => {
        console.error(error.text);
        toast.error("Oops! Failed to send the message. ❌");
      }
    );

    e.target.reset();
  };

  return (
    <div className="contact page">
      <div className="container">
        <section className="contact-hero">
          <div className="contact-row">
            <div className="contact-col"></div>
            <div className="contact-col">
              <h1>
                Feel free to write me a message <span>or let's be social!</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="section contact-form">
          <div className="contact-row">
            <div className="contact-col">
              <p><span>Contact</span></p>
            </div>
            <div className="contact-col">
              <form ref={form} onSubmit={sendEmail}>
                <div className="input">
                  <input type="text" name="user_name" placeholder="Name" required />
                </div>
                <div className="input">
                  <textarea name="message" placeholder="Message" rows={6} required />
                </div>
                <div className="input">
                  <input type="email" name="user_email" placeholder="Email" required />
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Newsletter Section (Static for now) */}
        <section className="contact-subscribe">
          <div className="contact-row">
            <div className="contact-col">
              <p><span>Newsletter</span></p>
            </div>
            <div className="contact-col">
              <h3>
                Subscribe to my newsletter to get insights & advice on digital design
              </h3>
              <p>
                Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,
                ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Fuga, nobis.
              </p>

              <div className="input">
                <input type="text" placeholder="Email" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="contact-socials">
          <div className="contact-row">
            <div className="contact-col">
              <p><span>Socials</span></p>
            </div>
            <div className="contact-col">
              <div className="contact-social-link">
                <p><a href="#">Instagram</a></p>
              </div>
              <div className="contact-social-link">
                <p><a href="#">Twitter</a></p>
              </div>
              <div className="contact-social-link">
                <p><a href="#">LinkedIn</a></p>
              </div>
            </div>
          </div>
        </section>

        <MagneticButton />
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default Transition(Contact);

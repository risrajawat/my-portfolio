import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qercezl", "template_qwunjzq", form.current, {
        publicKey: "bi7m7dwB03nteB_hm",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("Message is sent to Rishabh");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-cyan">{success}</p>
      <form
        action="#"
        className="flex flex-col gap-4 border-none"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          name="from_name"
          type="text"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2 border-none"
          value={name}
          onChange={handleName}
        />
        <input
          name="from_email"
          type="text"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2 border-none"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          type="text"
          placeholder="Message"
          rows={9}
          cols={50}
          required
          className="rounded-lg bg-lightBrown p-2 border-none"
          value={message}
          onChange={handleMessage}
        ></textarea>
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500 cursor-pointer"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

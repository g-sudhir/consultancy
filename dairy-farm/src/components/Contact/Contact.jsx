import styled from "./Contact.module.css";
import axios from "axios";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any of the  fields are empty
    const requiredFields = ["name", "email", "phone", "subject", "description"];
    const emptyFields = requiredFields.filter((field) => !formData[field].trim());

    if (emptyFields.length > 0) {
      alert(`Please fill in the following fields: ${emptyFields.join(", ")}`);
      return;
    }
    
    // Email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Phone number validation using regular expression
    const phoneRegex = /^\d{10}$/; // This assumes a 10-digit phone number
    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/contact`,
        formData
      );
      console.log(response.data);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", subject: "", description: "" });
    } catch (err) {
      console.error(err.response.data.message);
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <div id={styled.contact_section}>
    <h1 className={styled.contact_title}>CONTACT US</h1>
    <form onSubmit={handleSubmit} className={styled.form}>
      <div className={styled.field}>
        <label htmlFor="name" className={styled.labels}>
          NAME
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          
        />
      </div>

      <div className={styled.field}>
        <label htmlFor="email" className={styled.labels}>
          EMAIL
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          
        />
      </div>

      <div className={styled.field}>
        <label htmlFor="phone" className={styled.labels}>
          PHONE
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          
        />
      </div>

      <div className={styled.field}>
        <label htmlFor="subject" className={styled.labels}>
          SUBJECT
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={styled.subject}
          
        />
      </div>

      <div className={styled.field}>
        <label htmlFor="description" className={styled.labels}>
          DESCRIPTION
        </label>
        <textarea
          id="description"
          rows="4"
          name="description"
          onChange={handleChange}
          value={formData.description}
          
        ></textarea>
      </div>

      <button type="submit">SUBMIT</button>
    </form>
  </div>
  );
};

export default Contact;



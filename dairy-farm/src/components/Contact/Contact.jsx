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
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/contact`,
        formData
      );
      console.log(response.data);
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        description: "",
      });
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
            required
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
            required
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
            required
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
            required
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
            required
          ></textarea>
        </div>

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Contact;

import styled from './Contact.module.css';

import React, { useRef } from 'react';

const Contact = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const subjectRef = useRef(null);
  const descriptionRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const subject = subjectRef.current.value;
    const description = descriptionRef.current.value;

    // Do something with the form data, like sending it to a server
    console.log({
      name,
      email,
      phone,
      subject,
      description,
    });

    // Clear the form fields
    nameRef.current.value = '';
    emailRef.current.value = '';
    phoneRef.current.value = '';
    subjectRef.current.value = '';
    descriptionRef.current.value = '';
  };

  return (
    <div id={styled.contact_section}>
    <h1 className={styled.contact_title}>CONTACT US</h1>
    <form onSubmit={handleSubmit} className={styled.form}>
      <div className={styled.field}>
        <label htmlFor="name" className={styled.labels}>NAME</label>
        <input type="text"  id="name" ref={nameRef} required />
      </div>

      <div className={styled.field}>
        <label htmlFor="email" className={styled.labels} >EMAIL</label>
        <input type="email" id="email" ref={emailRef} required />
      </div>

      <div className={styled.field}>
        <label htmlFor="phone" className={styled.labels}>PHONE</label>
        <input type="tel" id="phone" ref={phoneRef} required />
      </div>

      <div className={styled.field}>
        <label htmlFor="subject" className={styled.labels}>SUBJECT</label>
        <input type="text" id="subject" ref={subjectRef}  className={styled.subject} required />
      </div>

      <div className={styled.field}>
        <label htmlFor="description" className={styled.labels}>DESCRIPTION</label>
        <textarea id="description" rows="4" ref={descriptionRef} required></textarea>
      </div>

      <button type="submit">SUBMIT</button>
    </form>
</div>
  );
};

export default Contact;
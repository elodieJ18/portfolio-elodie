import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className='form-contact' ref={form} onSubmit={sendEmail}>
      <div className='form-email-name'>
        <label htmlFor="name"></label>
        <input type="text" name="user_name" placeholder='name'/>
        <div className='form-email'>
        <label htmlFor="email"></label>
        <input type="email" name="user_email" placeholder='email' />
        </div>
      </div>
      <label htmlFor="message"></label>
      <textarea name="message" placeholder='message'/>
      <div className='input-submit'>
        <input type="submit" value="ENVOYER" />
      </div>
    </form>
  );
};

export default Form;
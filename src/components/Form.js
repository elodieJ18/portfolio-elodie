import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Form = () => {
  const form = useRef();
  const [formSubmit, setFormSubmit] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_0xo0fcl",  "template_3835hq3", form.current, "Wj0MhcHc-6ouc5IGS")
      .then((result) => {
          console.log(result.text);
          setFormSubmit(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      {formSubmit ? (
        <>
        <div>
        <form className='form-contact' ref={form} onSubmit={sendEmail}>
          <div className='form-email-name'>
            <div className='form-name'>
            <label htmlFor="name"></label>
            <input type="text" name="user_name" placeholder='Nom'/>
            </div>
            <div className='form-email'>
            <label htmlFor="email"></label>
            <input type="email" name="user_email" placeholder='Email' />
            </div>
          </div>
          <label htmlFor="message"></label>
          <textarea name="message" placeholder='Message'/>
          <div className='input-submit'>
            <input type="submit" value="ENVOYER" />
          </div>
        </form>
        <div className="other-way-login">
          <p className="sucess">Votre message a bien été enregistré !</p>
        </div>
        </div>
        </>
      ): (
      <form className='form-contact' ref={form} onSubmit={sendEmail}>
          <div className='form-email-name'>
            <div className='form-name'>
            <label htmlFor="name"></label>
            <input type="text" name="user_name" placeholder='Nom'/>
            </div>
            <div className='form-email'>
            <label htmlFor="email"></label>
            <input type="email" name="user_email" placeholder='Email' />
            </div>
          </div>
          <label htmlFor="message"></label>
          <textarea name="message" placeholder='Message'/>
          <div className='input-submit'>
            <input type="submit" value="ENVOYER" />
          </div>
        </form>
        )}
        
    </div>
  );
};

export default Form;
import React from 'react';
import './form.css';

function FormComponent() {
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const recipientEmail = event.target.recipient.value;
    const serviceID = 'your_service_id'; 
    const templateID = 'your_template_id';

    try {
      await emailjs.send(serviceID, templateID, { recipient: recipientEmail });
      alert('Email sent successfully to ' + recipientEmail);
    } catch (error) {
      console.error('An error occurred while sending the email:', error);
    }
  };

  return (
    <form id="form" onSubmit={handleFormSubmit}>
      <div className="field">
        <label htmlFor="recipient">
          <b>SIGN UP FOR OUR DAILY INSIDER:</b>
        </label>
        <input type="email" name="recipient" id="recipient" required />
      </div>
      <input type="submit" id="button" value="Subscribe" />
    </form>
  );
}

export default FormComponent;

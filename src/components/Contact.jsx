import React from 'react';
import { CONTACT } from '../constants';
import EmailLink from './ui/email';

const Contact = () => {
  return (
    <section className="border-b border-neutral-900 py-16 text-center">
      <h2 className="text-4xl font-bold text-center">Get in Touch</h2>
      <div className="my-4 mx-auto h-1 w-16 bg-blue-600 rounded-full" />

      <div className="text-neutral leading-relaxed">
        <p className="my-2">{CONTACT.address}</p>
        <p className="my-2">{CONTACT.phoneNo}</p>
        <EmailLink email={CONTACT.email} />
      </div>
    </section>
  );
};

export default Contact;

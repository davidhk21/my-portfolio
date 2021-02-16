import React, { useState } from 'react';

import dynamic from 'next/dynamic';

import ContactIntro from '../components/contact_components/contact_intro';
// import ContactForm from '../components/contact_components/contact_form';
// import Confirmation from '../components/contact_components/confirmation';

const ContactForm = dynamic(() => import('../components/contact_components/contact_form'), { ssr: false });
const Confirmation = dynamic(() => import('../components/contact_components/confirmation'), { ssr: false });

export default function ContactMe() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <ContactIntro />
      <ContactForm setModal={setModal} />
      {modal ? <Confirmation setModal={setModal} /> : null}
    </div>
  );
}

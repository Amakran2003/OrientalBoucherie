import React from 'react';

const ContactMap: React.FC = () => {
  return (
    <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-md">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.6414736553425!2d2.0692771761614224!3d47.223597071157315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fadbda403219b7%3A0x57c15e550e61184c!2sBOUCHERIE%20L&#39;ORIENTAL(%20CHEZ%20AZIZ)!5e0!3m2!1sen!2sfr!4v1745347961658!5m2!1sen!2sfr" 
        className="w-full h-full border-0" 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps - Boucherie L'Oriental"
      ></iframe>
    </div>
  );
};

export default ContactMap;
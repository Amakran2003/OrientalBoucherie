import React from 'react';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <ul className="space-y-4">
        <li className="flex items-start space-x-3">
          <MapPin className="text-primary-600 mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium">Adresse</p>
            <p className="text-gray-600 dark:text-gray-300">
              BOUCHERIE L'ORIENTAL (CHEZ AZIZ)<br />
              Vierzon, France
            </p>
            <a 
              href="https://www.google.com/maps/place/BOUCHERIE+L'ORIENTAL(+CHEZ+AZIZ)/@47.2235971,2.0692772,17z/data=!4m15!1m8!3m7!1s0x47fadbda403219b7:0x57c15e550e61184c!2sBOUCHERIE+L'ORIENTAL(+CHEZ+AZIZ)!8m2!3d47.2235971!4d2.0718521!10e1!16s%2Fg%2F11c5wqdvrk!3m5!1s0x47fadbda403219b7:0x57c15e550e61184c!8m2!3d47.2235971!4d2.0718521!16s%2Fg%2F11c5wqdvrk?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:underline inline-flex items-center text-sm mt-1"
            >
              <span>Ouvrir dans Google Maps</span>
              <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        </li>

        <li className="flex items-start space-x-3">
          <Phone className="text-primary-600 mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium">Téléphone</p>
            <a 
              href="tel:0248517778" 
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            >
              02 48 51 77 78
            </a>
          </div>
        </li>

        <li className="flex items-start space-x-3">
          <Mail className="text-primary-600 mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium">Email</p>
            <a 
              href="mailto:contact@loriental.com" 
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            >
              contact@loriental.com
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
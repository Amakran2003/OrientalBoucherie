import React from 'react';
import { Clock } from 'lucide-react';

// Define the type for business hours
interface BusinessHour {
  day: string;
  hours: string;
  closed?: boolean; // Make closed property optional
}

// Updated business hours based on the information provided
const businessHours: BusinessHour[] = [
  { day: 'Lundi', hours: '08:30 - 12:00 | 15:00 - 19:00' },
  { day: 'Mardi', hours: '08:30 - 12:30 | 15:00 - 19:30' },
  { day: 'Mercredi', hours: '08:30 - 13:00 | 15:00 - 19:30' },
  { day: 'Jeudi', hours: '08:30 - 13:00 | 15:00 - 19:30' },
  { day: 'Vendredi', hours: '08:30 - 13:00 | 15:00 - 19:30' },
  { day: 'Samedi', hours: '08:30 - 13:00 | 15:00 - 19:30' },
  { day: 'Dimanche', hours: '08:30 - 12:00' },
];

const ContactHours: React.FC = () => {
  // Get the current day to highlight it
  const today = new Date().getDay(); // 0 is Sunday in JavaScript
  const daysMap: Record<string, number> = {
    'Lundi': 1,
    'Mardi': 2,
    'Mercredi': 3,
    'Jeudi': 4,
    'Vendredi': 5,
    'Samedi': 6,
    'Dimanche': 0
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <Clock size={24} className="text-primary-600 mr-2" />
        <h3 className="text-xl font-medium">Horaires d'ouverture</h3>
      </div>
      
      <ul className="space-y-3">
        {businessHours.map((item) => (
          <li 
            key={item.day} 
            className={`flex justify-between items-center ${today === daysMap[item.day] ? 'font-semibold text-primary-600 dark:text-primary-400' : ''}`}
          >
            <span>{item.day}</span>
            {item.closed ? (
              <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-sm font-medium">
                {item.hours}
              </span>
            ) : (
              <span>{item.hours}</span>
            )}
          </li>
        ))}
      </ul>
      
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300">
        <p>Nous sommes à votre service pour toutes vos commandes spéciales et préparations sur mesure.</p>
        <p className="mt-2 italic">* Ces horaires ne prennent pas en compte les périodes spéciales (vacances, jours fériés, etc).</p>
      </div>
    </div>
  );
};

export default ContactHours;
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

// Sample testimonials data - this could be moved to a data file later
const testimonials = [
  {
    id: 1,
    name: 'Marie Dupont',
    text: 'Excellente boucherie halal avec un service exceptionnel. La viande est toujours fraîche et de qualité supérieure. Je recommande particulièrement leur agneau qui est vraiment succulent.',
    rating: 5,
    date: '15 mars 2025',
  },
  {
    id: 2,
    name: 'Thomas Laurent',
    text: 'Je suis client depuis des années et je n\'ai jamais été déçu. Le boucher prend le temps de me conseiller et la qualité des produits est constante. Les préparations pour barbecue sont à essayer absolument!',
    rating: 5,
    date: '28 février 2025',
  },
  {
    id: 3,
    name: 'Ahmed Bensaïd',
    text: 'Meilleure boucherie halal de Vierzon. Produits frais, personnel sympathique et prix raisonnables. Je viens de loin spécialement pour leurs merguez maison.',
    rating: 5,
    date: '10 avril 2025',
  },
  {
    id: 4,
    name: 'Sophie Martin',
    text: 'Première visite sur recommandation d\'un ami et je ne regrette pas. La qualité est au rendez-vous et j\'ai apprécié les conseils de préparation. Je reviendrai!',
    rating: 4,
    date: '5 avril 2025',
  },
];

const TestimonialsSection: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Render stars based on rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        fill={index < rating ? "#FFD700" : "transparent"}
        stroke={index < rating ? "#FFD700" : "#D1D5DB"}
        className={index < rating ? "text-yellow-500" : "text-gray-300"}
      />
    ));
  };

  return (
    <section className="py-16 bg-white dark:bg-secondary-950">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que nos clients disent</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez les avis de nos clients fidèles qui nous font confiance pour leurs achats de viande de qualité.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              variants={itemVariants}
              className="bg-secondary-50 dark:bg-secondary-900 p-6 rounded-lg shadow-md flex flex-col"
            >
              <div className="flex mb-3">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">
                "{testimonial.text}"
              </p>
              
              <div className="mt-auto">
                <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.date}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
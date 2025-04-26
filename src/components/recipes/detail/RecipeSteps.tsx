import React from 'react';
import { PortableText } from '@portabletext/react';
import { urlFor } from '../../../lib/sanity';
import { portableTextComponents } from '../../recipes/PortableTextComponents';

interface Step {
  title: string;
  description?: string | any[];
  image?: { _ref: string };
}

interface RecipeStepsProps {
  steps: Step[];
  colSpan: 'lg:col-span-2' | 'lg:col-span-3';
}

const RecipeSteps: React.FC<RecipeStepsProps> = ({ steps, colSpan }) => {
  if (!steps || steps.length === 0) {
    return null;
  }

  // Function to render description based on its type
  const renderDescription = (description: string | any[] | undefined) => {
    if (!description) return null;
    
    if (typeof description === 'string') {
      return <div className="ml-8 text-gray-700 dark:text-gray-300">{description}</div>;
    }
    
    if (Array.isArray(description)) {
      return (
        <div className="ml-8 text-gray-700 dark:text-gray-300">
          <PortableText value={description} components={portableTextComponents} />
        </div>
      );
    }
    
    return null;
  };

  return (
    <div className={colSpan}>
      <h2 className="text-2xl font-semibold mb-4">Préparation</h2>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="bg-red-700 text-white w-6 h-6 rounded-full flex items-center justify-center mr-2">
                {index + 1}
              </div>
              <h3 className="font-medium text-lg">{step.title}</h3>
            </div>
            {renderDescription(step.description)}
            {step.image && (
              <div className="mt-3 ml-8">
                <img 
                  src={urlFor(step.image).width(600).url()}
                  alt={`Étape ${index + 1}`}
                  className="rounded-md"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSteps;
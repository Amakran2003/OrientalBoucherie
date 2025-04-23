import React from 'react';
import { Link } from 'react-router-dom';

interface RecipeNotFoundProps {
  message?: string;
}

const RecipeNotFound: React.FC<RecipeNotFoundProps> = ({ 
  message = "La recette que vous recherchez n'existe pas."
}) => {
  return (
    <div className="min-h-screen pt-32 pb-20 container-custom">
      <h1 className="text-3xl font-semibold mb-4">Recette introuvable</h1>
      <p>{message}</p>
      <Link to="/recipes" className="text-red-700 hover:underline mt-4 inline-block">
        Retour aux recettes
      </Link>
    </div>
  );
};

export default RecipeNotFound;
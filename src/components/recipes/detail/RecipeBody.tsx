import React from 'react';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '../../recipes/PortableTextComponents';

interface RecipeBodyProps {
  body: any[];
  colSpan: 'lg:col-span-2' | 'lg:col-span-3';
}

const RecipeBody: React.FC<RecipeBodyProps> = ({ body, colSpan }) => {
  if (!body) {
    return null;
  }

  return (
    <div className={colSpan}>
      <h2 className="text-2xl font-semibold mb-4">Préparation</h2>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <PortableText value={body} components={portableTextComponents} />
      </div>
    </div>
  );
};

export default RecipeBody;

import React from 'react';
import { PhotoCategory } from '../types';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: PhotoCategory[];
  activeCategory: PhotoCategory;
  onChange: (category: PhotoCategory) => void;
  className?: string;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  activeCategory, 
  onChange,
  className = ''
}) => {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-full transition-colors",
            activeCategory === category
              ? "bg-black text-white"
              : "bg-gray-100 hover:bg-gray-200 text-gray-800"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;

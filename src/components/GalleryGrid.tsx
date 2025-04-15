
import React from 'react';
import { Link } from 'react-router-dom';
import { GalleryData } from '../types';

interface GalleryGridProps {
  galleries: GalleryData[];
  className?: string;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ galleries, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ${className}`}>
      {galleries.map((gallery) => (
        <Link 
          key={gallery.id} 
          to={`/galeries/${gallery.id}`}
          className="group block"
        >
          <div className="hover-image rounded-md overflow-hidden aspect-[3/2]">
            <img 
              src={gallery.coverImage} 
              alt={gallery.title} 
              className="w-full h-full object-cover"
            />
            <div className="overlay text-white">
              <h3 className="font-serif text-xl">{gallery.title}</h3>
              <p className="text-sm opacity-80">{gallery.photos.length} photos</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GalleryGrid;

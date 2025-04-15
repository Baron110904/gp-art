
import React from 'react';
import { Link } from 'react-router-dom';
import { Photo } from '../types';

interface PhotoGridProps {
  photos: Photo[];
  className?: string;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
      {photos.map((photo) => (
        <Link 
          key={photo.id} 
          to={`/photo/${photo.id}`}
          className="hover-image rounded-md overflow-hidden aspect-[4/3] block"
        >
          <img 
            src={photo.imageUrl} 
            alt={photo.title} 
            className="w-full h-full object-cover"
          />
          <div className="overlay text-white">
            <h3 className="font-serif text-lg">{photo.title}</h3>
            <p className="text-sm opacity-80">{photo.category}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PhotoGrid;

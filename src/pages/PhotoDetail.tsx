
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { photos } from '@/data/photos';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PhotoDetail = () => {
  const { photoId } = useParams<{ photoId: string }>();
  const photo = photoId ? photos.find(p => p.id === photoId) : undefined;

  if (!photo) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-medium mb-4">Photo introuvable</h2>
            <p className="mb-6">La photo que vous recherchez n'existe pas ou a été supprimée.</p>
            <Button asChild>
              <Link to="/galeries">Retourner aux galeries</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Content */}
      <main className="pt-24 pb-16 px-4 flex-grow">
        <div className="container mx-auto max-w-6xl">
          <Link to="/galeries" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux galeries
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src={photo.imageUrl} 
                alt={photo.title} 
                className="w-full h-auto"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h1 className="font-serif text-3xl font-medium mb-2">{photo.title}</h1>
                <p className="text-gray-600">{photo.description}</p>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Catégorie:</span>
                    <span className="font-medium">{photo.category}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium">
                      {new Date(photo.dateCreated).toLocaleDateString('fr-FR')}
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-4">
                <Button asChild className="w-full rounded-full">
                  <Link to="/contact">
                    Demander un tirage
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PhotoDetail;

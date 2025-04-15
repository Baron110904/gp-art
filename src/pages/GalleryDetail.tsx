
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getGalleryById } from '@/data/photos';
import PhotoGrid from '@/components/PhotoGrid';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GalleryDetail = () => {
  const { galleryId } = useParams<{ galleryId: string }>();
  const gallery = galleryId ? getGalleryById(galleryId) : undefined;

  if (!gallery) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-medium mb-4">Galerie introuvable</h2>
            <p className="mb-6">La galerie que vous recherchez n'existe pas ou a été supprimée.</p>
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
      
      {/* Header */}
      <header className="pt-32 pb-12 px-4 relative bg-black text-white">
        <div className="absolute inset-0 z-0 opacity-60">
          <img 
            src={gallery.coverImage} 
            alt={gallery.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <Link to="/galeries" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux galeries
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">{gallery.title}</h1>
          <p className="text-lg text-white/80 max-w-3xl">
            {gallery.description}
          </p>
        </div>
      </header>

      {/* Photos Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <PhotoGrid photos={gallery.photos} className="gap-6" />
        </div>
      </section>

      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
};

export default GalleryDetail;


import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { getFeaturedPhotos } from '@/data/photos';
import PhotoGrid from '@/components/PhotoGrid';
import { galleries } from '@/data/photos';
import GalleryGrid from '@/components/GalleryGrid';

const Index = () => {
  const featuredPhotos = getFeaturedPhotos();
  const featuredGalleries = galleries.filter(gallery => gallery.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/5gtXBIt.jpeg" 
            alt="GP Art Photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-white text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl font-semibold mb-4">GP Art</h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-xl mx-auto">
            Capturer les moments précieux et les émotions authentiques à travers l'objectif
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-6">
              <Link to="/galeries">
                Voir les galeries <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 rounded-full px-6">
              <Link to="/contact">
                Me contacter
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <img 
                src="https://imgur.com/zgdvVdH" 
                alt="Photographe" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h2 className="font-serif text-3xl font-medium">À propos de moi</h2>
              <p className="text-gray-700">
                Photographe passionné basé à Abomey-Calavi, je me spécialise dans la photographie de mariage, 
                les portraits et la photographie de nature. Mon approche combine l'authenticité des moments 
                spontanés avec une esthétique soignée et épurée.
              </p>
              <div className="pt-4">
                <Button asChild variant="outline" className="rounded-full">
                  <Link to="/about">
                    En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Photos Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-medium mb-4">Photos en vedette</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez une sélection de mes travaux les plus récents et les plus appréciés
            </p>
          </div>
          
          <PhotoGrid photos={featuredPhotos} />
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/galeries">
                Explorer toutes les photos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Galleries Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-medium mb-4">Galeries en vedette</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explorez mes collections thématiques de photographies
            </p>
          </div>
          
          <GalleryGrid galleries={featuredGalleries} />
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/galeries">
                Voir toutes les galeries <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">Prêt à capturer vos moments?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Que ce soit pour un mariage, un portrait, un événement spécial ou un projet artistique,
            je serais ravi de discuter de votre vision et de créer des images qui vous ressemblent.
          </p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full px-6">
            <Link to="/contact">
              Contactez-moi maintenant <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

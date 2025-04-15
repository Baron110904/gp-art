
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getPhotosByCategory, galleries } from '@/data/photos';
import CategoryFilter from '@/components/CategoryFilter';
import PhotoGrid from '@/components/PhotoGrid';
import GalleryGrid from '@/components/GalleryGrid';
import { PhotoCategory } from '@/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Galeries = () => {
  const categories: PhotoCategory[] = ['Tous', 'Mariages', 'Portraits', 'Nature', 'Événements', 'Art'];
  const [activeCategory, setActiveCategory] = useState<PhotoCategory>('Tous');
  const [viewMode, setViewMode] = useState<'photos' | 'galleries'>('galleries');
  
  const filteredPhotos = getPhotosByCategory(activeCategory);
  const filteredGalleries = activeCategory === 'Tous' 
    ? galleries 
    : galleries.filter(gallery => gallery.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <header className="pt-32 pb-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">Galeries</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Explorez mes collections thématiques ou parcourez l'ensemble de mes photographies
          </p>
        </div>
      </header>

      {/* View Toggle and Filters */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <Tabs 
              defaultValue="galleries" 
              className="w-full md:w-auto"
              onValueChange={(value) => setViewMode(value as 'photos' | 'galleries')}
            >
              <TabsList className="grid w-full md:w-auto grid-cols-2">
                <TabsTrigger value="galleries">Par galeries</TabsTrigger>
                <TabsTrigger value="photos">Toutes les photos</TabsTrigger>
              </TabsList>
            </Tabs>
            <CategoryFilter 
              categories={categories} 
              activeCategory={activeCategory}
              onChange={setActiveCategory}
            />
          </div>
          
          {/* Content */}
          {viewMode === 'galleries' ? (
            <GalleryGrid galleries={filteredGalleries} />
          ) : (
            <PhotoGrid photos={filteredPhotos} />
          )}
        </div>
      </section>

      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
};

export default Galeries;

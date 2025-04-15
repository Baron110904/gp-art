
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PhotoCategory } from '@/types';
import { useToast } from '@/components/ui/use-toast';
import { X } from 'lucide-react';

const Admin = () => {
  const { toast } = useToast();
  const [image, setImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [photoData, setPhotoData] = useState({
    title: '',
    description: '',
    category: '' as PhotoCategory,
  });

  // Simule le téléchargement d'une image
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    
    // Simuler un délai de téléchargement
    setTimeout(() => {
      // En réalité, nous utiliserions un service de stockage comme Supabase ou AWS S3
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setUploading(false);
    }, 1500);
  };

  const removeImage = () => {
    setImage(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!image) {
      toast({
        title: "Erreur",
        description: "Veuillez télécharger une image.",
        variant: "destructive"
      });
      return;
    }

    if (!photoData.title || !photoData.category) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }
    
    // En réalité, nous enverrions les données à une API
    toast({
      title: "Succès",
      description: "La photo a été ajoutée à votre galerie.",
    });

    // Réinitialiser le formulaire
    setPhotoData({
      title: '',
      description: '',
      category: '' as PhotoCategory,
    });
    setImage(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <header className="pt-32 pb-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h1 className="font-serif text-4xl font-medium mb-4">Admin</h1>
          <p className="text-lg text-gray-600">
            Gérez votre contenu et ajoutez de nouvelles photos à vos galeries
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-12 px-4 flex-grow">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <nav className="space-y-1">
                  <a 
                    href="#"
                    className="block px-3 py-2 rounded-md bg-gray-100 font-medium text-gray-900"
                  >
                    Photos
                  </a>
                  <a 
                    href="#"
                    className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Galeries
                  </a>
                  <a 
                    href="#"
                    className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Paramètres
                  </a>
                </nav>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-4">
              {/* Upload Form */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="font-serif text-2xl mb-6">Ajouter une nouvelle photo</h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    {/* Image Upload */}
                    <div>
                      <Label htmlFor="image">Image</Label>
                      <div className="mt-2">
                        {image ? (
                          <div className="relative">
                            <img 
                              src={image} 
                              alt="Aperçu" 
                              className="max-h-80 rounded-md object-contain bg-gray-50"
                            />
                            <button
                              type="button"
                              onClick={removeImage}
                              className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        ) : (
                          <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                            <Input
                              id="image"
                              type="file"
                              accept="image/*"
                              onChange={handleImageChange}
                              disabled={uploading}
                              className="hidden"
                            />
                            <Label 
                              htmlFor="image" 
                              className="cursor-pointer flex flex-col items-center justify-center py-4"
                            >
                              <div className="text-gray-500">
                                {uploading ? (
                                  "Téléchargement en cours..."
                                ) : (
                                  <>
                                    <span className="block">Cliquez pour télécharger une image</span>
                                    <span className="block text-sm mt-1">JPG, PNG, WEBP jusqu'à 10MB</span>
                                  </>
                                )}
                              </div>
                            </Label>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <div>
                      <Label htmlFor="title">Titre *</Label>
                      <Input
                        id="title"
                        value={photoData.title}
                        onChange={(e) => setPhotoData({...photoData, title: e.target.value})}
                        className="mt-1"
                        required
                      />
                    </div>
                    
                    {/* Description */}
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={photoData.description}
                        onChange={(e) => setPhotoData({...photoData, description: e.target.value})}
                        className="mt-1"
                        rows={4}
                      />
                    </div>
                    
                    {/* Category */}
                    <div>
                      <Label htmlFor="category">Catégorie *</Label>
                      <Select 
                        value={photoData.category}
                        onValueChange={(value) => setPhotoData({...photoData, category: value as PhotoCategory})}
                        required
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Sélectionner une catégorie" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Mariages">Mariages</SelectItem>
                          <SelectItem value="Portraits">Portraits</SelectItem>
                          <SelectItem value="Nature">Nature</SelectItem>
                          <SelectItem value="Événements">Événements</SelectItem>
                          <SelectItem value="Art">Art</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={uploading}
                    >
                      {uploading ? "Téléchargement..." : "Ajouter la photo"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admin;


import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Dans une vraie implémentation, nous enverrions les données du formulaire à un backend
    
    toast({
      title: "Message envoyé !",
      description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
    });
    
    // Reset form
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <header className="pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4 text-center">Contact</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            N'hésitez pas à me contacter pour discuter de votre projet ou pour toute information
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-12 px-4 flex-grow">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="font-serif text-2xl mb-6">Envoyez-moi un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="votre.email@exemple.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Sujet de votre message"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Votre message..."
                      rows={6}
                      required
                    />
                  </div>
                </div>
                
                <Button type="submit" className="w-full rounded-full">
                  Envoyer
                </Button>
              </form>
            </div>
            
            {/* Info */}
            <div>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h2 className="font-serif text-2xl mb-6">Informations de contact</h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-medium text-black">Email</h3>
                    <p>gprecieux8@gmail.com</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-black">Téléphone</h3>
                    <p>+229 0167821860</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-black">Studio</h3>
                    <p>GODOMEY TOGOUDO</p>
                    <p>Abomey-Calavi</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="font-serif text-2xl mb-6">Horaires</h2>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi:</span>
                    <span>Sur rendez-vous</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi:</span>
                    <span>Sur rendez-vous</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche:</span>
                    <span>Sur rendez-vous</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-gray-600 text-sm">
                    Pour les séances photo et autres prestations, les horaires sont flexibles et 
                    adaptés à chaque projet. N'hésitez pas à me contacter pour discuter de vos 
                    besoins spécifiques.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map placeholder */}
          <div className="mt-12 rounded-lg overflow-hidden h-80">
            <iframe
              src="https://maps.app.goo.gl/yuWNGzm3EpfMWKU56"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full h-full">
            </iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

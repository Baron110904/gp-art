
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sophie et Thomas',
      text: 'GP Art a capturé notre mariage avec une sensibilité exceptionnelle. Les photos racontent parfaitement l\'histoire de notre journée, avec tous les moments d\'émotion saisis naturellement.',
      type: 'Mariage'
    },
    {
      id: 2,
      name: 'Julie M.',
      text: 'La séance photo en famille était très détendue et agréable. Les portraits sont magnifiques et naturels, exactement ce que nous recherchions !',
      type: 'Portraits de famille'
    },
    {
      id: 3,
      name: 'Entreprise XYZ',
      text: 'Un vrai professionnel qui a su capturer l\'essence de notre événement d\'entreprise. La qualité des images et sa discrétion ont été très appréciées.',
      type: 'Événement d\'entreprise'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <header className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6 text-center">À propos</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Sidebar */}
            <div className="md:w-1/3 space-y-8 sticky top-24">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="GP Art - Photographe" 
                className="w-full rounded-lg shadow-lg"
              />
              
              <div>
                <h3 className="font-serif text-2xl mb-4">Contact</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Email: gprecieux8@gmail.com</p>
                  <p>Téléphone: +229 0167821860</p>
                  <p>Studio: GODOMEY TOGOUDO, Abomey-Calavi</p>
                </div>
                
                <div className="mt-6">
                  <Button asChild className="w-full rounded-full">
                    <Link to="/contact">
                      Me contacter
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="md:w-2/3 space-y-10">
              <div>
                <h2 className="font-serif text-3xl mb-4">Mon histoire</h2>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    Bonjour je suis le photographe derrière GP ART VISUAL. Ma passion pour la Photographie a  
                    commencé il y a trois ans lorsque j’ai reçu mon premier appareil photo. Depuis cette passion 
                    s’est transformé en une véritable vocation.
                  </p>
                  <p className="mb-4">
                    Après une formation en arts visuels et deux années d’expérience auprès de photographe,
                    j’ai crée GP ART VISUEL pour partager ma vision et offrir un service photographique 
                    personnalisé et authentique.
                  </p>
                  <p>
                    Basé à Abomey-Calavi, je me déplace partout au Bénin et à l’international pour vos projets. 
                    Ma philosophie est simple: créer des images intemporelles qui racontent une histoire 
                    et capture l’essence des moments précieux de votre vie.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="font-serif text-3xl mb-4">Mon approche</h2>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    Je privilégie une approche à la fois documentaire et artistique. Mon style se caractérise 
                    par des images lumineuses, des compositions équilibrées et une attention particulière aux 
                    détails et aux émotions.
                  </p>
                  <p>
                    Pour chaque projet, je m'adapte aux besoins spécifiques de mes clients tout en gardant 
                    ma signature visuelle. Je crois fermement que la meilleure façon de créer des images 
                    authentiques est d'établir une relation de confiance avec les personnes que je photographie.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="font-serif text-3xl mb-4">Équipement</h2>
                <div className="prose max-w-none text-gray-700">
                  <p>
                    Je travaille avec du matériel professionnel de qualité pour assurer la réussite de votre projet. 
                    Mon expertise technique combinée à la vision artistique me permet de m’adapter à toutes les 
                    conditions de prise de vue.
                  </p>
                </div>
              </div>
              
              {/* Testimonials */}
              <div>
                <h2 className="font-serif text-3xl mb-6">Ce qu'en disent mes clients</h2>
                <div className="grid gap-6">
                  {testimonials.map(testimonial => (
                    <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg">
                      <p className="italic mb-4">{testimonial.text}</p>
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* CTA */}
              <div className="bg-gray-100 p-8 rounded-lg text-center">
                <h3 className="font-serif text-2xl mb-3">Prêt à travailler ensemble ?</h3>
                <p className="text-gray-700 mb-6">
                  Je serais ravi de discuter de votre projet et de voir comment je peux vous aider à créer 
                  des souvenirs visuels exceptionnels.
                </p>
                <Button asChild className="rounded-full">
                  <Link to="/contact">
                    Réserver une séance <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
};

export default About;

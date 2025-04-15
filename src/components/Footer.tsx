
import React from 'react';
import { Instagram, Facebook, MessageCircle, Music } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { id: 'instagram', Icon: Instagram, url: 'https://instagram.com/gp-art', label: 'Instagram' },
    { id: 'facebook', Icon: Facebook, url: 'https://facebook.com/gp-art', label: 'Facebook' },
    { id: 'tiktok', Icon: Music, url: 'https://tiktok.com/@gp-art', label: 'TikTok' },
    { id: 'whatsapp', Icon: MessageCircle, url: 'https://wa.me/33600000000', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Short Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif">GP Art</h3>
            <p className="text-gray-300 text-sm max-w-xs">
              Capturer les moments précieux et les émotions authentiques à travers mon objectif.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-medium mb-4">Liens</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
              <a href="/" className="hover:text-white transition-colors">Accueil</a>
              <a href="/galeries" className="hover:text-white transition-colors">Galeries</a>
              <a href="/about" className="hover:text-white transition-colors">À propos</a>
              <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-medium mb-4">Suivez-moi</h4>
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <a 
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="social-icon"
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} GP Art. Tous droits réservés.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-200 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-gray-200 transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

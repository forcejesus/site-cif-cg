import React from 'react';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-cifcg-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-heading font-semibold text-gold-400 mb-6">À propos</h3>
            <p className="text-gray-300 mb-6">
              La Communauté Ivoirienne de France en Côte-d'Or est une association culturelle et sociale qui réunit les Ivoiriens et amis de la Côte d'Ivoire.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cifcg-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cifcg-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cifcg-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-semibold text-gold-400 mb-6">Liens rapides</h3>
            <ul className="space-y-3">
              {['À propos', 'Actualités', 'Événements', 'Adhésion', 'Faire un don', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-heading font-semibold text-gold-400 mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold-400 mr-3 mt-1" />
                <span className="text-gray-300">
                  Maison des Associations<br />
                  2 Rue des Corroyeurs<br />
                  21000 Dijon, France
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold-400 mr-3" />
                <a href="tel:+33380000000" className="text-gray-300 hover:text-white transition-colors">
                  +33 3 80 00 00 00
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold-400 mr-3" />
                <a href="mailto:contact@cif-cg.org" className="text-gray-300 hover:text-white transition-colors">
                  contact@cif-cg.org
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-heading font-semibold text-gold-400 mb-6">Infolettre</h3>
            <p className="text-gray-300 mb-4">
              Inscrivez-vous pour recevoir nos dernières actualités et événements.
            </p>
            <div className="space-y-3">
              <div className="relative">
                <Input 
                  type="email" 
                  placeholder="Votre email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-gold-400 pr-12"
                />
                <Button 
                  className="absolute right-0 top-0 h-full px-3 bg-transparent hover:bg-transparent text-gold-400"
                  aria-label="S'inscrire"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-xs text-gray-400">
                En vous inscrivant, vous acceptez notre politique de confidentialité.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CIF-CG. Tous droits réservés.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Conditions d'utilisation
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cifcg-950 text-white pt-20">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="/" className="inline-block font-display text-2xl font-bold">
              <span className="text-cifcg-500">CIF</span>-CG
            </a>
            <p className="text-gray-400">
              Convergence et Initiative Francophone au Congo œuvre pour la promotion de la francophonie et le développement des initiatives locales.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-cifcg-900 hover:bg-cifcg-800 transition-colors p-2 rounded-full">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-cifcg-900 hover:bg-cifcg-800 transition-colors p-2 rounded-full">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-cifcg-900 hover:bg-cifcg-800 transition-colors p-2 rounded-full">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-cifcg-900 hover:bg-cifcg-800 transition-colors p-2 rounded-full">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Liens Rapides</h3>
            <ul className="space-y-4">
              <li>
                <a href="/a-propos" className="text-gray-400 hover:text-white transition-colors">À Propos</a>
              </li>
              <li>
                <a href="/actualites" className="text-gray-400 hover:text-white transition-colors">Actualités</a>
              </li>
              <li>
                <a href="/evenements" className="text-gray-400 hover:text-white transition-colors">Événements</a>
              </li>
              <li>
                <a href="/adhesion" className="text-gray-400 hover:text-white transition-colors">Adhésion</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-cifcg-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  123 Avenue de la Francophonie, Brazzaville, République du Congo
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-cifcg-500 flex-shrink-0" />
                <span className="text-gray-400">+242 06 123 45 67</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-cifcg-500 flex-shrink-0" />
                <span className="text-gray-400">contact@cif-cg.org</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Inscrivez-vous pour recevoir nos dernières actualités et événements.
            </p>
            <form className="space-y-4">
              <div className="flex flex-col space-y-4">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="input-field bg-cifcg-900 border-cifcg-800 text-white placeholder-gray-500 focus:border-cifcg-500"
                  required
                />
                <button 
                  type="submit" 
                  className="py-3 px-4 bg-cifcg-600 hover:bg-cifcg-700 text-white rounded-md font-medium transition-colors"
                >
                  S'inscrire
                </button>
              </div>
              <p className="text-gray-500 text-sm">
                En vous inscrivant, vous acceptez notre politique de confidentialité.
              </p>
            </form>
          </div>
        </div>

        <div className="border-t border-cifcg-800 py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CIF-CG. Tous droits réservés.
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-400 transition-colors">Politique de confidentialité</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-400 transition-colors">Mentions légales</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-400 transition-colors">Plan du site</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

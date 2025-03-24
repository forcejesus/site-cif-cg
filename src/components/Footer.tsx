
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone, Info } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleLinkClick = (item: string) => {
    toast({
      title: "🚧 Page en cours de développement",
      description: `La page "${item}" est actuellement en développement et sera disponible prochainement.`,
      variant: "default",
      duration: 3000,
    });
  };

  return (
    <footer className="bg-cifcg-950 text-white pt-20">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <span className="inline-block font-display text-2xl font-bold">
              <span className="text-cifcg-500">CIF</span>-CG
            </span>
            <p className="text-gray-400">
              Convergence et Initiative Francophone au Congo œuvre pour la promotion de la francophonie et le développement des initiatives locales.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleLinkClick("Facebook")} 
                className="bg-cifcg-900 hover:bg-cifcg-800 transition-colors p-2 rounded-full"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleLinkClick("Twitter")} 
                className="bg-cifcg-900 hover:bg-cifcg-800 transition-colors p-2 rounded-full"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleLinkClick("Instagram")} 
                className="bg-cifcg-900 hover:bg-cifcg-800 transition-colors p-2 rounded-full"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleLinkClick("Youtube")} 
                className="bg-cifcg-900 hover:bg-cifcg-800 transition-colors p-2 rounded-full"
              >
                <Youtube className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Liens Rapides</h3>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => handleLinkClick("À Propos")} 
                  className="text-gray-400 hover:text-white transition-colors text-left flex items-center gap-1 group"
                >
                  <span className="opacity-0 -ml-5 mr-1 group-hover:opacity-100 transition-opacity">
                    <Info className="w-3.5 h-3.5 text-cifcg-500" />
                  </span>
                  À Propos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick("Actualités")} 
                  className="text-gray-400 hover:text-white transition-colors text-left flex items-center gap-1 group"
                >
                  <span className="opacity-0 -ml-5 mr-1 group-hover:opacity-100 transition-opacity">
                    <Info className="w-3.5 h-3.5 text-cifcg-500" />
                  </span>
                  Actualités
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick("Événements")} 
                  className="text-gray-400 hover:text-white transition-colors text-left flex items-center gap-1 group"
                >
                  <span className="opacity-0 -ml-5 mr-1 group-hover:opacity-100 transition-opacity">
                    <Info className="w-3.5 h-3.5 text-cifcg-500" />
                  </span>
                  Événements
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick("Adhésion")} 
                  className="text-gray-400 hover:text-white transition-colors text-left flex items-center gap-1 group"
                >
                  <span className="opacity-0 -ml-5 mr-1 group-hover:opacity-100 transition-opacity">
                    <Info className="w-3.5 h-3.5 text-cifcg-500" />
                  </span>
                  Adhésion
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick("Contact")} 
                  className="text-gray-400 hover:text-white transition-colors text-left flex items-center gap-1 group"
                >
                  <span className="opacity-0 -ml-5 mr-1 group-hover:opacity-100 transition-opacity">
                    <Info className="w-3.5 h-3.5 text-cifcg-500" />
                  </span>
                  Contact
                </button>
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
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleLinkClick("Newsletter"); }}>
              <div className="flex flex-col space-y-4">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="input-field bg-cifcg-900 border-cifcg-800 text-white placeholder-gray-500 focus:border-cifcg-500"
                  required
                />
                <button 
                  type="submit" 
                  className="py-3 px-4 bg-cifcg-600 hover:bg-cifcg-700 text-white rounded-md font-medium transition-colors flex items-center justify-center gap-2"
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
            <button className="hover:text-gray-400 transition-colors" onClick={() => handleLinkClick("Politique de confidentialité")}>
              Politique de confidentialité
            </button>
            <span>•</span>
            <button className="hover:text-gray-400 transition-colors" onClick={() => handleLinkClick("Mentions légales")}>
              Mentions légales
            </button>
            <span>•</span>
            <button className="hover:text-gray-400 transition-colors" onClick={() => handleLinkClick("Plan du site")}>
              Plan du site
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="text-center my-12">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Contactez-nous</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pour toute question ou information concernant la Convergence et Initiative Francophone au Congo, n'hésitez pas à nous contacter.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-cifcg-800">Nos coordonnées</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-cifcg-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-lg">Adresse</h3>
                    <p className="text-gray-600 mt-1">
                      14 Avenue de la Paix<br />
                      Quartier Bacongo<br />
                      Brazzaville, République du Congo
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-cifcg-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-lg">Téléphone</h3>
                    <p className="text-gray-600 mt-1">+242 06 123 45 67</p>
                    <p className="text-gray-600">+242 05 987 65 43</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-cifcg-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-lg">Email</h3>
                    <p className="text-gray-600 mt-1">contact@cifcg.org</p>
                    <p className="text-gray-600">info@cifcg.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-cifcg-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-lg">Heures d'ouverture</h3>
                    <p className="text-gray-600 mt-1">Lundi - Vendredi: 8h00 - 17h00</p>
                    <p className="text-gray-600">Samedi: 9h00 - 12h00</p>
                    <p className="text-gray-600">Dimanche: Fermé</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Globe className="h-6 w-6 text-cifcg-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-lg">Présence nationale</h3>
                    <p className="text-gray-600 mt-1">
                      <strong>Congo-Brazzaville</strong><br />
                      Nous sommes présents dans plusieurs villes du Congo: Brazzaville, Pointe-Noire, Dolisie, et Ouesso.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-cifcg-800">Envoyez-nous un message</h2>
              
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700">Nom</label>
                    <input 
                      type="text" 
                      id="nom" 
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-cifcg-600 focus:ring-cifcg-600 outline-none transition" 
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">Prénom</label>
                    <input 
                      type="text" 
                      id="prenom" 
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-cifcg-600 focus:ring-cifcg-600 outline-none transition" 
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-cifcg-600 focus:ring-cifcg-600 outline-none transition" 
                    placeholder="Votre adresse email"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">Téléphone</label>
                  <input 
                    type="tel" 
                    id="telephone" 
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-cifcg-600 focus:ring-cifcg-600 outline-none transition" 
                    placeholder="Votre numéro de téléphone"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <Textarea 
                    id="message" 
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-cifcg-600 focus:ring-cifcg-600 outline-none transition min-h-[120px]" 
                    placeholder="Votre message"
                  />
                </div>
                
                <Button className="w-full bg-cifcg-600 hover:bg-cifcg-700">
                  Envoyer le message
                </Button>
              </form>
            </div>
          </div>
          
          {/* Map */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-cifcg-800">Notre localisation</h2>
            <div className="w-full h-96 bg-gray-200 rounded-xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <p className="text-gray-500">Carte de localisation à Brazzaville, Congo</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;

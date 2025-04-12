
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Globe, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { submitContactForm } from '@/services/formService';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nom || !formData.prenom || !formData.email || !formData.telephone || !formData.message) {
      toast({
        title: "Formulaire incomplet",
        description: "Veuillez remplir tous les champs du formulaire.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      await submitContactForm(formData);
      
      toast({
        title: "Message envoyé",
        description: "Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.",
      });
      
      // Réinitialiser le formulaire
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        message: ''
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire de contact:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer plus tard.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Banner */}
      <div className="relative pt-20">
        <div className="absolute inset-0 bg-cifcg-900 bg-opacity-80 z-10" />
        <div 
          className="relative z-0 h-[300px] md:h-[400px] bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1541280910158-c4e14f9c94a3?q=80&w=2069&auto=format&fit=crop')",
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              Contactez-nous
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90">
              Pour toute question ou information concernant la Convergence et Initiative Francophone au Congo
            </p>
          </div>
        </div>
      </div>
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
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
              
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700">Nom</label>
                    <input 
                      type="text" 
                      id="nom" 
                      value={formData.nom}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-cifcg-600 focus:ring-cifcg-600 outline-none transition" 
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">Prénom</label>
                    <input 
                      type="text" 
                      id="prenom" 
                      value={formData.prenom}
                      onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-cifcg-600 focus:ring-cifcg-600 outline-none transition" 
                    placeholder="Votre adresse email"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">Téléphone</label>
                  <input 
                    type="tel" 
                    id="telephone" 
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-cifcg-600 focus:ring-cifcg-600 outline-none transition" 
                    placeholder="Votre numéro de téléphone"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <Textarea 
                    id="message" 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-cifcg-600 focus:ring-cifcg-600 outline-none transition min-h-[120px]" 
                    placeholder="Votre message"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-cifcg-600 hover:bg-cifcg-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-5 w-5" />
                      Envoyer le message
                    </span>
                  )}
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

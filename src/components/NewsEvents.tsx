
import React from 'react';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';

const NewsEvents = () => {
  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="section-title">Actualités & Événements</h2>
          <p className="section-subtitle">
            Restez informés des dernières nouvelles et des événements à venir de notre communauté.
          </p>
        </div>

        {/* Latest News */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold text-cifcg-800 mb-8 text-center">Dernières actualités</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                title: "Nomination du nouveau bureau directeur",
                date: "15 mars 2023",
                excerpt: "Suite à l'assemblée générale, nous sommes heureux d'annoncer la composition du nouveau bureau directeur de la CIF-CG."
              },
              {
                image: "https://images.unsplash.com/photo-1607868894064-2b6e7ed1b324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                title: "Partenariat avec l'université de Bourgogne",
                date: "28 février 2023",
                excerpt: "Un nouveau partenariat a été signé pour faciliter les échanges académiques entre étudiants ivoiriens et bourguignons."
              },
              {
                image: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
                title: "Succès de notre campagne de solidarité",
                date: "10 janvier 2023",
                excerpt: "Grâce à votre générosité, nous avons pu collecter des fonds pour soutenir les projets éducatifs dans les zones rurales de Côte d'Ivoire."
              }
            ].map((news, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-cifcg-500 text-sm mb-2">{news.date}</p>
                  <h4 className="text-xl font-heading font-semibold text-cifcg-800 mb-3">{news.title}</h4>
                  <p className="text-cifcg-600 mb-4">{news.excerpt}</p>
                  <a href="#" className="inline-flex items-center text-cifcg-600 hover:text-cifcg-800 font-medium transition-colors">
                    Lire la suite
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          <h3 className="text-2xl font-heading font-semibold text-cifcg-800 mb-8 text-center">Événements à venir</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Fête de l'indépendance de la Côte d'Ivoire",
                date: "7 août 2023",
                time: "14:00 - 22:00",
                location: "Parc de la Colombière, Dijon",
                description: "Célébration de la fête nationale ivoirienne avec de la musique, de la danse, de la cuisine traditionnelle et des activités pour toute la famille."
              },
              {
                title: "Conférence: Opportunités d'affaires entre la Bourgogne et la Côte d'Ivoire",
                date: "15 septembre 2023",
                time: "18:30 - 20:30",
                location: "Chambre de Commerce et d'Industrie, Dijon",
                description: "Présentation des opportunités d'investissement et d'échanges commerciaux entre la région Bourgogne et la Côte d'Ivoire."
              },
              {
                title: "Atelier culinaire: à la découverte de la cuisine ivoirienne",
                date: "8 octobre 2023",
                time: "11:00 - 15:00",
                location: "Maison des Associations, Dijon",
                description: "Apprenez à préparer des plats traditionnels ivoiriens lors de cet atelier culinaire suivi d'une dégustation conviviale."
              },
              {
                title: "Soirée culturelle: contes et musiques d'Afrique de l'Ouest",
                date: "18 novembre 2023",
                time: "19:00 - 22:00",
                location: "Théâtre des Feuillants, Dijon",
                description: "Une soirée immersive dans la culture d'Afrique de l'Ouest à travers des contes traditionnels et des performances musicales."
              }
            ].map((event, index) => (
              <div key={index} className="event-card group">
                <h4 className="text-xl font-heading font-semibold text-cifcg-800 mb-3 group-hover:text-cifcg-600 transition-colors">{event.title}</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-cifcg-600">
                    <Calendar className="h-4 w-4 mr-2 text-cifcg-500" />
                    <span>{event.date}</span>
                  </li>
                  <li className="flex items-center text-cifcg-600">
                    <Clock className="h-4 w-4 mr-2 text-cifcg-500" />
                    <span>{event.time}</span>
                  </li>
                  <li className="flex items-center text-cifcg-600">
                    <MapPin className="h-4 w-4 mr-2 text-cifcg-500" />
                    <span>{event.location}</span>
                  </li>
                </ul>
                <p className="text-cifcg-600 mb-4">{event.description}</p>
                <a 
                  href="#" 
                  className="inline-block px-4 py-2 bg-cifcg-600 text-white text-sm font-medium rounded-md hover:bg-cifcg-700 transition-colors"
                >
                  En savoir plus
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;

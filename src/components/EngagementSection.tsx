
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Users, Globe, Send } from 'lucide-react';

const EngagementSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="section-title">Rejoignez notre communauté</h2>
          <p className="section-subtitle">
            Plusieurs façons de vous engager et de contribuer à notre communauté.
          </p>
        </div>

        {/* Ways to engage */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: <Users className="h-10 w-10 text-cifcg-600" />,
              title: "Devenir membre",
              description: "Rejoignez notre association et participez activement à nos événements et initiatives."
            },
            {
              icon: <Heart className="h-10 w-10 text-cifcg-600" />,
              title: "Faire un don",
              description: "Soutenez nos projets communautaires et nos actions de solidarité en Côte d'Ivoire."
            },
            {
              icon: <Globe className="h-10 w-10 text-cifcg-600" />,
              title: "Devenir bénévole",
              description: "Offrez de votre temps et de vos compétences pour nos événements et actions solidaires."
            },
            {
              icon: <Send className="h-10 w-10 text-cifcg-600" />,
              title: "Proposer un projet",
              description: "Partagez vos idées de projets ou d'initiatives qui correspondent à notre mission."
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-all hover:translate-y-[-5px]"
            >
              <div className="flex justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold text-cifcg-800 mb-4">{item.title}</h3>
              <p className="text-cifcg-600 mb-6">{item.description}</p>
              <Button className="w-full bg-cifcg-50 hover:bg-cifcg-100 text-cifcg-800 border border-cifcg-200">
                En savoir plus
              </Button>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold text-cifcg-800 mb-8 text-center">Témoignages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Rejoindre la CIF-CG a été l'une des meilleures décisions que j'ai prises. J'ai trouvé une seconde famille ici, un soutien inestimable et des opportunités de croissance personnelle et professionnelle.",
                author: "Kouamé Konan",
                role: "Membre depuis 2018",
                image: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              },
              {
                quote: "En tant qu'entrepreneur, le réseau de la CIF-CG m'a ouvert des portes inespérées. Les échanges avec d'autres membres et les formations proposées m'ont permis de développer mon entreprise.",
                author: "Ami Touré",
                role: "Membre depuis 2020",
                image: "https://images.unsplash.com/photo-1530785602389-07594beb8b73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              },
              {
                quote: "La CIF-CG est bien plus qu'une simple association. C'est un espace où nous pouvons célébrer notre culture, partager nos expériences et construire des liens solides avec notre pays d'origine.",
                author: "Pascal Aka",
                role: "Membre depuis 2016",
                image: "https://images.unsplash.com/photo-1508243771214-6e95d137426b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="rounded-full overflow-hidden border-4 border-white h-20 w-20 shadow-md">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="pt-12">
                  <p className="text-cifcg-600 italic mb-6">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-heading font-semibold text-cifcg-800">{testimonial.author}</p>
                    <p className="text-cifcg-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-cifcg-900/90 to-cifcg-900/70 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
              alt="Communauté africaine célébrant ensemble" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="relative z-10 py-16 px-8 md:px-16 text-center">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Prêt à nous rejoindre ?</h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
              Devenez membre de notre communauté et participez à l'aventure humaine et culturelle de la CIF-CG.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button className="bg-white text-cifcg-800 hover:bg-gray-100 px-8 py-6 text-lg h-auto">
                Devenir membre
              </Button>
              <Button className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-6 text-lg h-auto">
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;

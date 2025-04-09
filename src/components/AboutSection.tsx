
import React from 'react';
import { Check } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="section-title">À propos de notre communauté</h2>
          <p className="section-subtitle">
            La Communauté Ivoirienne de France en Côte-d'Or (CIF-CG) rassemble les Ivoiriens et amis de la Côte d'Ivoire autour de valeurs communes.
          </p>
        </div>

        {/* Vision and Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="flex flex-col p-8 rounded-2xl shadow-md bg-white border border-gray-100 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-heading font-semibold text-cifcg-800 mb-4">Notre Vision</h3>
            <p className="text-cifcg-600 mb-6">
              Créer un espace d'échange et de partage où chaque membre peut s'épanouir tout en 
              contribuant à la promotion de la culture ivoirienne et au développement de 
              relations solides entre la Côte d'Ivoire et la France.
            </p>
            <ul className="space-y-3 mt-auto">
              {[
                "Préserver et promouvoir la culture ivoirienne",
                "Favoriser l'intégration et la solidarité",
                "Développer des échanges culturels",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-cifcg-600 h-5 w-5 mr-2 mt-0.5" />
                  <span className="text-cifcg-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col p-8 rounded-2xl shadow-md bg-white border border-gray-100 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-heading font-semibold text-cifcg-800 mb-4">Notre Mission</h3>
            <p className="text-cifcg-600 mb-6">
              Soutenir les membres de notre communauté dans leur parcours en France, tout en 
              cultivant des liens étroits avec notre pays d'origine et en partageant notre 
              riche patrimoine culturel.
            </p>
            <ul className="space-y-3 mt-auto">
              {[
                "Soutenir les projets des membres",
                "Organiser des événements culturels et festifs",
                "Représenter la communauté auprès des institutions",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-cifcg-600 h-5 w-5 mr-2 mt-0.5" />
                  <span className="text-cifcg-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image and Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden h-[500px] shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1488861859915-4b5a5e57649f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Célébration communautaire africaine" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cifcg-950/70 to-transparent flex items-end p-8">
              <blockquote className="text-white max-w-md">
                <p className="text-lg font-body italic mb-4">
                  "La culture est la mémoire d'un peuple, la conscience collective de la continuité historique, le mode de penser et de vivre."
                </p>
                <footer className="font-medium">— Milan Kundera</footer>
              </blockquote>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-heading font-semibold text-cifcg-800 mb-6">Nos Valeurs</h3>
            <div className="grid gap-6">
              {[
                {
                  title: "Solidarité",
                  description: "Nous nous soutenons mutuellement dans les moments de joie comme dans les défis, créant un réseau d'entraide solide."
                },
                {
                  title: "Diversité et Inclusion",
                  description: "Nous célébrons la richesse de nos différences et travaillons à créer un environnement où chacun se sent valorisé."
                },
                {
                  title: "Excellence",
                  description: "Nous encourageons chaque membre à donner le meilleur de lui-même et à exceller dans ses projets personnels et professionnels."
                },
                {
                  title: "Transmission",
                  description: "Nous veillons à transmettre notre héritage culturel aux jeunes générations pour maintenir vivante notre identité."
                }
              ].map((value, index) => (
                <div key={index} className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <h4 className="text-lg font-heading font-semibold text-cifcg-800 mb-2">{value.title}</h4>
                  <p className="text-cifcg-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useInView } from 'react-intersection-observer';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref: missionRef, inView: missionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: historyRef, inView: historyInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: valuesRef, inView: valuesInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: teamRef, inView: teamInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <div className="relative pt-20">
        <div className="absolute inset-0 bg-cifcg-900 bg-opacity-80 z-10" />
        <div 
          className="relative z-0 h-[300px] md:h-[400px] bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop')",
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              À Propos de Nous
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90">
              Découvrez l'histoire, la mission et les valeurs qui animent CIF-CG
            </p>
          </div>
        </div>
      </div>
      
      <main className="py-16 md:py-24">
        {/* Mission Section */}
        <section 
          ref={missionRef}
          className="py-12 md:py-16"
        >
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`transition-all duration-700 ${missionInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-cifcg-100 rounded-lg -z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop" 
                    alt="Notre mission" 
                    className="rounded-lg shadow-xl w-full" 
                  />
                </div>
              </div>
              
              <div className={`transition-all duration-700 delay-300 ${missionInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h2 className="text-3xl font-display font-bold text-cifcg-800 mb-6">
                  Notre Mission
                </h2>
                <p className="text-gray-700 mb-6">
                  CIF-CG a pour mission de promouvoir la langue française et la culture francophone au Congo, tout en soutenant les initiatives locales visant à renforcer les échanges culturels, éducatifs et professionnels dans l'espace francophone.
                </p>
                <p className="text-gray-700 mb-8">
                  Nous travaillons sur trois axes principaux : la promotion de la langue française, le soutien aux initiatives locales et le renforcement de la coopération internationale francophone.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-cifcg-100 rounded-full p-2 mr-4">
                      <svg className="w-5 h-5 text-cifcg-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-cifcg-800">Valorisation culturelle</h4>
                      <p className="text-gray-600">Mettre en valeur la richesse culturelle francophone du Congo et la partager avec le monde.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-cifcg-100 rounded-full p-2 mr-4">
                      <svg className="w-5 h-5 text-cifcg-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-cifcg-800">Développement social</h4>
                      <p className="text-gray-600">Contribuer au développement éducatif et social des communautés locales à travers nos programmes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* History Section */}
        <section 
          ref={historyRef}
          className="py-12 md:py-16 bg-cifcg-50"
        >
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className={`text-3xl font-display font-bold text-cifcg-800 mb-4 transition-all duration-700 ${historyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Notre Histoire
              </h2>
              <p className={`max-w-3xl mx-auto text-gray-700 transition-all duration-700 delay-200 ${historyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Depuis notre création, nous avons travaillé sans relâche pour promouvoir la langue française et soutenir les initiatives locales au Congo.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className={`bg-white rounded-lg shadow-md p-6 transition-all duration-700 ${historyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                <div className="bg-cifcg-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-cifcg-800 font-bold">2015</span>
                </div>
                <h3 className="text-xl font-semibold text-cifcg-800 mb-3">Fondation</h3>
                <p className="text-gray-700">
                  CIF-CG a été fondée par un groupe de passionnés de la culture francophone désireux de promouvoir la langue française au Congo.
                </p>
              </div>
              
              <div className={`bg-white rounded-lg shadow-md p-6 transition-all duration-700 delay-300 ${historyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                <div className="bg-cifcg-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-cifcg-800 font-bold">2018</span>
                </div>
                <h3 className="text-xl font-semibold text-cifcg-800 mb-3">Expansion</h3>
                <p className="text-gray-700">
                  Extension de nos activités à plusieurs villes du Congo et organisation du premier festival culturel francophone.
                </p>
              </div>
              
              <div className={`bg-white rounded-lg shadow-md p-6 transition-all duration-700 delay-500 ${historyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                <div className="bg-cifcg-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-cifcg-800 font-bold">2023</span>
                </div>
                <h3 className="text-xl font-semibold text-cifcg-800 mb-3">Reconnaissance</h3>
                <p className="text-gray-700">
                  Reconnaissance officielle par l'Organisation Internationale de la Francophonie et lancement de nouveaux programmes éducatifs.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section 
          ref={valuesRef}
          className="py-12 md:py-16"
        >
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className={`text-3xl font-display font-bold text-cifcg-800 mb-4 transition-all duration-700 ${valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Nos Valeurs
              </h2>
              <p className={`max-w-3xl mx-auto text-gray-700 transition-all duration-700 delay-200 ${valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Nos actions sont guidées par des valeurs fortes qui définissent notre approche et notre engagement.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className={`transition-all duration-700 ${valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                <div className="bg-cifcg-100 w-16 h-16 rounded-lg flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-cifcg-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-cifcg-800 mb-3">Solidarité</h3>
                <p className="text-gray-700">
                  Nous croyons en la force de la communauté et en l'importance de travailler ensemble pour atteindre des objectifs communs.
                </p>
              </div>
              
              <div className={`transition-all duration-700 delay-200 ${valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                <div className="bg-cifcg-100 w-16 h-16 rounded-lg flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-cifcg-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-cifcg-800 mb-3">Diversité</h3>
                <p className="text-gray-700">
                  Nous valorisons la diversité culturelle et linguistique comme une richesse à préserver et à promouvoir.
                </p>
              </div>
              
              <div className={`transition-all duration-700 delay-300 ${valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                <div className="bg-cifcg-100 w-16 h-16 rounded-lg flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-cifcg-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-cifcg-800 mb-3">Innovation</h3>
                <p className="text-gray-700">
                  Nous encourageons l'innovation et la créativité pour développer des solutions adaptées aux défis locaux.
                </p>
              </div>
              
              <div className={`transition-all duration-700 delay-400 ${valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                <div className="bg-cifcg-100 w-16 h-16 rounded-lg flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-cifcg-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-cifcg-800 mb-3">Engagement</h3>
                <p className="text-gray-700">
                  Nous sommes engagés à long terme dans nos actions pour un impact durable sur les communautés.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section 
          ref={teamRef}
          className="py-12 md:py-16 bg-cifcg-50"
        >
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className={`text-3xl font-display font-bold text-cifcg-800 mb-4 transition-all duration-700 ${teamInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Notre Équipe
              </h2>
              <p className={`max-w-3xl mx-auto text-gray-700 transition-all duration-700 delay-200 ${teamInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Découvrez les personnes passionnées qui font vivre CIF-CG au quotidien et partagent notre vision.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Jean-Pierre Mboso",
                  role: "Président",
                  image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=774&auto=format&fit=crop"
                },
                {
                  name: "Marie Lokana",
                  role: "Directrice des Programmes",
                  image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=774&auto=format&fit=crop"
                },
                {
                  name: "Thomas Okemba",
                  role: "Responsable de la Communication",
                  image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=735&auto=format&fit=crop"
                },
                {
                  name: "Sophie Ndoki",
                  role: "Chargée des Relations Internationales",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=776&auto=format&fit=crop"
                },
                {
                  name: "Paul Makaya",
                  role: "Responsable Financier",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7bf1034?q=80&w=774&auto=format&fit=crop"
                },
                {
                  name: "Claire Mouanda",
                  role: "Coordinatrice des Projets",
                  image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop"
                }
              ].map((member, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-lg overflow-hidden shadow-md transition-all duration-700 ${teamInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-cifcg-800">{member.name}</h3>
                    <p className="text-cifcg-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;

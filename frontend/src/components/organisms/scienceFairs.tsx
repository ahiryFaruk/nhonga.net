import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export const scienceFairs = () => {
  const [showMore, setShowMore] = useState(false);
  
  const fairsList = [
    {
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400',
      category: 'Nacional',
      title: 'FENACIMO 2024',
      description: 'Feira Nacional de Ciências de Moçambique - exposição de projetos científicos.',
      cta: 'Inscrever projeto'
    },
    {
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400',
      category: 'Jovem',
      title: 'Expo Ciência Jovem',
      description: 'Exposição de projetos científicos de estudantes do ensino secundário.',
      cta: 'Participar'
    },
    {
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400',
      category: 'Tecnologia',
      title: 'Feira de Inovação Tech',
      description: 'Mostra de projetos tecnológicos e inovadores desenvolvidos por estudantes.',
      cta: 'Inscrever-se'
    },
    {
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400',
      category: 'Engenharia',
      title: 'Expo Engenharia UEM',
      description: 'Feira de projetos de engenharia da Universidade Eduardo Mondlane.',
      cta: 'Ver projetos'
    }
  ];

  const moreFairs = [
    {
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400',
      category: 'Robótica',
      title: 'Competição de Robótica',
      description: 'Desafio nacional de robótica para estudantes.',
      cta: 'Inscrever equipe'
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      category: 'Ambiente',
      title: 'Feira de Sustentabilidade',
      description: 'Projetos focados em meio ambiente e sustentabilidade.',
      cta: 'Participar'
    },
    {
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400',
      category: 'Saúde',
      title: 'Expo Ciências da Saúde',
      description: 'Feira de projetos na área de saúde e medicina.',
      cta: 'Inscrever projeto'
    },
    {
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400',
      category: 'Matemática',
      title: 'Olimpíadas de Matemática',
      description: 'Competição nacional de matemática para estudantes.',
      cta: 'Inscrever-se'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-nhonga-900 mb-8 font-heading">Feiras e Exposições Científicas</h2>
      <div className="border border-nhonga-200 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-nhonga-200">
          {fairsList.map((fair, index) => (
            <div key={index} className="px-6 first:pl-0 last:pr-0">
              <div className="flex flex-col h-full">
                <img 
                  src={fair.image}
                  alt={fair.title}
                  className="w-full h-20 object-cover mb-4"
                />
                <div className="text-xs text-nhonga-600 mb-2 uppercase tracking-wide font-body">
                  {fair.category}
                </div>
                <h3 className="font-semibold text-nhonga-900 mb-3 text-lg font-heading">
                  {fair.title}
                </h3>
                <p className="text-sm text-nhonga-700 mb-6 leading-relaxed flex-grow font-body">
                  {fair.description}
                </p>
                <div className="mt-auto">
                  <button className="inline-flex items-center text-primary hover:text-nhonga-700 font-medium text-sm transition-colors font-body">
                    {fair.cta}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {showMore && (
          <div className="border-t border-nhonga-200 mt-8 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-nhonga-200">
              {moreFairs.map((fair, index) => (
                <div key={index} className="px-6 first:pl-0 last:pr-0">
                  <div className="flex flex-col h-full">
                    <img 
                      src={fair.image}
                      alt={fair.title}
                      className="w-full h-20 object-cover mb-4"
                    />
                    <div className="text-xs text-nhonga-600 mb-2 uppercase tracking-wide font-body">
                      {fair.category}
                    </div>
                    <h3 className="font-semibold text-nhonga-900 mb-3 text-lg font-heading">
                      {fair.title}
                    </h3>
                    <p className="text-sm text-nhonga-700 mb-6 leading-relaxed flex-grow font-body">
                      {fair.description}
                    </p>
                    <div className="mt-auto">
                      <button className="inline-flex items-center text-primary hover:text-nhonga-700 font-medium text-sm transition-colors font-body">
                        {fair.cta}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="flex justify-center mt-8">
        <button 
          className="text-primary hover:underline font-medium font-body"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Ver menos' : 'Ver mais'}
        </button>
      </div>
    </div>
  );
};

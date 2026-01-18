import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export const researchOpportunities = () => {
  const [showMore, setShowMore] = useState(false);
  
  const researchList = [
    {
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400',
      category: 'Bolsa de Pesquisa',
      title: 'Programa de Pesquisa UEM',
      description: 'Bolsas de pesquisa para estudantes de mestrado e doutoramento em diversas áreas.',
      cta: 'Candidatar-se'
    },
    {
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400',
      category: 'Assistente de Pesquisa',
      title: 'Assistente em Biotecnologia',
      description: 'Posição de assistente de pesquisa em projeto de biotecnologia aplicada.',
      cta: 'Ver detalhes'
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      category: 'Projeto Colaborativo',
      title: 'Pesquisa em Saúde Pública',
      description: 'Projeto colaborativo entre UEM e OMS sobre doenças tropicais.',
      cta: 'Participar'
    },
    {
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400',
      category: 'Publicação',
      title: 'Revista Científica Moçambicana',
      description: 'Oportunidade de publicar artigos científicos em revista indexada.',
      cta: 'Submeter artigo'
    }
  ];

  const moreResearch = [
    {
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400',
      category: 'Bolsa de Pesquisa',
      title: 'Fundação para Ciência',
      description: 'Financiamento para projetos de pesquisa em ciências exatas.',
      cta: 'Candidatar-se'
    },
    {
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400',
      category: 'Assistente de Pesquisa',
      title: 'Laboratório de IA',
      description: 'Assistente de pesquisa em inteligência artificial e machine learning.',
      cta: 'Ver requisitos'
    },
    {
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400',
      category: 'Projeto Colaborativo',
      title: 'Agricultura Sustentável',
      description: 'Pesquisa sobre práticas agrícolas sustentáveis em Moçambique.',
      cta: 'Participar'
    },
    {
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400',
      category: 'Publicação',
      title: 'Conferência Internacional',
      description: 'Submissão de papers para conferência científica internacional.',
      cta: 'Submeter trabalho'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-nhonga-900 mb-8 font-heading">Oportunidades de Pesquisa</h2>
      <div className="border border-nhonga-200 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-nhonga-200">
          {researchList.map((research, index) => (
            <div key={index} className="px-6 first:pl-0 last:pr-0">
              <div className="flex flex-col h-full">
                <img 
                  src={research.image}
                  alt={research.title}
                  className="w-full h-20 object-cover mb-4"
                />
                <div className="text-xs text-nhonga-600 mb-2 uppercase tracking-wide font-body">
                  {research.category}
                </div>
                <h3 className="font-semibold text-nhonga-900 mb-3 text-lg font-heading">
                  {research.title}
                </h3>
                <p className="text-sm text-nhonga-700 mb-6 leading-relaxed flex-grow font-body">
                  {research.description}
                </p>
                <div className="mt-auto">
                  <button className="inline-flex items-center text-primary hover:text-nhonga-700 font-medium text-sm transition-colors font-body">
                    {research.cta}
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
              {moreResearch.map((research, index) => (
                <div key={index} className="px-6 first:pl-0 last:pr-0">
                  <div className="flex flex-col h-full">
                    <img 
                      src={research.image}
                      alt={research.title}
                      className="w-full h-20 object-cover mb-4"
                    />
                    <div className="text-xs text-nhonga-600 mb-2 uppercase tracking-wide font-body">
                      {research.category}
                    </div>
                    <h3 className="font-semibold text-nhonga-900 mb-3 text-lg font-heading">
                      {research.title}
                    </h3>
                    <p className="text-sm text-nhonga-700 mb-6 leading-relaxed flex-grow font-body">
                      {research.description}
                    </p>
                    <div className="mt-auto">
                      <button className="inline-flex items-center text-primary hover:text-nhonga-700 font-medium text-sm transition-colors font-body">
                        {research.cta}
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

import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export const internships = () => {
  const [showMore, setShowMore] = useState(false);
  
  const internshipsList = [
    {
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
      category: 'Internacional',
      title: 'Estágio Banco Mundial',
      description: 'Programa de estágio internacional para estudantes moçambicanos.',
      cta: 'Candidatar-se'
    },
    {
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400',
      category: 'ONU',
      title: 'Estágio ONU Moçambique',
      description: 'Oportunidades de estágio nas agências da ONU em Maputo.',
      cta: 'Ver detalhes'
    },
    {
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400',
      category: 'Tecnologia',
      title: 'Estágio em TI - Vodacom',
      description: 'Programa de estágio em tecnologia da informação.',
      cta: 'Candidatar-se'
    },
    {
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400',
      category: 'Finanças',
      title: 'Estágio Millennium BIM',
      description: 'Estágio em instituição financeira líder em Moçambique.',
      cta: 'Inscrever-se'
    }
  ];

  const moreInternships = [
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
      category: 'Engenharia',
      title: 'Estágio ENH',
      description: 'Estágio em engenharia na Empresa Nacional de Hidrocarbonetos.',
      cta: 'Candidatar-se'
    },
    {
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400',
      category: 'Saúde',
      title: 'Estágio Hospital Central',
      description: 'Programa de estágio para estudantes de medicina.',
      cta: 'Ver detalhes'
    },
    {
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400',
      category: 'Marketing',
      title: 'Estágio Mcel',
      description: 'Estágio em marketing e comunicação.',
      cta: 'Candidatar-se'
    },
    {
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400',
      category: 'Advocacia',
      title: 'Estágio Jurídico',
      description: 'Estágio em escritório de advocacia em Maputo.',
      cta: 'Inscrever-se'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-nhonga-900 mb-8 font-heading">Estágios</h2>
      <div className="border border-nhonga-200 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-nhonga-200">
          {internshipsList.map((internship, index) => (
            <div key={index} className="px-6 first:pl-0 last:pr-0">
              <div className="flex flex-col h-full">
                <img 
                  src={internship.image}
                  alt={internship.title}
                  className="w-full h-20 object-cover mb-4"
                />
                <div className="text-xs text-nhonga-600 mb-2 uppercase tracking-wide font-body">
                  {internship.category}
                </div>
                <h3 className="font-semibold text-nhonga-900 mb-3 text-lg font-heading">
                  {internship.title}
                </h3>
                <p className="text-sm text-nhonga-700 mb-6 leading-relaxed flex-grow font-body">
                  {internship.description}
                </p>
                <div className="mt-auto">
                  <button className="inline-flex items-center text-primary hover:text-nhonga-700 font-medium text-sm transition-colors font-body">
                    {internship.cta}
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
              {moreInternships.map((internship, index) => (
                <div key={index} className="px-6 first:pl-0 last:pr-0">
                  <div className="flex flex-col h-full">
                    <img 
                      src={internship.image}
                      alt={internship.title}
                      className="w-full h-20 object-cover mb-4"
                    />
                    <div className="text-xs text-nhonga-600 mb-2 uppercase tracking-wide font-body">
                      {internship.category}
                    </div>
                    <h3 className="font-semibold text-nhonga-900 mb-3 text-lg font-heading">
                      {internship.title}
                    </h3>
                    <p className="text-sm text-nhonga-700 mb-6 leading-relaxed flex-grow font-body">
                      {internship.description}
                    </p>
                    <div className="mt-auto">
                      <button className="inline-flex items-center text-primary hover:text-nhonga-700 font-medium text-sm transition-colors font-body">
                        {internship.cta}
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

import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export const universityApplications = () => {
  const [showMore, setShowMore] = useState(false);
  
  const applicationsList = [
    {
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400',
      category: 'Universidade Pública',
      title: 'Candidaturas UEM 2024',
      description: 'Abertura de candidaturas para cursos de graduação na Universidade Eduardo Mondlane.',
      cta: 'Candidatar-se'
    },
    {
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400',
      category: 'Instituto Superior',
      title: 'Admissão ISRI',
      description: 'Processo de admissão no Instituto Superior de Relações Internacionais.',
      cta: 'Ver requisitos'
    },
    {
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400',
      category: 'Universidade Pública',
      title: 'UP - Universidade Pedagógica',
      description: 'Candidaturas abertas para cursos de licenciatura em educação.',
      cta: 'Candidatar-se'
    },
    {
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400',
      category: 'Universidade Privada',
      title: 'ISPU - Politécnico',
      description: 'Inscrições para cursos técnicos e de engenharia.',
      cta: 'Inscrever-se'
    }
  ];

  const moreApplications = [
    {
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400',
      category: 'Instituto Superior',
      title: 'ISCTEM',
      description: 'Instituto Superior de Ciências e Tecnologia de Moçambique.',
      cta: 'Candidatar-se'
    },
    {
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400',
      category: 'Universidade Pública',
      title: 'UniLúrio',
      description: 'Universidade Lúrio - campus em Nampula e Pemba.',
      cta: 'Ver cursos'
    },
    {
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400',
      category: 'Universidade Privada',
      title: 'UCM - Católica',
      description: 'Universidade Católica de Moçambique.',
      cta: 'Candidatar-se'
    },
    {
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400',
      category: 'Instituto Superior',
      title: 'ISUTC',
      description: 'Instituto Superior de Transportes e Comunicações.',
      cta: 'Inscrever-se'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-nhonga-900 mb-8 font-heading">Candidaturas para Faculdades</h2>
      <div className="border border-nhonga-200 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-nhonga-200">
          {applicationsList.map((app, index) => (
            <div key={index} className="px-6 first:pl-0 last:pr-0">
              <div className="flex flex-col h-full">
                <img 
                  src={app.image}
                  alt={app.title}
                  className="w-full h-20 object-cover mb-4"
                />
                <div className="text-xs text-nhonga-600 mb-2 uppercase tracking-wide font-body">
                  {app.category}
                </div>
                <h3 className="font-semibold text-nhonga-900 mb-3 text-lg font-heading">
                  {app.title}
                </h3>
                <p className="text-sm text-nhonga-700 mb-6 leading-relaxed flex-grow font-body">
                  {app.description}
                </p>
                <div className="mt-auto">
                  <button className="inline-flex items-center text-primary hover:text-nhonga-700 font-medium text-sm transition-colors font-body">
                    {app.cta}
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
              {moreApplications.map((app, index) => (
                <div key={index} className="px-6 first:pl-0 last:pr-0">
                  <div className="flex flex-col h-full">
                    <img 
                      src={app.image}
                      alt={app.title}
                      className="w-full h-20 object-cover mb-4"
                    />
                    <div className="text-xs text-nhonga-600 mb-2 uppercase tracking-wide font-body">
                      {app.category}
                    </div>
                    <h3 className="font-semibold text-nhonga-900 mb-3 text-lg font-heading">
                      {app.title}
                    </h3>
                    <p className="text-sm text-nhonga-700 mb-6 leading-relaxed flex-grow font-body">
                      {app.description}
                    </p>
                    <div className="mt-auto">
                      <button className="inline-flex items-center text-primary hover:text-nhonga-700 font-medium text-sm transition-colors font-body">
                        {app.cta}
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

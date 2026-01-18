import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export const academicEvents = () => {
  const [showMore, setShowMore] = useState(false);
  
  const eventsList = [
    {
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400',
      category: 'Candidatura',
      title: 'Candidaturas UEM 2024',
      description: 'Abertura de candidaturas para cursos de graduação na Universidade Eduardo Mondlane.',
      cta: 'Candidatar-se'
    },
    {
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400',
      category: 'Feira de Ciências',
      title: 'FENACIMO 2024',
      description: 'Feira Nacional de Ciências de Moçambique - exposição de projetos científicos.',
      cta: 'Inscrever projeto'
    },
    {
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400',
      category: 'Palestra',
      title: 'Inovação e Tecnologia',
      description: 'Palestra sobre tendências tecnológicas e oportunidades de carreira.',
      cta: 'Reservar lugar'
    },
    {
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400',
      category: 'Candidatura',
      title: 'Admissão ISRI',
      description: 'Processo de admissão no Instituto Superior de Relações Internacionais.',
      cta: 'Ver requisitos'
    }
  ];

  const moreEvents = [
    {
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400',
      category: 'Feira de Ciências',
      title: 'Expo Ciência Jovem',
      description: 'Exposição de projetos científicos de estudantes do ensino secundário.',
      cta: 'Participar'
    },
    {
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400',
      category: 'Palestra',
      title: 'Empreendedorismo Académico',
      description: 'Como transformar ideias académicas em negócios de sucesso.',
      cta: 'Inscrever-se'
    },
    {
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400',
      category: 'Candidatura',
      title: 'UP - Universidade Pedagógica',
      description: 'Candidaturas abertas para cursos de licenciatura em educação.',
      cta: 'Candidatar-se'
    },
    {
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400',
      category: 'Palestra',
      title: 'Inteligência Artificial',
      description: 'O futuro da IA e suas aplicações em Moçambique.',
      cta: 'Reservar lugar'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-nhonga-900 mb-8 font-heading">Eventos e Candidaturas</h2>
      <div className="border border-nhonga-200 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-nhonga-200">
          {eventsList.map((event, index) => (
            <div key={index} className="px-6 first:pl-0 last:pr-0">
              <div className="flex flex-col h-full">
                <img 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-20 object-cover mb-4"
                />
                <div className="text-xs text-nhonga-600 mb-2 uppercase tracking-wide font-body">
                  {event.category}
                </div>
                <h3 className="font-semibold text-nhonga-900 mb-3 text-lg font-heading">
                  {event.title}
                </h3>
                <p className="text-sm text-nhonga-700 mb-6 leading-relaxed flex-grow font-body">
                  {event.description}
                </p>
                <div className="mt-auto">
                  <button className="inline-flex items-center text-primary hover:text-nhonga-700 font-medium text-sm transition-colors font-body">
                    {event.cta}
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
              {moreEvents.map((event, index) => (
                <div key={index} className="px-6 first:pl-0 last:pr-0">
                  <div className="flex flex-col h-full">
                    <img 
                      src={event.image}
                      alt={event.title}
                      className="w-full h-20 object-cover mb-4"
                    />
                    <div className="text-xs text-nhonga-600 mb-2 uppercase tracking-wide font-body">
                      {event.category}
                    </div>
                    <h3 className="font-semibold text-nhonga-900 mb-3 text-lg font-heading">
                      {event.title}
                    </h3>
                    <p className="text-sm text-nhonga-700 mb-6 leading-relaxed flex-grow font-body">
                      {event.description}
                    </p>
                    <div className="mt-auto">
                      <button className="inline-flex items-center text-primary hover:text-nhonga-700 font-medium text-sm transition-colors font-body">
                        {event.cta}
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

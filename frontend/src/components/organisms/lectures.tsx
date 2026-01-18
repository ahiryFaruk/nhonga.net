import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export const lectures = () => {
  const [showMore, setShowMore] = useState(false);
  
  const lecturesList = [
    {
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400',
      category: 'Tecnologia',
      title: 'Inovação e Tecnologia',
      description: 'Palestra sobre tendências tecnológicas e oportunidades de carreira.',
      cta: 'Reservar lugar'
    },
    {
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400',
      category: 'Empreendedorismo',
      title: 'Empreendedorismo Académico',
      description: 'Como transformar ideias académicas em negócios de sucesso.',
      cta: 'Inscrever-se'
    },
    {
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400',
      category: 'IA',
      title: 'Inteligência Artificial',
      description: 'O futuro da IA e suas aplicações em Moçambique.',
      cta: 'Reservar lugar'
    },
    {
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400',
      category: 'Carreira',
      title: 'Desenvolvimento de Carreira',
      description: 'Estratégias para construir uma carreira de sucesso.',
      cta: 'Participar'
    }
  ];

  const moreLectures = [
    {
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400',
      category: 'Saúde',
      title: 'Saúde Mental Estudantil',
      description: 'Importância da saúde mental na vida académica.',
      cta: 'Inscrever-se'
    },
    {
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400',
      category: 'Liderança',
      title: 'Liderança Jovem',
      description: 'Desenvolvendo habilidades de liderança desde cedo.',
      cta: 'Reservar lugar'
    },
    {
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
      category: 'Sustentabilidade',
      title: 'Desenvolvimento Sustentável',
      description: 'O papel da juventude no desenvolvimento sustentável.',
      cta: 'Participar'
    },
    {
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400',
      category: 'Inovação',
      title: 'Inovação Social',
      description: 'Como criar impacto social através da inovação.',
      cta: 'Inscrever-se'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-nhonga-900 mb-8 font-heading">Palestras e Seminários</h2>
      <div className="border border-nhonga-200 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-nhonga-200">
          {lecturesList.map((lecture, index) => (
            <div key={index} className="px-6 first:pl-0 last:pr-0">
              <div className="flex flex-col h-full">
                <img 
                  src={lecture.image}
                  alt={lecture.title}
                  className="w-full h-20 object-cover mb-4"
                />
                <div className="text-xs text-nhonga-600 mb-2 uppercase tracking-wide font-body">
                  {lecture.category}
                </div>
                <h3 className="font-semibold text-nhonga-900 mb-3 text-lg font-heading">
                  {lecture.title}
                </h3>
                <p className="text-sm text-nhonga-700 mb-6 leading-relaxed flex-grow font-body">
                  {lecture.description}
                </p>
                <div className="mt-auto">
                  <button className="inline-flex items-center text-primary hover:text-nhonga-700 font-medium text-sm transition-colors font-body">
                    {lecture.cta}
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
              {moreLectures.map((lecture, index) => (
                <div key={index} className="px-6 first:pl-0 last:pr-0">
                  <div className="flex flex-col h-full">
                    <img 
                      src={lecture.image}
                      alt={lecture.title}
                      className="w-full h-20 object-cover mb-4"
                    />
                    <div className="text-xs text-nhonga-600 mb-2 uppercase tracking-wide font-body">
                      {lecture.category}
                    </div>
                    <h3 className="font-semibold text-nhonga-900 mb-3 text-lg font-heading">
                      {lecture.title}
                    </h3>
                    <p className="text-sm text-nhonga-700 mb-6 leading-relaxed flex-grow font-body">
                      {lecture.description}
                    </p>
                    <div className="mt-auto">
                      <button className="inline-flex items-center text-primary hover:text-nhonga-700 font-medium text-sm transition-colors font-body">
                        {lecture.cta}
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

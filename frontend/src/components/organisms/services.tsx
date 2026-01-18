import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export const services = () => {
  const [showMore, setShowMore] = useState(false);
  
  const servicesList = [
    {
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400',
      category: 'Electricidade',
      title: 'Electricista',
      description: 'Instalações elétricas, reparações e manutenção em residências e empresas.',
      cta: 'Ver profissionais'
    },
    {
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400',
      category: 'Limpeza',
      title: 'Limpeza Doméstica',
      description: 'Serviços de limpeza profissional para casas, apartamentos e escritórios.',
      cta: 'Contratar'
    },
    {
      image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400',
      category: 'Canalização',
      title: 'Canalizador',
      description: 'Reparação de fugas, instalação de sistemas e manutenção hidráulica.',
      cta: 'Explorar'
    },
    {
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      category: 'Educação',
      title: 'Aulas Particulares',
      description: 'Professores qualificados para reforço escolar e preparação para exames.',
      cta: 'Ver tutores'
    }
  ];

  const moreServices = [
    {
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400',
      category: 'Jardinagem',
      title: 'Jardineiro',
      description: 'Manutenção de jardins, poda de árvores e paisagismo profissional.',
      cta: 'Ver profissionais'
    },
    {
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400',
      category: 'Pintura',
      title: 'Pintor',
      description: 'Pintura de interiores e exteriores com acabamento de qualidade.',
      cta: 'Contratar'
    },
    {
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400',
      category: 'Carpintaria',
      title: 'Carpinteiro',
      description: 'Móveis sob medida, reparações e trabalhos em madeira personalizados.',
      cta: 'Explorar'
    },
    {
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
      category: 'Transporte',
      title: 'Motorista Particular',
      description: 'Serviços de transporte seguro e confiável para qualquer destino.',
      cta: 'Ver motoristas'
    },
    {
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400',
      category: 'Segurança',
      title: 'Guarda de Segurança',
      description: 'Proteção profissional para residências, empresas e eventos.',
      cta: 'Contratar'
    },
    {
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400',
      category: 'Tecnologia',
      title: 'Técnico de Informática',
      description: 'Reparação de computadores, instalação de software e suporte técnico.',
      cta: 'Ver técnicos'
    },
    {
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400',
      category: 'Cozinha',
      title: 'Chef Particular',
      description: 'Serviços de culinária profissional para eventos e refeições diárias.',
      cta: 'Explorar'
    },
    {
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400',
      category: 'Cuidados',
      title: 'Cuidador de Idosos',
      description: 'Cuidados profissionais e compassivos para pessoas idosas.',
      cta: 'Ver cuidadores'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-nhonga-900 mb-8 font-heading">Serviços Mais Procurados</h2>
      <div className="border border-nhonga-200 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-nhonga-200">
          {servicesList.map((service, index) => (
            <div key={index} className="px-6 first:pl-0 last:pr-0">
              <div className="flex flex-col h-full">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-20 object-cover mb-4 rounded"
                />
                <div className="text-xs text-nhonga-600 mb-2 uppercase tracking-wide font-body">
                  {service.category}
                </div>
                <h3 className="font-semibold text-nhonga-900 mb-3 text-lg font-heading">
                  {service.title}
                </h3>
                <p className="text-sm text-nhonga-700 mb-6 leading-relaxed flex-grow font-body">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <button className="inline-flex items-center text-primary hover:text-nhonga-700 font-medium text-sm transition-colors font-body">
                    {service.cta}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {showMore && (
          <>
            <div className="border-t border-nhonga-200 mt-8 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-nhonga-200">
                {moreServices.slice(0, 4).map((service, index) => (
                  <div key={index} className="px-6 first:pl-0 last:pr-0">
                    <div className="flex flex-col h-full">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-20 object-cover mb-4 rounded"
                      />
                      <div className="text-xs text-nhonga-600 mb-2 uppercase tracking-wide font-body">
                        {service.category}
                      </div>
                      <h3 className="font-semibold text-nhonga-900 mb-3 text-lg font-heading">
                        {service.title}
                      </h3>
                      <p className="text-sm text-nhonga-700 mb-6 leading-relaxed flex-grow font-body">
                        {service.description}
                      </p>
                      <div className="mt-auto">
                        <button className="inline-flex items-center text-primary hover:text-nhonga-700 font-medium text-sm transition-colors font-body">
                          {service.cta}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-nhonga-200 mt-8 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-nhonga-200">
                {moreServices.slice(4, 8).map((service, index) => (
                  <div key={index} className="px-6 first:pl-0 last:pr-0">
                    <div className="flex flex-col h-full">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-20 object-cover mb-4 rounded"
                      />
                      <div className="text-xs text-nhonga-600 mb-2 uppercase tracking-wide font-body">
                        {service.category}
                      </div>
                      <h3 className="font-semibold text-nhonga-900 mb-3 text-lg font-heading">
                        {service.title}
                      </h3>
                      <p className="text-sm text-nhonga-700 mb-6 leading-relaxed flex-grow font-body">
                        {service.description}
                      </p>
                      <div className="mt-auto">
                        <button className="inline-flex items-center text-primary hover:text-nhonga-700 font-medium text-sm transition-colors font-body">
                          {service.cta}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
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

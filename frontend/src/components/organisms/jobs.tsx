import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export const jobs = () => {
  const [showMore, setShowMore] = useState(false);
  
  const jobsList = [
    {
      image: 'https://posenfermagemdevalor.com.br/wp-content/uploads/2023/08/front-view-doctor-wearing-protective-wear-hospital_Easy-Resize.com_.jpg',
      category: 'Saúde',
      title: 'Enfermeiro',
      description: 'Alta demanda em hospitais públicos e privados em todo Moçambique.',
      cta: 'Ver vagas'
    },
    {
      image: 'https://mapa-da-obra-producao.s3.amazonaws.com/wp-content/uploads/2024/05/Conheca-seis-especializacoes-para-pedreiros.-scaled.jpg',
      category: 'Construção',
      title: 'Pedreiro',
      description: 'Crescimento do setor imobiliário cria oportunidades em todas as províncias.',
      cta: 'Candidatar-se'
    },
    {
      image: 'https://csb.org.br/wp-content/uploads/2024/04/z.jpg',
      category: 'Agricultura',
      title: 'Técnico Agrícola',
      description: 'Apoio ao desenvolvimento rural e projetos de segurança alimentar.',
      cta: 'Explorar'
    },
    {
      image: 'https://mobilidade.estadao.com.br/wp-content/uploads/2025/04/AdobeStock_540196212-motorista-de-caminhao.jpg.webp',
      category: 'Transporte',
      title: 'Motorista',
      description: 'Transporte público, privado e logística em expansão no país.',
      cta: 'Inscrever-se'
    }
  ];

  const moreJobs = [
    {
      image: 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/6F3E/production/_91187482_professorthinkstockphotos-dv1940074.jpg.webp',
      category: 'Educação',
      title: 'Professor Primário',
      description: 'Necessidade crítica de professores em escolas rurais e urbanas.',
      cta: 'Ver vagas'
    },
    {
      image: 'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia25516/vendas-afe.jpg',
      category: 'Comércio',
      title: 'Vendedor',
      description: 'Oportunidades em lojas, mercados e comércio informal em crescimento.',
      cta: 'Candidatar-se'
    },
    {
      image: 'https://www.arcanjovigilancia.com.br/gdd/sgc/imagens/foto_texto/1/rad10EF020221216122915_552.jpg',
      category: 'Segurança',
      title: 'Guarda de Segurança',
      description: 'Proteção de empresas, residências e eventos em todo o país.',
      cta: 'Explorar'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQofzU770n8Q2y1ZHBYa6VFk8qgKakX2F6Eng&s',
      category: 'Serviços',
      title: 'Empregada Doméstica',
      description: 'Serviços domésticos com alta procura em áreas urbanas.',
      cta: 'Ver detalhes'
    },
    {
      image: 'https://blog.nakata.com.br/storage//uploads/2022/01/post_thumbnail-2ad22e797653b79f57101e5e122a8c1d.jpeg',
      category: 'Mecânica',
      title: 'Mecânico',
      description: 'Reparação de veículos e equipamentos em oficinas locais.',
      cta: 'Inscrever-se'
    },
    {
      image: 'https://www.primecursos.com.br/arquivos/uploads/2013/08/padeiro.jpg',
      category: 'Alimentação',
      title: 'Padeiro',
      description: 'Produção de pão e produtos de padaria em demanda constante.',
      cta: 'Ver vagas'
    },
    {
      image: 'https://servico.kualyservice.com.br/imagens/auxiliar-de-limpeza-em-condominio.jpg',
      category: 'Limpeza',
      title: 'Auxiliar de Limpeza',
      description: 'Serviços de limpeza em escritórios, hospitais e espaços públicos.',
      cta: 'Candidatar-se'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2018/01/05/02/47/fishing-3062034_1280.jpg',
      category: 'Pesca',
      title: 'Pescador',
      description: 'Atividade pesqueira artesanal e industrial na costa moçambicana.',
      cta: 'Explorar'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-nhonga-900 mb-8 font-heading">Mais Populares</h2>
      <div className="border border-nhonga-200 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-nhonga-200">
          {jobsList.map((job, index) => (
            <div key={index} className="px-6 first:pl-0 last:pr-0">
              <div className="flex flex-col h-full">
                <img 
                  src={job.image}
                  alt={job.title}
                  className="w-full h-20 object-cover mb-4"
                />
                <div className="text-xs text-nhonga-600 mb-2 uppercase tracking-wide font-body">
                  {job.category}
                </div>
                <h3 className="font-semibold text-nhonga-900 mb-3 text-lg font-heading">
                  {job.title}
                </h3>
                <p className="text-sm text-nhonga-700 mb-6 leading-relaxed flex-grow font-body">
                  {job.description}
                </p>
                <div className="mt-auto">
                  <button className="inline-flex items-center text-primary hover:text-nhonga-700 font-medium text-sm transition-colors font-body">
                    {job.cta}
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
                {moreJobs.slice(0, 4).map((job, index) => (
                  <div key={index} className="px-6 first:pl-0 last:pr-0">
                    <div className="flex flex-col h-full">
                      <img 
                        src={job.image}
                        alt={job.title}
                        className="w-full h-20 object-cover mb-4"
                      />
                      <div className="text-xs text-nhonga-600 mb-2 uppercase tracking-wide font-body">
                        {job.category}
                      </div>
                      <h3 className="font-semibold text-nhonga-900 mb-3 text-lg font-heading">
                        {job.title}
                      </h3>
                      <p className="text-sm text-nhonga-700 mb-6 leading-relaxed flex-grow font-body">
                        {job.description}
                      </p>
                      <div className="mt-auto">
                        <button className="inline-flex items-center text-primary hover:text-nhonga-700 font-medium text-sm transition-colors font-body">
                          {job.cta}
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
                {moreJobs.slice(4, 8).map((job, index) => (
                  <div key={index} className="px-6 first:pl-0 last:pr-0">
                    <div className="flex flex-col h-full">
                      <img 
                        src={job.image}
                        alt={job.title}
                        className="w-full h-20 object-cover mb-4"
                      />
                      <div className="text-xs text-nhonga-600 mb-2 uppercase tracking-wide font-body">
                        {job.category}
                      </div>
                      <h3 className="font-semibold text-nhonga-900 mb-3 text-lg font-heading">
                        {job.title}
                      </h3>
                      <p className="text-sm text-nhonga-700 mb-6 leading-relaxed flex-grow font-body">
                        {job.description}
                      </p>
                      <div className="mt-auto">
                        <button className="inline-flex items-center text-primary hover:text-nhonga-700 font-medium text-sm transition-colors font-body">
                          {job.cta}
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

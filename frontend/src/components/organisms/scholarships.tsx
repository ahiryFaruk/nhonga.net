import { GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { button as Button } from '../atoms/button';

export const scholarships = () => {
  const [showMore, setShowMore] = useState(false);
  
  const scholarshipsList = [
    {
      image: 'https://img.etimg.com/thumb/width-420,height-315,imgsize-244200,resizemode-75,msid-98960158/nri/study/how-you-can-study-in-the-uk-on-a-fully-funded-chevening-scholarship/cms-4.jpg',
      category: 'Reino Unido',
      title: 'Bolsas Chevening',
      description: 'Mestrado totalmente financiado em universidades britânicas para líderes emergentes.',
      funding: '100% Financiado',
      duration: '12 meses',
      type: 'Presencial'
    },
    {
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400',
      category: 'Estados Unidos',
      title: 'Fulbright',
      description: 'Bolsas para mestrado e pesquisa em universidades americanas.',
      funding: '100% Financiado',
      duration: '24 meses',
      type: 'Presencial'
    },
    {
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400',
      category: 'Europa',
      title: 'Erasmus+',
      description: 'Programa de mobilidade estudantil entre África e Europa.',
      funding: '100% Financiado',
      duration: '6-12 meses',
      type: 'Presencial/Online'
    },
    {
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400',
      category: 'Portugal',
      title: 'Bolsas Camões',
      description: 'Apoio financeiro para estudos de pós-graduação em Portugal.',
      funding: '80% Financiado',
      duration: '18 meses',
      type: 'Presencial'
    }
  ];

  const moreScholarships = [
    {
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400',
      category: 'China',
      title: 'Bolsas do Governo Chinês',
      description: 'Graduação e pós-graduação em universidades chinesas.',
      funding: '100% Financiado',
      duration: '24-48 meses',
      type: 'Presencial'
    },
    {
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400',
      category: 'Brasil',
      title: 'Bolsas PEC-G',
      description: 'Graduação em universidades federais brasileiras.',
      funding: '100% Financiado',
      duration: '48 meses',
      type: 'Presencial'
    },
    {
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400',
      category: 'África do Sul',
      title: 'Mandela Rhodes',
      description: 'Bolsas de excelência para líderes africanos.',
      funding: '100% Financiado',
      duration: '12 meses',
      type: 'Presencial'
    },
    {
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400',
      category: 'Alemanha',
      title: 'DAAD',
      description: 'Bolsas para mestrado e doutoramento na Alemanha.',
      funding: '100% Financiado',
      duration: '24-36 meses',
      type: 'Presencial'
    }
  ];

  const allScholarships = showMore ? [...scholarshipsList, ...moreScholarships] : scholarshipsList;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-nhonga-900 mb-8 font-heading">Bolsas de Estudo</h2>
      <div className="border border-nhonga-200 p-8">
        <div className="space-y-6">
          {allScholarships.map((scholarship, index) => (
            <div key={index} className="flex gap-6 pb-6 border-b border-nhonga-200 last:border-0 last:pb-0">
              <div className="flex-1 flex flex-col">
                <div className="inline-flex items-center gap-2 self-start px-3 py-1 bg-primary text-white text-xs font-semibold mb-3 font-body">
                  <GraduationCap className="w-4 h-4" />
                  Bolsa de Estudo em Destaque
                </div>
                <p className="text-sm text-nhonga-600 mb-2 font-body">{scholarship.category}</p>
                <h3 className="text-2xl font-bold text-nhonga-900 mb-3 font-heading">
                  {scholarship.title}
                </h3>
                <p className="text-nhonga-700 mb-4 leading-relaxed font-body">
                  {scholarship.description}
                </p>
                <div className="flex items-center gap-6 mb-6 text-sm font-body">
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-semibold">●</span>
                    <span className="text-nhonga-700">{scholarship.funding}</span>
                  </div>
                  <div className="text-nhonga-600">{scholarship.duration}</div>
                  <div className="text-nhonga-600">{scholarship.type}</div>
                </div>
                <div className="flex gap-3 mt-auto">
                  <Button variant="primary" size="md" className="font-heading">
                    Candidatar-se Agora
                  </Button>
                  <Button variant="outline" size="md" className="font-heading">
                    Ver Requisitos
                  </Button>
                </div>
              </div>
              <div className="flex-shrink-0">
                <img 
                  src={scholarship.image}
                  alt={scholarship.title}
                  className="w-80 h-48 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
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

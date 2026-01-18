import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export const courses = () => {
  const [showMore, setShowMore] = useState(false);
  
  const coursesList = [
    {
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400',
      category: 'Programação',
      title: 'Python para Iniciantes',
      description: 'Curso gratuito de Python com certificado reconhecido internacionalmente.',
      cta: 'Inscrever-se'
    },
    {
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400',
      category: 'Marketing',
      title: 'Marketing Digital - Google',
      description: 'Certificação gratuita em marketing digital e e-commerce.',
      cta: 'Começar'
    },
    {
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400',
      category: 'Desenvolvimento',
      title: 'Desenvolvimento Web Completo',
      description: 'Curso completo de desenvolvimento web totalmente gratuito.',
      cta: 'Inscrever-se'
    },
    {
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400',
      category: 'Gestão',
      title: 'Gestão de Projetos - PMI',
      description: 'Certificação profissional em gestão de projetos.',
      cta: 'Ver detalhes'
    }
  ];

  const moreCourses = [
    {
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400',
      category: 'Negócios',
      title: 'MBA Online - FGV',
      description: 'Mestrado em Administração com aulas online.',
      cta: 'Candidatar-se'
    },
    {
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400',
      category: 'Finanças',
      title: 'Análise Financeira',
      description: 'Curso de análise e planejamento financeiro.',
      cta: 'Inscrever-se'
    },
    {
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
      category: 'Design',
      title: 'UX/UI Design',
      description: 'Design de experiência e interface do usuário.',
      cta: 'Começar'
    },
    {
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400',
      category: 'Idiomas',
      title: 'Inglês para Negócios',
      description: 'Curso de inglês focado em ambiente corporativo.',
      cta: 'Inscrever-se'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-nhonga-900 mb-8 font-heading">Cursos e Formações</h2>
      <div className="border border-nhonga-200 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-nhonga-200">
          {coursesList.map((course, index) => (
            <div key={index} className="px-6 first:pl-0 last:pr-0">
              <div className="flex flex-col h-full">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-20 object-cover mb-4"
                />
                <div className="text-xs text-nhonga-600 mb-2 uppercase tracking-wide font-body">
                  {course.category}
                </div>
                <h3 className="font-semibold text-nhonga-900 mb-3 text-lg font-heading">
                  {course.title}
                </h3>
                <p className="text-sm text-nhonga-700 mb-6 leading-relaxed flex-grow font-body">
                  {course.description}
                </p>
                <div className="mt-auto">
                  <button className="inline-flex items-center text-primary hover:text-nhonga-700 font-medium text-sm transition-colors font-body">
                    {course.cta}
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
              {moreCourses.map((course, index) => (
                <div key={index} className="px-6 first:pl-0 last:pr-0">
                  <div className="flex flex-col h-full">
                    <img 
                      src={course.image}
                      alt={course.title}
                      className="w-full h-20 object-cover mb-4"
                    />
                    <div className="text-xs text-nhonga-600 mb-2 uppercase tracking-wide font-body">
                      {course.category}
                    </div>
                    <h3 className="font-semibold text-nhonga-900 mb-3 text-lg font-heading">
                      {course.title}
                    </h3>
                    <p className="text-sm text-nhonga-700 mb-6 leading-relaxed flex-grow font-body">
                      {course.description}
                    </p>
                    <div className="mt-auto">
                      <button className="inline-flex items-center text-primary hover:text-nhonga-700 font-medium text-sm transition-colors font-body">
                        {course.cta}
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

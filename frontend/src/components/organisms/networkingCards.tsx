import { Briefcase, MapPin, Users } from 'lucide-react';
import { button as Button } from '../atoms/button';

export const networkingCards = () => {
  const professionals = [
    {
      id: 1,
      name: 'Ana Silva',
      title: 'Gestora de Projetos',
      company: 'TechMoz',
      location: 'Maputo',
      connections: 342,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400'
    },
    {
      id: 2,
      name: 'Carlos Mendes',
      title: 'Engenheiro de Software',
      company: 'Digital Solutions',
      location: 'Matola',
      connections: 567,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
    },
    {
      id: 3,
      name: 'Maria Costa',
      title: 'Diretora de Marketing',
      company: 'Creative Agency',
      location: 'Maputo',
      connections: 891,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400'
    },
    {
      id: 4,
      name: 'João Pereira',
      title: 'Consultor Financeiro',
      company: 'Finance Group',
      location: 'Beira',
      connections: 423,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
    },
    {
      id: 5,
      name: 'Sofia Almeida',
      title: 'Designer UX/UI',
      company: 'Innovation Labs',
      location: 'Maputo',
      connections: 678,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400'
    },
    {
      id: 6,
      name: 'Pedro Santos',
      title: 'Arquiteto',
      company: 'Design Studio',
      location: 'Nampula',
      connections: 234,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400'
    }
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-nhonga-900 font-heading">
            Profissionais em Destaque
          </h2>
          <select className="px-4 py-2 border border-nhonga-200 text-sm text-nhonga-700 focus:outline-none focus:border-primary font-body">
            <option>Recomendados</option>
            <option>Mais conexões</option>
            <option>Recentes</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {professionals.map((person) => (
            <div
              key={person.id}
              className="relative bg-white/60 backdrop-blur-sm border border-nhonga-200 hover:border-primary hover:shadow-xl transition-all overflow-hidden group"
            >
              <div className="h-32 bg-gradient-to-br from-nhonga-400/30 via-nhonga-500/20 to-nhonga-600/30 backdrop-blur-md"></div>
              <div className="px-6 pb-6">
                <div className="flex justify-center -mt-16 mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-nhonga-400 to-nhonga-600 blur-lg opacity-50"></div>
                    <img
                      src={person.image}
                      alt={person.name}
                      className="relative w-24 h-24 border-4 border-white object-cover"
                    />
                  </div>
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-nhonga-900 mb-1 font-heading">
                    {person.name}
                  </h3>
                  <p className="text-sm text-nhonga-700 mb-1 font-body">{person.title}</p>
                  <div className="flex items-center justify-center gap-1 text-sm text-nhonga-600 mb-2 font-body">
                    <Briefcase className="w-4 h-4" />
                    {person.company}
                  </div>
                  <div className="flex items-center justify-center gap-1 text-sm text-nhonga-600 mb-3 font-body">
                    <MapPin className="w-4 h-4" />
                    {person.location}
                  </div>
                  <div className="flex items-center justify-center gap-1 text-xs text-nhonga-500 font-body">
                    <Users className="w-4 h-4" />
                    {person.connections} conexões
                  </div>
                </div>
                <Button variant="primary" size="sm" className="w-full font-heading">
                  Conectar
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="ghost" className="font-body">
            Ver mais profissionais
          </Button>
        </div>
      </div>
    </div>
  );
};

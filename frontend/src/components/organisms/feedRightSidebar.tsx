import { TrendingUp, Hash, UserPlus } from 'lucide-react';
import { button as Button } from '../atoms/button';

export const feedRightSidebar = () => {
  const trends = [
    { tag: '#EmpregoMoçambique', posts: '2.3K' },
    { tag: '#TechMaputo', posts: '1.8K' },
    { tag: '#StartupMZ', posts: '1.2K' }
  ];

  const suggestions = [
    {
      name: 'Maria Costa',
      title: 'Designer UX/UI',
      image: 'https://i.pravatar.cc/150?img=9',
      mutual: 12
    },
    {
      name: 'Pedro Santos',
      title: 'Gestor de Projetos',
      image: 'https://i.pravatar.cc/150?img=15',
      mutual: 8
    }
  ];

  return (
    <div className="space-y-4">
      {/* Trending Topics */}
      <div className="bg-white border border-nhonga-200 p-4 rounded-lg">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-nhonga-900 font-heading">Tendências</h3>
        </div>
        <div className="space-y-3">
          {trends.map((trend, index) => (
            <button
              key={index}
              className="w-full text-left p-2 hover:bg-nhonga-50 transition-colors"
            >
              <div className="flex items-center gap-2 mb-1">
                <Hash className="w-4 h-4 text-nhonga-500" />
                <span className="font-semibold text-nhonga-900 text-sm font-heading">
                  {trend.tag}
                </span>
              </div>
              <p className="text-xs text-nhonga-600 font-body ml-6">
                {trend.posts} publicações
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* People Suggestions */}
      <div className="bg-white border border-nhonga-200 p-4 rounded-lg">
        <h3 className="font-bold text-nhonga-900 mb-4 font-heading">Sugestões para Você</h3>
        <div className="space-y-4">
          {suggestions.map((person, index) => (
            <div key={index} className="flex items-start gap-3">
              <img
                src={person.image}
                alt={person.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-nhonga-900 text-sm font-heading truncate">
                  {person.name}
                </h4>
                <p className="text-xs text-nhonga-600 font-body truncate">{person.title}</p>
                <p className="text-xs text-nhonga-500 font-body">{person.mutual} em comum</p>
                <Button variant="outline" size="sm" className="mt-2 w-full flex items-center justify-center gap-1">
                  <UserPlus className="w-4 h-4" />
                  Conectar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div className="bg-white border border-nhonga-200 p-4 rounded-lg">
        <div className="flex flex-wrap gap-2 text-xs text-nhonga-600 font-body">
          <a href="#" className="hover:text-primary">Sobre</a>
          <span>•</span>
          <a href="#" className="hover:text-primary">Ajuda</a>
          <span>•</span>
          <a href="#" className="hover:text-primary">Privacidade</a>
          <span>•</span>
          <a href="#" className="hover:text-primary">Termos</a>
        </div>
        <p className="text-xs text-nhonga-500 mt-2 font-body">© 2024 nhonga.net</p>
      </div>
    </div>
  );
};

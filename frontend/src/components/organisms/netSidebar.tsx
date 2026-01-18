import { Users, UserPlus, UsersRound, Calendar, FileText, Newspaper, ChevronRight } from 'lucide-react';

export const netSidebar = () => {
  const menuItems = [
    { icon: Users, label: 'Conexões', count: 342 },
    { icon: UserPlus, label: 'Seguindo e seguidores', count: 156 },
    { icon: UsersRound, label: 'Grupos', count: 12 },
    { icon: Calendar, label: 'Eventos', count: 5 },
    { icon: FileText, label: 'Páginas', count: 8 },
    { icon: Newspaper, label: 'Boletins', count: 23 }
  ];

  return (
    <div className="bg-white border border-nhonga-200 p-6">
      <h3 className="text-lg font-bold text-nhonga-900 mb-4 font-heading">
        Gerir a Minha Rede
      </h3>
      <div className="space-y-1">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="w-full flex items-center justify-between p-3 hover:bg-nhonga-50 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <item.icon className="w-5 h-5 text-nhonga-600" />
              <span className="text-sm text-nhonga-700 font-body">{item.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-nhonga-900">{item.count}</span>
              <ChevronRight className="w-4 h-4 text-nhonga-400 group-hover:text-nhonga-600 transition-colors" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

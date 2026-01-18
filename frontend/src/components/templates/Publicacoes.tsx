import { feedLeftSidebar } from '../organisms/feedLeftSidebar';
import { feedRightSidebar } from '../organisms/feedRightSidebar';
import { createPostCard } from '../organisms/createPostCard';
import { feedPostCard } from '../organisms/feedPostCard';

export const Publicacoes = () => {
  const posts = [
    {
      author: {
        name: 'Ana Silva',
        title: 'Gestora de Projetos | TechMoz',
        image: 'https://i.pravatar.cc/150?img=1'
      },
      time: 'Há 2 horas',
      content: 'Feliz em anunciar que estamos a recrutar desenvolvedores para a nossa equipa! Se procura uma oportunidade em tecnologia, candidate-se já. #EmpregoMoçambique #TechMaputo',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
      likes: 45,
      comments: 12,
      shares: 8
    },
    {
      author: {
        name: 'Carlos Mondlane',
        title: 'Empreendedor | Fundador StartupMZ',
        image: 'https://i.pravatar.cc/150?img=3'
      },
      time: 'Há 5 horas',
      content: 'Acabei de participar numa conferência incrível sobre inovação em Moçambique. O futuro é promissor para os nossos jovens empreendedores! 🚀',
      likes: 128,
      comments: 34,
      shares: 15
    },
    {
      author: {
        name: 'Beatriz Macamo',
        title: 'Consultora Financeira | Standard Bank',
        image: 'https://i.pravatar.cc/150?img=5'
      },
      time: 'Há 1 dia',
      content: 'Dicas para quem está a começar a carreira: invista em networking, nunca pare de aprender e mantenha-se atualizado com as tendências do mercado.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      likes: 89,
      comments: 23,
      shares: 12
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="col-span-2">
            <div className="sticky top-6">
              {feedLeftSidebar()}
            </div>
          </div>

          {/* Main Feed */}
          <div className="col-span-7">
            {createPostCard()}
            {posts.map((post, index) => (
              <div key={index}>
                {feedPostCard(post)}
              </div>
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3">
            <div className="sticky top-6">
              {feedRightSidebar()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

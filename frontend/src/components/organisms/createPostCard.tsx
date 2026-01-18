import { Image, Video, FileText, Smile } from 'lucide-react';

export const createPostCard = () => {
  return (
    <div className="bg-white border border-nhonga-200 p-4 mb-4 rounded-lg">
      <div className="flex gap-3 mb-4">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover"
        />
        <button className="flex-1 text-left px-4 py-3 bg-nhonga-50 hover:bg-nhonga-100 border border-nhonga-200 rounded-full transition-colors font-body text-nhonga-600">
          Partilhar uma publicação...
        </button>
      </div>
      <div className="flex items-center justify-around pt-3 border-t border-nhonga-100">
        <button className="flex items-center gap-2 px-4 py-2 hover:bg-nhonga-50 transition-colors">
          <Image className="w-5 h-5 text-primary" />
          <span className="text-sm font-body text-nhonga-700">Foto</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 hover:bg-nhonga-50 transition-colors">
          <Video className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-body text-nhonga-700">Vídeo</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 hover:bg-nhonga-50 transition-colors">
          <FileText className="w-5 h-5 text-orange-600" />
          <span className="text-sm font-body text-nhonga-700">Documento</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 hover:bg-nhonga-50 transition-colors">
          <Smile className="w-5 h-5 text-yellow-600" />
          <span className="text-sm font-body text-nhonga-700">Sentimento</span>
        </button>
      </div>
    </div>
  );
};

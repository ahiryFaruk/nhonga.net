import { ThumbsUp, MessageCircle, Share2, Bookmark, MoreHorizontal } from 'lucide-react';

interface PostProps {
  author: {
    name: string;
    title: string;
    image: string;
  };
  time: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
}

export const feedPostCard = ({ author, time, content, image, likes, comments, shares }: PostProps) => {
  return (
    <div className="bg-white border border-nhonga-200 mb-4 rounded-lg overflow-hidden">
      {/* Post Header */}
      <div className="p-4 flex items-start justify-between">
        <div className="flex gap-3">
          <img
            src={author.image}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-nhonga-900 font-heading">{author.name}</h4>
            <p className="text-sm text-nhonga-600 font-body">{author.title}</p>
            <p className="text-xs text-nhonga-500 font-body">{time}</p>
          </div>
        </div>
        <button className="text-nhonga-600 hover:text-nhonga-900">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Post Content */}
      <div className="px-4 pb-3">
        <p className="text-nhonga-800 font-body leading-relaxed">{content}</p>
      </div>

      {/* Post Image */}
      {image && (
        <div className="w-full">
          <img src={image} alt="Post" className="w-full object-cover max-h-96" />
        </div>
      )}

      {/* Post Stats */}
      <div className="px-4 py-2 flex items-center justify-between text-sm text-nhonga-600 font-body border-b border-nhonga-100">
        <div className="flex items-center gap-1">
          <div className="flex -space-x-1">
            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
              <ThumbsUp className="w-3 h-3 text-white" />
            </div>
          </div>
          <span>{likes}</span>
        </div>
        <div className="flex gap-3">
          <span>{comments} comentários</span>
          <span>{shares} partilhas</span>
        </div>
      </div>

      {/* Post Actions */}
      <div className="px-4 py-2 flex items-center justify-around">
        <button className="flex items-center gap-2 px-4 py-2 hover:bg-nhonga-50 transition-colors flex-1 justify-center">
          <ThumbsUp className="w-5 h-5 text-nhonga-600" />
          <span className="text-sm font-body text-nhonga-700 font-semibold">Gostar</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 hover:bg-nhonga-50 transition-colors flex-1 justify-center">
          <MessageCircle className="w-5 h-5 text-nhonga-600" />
          <span className="text-sm font-body text-nhonga-700 font-semibold">Comentar</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 hover:bg-nhonga-50 transition-colors flex-1 justify-center">
          <Share2 className="w-5 h-5 text-nhonga-600" />
          <span className="text-sm font-body text-nhonga-700 font-semibold">Partilhar</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 hover:bg-nhonga-50 transition-colors">
          <Bookmark className="w-5 h-5 text-nhonga-600" />
        </button>
      </div>
    </div>
  );
};

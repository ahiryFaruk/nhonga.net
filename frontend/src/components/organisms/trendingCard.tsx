import { TrendingUp, Hash, MessageCircle } from 'lucide-react';

export const trendingCard = () => {
  const trends = [
    {
      tag: '#EmpregoMoçambique',
      posts: '2.3K',
      growth: '+156%'
    },
    {
      tag: '#TechMaputo',
      posts: '1.8K',
      growth: '+89%'
    },
    {
      tag: '#StartupMZ',
      posts: '1.2K',
      growth: '+234%'
    },
    {
      tag: '#NegóciosBeira',
      posts: '756',
      growth: '+45%'
    }
  ];

  return (
    <div className="bg-white border border-nhonga-200 p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-bold text-nhonga-900 font-heading">
          Tópicos em Alta
        </h3>
      </div>

      <div className="space-y-3">
        {trends.map((trend, index) => (
          <button
            key={index}
            className="w-full text-left p-3 hover:bg-nhonga-50 transition-colors border-b border-nhonga-100 last:border-0"
          >
            <div className="flex items-start justify-between mb-1">
              <div className="flex items-center gap-2">
                <Hash className="w-4 h-4 text-nhonga-500 flex-shrink-0" />
                <span className="font-semibold text-nhonga-900 text-sm font-heading">
                  {trend.tag}
                </span>
              </div>
              <span className="text-xs font-semibold text-primary font-body">
                {trend.growth}
              </span>
            </div>
            <div className="flex items-center gap-1 ml-6">
              <MessageCircle className="w-3 h-3 text-nhonga-500" />
              <span className="text-xs text-nhonga-600 font-body">
                {trend.posts} publicações
              </span>
            </div>
          </button>
        ))}
      </div>

      <button className="w-full mt-4 text-sm text-primary hover:underline font-body text-center">
        Ver mais tópicos
      </button>
    </div>
  );
};

import { Search, MapPin, X } from 'lucide-react';
import { useState } from 'react';
import { button as Button } from '../../components/atoms/button';
import { services } from '../../components/organisms/services';

export const Servicos = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  const categories = [
    { name: 'Limpeza', count: 456 },
    { name: 'Reparações', count: 342 },
    { name: 'Jardinagem', count: 189 },
    { name: 'Transporte', count: 267 },
    { name: 'Cuidados Infantis', count: 145 },
    { name: 'Aulas Particulares', count: 234 },
    { name: 'Pintura', count: 203 }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-nhonga-50 to-white py-12 border-b border-nhonga-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-nhonga-900 mb-4 font-heading">
            Encontre Profissionais Qualificados
          </h1>
          <p className="text-lg text-nhonga-700 mb-8 font-body">
            Conecte-se com prestadores de serviços de confiança em Moçambique
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center bg-white rounded-2xl shadow-lg border-2 border-primary">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Que serviço procura?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-4 bg-transparent rounded-l-2xl text-gray-700 focus:outline-none font-body"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            
            <div className="relative flex-1 border-l border-nhonga-200">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Localização"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-12 pr-10 py-4 bg-transparent text-gray-700 focus:outline-none font-body"
              />
              {location && (
                <button
                  onClick={() => setLocation('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            
            <Button variant="primary" size="lg" className="rounded-xl m-2 font-heading">
              Procurar
            </Button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-nhonga-600 font-body">
              <span className="font-semibold text-nhonga-800">2.567</span> prestadores de serviços disponíveis
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-lg font-semibold text-nhonga-800 mb-4 font-heading">
            Categorias Populares
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <button
                key={i}
                className="px-4 py-2 bg-white border border-nhonga-200 rounded-lg hover:bg-nhonga-50 hover:border-primary hover:scale-[1.02] transition-all text-sm text-nhonga-700 font-body"
              >
                {cat.name} <span className="text-nhonga-500 font-semibold">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Listings */}
      {services()}
    </div>
  );
};
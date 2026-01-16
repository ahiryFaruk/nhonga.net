import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import logo from '/src/assets/icons/logo.png';
import { Input } from '../../components/atoms/input';
import { button as Button } from '../../components/atoms/button';

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="mb-8">
        <img src={logo} alt="nhonga.net" className="h-10 mx-auto" />
      </div>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-gt-walsheim font-bold text-center text-gray-800 mb-6">Login</h1>

        <div className="space-y-3 mb-6">
          <Button className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Continuar com Facebook
          </Button>

          <Button variant="outline" className="w-full flex items-center justify-center gap-3 bg-white">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continuar com Google
          </Button>

          <Button className="w-full flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            Continuar com Apple
          </Button>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-500 text-sm">Ou</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <form className="space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="exemplo@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Introduza a sua palavra-passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            }
          />

          <div className="text-right">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Esqueceu a sua palavra-passe?
            </a>
          </div>

          <Button variant="secondary" className="w-full">
            Login
          </Button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Ainda não tem uma conta nhonganet?{' '}
          <a href="#" className="text-blue-600 hover:underline font-medium">
            Registar-se
          </a>
        </p>
      </div>

      <p className="text-center text-xs text-gray-500 mt-8 max-w-md">
        Ao clicar em "Aceitar todos os cookies," concorda que os cookies sejam guardados no seu dispositivo para melhorar a navegação do site, analisar o uso do site e colaborar com os nossos estudos de marketing.{' '}
        <a href="#" className="text-blue-600 hover:underline">
          Mais informações sobre a sua privacidade
        </a>
      </p>
    </div>
  );
};

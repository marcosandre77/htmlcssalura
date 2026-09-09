import { useState } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { useLogin } from '@/controllers/hooks/useLogin';

export function LoginForm() {
  const { login, loading } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await login({ email, password });
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-5">
      <Input
        label="E-mail"
        placeholder="Digite seu e-mail"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <Input
        label="Senha"
        placeholder="Digite sua senha"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <a className="text-right text-sm text-[#004587]" href="#">
        Esqueci minha senha
      </a>

      <Button type="submit" disabled={loading}>
        {loading ? 'Entrando...' : 'Entrar'}
      </Button>
    </form>
  );
}

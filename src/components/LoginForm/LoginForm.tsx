import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

interface LoginFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md flex-col gap-5">
      <Input label="E-mail" placeholder="Digite seu e-mail" type="email" />
      <Input label="Senha" placeholder="Digite sua senha" type="password" />
      <a className="text-right text-sm text-[#004587]" href="#">
        Esqueci minha senha
      </a>
      <Button type="submit">Entrar</Button>
    </form>
  );
}

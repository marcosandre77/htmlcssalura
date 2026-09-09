import { AccessibilityBar } from '@/components/AccessibilityBar/AccessibilityBar';
import { BrandFooter } from '@/components/BrandFooter/BrandFooter';
import { LoginForm } from '@/components/LoginForm/LoginForm';

export function Login() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <main className="min-h-screen flex bg-white font-rubik">
      <section
        className="hidden md:block md:w-1/2 bg-cover bg-center bg-[#004587]"
        aria-label="Imagem institucional"
      />

      <section className="relative flex w-full md:w-1/2 flex-col items-center justify-center px-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-[#004587]">
              Bem-vindo!
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Insira suas credenciais.
            </p>
          </div>

          <LoginForm onSubmit={handleSubmit} />

          <BrandFooter />
        </div>

        <AccessibilityBar />
      </section>
    </main>
  );
}

export function Login(){
 return (
  <main className="min-h-screen flex font-sans">
    <section className="hidden md:block md:w-1/2 bg-cover bg-center" />
    <section className="w-full md:w-1/2 flex flex-col items-center justify-center px-10 bg-white">
      <h1 className="text-2xl font-semibold text-gray-700">Bem-vindo!</h1>
      <p className="text-gray-500 text-sm mb-8">Insira suas credenciais.</p>

      <div className="w-full max-w-[366px] space-y-4">
        <input className="w-full h-10 border rounded-lg px-3" placeholder="Digite aqui" />
        <input className="w-full h-10 border rounded-lg px-3" placeholder="Digite aqui" type="password" />
        <button className="w-full h-12 rounded-lg bg-[#F9C681] text-[#004587] font-medium">Entrar</button>
      </div>
    </section>
  </main>
 )
}

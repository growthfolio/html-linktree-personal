export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <section className="max-w-xl text-center">
        <p className="text-sm text-[color:var(--muted)] mb-3">PORTFÓLIO ANTIGO</p>
        <h1 className="text-3xl font-semibold mb-4">Este perfil não é mais mantido.</h1>
        <p className="text-[color:var(--muted)] mb-8">
          Minha apresentação profissional atual está concentrada em um único site,
          com experiência, projetos pessoais e formação descritos de forma mais
          simples e atualizada.
        </p>
        <a
          href="https://felipemacedo.me"
          className="inline-flex items-center justify-center rounded-lg px-5 py-3 bg-[var(--brand)] text-white font-medium"
        >
          Acessar felipemacedo.me
        </a>
      </section>
    </main>
  )
}

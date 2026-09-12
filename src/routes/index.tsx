import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import clinicalCare from "@/assets/clinical-care.jpg";
import integrativeCare from "@/assets/integrative-care.jpg";
import maternalCare from "@/assets/maternal-care.jpg";
import mentalHealth from "@/assets/mental-health.jpg";
import nutritionCare from "@/assets/nutrition-care.jpg";
import teamCare from "@/assets/team-care.jpg";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { specialties } from "@/data/specialties";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Como o Sol | Especialidades de cuidado" },
    { name: "description", content: "Explore 21 especialidades e encontre informações responsáveis sobre saúde, cuidado e bem-estar." },
    { property: "og:title", content: "Como o Sol | Especialidades de cuidado" },
    { property: "og:description", content: "Um lugar claro para escolher quem cuida de você." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] },),
  component: Index,
});

const images = [clinicalCare, mentalHealth, maternalCare, teamCare, nutritionCare, integrativeCare];

function Index() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("pt-BR");
    if (!normalized) return specialties;
    return specialties.filter(({ title, summary }) => `${title} ${summary}`.toLocaleLowerCase("pt-BR").includes(normalized));
  }, [query]);

  return (
    <SiteShell>
      <main>
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <div>
              <p className="eyebrow">Saúde · cuidado · bem-estar</p>
              <h1 className="mt-5 max-w-[15ch] font-serif text-5xl leading-[1.02] text-primary sm:text-6xl lg:text-7xl">Um lugar claro para escolher quem cuida de você.</h1>
              <p className="mt-7 max-w-[52ch] text-lg leading-relaxed text-muted-foreground">Vinte e uma especialidades reunidas num só ponto de partida, com informação responsável e navegação simples.</p>
            </div>
            <div className="overflow-hidden rounded-lg bg-accent">
              <img src={teamCare} alt="Equipe de profissionais de saúde reunida" width={1200} height={900} className="aspect-[4/3] h-full w-full object-cover" />
            </div>
            <label className="relative flex min-h-14 items-center rounded-lg border border-primary/15 bg-accent/55 px-4 lg:col-span-2 lg:max-w-2xl">
              <Search className="mr-3 size-5 text-primary/50" aria-hidden="true" />
              <span className="sr-only">Buscar especialidade</span>
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="O que você procura? Ex.: saúde mental" className="w-full bg-transparent py-3 text-base text-primary outline-none placeholder:text-primary/45" />
              <span className="ml-3 hidden text-xs font-medium uppercase text-muted-foreground sm:block">{filtered.length} áreas</span>
            </label>
          </div>
        </section>

        <section id="especialidades" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-6 md:py-24">
          <div className="mb-9 flex items-end justify-between gap-6 border-b border-border pb-5">
            <div><p className="eyebrow">Índice de cuidado</p><h2 className="mt-2 font-serif text-4xl text-primary">Especialidades</h2></div>
            <span className="text-sm text-muted-foreground">21 áreas de atuação</span>
          </div>
          {filtered.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((specialty, index) => (
                <Link key={specialty.slug} to="/especialidades/$slug" params={{ slug: specialty.slug }} className="group overflow-hidden rounded-lg border border-primary/10 bg-card transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-editorial">
                  <img src={images[index % images.length]} alt="" loading="lazy" width={1200} height={900} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.025]" />
                  <div className="p-5">
                    <div className="flex items-center justify-between text-xs font-medium text-muted-foreground"><span>{String(index + 1).padStart(2, "0")}</span><ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></div>
                    <h3 className="mt-4 font-serif text-2xl leading-tight text-primary">{specialty.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{specialty.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : <p className="border-y border-border py-12 text-center text-muted-foreground">Nenhuma especialidade encontrada. Tente outra palavra.</p>}
        </section>

        <section id="como-escolher" className="scroll-mt-24 border-y border-border bg-accent/40">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.35fr_.65fr] lg:items-center">
            <div><p className="eyebrow">Informação responsável</p><h2 className="mt-3 max-w-[18ch] font-serif text-4xl leading-tight text-primary sm:text-5xl">Escolher com calma também faz parte do cuidado.</h2><p className="mt-5 max-w-[60ch] leading-relaxed text-muted-foreground">Cada página explica o que é a área, quando buscá-la e o que observar ao escolher um profissional, sem promessas ou atalhos.</p></div>
            <div className="rounded-lg border border-primary/15 bg-background p-6"><ShieldCheck className="size-7 text-secondary" /><h3 className="mt-4 font-serif text-2xl text-primary">Orientação segura</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">As informações são educativas e não substituem avaliação individual. Em emergências, procure atendimento imediato.</p></div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-6 md:py-24">
          <h2 className="mx-auto max-w-[24ch] font-serif text-4xl leading-tight text-primary sm:text-5xl">Comece por uma escolha mais clara para o seu cuidado.</h2>
          <Button asChild variant="coral" className="mt-8"><Link to="/" hash="especialidades">Explorar especialidades <ArrowRight className="size-4" /></Link></Button>
        </section>
      </main>
    </SiteShell>
  );
}
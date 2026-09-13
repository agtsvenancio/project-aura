import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";
import clinicalCare from "@/assets/clinical-care.jpg";
import integrativeCare from "@/assets/integrative-care.jpg";
import maternalCare from "@/assets/maternal-care.jpg";
import mentalHealth from "@/assets/mental-health.jpg";
import nutritionCare from "@/assets/nutrition-care.jpg";
import teamCare from "@/assets/team-care.jpg";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { specialties } from "@/data/specialties";

const imageMap: Record<string, string> = {
  "saude-mental": mentalHealth, "terapias-comportamentais": mentalHealth, "psicanalise-clinica": mentalHealth, psicodrama: mentalHealth,
  "nutricao-clinica-funcional": nutritionCare, nutriterapia: nutritionCare,
  "obstetricia-e-neonatologia": maternalCare,
  reiki: integrativeCare, "terapias-integrativas": integrativeCare, "enfermagem-integrativa": integrativeCare, "biomagnetismo-medicinal": integrativeCare, "constelacao-sistemica-familiar": integrativeCare,
  "saude-coletiva": teamCare, "gestao-de-qualidade-e-seguranca-do-paciente": teamCare, "coaching-comportamental": teamCare, "neurociencias-aplicadas-a-psicologia": teamCare,
};

export const Route = createFileRoute("/especialidades/$slug")({
  loader: ({ params }) => {
    const specialty = specialties.find((item) => item.slug === params.slug);
    if (!specialty) throw notFound();
    return specialty;
  },
  head: ({ loaderData }) => ({ meta: loaderData ? [
    { title: `${loaderData.title} | Como o Sol` },
    { name: "description", content: loaderData.description },
    { property: "og:title", content: `${loaderData.title} | Como o Sol` },
    { property: "og:description", content: loaderData.description },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
  ] : [] }),
  component: SpecialtyPage,
});

function SpecialtyPage() {
  const specialty = Route.useLoaderData();
  const image = imageMap[specialty.slug] ?? clinicalCare;
  return (
    <SiteShell>
      <main>
        <div className="mx-auto max-w-6xl px-5 sm:px-6"><nav aria-label="Caminho de navegação" className="flex items-center gap-2 py-5 text-sm text-muted-foreground"><Link to="/" className="hover:text-secondary">Especialidades</Link><span>/</span><span aria-current="page">{specialty.title}</span></nav></div>
        <section className="border-y border-border">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-6 md:py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div><p className="eyebrow">Área de atuação</p><h1 className="mt-4 font-serif text-5xl leading-[1.02] text-primary sm:text-6xl">{specialty.heading}</h1><p className="mt-7 max-w-[58ch] text-lg leading-relaxed text-muted-foreground">{specialty.lead}</p></div>
            <img src={image} alt={`Atendimento relacionado a ${specialty.title}`} width={1200} height={900} className="aspect-[4/3] w-full rounded-lg object-cover" />
          </div>
        </section>
        <section className="mx-auto max-w-[720px] px-5 py-16 sm:px-6 md:py-24">
          <div>
            {specialty.articles.map((article, index) => <article key={article.id} id={article.id} className="scroll-mt-28 border-b border-border py-9 first:pt-0"><span className="text-xs font-semibold text-secondary">{String(index + 1).padStart(2, "0")}</span><h2 className="mt-3 font-serif text-4xl text-primary">{article.title}</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">{article.text}</p></article>)}
            {specialty.notice && <aside className="mt-10 rounded-lg border border-secondary/25 bg-secondary/10 p-6"><AlertTriangle className="size-6 text-secondary" /><h2 className="mt-4 font-serif text-2xl text-primary">Orientação importante</h2><p className="mt-2 leading-relaxed text-muted-foreground">{specialty.notice}</p></aside>}
          </div>
        </section>
        <section className="bg-primary text-primary-foreground"><div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-6 md:grid-cols-[1fr_auto] md:items-center"><div><p className="text-xs font-semibold uppercase text-primary-foreground/65">Próximo passo</p><h2 className="mt-3 max-w-[24ch] font-serif text-4xl">Conheça todas as áreas e escolha com mais segurança.</h2></div><Button asChild variant="coral"><Link to="/" hash="especialidades">Ver especialidades <ArrowRight className="size-4" /></Link></Button></div></section>
        <nav aria-label="Navegação entre especialidades" className="mx-auto grid max-w-6xl grid-cols-2 gap-5 px-5 py-10 sm:px-6">
          {specialty.previous ? <Link to="/especialidades/$slug" params={{ slug: specialty.previous.slug }} className="flex items-center gap-3 text-sm text-primary hover:text-secondary"><ArrowLeft className="size-4 shrink-0" /><span><small className="block text-xs text-muted-foreground">Área anterior</small>{specialty.previous.title}</span></Link> : <span />}
          {specialty.next && <Link to="/especialidades/$slug" params={{ slug: specialty.next.slug }} className="flex items-center justify-end gap-3 text-right text-sm text-primary hover:text-secondary"><span><small className="block text-xs text-muted-foreground">Próxima área</small>{specialty.next.title}</span><ArrowRight className="size-4 shrink-0" /></Link>}
        </nav>
      </main>
    </SiteShell>
  );
}
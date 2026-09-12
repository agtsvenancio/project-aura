import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Brand } from "./brand";
import { Button } from "./ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-6">
        <Brand />
        <nav aria-label="Navegação principal" className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <Link to="/" hash="especialidades" className="transition-colors hover:text-secondary">Especialidades</Link>
          <Link to="/" hash="como-escolher" className="transition-colors hover:text-secondary">Como escolher</Link>
        </nav>
        <Button asChild className="min-h-10 px-4"><Link to="/" hash="especialidades">Encontrar cuidado</Link></Button>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <span className="font-serif text-xl text-primary">Como o Sol</span>
        <p>Conteúdo informativo · não substitui atendimento profissional</p>
        <span>Saúde com informação responsável</span>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-background text-foreground"><SiteHeader />{children}<SiteFooter /></div>;
}

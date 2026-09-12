import { Link } from "@tanstack/react-router";

export function Brand() {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-3" aria-label="Como o Sol — início">
      <span className="relative grid size-10 place-items-center rounded-full border border-secondary/30">
        <span className="size-3 rounded-full bg-secondary" />
        <span className="absolute h-px w-7 rotate-45 bg-primary/45" />
        <span className="absolute h-px w-7 -rotate-45 bg-primary/45" />
      </span>
      <span>
        <span className="block font-serif text-2xl leading-none">Como o Sol</span>
        <span className="mt-1 hidden text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:block">diretório de cuidado</span>
      </span>
    </Link>
  );
}

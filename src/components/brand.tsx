import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/como-o-sol-logo.png.asset.json";

export function Brand() {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-3" aria-label="Como o Sol — início">
      <img src={logoAsset.url} alt="Como o Sol" className="h-14 w-auto object-contain sm:h-16" />
    </Link>
  );
}

import { PreorderButton } from "../Preorder";

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#reviews", label: "Reviews" },
  { href: "#story", label: "Our story" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 flex items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-10 sm:py-4">
      <a href="#top" className="min-w-0 font-script text-xl leading-none sm:text-3xl">
        Pocket Puddings
      </a>
      <nav className="flex shrink-0 items-center gap-3 text-sm font-bold sm:gap-6">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="hidden underline-offset-4 hover:underline md:inline">
            {l.label}
          </a>
        ))}
        <PreorderButton arrow={false} className="squish shrink-0 whitespace-nowrap rounded-full border-[3px] border-ink bg-coral px-3.5 py-1.5 text-sm !shadow-[3px_3px_0_var(--color-ink)] sm:px-4">
          Pre-order
        </PreorderButton>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy px-6 py-10 text-cream sm:px-12">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="font-script text-3xl">Pocket Puddings</span>
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-semibold">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-coral">
              {l.label}
            </a>
          ))}
        </nav>
        <p className="text-sm text-cream/60">&copy; 2026 Pocket Puddings</p>
      </div>
    </footer>
  );
}

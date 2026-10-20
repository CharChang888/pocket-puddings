import { PreorderButton } from "../Preorder";

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#reviews", label: "Reviews" },
  { href: "#story", label: "Our story" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 flex items-center justify-between gap-4 px-5 py-4 sm:px-10">
      <a href="#top" className="font-script text-2xl sm:text-3xl">
        Pocket Puddings
      </a>
      <nav className="flex items-center gap-6 text-sm font-bold">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="hidden underline-offset-4 hover:underline md:inline">
            {l.label}
          </a>
        ))}
        <PreorderButton arrow={false} className="squish rounded-full border-[3px] border-ink bg-coral px-4 py-1.5 !shadow-[3px_3px_0_var(--color-ink)]">
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
        <nav className="flex gap-6 text-sm font-semibold">
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

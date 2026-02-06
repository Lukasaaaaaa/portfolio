export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-foreground-muted">
          &copy; {new Date().getFullYear()} Lukas Gurny
        </p>
        <div className="flex gap-6">
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/lukasgurny/" },
            { label: "GitHub", href: "https://github.com/Lukasaaaaaa" },
            { label: "Email", href: "mailto:luca@gurny.de" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-xs text-foreground-muted transition-colors hover:text-foreground-bright"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

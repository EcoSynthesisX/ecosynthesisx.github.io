import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "ABOUT" },
  // { href: "/team", label: "Team" },
  // { href: "/projects", label: "Projects" },
  // { href: "/roadmap", label: "Roadmap" },
  { href: "#ESX", label: "ESX" },
  { href: "#projects-in-development", label: "PROJECTS IN DEVELOPEMENT" },
  { href: "#litepapers", label: "FUTURE PROJECTS" },
  { href: "#impact-products", label: "IMPACT PRODUCT COLLECTIONS" },
  
  {
    href: "#media",
    label: "MEDIA & SOCIALS",
    subItems: [
      { href: "#videos", label: "Videos" },
      { href: "#podcasts", label: "Podcasts" },
      { href: "#articles", label: "Articles" }
    ],
    icon: (
      <svg 
        className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:rotate-180" 
        fill="none" 
        viewBox="0 0 24 24"
      >
        <path 
          d="M19 9l-7 7-7-7"
        />
      </svg>
    )
  },
  { href: "#backers", label: "OUR BACKERS" },

];

const logoUrl = "https://avatars.githubusercontent.com/u/145981044?s=200&v=4";

export default function SidebarNav() {
  return (
    <nav className="fixed top-0 left-0 h-full w-48 bg-white/30 dark:bg-black/30 shadow-lg flex flex-col items-center py-10 z-20">
      <Image src={logoUrl} alt="EcoSynthesisX Logo" width={64} height={64} className="w-16 h-16 rounded-full mb-4 border-2 border-teal-400 shadow" />
      <div className="flex gap-4 mb-6">
        <Link href="https://x.com/EcoSynthesisX" target="_blank" className="hover:text-teal-300 transition-colors" aria-label="X">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </Link>
        <Link href="https://t.me/EcoSynthesisX" target="_blank" className="hover:text-teal-300 transition-colors" aria-label="Telegram">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm4.93 7.36l-1.43 6.77c-.11.48-.39.6-.78.37l-2.16-1.59-1.04 1c-.12.12-.23.23-.47.23l.17-2.38 4.34-3.92c.19-.17-.04-.27-.29-.1l-5.37 3.38-2.31-.72c-.5-.16-.51-.5.1-.73l9.02-3.48c.42-.16.79.1.65.7z"/></svg>
        </Link>
        <Link href="https://discord.gg/ecosynthesisx" target="_blank" className="hover:text-teal-300 transition-colors" aria-label="Discord">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/></svg>
        </Link>
      </div>
      <h3 className="text-2xl font-bold mb-8 text-teal-400 animate-pulse" style={{
        textShadow: '0 0 10px rgba(45, 212, 191, 0.5), 0 0 20px rgba(45, 212, 191, 0.3), 0 0 30px rgba(45, 212, 191, 0.2)'
      }}>EcoSynthesisX</h3>
      <ul className="flex flex-col gap-6 w-full items-center">
        {navLinks.map((link) => (
          <li key={link.href} className="w-full">
            <Link
              href={link.href}
              className="block px-4 py-2 rounded text-lg text-center font-mono font-semibold transition-all duration-200 hover:bg-teal-200/60 dark:hover:bg-teal-800/40 hover:scale-105 hover:text-teal-400 focus:text-teal-400 focus:scale-105 relative group">
              <span className="inline-block transition-all duration-200 group-hover:underline group-hover:decoration-teal-400 group-hover:decoration-2">
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
} 
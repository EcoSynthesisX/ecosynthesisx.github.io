"use client";
import Link from "next/link";
import Image from "next/image";
import TropicalScene from "./components/TropicalScene";
import SidebarNav from "./components/SidebarNav";

const logoUrl = "https://avatars.githubusercontent.com/u/145981044?s=200&v=4";

const keyframes = `
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(34,211,238,0.7); }
  70% { box-shadow: 0 0 0 10px rgba(34,211,238,0); }
  100% { box-shadow: 0 0 0 0 rgba(34,211,238,0); }
}`;

const FundingLive = () => (
  <>
    <style>{keyframes}</style>
    <span
      className="ml-2 sm:ml-4 px-3 sm:px-4 py-1 rounded-full bg-teal-400 text-black font-bold shadow-lg animate-pulse flex items-center gap-1 sm:gap-2 whitespace-nowrap text-xs sm:text-sm"
      style={{
        animation: 'pulse 1.5s infinite',
        border: '2px solid #2dd4bf',
        letterSpacing: '0.05em',
        fontSize: '75%',
      }}
    >
      <span className="relative flex h-2 w-2 sm:h-3 sm:w-3 mr-1">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-red-600 shadow-lg"></span>
      </span>
      Funding Live
    </span>
  </>
);

// Add this component next to the logo in your JSX

const interviews = [
  {
    type: "video",
    url: "https://youtu.be/zVgZX1Nj48E",
    embed: "https://www.youtube.com/embed/zVgZX1Nj48E",
    title: "Super dApp Builders EP01 with Paul Burg",
    description: "A deep dive into dApp building and Real World impact with Paul Burg."
  },
  {
    type: "video",
    url: "https://youtu.be/bmrc4CB4yKg",
    embed: "https://www.youtube.com/embed/bmrc4CB4yKg",
    title: "Real WorldImpact Products & Real World Impact Marketplace | DevCon SEA 2024 | Regen Hub",
    description: "Presentation on Real WorldImpact Products and Marketplaces at DevCon SEA 2024."
  },
  {
    type: "podcast",
    url: "https://www.cryptoaltruism.org/blog/crypto-altruists-episode-201-web3-localism-for-global-action-from-decentralized-cleanups-to-regenerative-local-economies",
    title: "Crypto Altruists Episode 201 - Web3 Localism for Global Climate Action",
    description: "Podcast and article on how DeCleanup, EcoSynthesisX, and Regen Bazaar are driving global impact through local action."
  },
  {
    type: "article",
    url: "https://mirror.xyz/ecosynthesisx.eth/zOdeuaeFfJUFScZZKu1OGF7cWCiRgUHQSGE-14cf8fo",
    title: "Taking Notes on the Development of a Global Real World Impact Market",
    description: "EcoSynthesisX's vision for a future where public goods become liquid."
  },
  {
    type: "article",
    url: "https://mirror.xyz/ecosynthesisx.eth/lBc13WGdIsnOI5t6w0AMcjWL_mqx9kFR0548Ft14ptM",
    title: "Clean Phangan Impact Product: converting cleanups into capital",
    description: "How Clean Phangan is turning environmental cleanups into on-chain value."
  },
];

// Helper to safely access links
function getLink<T extends Record<string, unknown>>(links: T, key: string): string | undefined {
  return typeof links[key] === 'string' ? (links[key] as string) : undefined;
}

export default function Home() {
  return (
    <div className="relative min-h-screen text-white flex flex-row bg-gradient-to-br from-[#232946] via-[#16161a] to-[#0f0f10]">
      <SidebarNav />
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-2 sm:px-4 py-6 sm:py-10 gap-8 sm:gap-12 ml-12 md:ml-16 transition-all duration-500 ease-in-out">
        {/* Tropical Three.js Scene as background */}
        <div className="fixed inset-0 -z-10">
          <TropicalScene />
        </div>

      {/* Header */}
        <header id="home" className="w-full max-w-3xl flex flex-col items-center gap-2 text-center px-2">
          <div className="relative flex justify-center mb-4">
            <Image src={logoUrl} alt="EcoSynthesisX Logo" width={96} height={96} className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border-4 border-teal-400 shadow-lg" />

          </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight transform transition-transform duration-300 hover:scale-105 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-teal-500/20">EcoSynthesisX</h1>
          <div className="flex gap-4 mt-2">
              <Link href="https://x.com/EcoSynthesisX" target="_blank" className="hover:underline text-sm sm:text-base">X</Link>
              <Link href="https://t.me/EcoSynthesisX" target="_blank" className="hover:underline text-sm sm:text-base">Telegram</Link>
              <Link href="https://discord.gg/EcoSynthesisX" target="_blank" className="hover:underline text-sm sm:text-base">Discord</Link>
            </div>
        <p className="text-base sm:text-lg md:text-xl mt-2 text-muted-foreground px-2">
            Web3 Public Good Studio | dApps for Real-World Impact (RWI)
          </p>
          <div className="mt-4">
              <FundingLive />
            </div>
      </header>

        {/* About/Who We Are Card */}
        <section className="max-w-5xl mx-auto my-4 rounded-2xl shadow-xl p-4 sm:p-6 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Who we are?</h2>
        <p className="mb-6 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed px-2">
          EcoSynthesisX is a global, open-source studio creating apps powered by blockchain – to solve real problems like pollution and boost nonprofit activities in the real world.
        </p>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">What we do?</h3>
        <p className="mb-6 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed px-2">
          Bridging the gap between cutting-edge blockchain tech and everyday people, so everyone can contribute to a regenerative future.
        </p>

      </section>


      {/* Juicebox Call-to-Action Card */}
      <section id="ESX" className="max-w-5xl mx-auto my-8 rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 text-center">

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 px-2">
          What if you could help environment, empower communities,<br className="hidden sm:block" />and shape a better world?
        </h2>

        <p className="mb-1.4 text-base sm:text-lg md:text-2xl py-5 pb-2 px-2">
          Contribute ETH to get <b>$ESX tokens</b> – tradable in the future and your way to vote on projects and unlock perks.
        </p>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 py-1">$ESX token</h3>
        <p className="mb-6 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed px-2">Finally, a crypto you can feel good about</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-4 px-2">
          <div>
            <h4 className="font-bold text-grey-700 mb-1 text-lg sm:text-2xl">Decentralized Governance</h4>
            <p className="text-sm sm:text-xl">Vote for projects development and funds allocations</p>
          </div>
          <div>
            <h4 className="font-bold text-grey-700 mb-1 text-lg sm:text-2xl">Exchangeable</h4>
            <p className="text-sm sm:text-xl">Support nonprofits, fund cleanups, or participate in platforms like DeCleanup and Regen Bazaar</p>
          </div>
        </div>
        <p className="mb-1.4 text-base sm:text-lg md:text-3xl relative group py-8 px-2">
           <a 
             href="https://juicebox.money/v4/eth:76" 
             className="inline-flex items-center text-teal-300 hover:text-teal-400 transition-colors duration-300 cursor-pointer"
             target="_blank"
             rel="noopener noreferrer"
           >
             <span className="animate-pulse bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent font-bold">
               Join our fundraising campaign on JuiceBox
             </span>
             <span className="absolute -inset-1 bg-gradient-to-r from-teal-400/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
           </a>
           <div className="mt-2">
             <a 
               href="https://juicebox.money/v4/eth:76"
               className="text-teal-300 hover:text-teal-400 underline animate-bounce text-sm sm:text-base"
               target="_blank"
               rel="noopener noreferrer"
             >
               https://juicebox.money/v4/eth:76
             </a>
           </div>
        </p>
        <p className="mt-4 text-lg sm:text-2xl px-2">
           Become EcoSynthesisX stakeholder now! 
        </p>
        <p className="italic text-blue-200 mt-4.8 text-xl sm:text-3xl py-4 px-2">
          Be part of real-world impact, be part of our projects!
        </p>
      </section>



      {/* Mission Section */}
          {/* <section id="mission" className="w-full max-w-7xl bg-white/30 rounded-xl shadow p-6 flex flex-col gap-2 text-center">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p>
            More dApps with Real world impact
          </p>
          <p>
            To empower communities and creators by providing resources, mentorship, and infrastructure for public good projects in the web3 ecosystem.</p>
            <p> We believe in open-source, collective action, and measurable Real World impact.
        </p>
      </section> */}

        {/* Split Intro into Two Cards */}
        {/* <section className="w-full max-w-5xl flex flex-col md:flex-row gap-6 mt-4">
          <div className="flex-1 bg-white/20 dark:bg-black/30 rounded-xl shadow p-6 mb-4 md:mb-0">
            <h2 className="text-xl font-semibold mb-2">About EcoSynthesisX</h2>
            <p className="text-base sm:text-lg mb-2">
            EcoSynthesisX, founded by Paul Burg, creates ReFi solutions using DeSci engineering, tokenizing RWI to connect blockchain with non-crypto users for a regenerative future. It builds decentralized cleanup tools and impact ranking systems, linking visionaries, nonprofits, and communities for sustainable public goods. Contributions make you a stakeholder in its global, open-source Web3 ecosystem.
            </p>
            <p className="text-base sm:text-lg">
            We build products like decentralized cleanup tools and impact ranking systems, linking visionaries, nonprofits, and communities to create profitable and sustainable public goods. Your contribution makes you a stakeholder in our global, open-source Web3 ecosystem, bringing blockchain to life for a sustainable future.
            </p>
          </div>
          <div className="flex-1 bg-white/20 dark:bg-black/30 rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Approach & Vision</h2>
            <p className="text-base sm:text-lg mb-2">
            EcoSynthesisX, founded by Paul Burg, develops ReFi solutions using DeSci engineering, tokenizing RWI to bridge blockchain with non-crypto users for a regenerative future. It creates decentralized cleanup tools and impact ranking systems, connecting visionaries, nonprofits, and communities for sustainable public goods. Contributors become stakeholders in its global, open-source Web3 ecosystem.
            </p>
            <p className="text-base sm:text-lg">
              From decentralized cleanups to impact ranking systems, EcoSynthesisX builds products that connect visionaries, nonprofits, and communities to create profitably sustainable public goods. By contributing to EcoSynthesisX, you&apos;re becoming a stakeholder in a global, open-source Web3 ecosystem that brings blockchain to life, for life.
            </p>
          </div>
        </section> */}

                {/* Impact & Endorsements */}
        {/* <section className="w-full max-w-4xl flex flex-col sm:flex-row gap-6 justify-between items-start mt-12"> */}
        {/* <section className="w-full max-w-5xl flex flex-col md:flex-row gap-6 mt-4">
          <div className="flex-1 bg-white/30 dark:bg-black/30 rounded-xl shadow p-6 mb-4 sm:mb-0">
            <h3 className="text-xl font-semibold mb-2">Juice Box</h3>
            <p>
            Become a Stakeholder of EcoSynthesisX and get $ESX token
            </p>
          <p>
            <Link href={"juicebox.com"}>Support Us Now</Link>
          </p>
          </div>
          <div className="flex-1 bg-white/30 dark:bg-black/30 rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Traction</h3>
            <p>
              This project has received <span className="font-bold">50k+ in grants</span> and <span className="font-bold">9 endorsements</span> so far. Be the first to support us!
            </p>
          <div className="flex flex-wrap gap-4 mt-2 justify-center">

            <Link href="https://gap.karmahq.xyz/project/ecosynthesisx-web3-public-good-studio" target="_blank" className="hover:opacity-80 transition-opacity" aria-label="Karma's GitHub">
              <Image src="https://github.com/show-karma/gap-app-v2/blob/dev/public/logo/karma-gap-logo.png?raw=true" alt="GitHub" width={24} height={24} />
            </Link>
          </div>
          </div>
        </section> */}

        {/* Projects In Development */}
        <section id="projects-in-development" className="w-full max-w-5xl mt-8 bg-gradient-to-br from-black/80 to-black-20 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Projects In Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-8">
            {[
              {
                name: "DeCleanup dApp",
                preview: "/images/decleanup.png",
                logo: "https://avatars.githubusercontent.com/u/170521953?s=200&v=4",
                description: "A decentralized platform for organizing and tokenizing cleanups. Version 2 is in progress. ",
                links: {
                  landingPage: "https://decleanup.net/",
                  twitter: "https://x.com/DeCleanupNet",
                  telegram: "https://t.me/DecentralizedCleanup",
                  github: "https://github.com/DeCleanup-Network"
                }
              },
              {
                name: "Regen Bazaar",
                logo: "https://avatars.githubusercontent.com/u/196631779?s=96&v=4",
                preview: "/images/regen-bazaar.png",
                description: "A platform for nonprofits to apply for RWI tokenization and for buyers to find tokenized RWI they want to purchased.",
                links: {
                  landingPage: "https://regenbazaar.com/",
                  demo: "https://demo.regenbazaar.com/",
                  twitter: "https://x.com/RegenBazaar",
                  presentation: "https://www.canva.com/design/DAGXq0haF_Y/4_8NIQ5niLD_saONKTuYig/view",
                  karma: "https://gap.karmahq.xyz/project/t.me/regen_bazaar",
                  github: "https://github.com/regen-bazaar"
                }
              },
            ].map((project) => (
              <div key={project.name} className="bg-black/70 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 flex flex-col items-center text-center animate-fade-in transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(0,255,255,0.25)] hover:border-teal-400 focus-within:scale-105 focus-within:shadow-[0_8px_32px_0_rgba(0,255,255,0.25)] focus-within:border-teal-400 cursor-pointer">

                <Image src={project.logo} alt={project.name + ' Logo'} width={96} height={96} className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full mb-4 border-4 border-teal-400 shadow-lg bg-white object-cover" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.name}</h3>
                <p className="mb-4 text-sm sm:text-base text-white/90 px-2">{project.description}</p>
                <div className="flex flex-wrap gap-3 sm:gap-4 mt-2 justify-center">
                  {[
                    {
                      key: 'website',
                      icon: <Image src="https://cdn-icons-png.flaticon.com/128/4305/4305021.png" alt="Website" width={20} height={20} className="invert sm:w-6 sm:h-6" />,
                      ariaLabel: 'Website',
                    },
                    {
                      key: 'landingPage',
                      icon: <Image src="https://cdn-icons-png.flaticon.com/128/4305/4305021.png" alt="Landing Page" width={20} height={20} className="sm:w-6 sm:h-6" />,
                      ariaLabel: 'Landing Page',
                    },
                    {
                      key: 'karma',
                      icon: <Image src="https://github.com/show-karma/gap-app-v2/blob/dev/public/logo/karma-gap-logo.png?raw=true" alt="Landing Page" width={20} height={20} className="sm:w-6 sm:h-6"/>,
                      ariaLabel: 'Landing Page',
                    },
                    {
                      key: 'demo',
                      icon: <svg width="20" height="20" className="sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>,
                      ariaLabel: 'Demo',
                    },
                    {
                      key: 'twitter',
                      icon: <svg width="20" height="20" className="sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.21 0-.423-.016-.634A9.936 9.936 0 0 0 24 4.557z"/></svg>,
                      ariaLabel: 'X / Twitter',
                    },
                    {
                      key: 'telegram',
                      icon: <svg width="20" height="20" className="sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm4.93 7.36l-1.43 6.77c-.11.48-.39.6-.78.37l-2.16-1.59-1.04 1c-.12.12-.23.23-.47.23l.17-2.38 4.34-3.92c.19-.17-.04-.27-.29-.1l-5.37 3.38-2.31-.72c-.5-.16-.51-.5.1-.73l9.02-3.48c.42-.16.79.1.65.7z"/></svg>,
                      ariaLabel: 'Telegram',
                    },
                    {
                      key: 'github',
                      icon: <svg width="20" height="20" className="sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.153-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>,
                      ariaLabel: 'GitHub',
                    },
                    {
                      key: 'presentation',
                      icon: <svg width="20" height="20" className="sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/></svg>,
                      ariaLabel: 'Presentation',
                    },
                  ].map(linkType => {
                    const url = getLink(project.links, linkType.key);
                    return url ? (
                      <Link
                        key={linkType.key}
                        href={url}
                        target="_blank"
                        className="hover:text-teal-300 transition-colors touch-manipulation"
                        aria-label={linkType.ariaLabel}
                      >
                        {linkType.icon}
                      </Link>
                    ) : null;
                  })}
                                  {project.preview && (
                  <Image
                    src={project.preview}
                    alt={`${project.name} website preview`}
                    width={600}
                    height={160}
                    className="rounded-lg shadow mb-4 w-full h-32 sm:h-40 object-cover"
                  />
                )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Litepapers for Future Project */}
        <section id="litepapers" className="w-full max-w-5xl mt-8 bg-gradient-to-br from-black/80 to-black-20 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Future Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {[
              {
                name: "RWI Rank",
                // logo: "https://avatars.githubusercontent.com/u/145981044?s=200&v=4",
                description: "A platform to reward crypto users for interacting with dApps boosting real world impact. Track your impact, earn a score, and unlock onchain perks while driving positive change.",
                links: {
                  website: "https://github.com/EcoSynthesisX/RWI-Rank-Litepaper",
                }
              },
              {
                name: "Circularity dApp",
                // logo: "https://avatars.githubusercontent.com/u/145981044?s=200&v=4",
                description: "A pilot in Koh Phangan, Thailand, connecting locals, businesses, and nonprofits in unite ecosystem. Earn NFTs and rewards while building a circular economy.",
                links: {
                  website:"https://github.com/EcoSynthesisX/Circularity-Litepaper",
                }
              }
            ].map((project) => (
              <div key={project.name} className="bg-black/70 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 flex flex-col items-center text-center animate-fade-in transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(0,255,255,0.25)] hover:border-teal-400 focus-within:scale-105 focus-within:shadow-[0_8px_32px_0_rgba(0,255,255,0.25)] focus-within:border-teal-400 cursor-pointer">
                {/* <Image src={project.logo} alt={project.name + ' Logo'} width={96} height={96} className="w-24 h-24 rounded-full mb-4 border-4 border-teal-400 shadow-lg bg-white object-cover" /> */}
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.name}</h3>
                <p className="mb-4 text-sm sm:text-base text-white/90 px-2">{project.description}</p>
                <div className="flex flex-wrap gap-3 sm:gap-4 mt-2 justify-center">
                  {[
                    {
                      key: 'website',
                      icon: <Image src="https://cdn-icons-png.flaticon.com/128/4305/4305021.png" alt="Website" width={20} height={20} className="invert sm:w-6 sm:h-6" />,
                      ariaLabel: 'Website',
                    },
                    {
                      key: 'landingPage',
                      icon: <Image src="https://cdn-icons-png.flaticon.com/128/4305/4305021.png" alt="Landing Page" width={20} height={20} className="invert sm:w-6 sm:h-6" />,
                      ariaLabel: 'Landing Page',
                    },
                    {
                      key: 'demo',
                      icon: <svg width="20" height="20" className="sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>,
                      ariaLabel: 'Demo',
                    },
                    {
                      key: 'twitter',
                      icon: <svg width="20" height="20" className="sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.21 0-.423-.016-.634A9.936 9.936 0 0 0 24 4.557z"/></svg>,
                      ariaLabel: 'X / Twitter',
                    },
                    {
                      key: 'telegram',
                      icon: <svg width="20" height="20" className="sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm4.93 7.36l-1.43 6.77c-.11.48-.39.6-.78.37l-2.16-1.59-1.04 1c-.12.12-.23.23-.47.23l.17-2.38 4.34-3.92c.19-.17-.04-.27-.29-.1l-5.37 3.38-2.31-.72c-.5-.16-.51-.5.1-.73l9.02-3.48c.42-.16.79.1.65.7z"/></svg>,
                      ariaLabel: 'Telegram',
                    },
                  ].map(linkType => {
                    const url = getLink(project.links, linkType.key);
                    return url ? (
                      <Link
                        key={linkType.key}
                        href={url}
                        target="_blank"
                        className="hover:text-teal-300 transition-colors touch-manipulation"
                        aria-label={linkType.ariaLabel}
                      >
                        {linkType.icon}
                      </Link>
                    ) : null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

                {/* Impact Product Collection */}
          <section id="impact-products" className="w-full max-w-5xl mt-8 bg-gradient-to-br from-black/80 to-black/20 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Impact Product Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-8">
            {[
              {
                name: "Clean Phangan",
                logo: "https://pbs.twimg.com/profile_images/1700744561138737152/ncHXMdDT_400x400.jpg",
                description: " Tokenized nonprofit real world impact for funding and engagement, proving the concept of tokenized RWI",
                links: {
                  twitter: "https://twitter.com/decleanup",
                  telegram: "https://t.me/decleanup",
                  github: "https://github.com/decleanup",
                  website: "https://cp.impactproduct.xyz"
                },
                preview: "/images/cleanPhangan_web.png",
                workDone: [
                  "205+ Clean-up Operations",
                  "90+ tons of waste collected",
                  "5,000+ individuals participated",
                  "20+ tons sent to recycling"
                ]
              }
              ,
              {
                name: "Eco Thailand Foundation",
                logo: "EcoThailandLogo.png",
                description: "A decentralized platform for organizing and rewarding real-world environmental cleanups.",
                links: {
                  // twitter: "https://twitter.com/decleanup",
                  telegram: "https://web.telegram.org/a/#-1002094600518",
                  // github: "https://github.com/decleanup",
                  website: "https://et.impactproduct.xyz/",
                },
                preview:"/images/ecoThailand.png",
                workDone: [
                  "5+ gardens established",
                  "3+ workshops",
                  "5 sites zoned",
                  "5 trees identified",
                  "1,000+ students engaged",
                  "42 rai surveyed",
                  "200 trees identified",
                  "5+ eco programs",
                  "2.5 tons of CO2 saved",
                  "20+ entity engaged",
                  "300+ entities participated"
                ]
              }
            ].map((project) => (
              <div key={project.name} className="bg-black/70 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 flex flex-col items-center text-center animate-fade-in transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(0,255,255,0.25)] hover:border-teal-400 focus-within:scale-105 focus-within:shadow-[0_8px_32px_0_rgba(0,255,255,0.25)] focus-within:border-teal-400 cursor-pointer">
                <Image src={project.logo} alt={project.name + ' Logo'} width={96} height={96} className="w-20 h-18 sm:w-30 sm:h-34 rounded-e mb-4 bg-white object-cover" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.name}</h3>
                <p className="mb-4 text-sm sm:text-base text-white/90 px-2">{project.description}</p>
                {project.workDone && (
                  <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {project.workDone.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="bg-teal-900/30 rounded-md p-2 text-white/90 text-xs border border-teal-500/30 hover:border-teal-400/50 transition-colors"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex flex-wrap gap-3 sm:gap-4 mt-2 justify-center">
                  {[
                    {
                      key: 'website',
                      icon: <Image src="https://cdn-icons-png.flaticon.com/128/4305/4305021.png" alt="Website" width={20} height={20} className="invert sm:w-6 sm:h-6" />,
                      ariaLabel: 'Website',
                    },
                    {
                      key: 'landingPage',
                      icon: <Image src="https://cdn-icons-png.flaticon.com/128/4305/4305021.png" alt="Landing Page" width={20} height={20} className="invert sm:w-6 sm:h-6" />,
                      ariaLabel: 'Landing Page',
                    },
                    {
                      key: 'karma',
                      icon: <Image src="https://github.com/show-karma/gap-app-v2/blob/dev/public/logo/karma-gap-logo.png" alt="Landing Page" width={20} height={20} className="sm:w-6 sm:h-6"/>,
                      ariaLabel: 'Landing Page',
                    },
                    {
                      key: 'demo',
                      icon: <svg width="20" height="20" className="sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>,
                      ariaLabel: 'Demo',
                    },
                    {
                      key: 'twitter',
                      icon: <svg width="20" height="20" className="sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.21 0-.423-.016-.634A9.936 9.936 0 0 0 24 4.557z"/></svg>,
                      ariaLabel: 'X / Twitter',
                    },
                    {
                      key: 'telegram',
                      icon: <svg width="20" height="20" className="sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm4.93 7.36l-1.43 6.77c-.11.48-.39.6-.78.37l-2.16-1.59-1.04 1c-.12.12-.23.23-.47.23l.17-2.38 4.34-3.92c.19-.17-.04-.27-.29-.1l-5.37 3.38-2.31-.72c-.5-.16-.51-.5.1-.73l9.02-3.48c.42-.16.79.1.65.7z"/></svg>,
                      ariaLabel: 'Telegram',
                    },
                    {
                      key: 'github',
                      icon: <svg width="20" height="20" className="sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.153-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>,
                      ariaLabel: 'GitHub',
                    },
                    {
                      key: 'presentation',
                      icon: <svg width="20" height="20" className="sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/></svg>,
                      ariaLabel: 'Presentation',
                    },
                  ].map(linkType => {
                    const url = getLink(project.links, linkType.key);
                    return url ? (
                      <Link
                        key={linkType.key}
                        href={url}
                        target="_blank"
                        className="hover:text-teal-300 transition-colors touch-manipulation"
                        aria-label={linkType.ariaLabel}
                      >
                        {linkType.icon}
                      </Link>
                    ) : null;
                  })}
                                                    {project.preview && (
                  <Image
                    src={project.preview}
                    alt={`${project.name} website preview`}
                    width={600}
                    height={160}
                    className="rounded-lg shadow mb-4 w-full h-32 sm:h-40 object-cover"
                  />
                )}
                </div>
              </div>
            ))}
        </div>
      </section>

        {/* Interviews & Public Presentations Section */}
        <section id="media" className="w-full max-w-5xl mt-8 px-2 sm:px-0">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Media & Socials</h2>

          {/* Videos */}
          <h3 id="Videos" className="text-xl sm:text-2xl font-semibold mb-4"></h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
            {interviews.filter(item => item.type === "video").map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue/40 to-blue-900/80 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col gap-4">
                <div className="aspect-w-16 aspect-h-9 w-full rounded overflow-hidden mb-2">
                  <iframe
                    src={item.embed}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-48 sm:h-56 rounded"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1">
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline text-teal-200">
                    {item.title}
                  </a>
                </h3>
                {item.description && <p className="text-white/80 text-sm">{item.description}</p>}
              </div>
            ))}
          </div>

          {/* Podcasts */}
          <h3 id="Podcasts" className="text-xl sm:text-2xl font-semibold mb-4"></h3>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-8">
            {interviews.filter(item => item.type === "podcast").map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue/40 to-blue-900/80 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col gap-4 max-w-2xl mx-auto">
                <div className="aspect-w-16 aspect-h-9 w-full rounded overflow-hidden mb-2">
                  <Image
                    src="/images/podcast.png"
                    alt={`Podcast cover for ${item.title}`}
                    width={600}
                    height={160}
                    className="w-full h-36 sm:h-44 rounded object-cover"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1">
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline text-teal-200">
                    {item.title}
                  </a>
                </h3>
                {item.description && <p className="text-white/80 text-sm">{item.description}</p>}
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-2 text-teal-300 underline text-sm">Listen to Podcast</a>
              </div>
            ))}
          </div>

          {/* Articles */}
          <h3 id="Articles" className="text-xl sm:text-2xl font-semibold mb-4"></h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {interviews.filter(item => item.type === "article").map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue/80 to-blue-900/20 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col gap-4">
                <h3 className="text-lg sm:text-xl font-semibold mb-1">
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline text-teal-200">
                    {item.title}
                  </a>
                </h3>
                {item.description && <p className="text-white/80 text-sm">{item.description}</p>}
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-2 text-teal-300 underline text-sm">Read Article</a>
              </div>
            ))}
          </div>
      </section>

        {/* Backers Section */}
        <section id="backers" className="w-full max-w-6xl mx-auto mt-16 mb-12 px-2 sm:px-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Our Backers</h2>
          <div className="relative rounded-2xl overflow-hidden" style={{background: 'linear-gradient(120deg, #232946 60%, #b2b2a6 100%)'}}>
            {/* <div className="absolute inset-0 z-0">
              <Image src="/images/backers-bg.png" alt="Backers background" fill className="object-cover opacity-60" />
            </div> */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8">
              {[
                { name: 'Octant', logo: 'https://regenbazaar.com/cgi/image/1__zSXRYZ491Lw2ksRrhapl.svg?width=256&quality=80&format=auto', url: 'https://octant.app/' },
                { name: 'Celo Public Good', logo: 'https://regenbazaar.com/cgi/image/2_fNiHrhi58AKiXFSdmpyXu.svg?width=128&quality=80&format=auto', url: 'https://celo.org/' },
                { name: 'Gitcoin QF', logo: 'https://regenbazaar.com/cgi/image/3_ejPKxCMoXuyAm96DKfXhN.svg?width=128&quality=80&format=auto', url: 'https://gitcoin.co/' },
                { name: 'Giveth QF', logo: 'https://regenbazaar.com/cgi/image/4_rAW6Qgy70O-wa_bzDVQbY.svg?width=128&quality=80&format=auto', url: 'https://giveth.io/' },
                { name: 'Meta Pool DAO', logo: 'https://regenbazaar.com/cgi/image/5_BayeddYPBV5dmL86QApTJ.svg?width=256&quality=80&format=auto', url: 'https://metapool.app/' },
                { name: 'Arbitrum DAO', logo: 'https://regenbazaar.com/cgi/image/6_U5R0QMAxOAhId3IqEs-DV.svg?width=128&quality=80&format=auto', url: 'https://arbitrum.foundation/' },
              ].map((backer) => (
                <a key={backer.name} href={backer.url} target="_blank" rel="noopener noreferrer" className="bg-[#5a82a2] rounded-xl p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-teal-400 touch-manipulation">
                  <Image src={backer.logo} alt={backer.name + ' logo'} width={48} height={48} className="mb-2 sm:mb-4 w-12 h-12 sm:w-16 sm:h-16" />
                  <span className="text-sm sm:text-lg md:text-xl font-bold text-white font-backers text-center tracking-wide">{backer.name}</span>
                </a>
              ))}
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-3xl text-center text-sm text-muted-foreground mt-8 px-4">
          &copy; {new Date().getFullYear()} EcoSynthesisX.<br />
        <Link href="https://gap.karmahq.xyz/project/ecosynthesisx-web3-public-good-studio" target="_blank" className="underline">More info</Link>
      </footer>
      </main>
    </div>
  );
}

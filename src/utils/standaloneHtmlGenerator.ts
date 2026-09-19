import { IMAGES, PILLARS, ROADMAP_PHASES, ECOSYSTEM_PARTNERS } from '../data/content';

export function generateStandaloneHtml(): string {
  return `<!doctype html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Southern Cone Tech Bridge NYC</title>
    <meta name="description" content="A 2-week NYC residency and structured follow-through for ambitious startups ready to build in the United States." />
    <meta property="og:title" content="Southern Cone Tech Bridge NYC" />
    <meta property="og:description" content="A 2-week NYC residency and structured follow-through for ambitious startups ready to build in the United States." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />

    <!-- Google Fonts: Hanken Grotesk & Newsreader -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,300..800;1,300..800&family=Newsreader:ital,opsz,wght@0,6..72,300..700;1,6..72,300..700&display=swap" rel="stylesheet">

    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              ivory: '#fbf9f4',
              'ivory-subtle': '#f4f2ec',
              ink: '#0c0e12',
              cyan: '#00d2ff',
            },
            fontFamily: {
              sans: ['"Hanken Grotesk"', 'sans-serif'],
              serif: ['"Newsreader"', 'Georgia', 'serif'],
            }
          }
        }
      }
    </script>
    <style>
      body {
        font-family: 'Hanken Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
        background-color: #fbf9f4;
        color: #1b1c19;
      }
      ::selection {
        background-color: #00d2ff;
        color: #0c0e12;
      }
    </style>
  </head>
  <body class="bg-[#fbf9f4] text-[#1b1c19] antialiased selection:bg-[#00d2ff] selection:text-[#0c0e12]">

    <!-- ================= TOP NAVIGATION ================= -->
    <header class="sticky top-0 z-40 w-full bg-[#fbf9f4]/95 backdrop-blur-xs border-b border-[#0c0e12]/15">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-2.5">
          <span class="w-2.5 h-2.5 bg-[#00d2ff] inline-block"></span>
          <span class="font-semibold tracking-[0.14em] text-xs sm:text-sm text-[#0c0e12] uppercase">
            SOUTHERN CONE TECH BRIDGE NYC
          </span>
        </a>

        <!-- Nav items -->
        <nav class="hidden md:flex items-center space-x-8">
          <a href="#program" class="text-xs font-semibold tracking-[0.14em] text-[#45474b] hover:text-[#0c0e12] uppercase transition-colors">PROGRAM</a>
          <a href="#experience" class="text-xs font-semibold tracking-[0.14em] text-[#45474b] hover:text-[#0c0e12] uppercase transition-colors">EXPERIENCE</a>
          <a href="#network" class="text-xs font-semibold tracking-[0.14em] text-[#45474b] hover:text-[#0c0e12] uppercase transition-colors">NETWORK</a>
          <a href="#founders" class="text-xs font-semibold tracking-[0.14em] text-[#45474b] hover:text-[#0c0e12] uppercase transition-colors">FOUNDERS</a>
        </nav>

        <!-- CTA Button -->
        <a href="#cta" class="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-[0.14em] uppercase bg-[#0c0e12] text-white hover:bg-[#00d2ff] hover:text-[#0c0e12] transition-colors rounded-none">
          APPLY FOR NEXT COHORT
        </a>
      </div>
    </header>

    <!-- ================= HERO SECTION (PLATE I) ================= -->
    <section class="relative w-full border-b border-[#0c0e12]/15 bg-[#fbf9f4] pt-12 pb-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Left Column -->
          <div class="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 bg-[#00d2ff] shrink-0"></span>
              <span class="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#5e636e] uppercase">
                COHORT RESIDENCY · NEW YORK EDITION
              </span>
            </div>

            <h1 class="text-4xl sm:text-6xl lg:text-[4.25rem] font-semibold text-[#0c0e12] leading-[1.05] tracking-[-0.035em] uppercase">
              YOUR BRIDGE TO THE <span class="text-[#00d2ff]">U.S.</span> MARKET.
            </h1>

            <p class="font-serif text-xl sm:text-2xl text-[#23262b] leading-[1.6] max-w-xl">
              A 2-week NYC residency and structured follow-through for ambitious startups ready to build in the United States.
            </p>

            <div class="flex flex-wrap items-center gap-4 pt-2">
              <a href="#cta" class="inline-flex items-center gap-2.5 px-6 py-4 bg-[#0c0e12] text-white text-xs font-semibold tracking-[0.14em] uppercase hover:bg-[#00d2ff] hover:text-[#0c0e12] transition-colors rounded-none">
                APPLY FOR THE NEXT COHORT &rarr;
              </a>
              <a href="#experience" class="inline-flex items-center justify-center px-6 py-4 bg-transparent border border-[#0c0e12] text-[#0c0e12] text-xs font-semibold tracking-[0.14em] uppercase hover:bg-[#f4f2ec] transition-colors rounded-none">
                HOW IT WORKS
              </a>
            </div>

            <div class="pt-6 border-t border-[#0c0e12]/10 flex items-center gap-2 text-[11px] sm:text-xs font-medium tracking-[0.08em] text-[#5e636e] uppercase">
              <span class="w-2 h-2 rounded-full bg-[#00d2ff] inline-block shrink-0"></span>
              <span>8 STARTUPS PER COHORT · 2 WEEKS IN NYC · 6 MONTHS STRUCTURED FOLLOW-THROUGH</span>
            </div>
          </div>

          <!-- Right Column: Plate I -->
          <div class="lg:col-span-5 flex flex-col">
            <div class="border border-[#0c0e12]/20 bg-[#0c0e12]">
              <img
                src="${IMAGES.plate1}"
                alt="Founder Workspace, Midtown Manhattan"
                class="w-full aspect-[4/3] object-cover grayscale contrast-110 brightness-95"
              />
              <div class="w-full bg-[#0c0e12] px-4 py-2.5 flex items-center justify-between border-t border-[#0c0e12]/40">
                <span class="text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] uppercase text-[#eae8e3]">
                  PLATE I — FOUNDER WORKSPACE · MIDTOWN MANHATTAN
                </span>
                <span class="w-1.5 h-1.5 bg-[#00d2ff]"></span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ================= STRATEGIC PERSPECTIVE (DARK / PLATE II) ================= -->
    <section id="program" class="w-full bg-[#0c0e12] text-[#fbf9f4] border-b border-[#0c0e12] py-16 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div>
          <div class="flex items-center gap-2 mb-6">
            <span class="w-2.5 h-2.5 bg-[#00d2ff] shrink-0"></span>
            <span class="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#00d2ff] uppercase">
              STRATEGIC PERSPECTIVE
            </span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div class="lg:col-span-7">
              <h2 class="text-3xl sm:text-5xl font-semibold leading-[1.1] tracking-[-0.03em] uppercase text-white">
                THE U.S. MARKET ISN'T FAR AWAY.
              </h2>
              <p class="font-serif italic text-2xl sm:text-3xl text-[#00d2ff] mt-2">
                Getting in is the hard part.
              </p>
            </div>

            <div class="lg:col-span-5">
              <p class="font-serif text-base sm:text-lg text-[#dbdad5] leading-[1.7]">
                Your product may already work. Your revenue may already be growing. But breaking into the United States requires unyielding presence, vetted executive introductions, Delaware legal integration, and immediate credibility on the ground.
              </p>
            </div>
          </div>
        </div>

        <!-- Wide Photographic Plate II -->
        <div class="border border-white/15 bg-black">
          <div class="relative overflow-hidden aspect-[16/7] sm:aspect-[21/9]">
            <img
              src="${IMAGES.plate2}"
              alt="Commercial Strategy Session, Manhattan"
              class="w-full h-full object-cover grayscale contrast-125 brightness-90"
            />
          </div>
          <div class="bg-[#14171d] px-4 sm:px-6 py-3 border-t border-white/10 flex items-center justify-between">
            <span class="text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] uppercase text-[#c6c6cb]">
              PLATE II — COMMERCIAL STRATEGY SESSION · MANHATTAN
            </span>
            <div class="flex items-center gap-2">
              <span class="text-[10px] tracking-[0.12em] text-[#76777b] uppercase hidden sm:inline">NEUEHOUSE MADISON SQUARE</span>
              <span class="w-1.5 h-1.5 bg-[#00d2ff]"></span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= PHYSICAL ANCHOR (417 5TH AVE) ================= -->
    <section class="w-full bg-[#fbf9f4] border-b border-[#0c0e12]/15 py-16 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-2 mb-8">
          <span class="w-2.5 h-2.5 bg-[#00d2ff] shrink-0"></span>
          <span class="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#5e636e] uppercase">
            PHYSICAL ANCHOR
          </span>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div class="lg:col-span-4 space-y-6">
            <div>
              <h2 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0c0e12] leading-[1.08] tracking-[-0.03em] uppercase">
                COME TO NEW YORK.
              </h2>
              <p class="font-serif italic text-2xl sm:text-3xl text-[#5e636e] mt-1">
                Build from here.
              </p>
            </div>

            <div class="pt-6 border-t border-[#0c0e12]/15">
              <span class="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#76777b] block mb-1">
                PERMANENT ANCHOR
              </span>
              <h3 class="text-sm font-semibold tracking-[0.06em] text-[#0c0e12] uppercase">
                TRANSATLANTIC INNOVATION HUB
              </h3>
              <p class="text-xs text-[#5e636e] tracking-[0.04em]">
                Midtown Manhattan
              </p>
            </div>
          </div>

          <div class="lg:col-span-4 space-y-4 font-serif text-base sm:text-lg text-[#23262b] leading-[1.7]">
            <p>
              The program operates directly from TIH at 417 5th Avenue. For two intensive weeks, founders establish working headquarters in Midtown, sit face-to-face across the table with enterprise customers, and compress years of remote cold outreach into concrete institutional handshakes.
            </p>
            <p>
              New York is not a commercial vacation. It is a demanding proving ground. Being physically rooted on 5th Avenue eliminates remote friction and embeds your venture inside the most liquid market in the world.
            </p>
          </div>

          <div class="lg:col-span-4 space-y-6">
            <div class="space-y-1">
              <span class="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#76777b] block">
                HEADQUARTERS COORDINATES
              </span>
              <p class="text-sm font-bold tracking-[0.08em] text-[#0c0e12] uppercase">
                417 5TH AVENUE
              </p>
              <p class="text-xs text-[#45474b] tracking-[0.04em] uppercase">
                MIDTOWN MANHATTAN
              </p>
              <p class="text-xs text-[#45474b] tracking-[0.04em] uppercase">
                NEW YORK, NY 10016
              </p>
            </div>

            <div class="border border-[#00d2ff] bg-[#f4f2ec] p-5 sm:p-6 space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#00677f]">
                  OPERATIONAL FACILITY
                </span>
                <span class="w-1.5 h-1.5 bg-[#00d2ff]"></span>
              </div>
              <p class="text-xs sm:text-[13px] font-semibold tracking-[0.06em] text-[#0c0e12] leading-[1.5] uppercase">
                BOARDROOMS, EXECUTIVE SUITES, PRIVATE BREAKOUT ROOMS, AND HIGH-DENSITY CONVENING HALLS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= FOUNDER IN MOTION (4 PILLARS + ARCHIVAL PLATE) ================= -->
    <section id="experience" class="w-full bg-[#fbf9f4] border-b border-[#0c0e12]/15 py-16 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div>
          <div class="flex items-center gap-2 mb-4">
            <span class="w-2.5 h-2.5 bg-[#00d2ff] shrink-0"></span>
            <span class="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#5e636e] uppercase">
              FOUNDER IN MOTION
            </span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-semibold text-[#0c0e12] leading-[1.08] tracking-[-0.03em] uppercase">
            TWO WEEKS IN NEW YORK.
          </h2>
          <p class="font-serif italic text-2xl sm:text-3xl text-[#5e636e] mt-1">
            A lot can happen when you're in the room.
          </p>
        </div>

        <!-- 4 Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          ${PILLARS.map(p => `
          <div class="border border-[#0c0e12]/15 bg-[#fbf9f4] hover:bg-[#f4f2ec] transition-colors p-6 flex flex-col justify-between space-y-6">
            <div>
              <span class="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#00677f] block mb-2">
                ${p.number} · ${p.category}
              </span>
              <h3 class="text-lg font-semibold tracking-[0.04em] text-[#0c0e12] uppercase mb-3">
                ${p.title}
              </h3>
              <p class="font-serif text-sm sm:text-base text-[#45474b] leading-[1.65]">
                ${p.description}
              </p>
            </div>
            <div class="w-6 h-[1px] bg-[#0c0e12]/20"></div>
          </div>
          `).join('')}
        </div>

        <!-- Split Plate -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border border-[#0c0e12]/15 bg-[#fbf9f4]">
          <div class="lg:col-span-7 bg-[#0c0e12] relative overflow-hidden">
            <img
              src="${IMAGES.archivalPlate2}"
              alt="Archival Plate II, 417 5th Ave Boardroom"
              class="w-full h-full object-cover min-h-[300px] lg:min-h-[420px] grayscale contrast-120 brightness-95"
            />
          </div>

          <div class="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-8 bg-[#fbf9f4]">
            <div class="space-y-4">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 bg-[#00d2ff]"></span>
                <span class="text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] text-[#00677f] uppercase">
                  PRIVATE WORKING ENVIRONMENT
                </span>
              </div>

              <h3 class="text-xl sm:text-2xl lg:text-[1.75rem] font-semibold text-[#0c0e12] leading-[1.2] tracking-[-0.02em] uppercase">
                NO STAGES. NO REHEARSED DEMO DAYS. DIRECT, HONEST EVALUATIONS.
              </h3>

              <p class="font-serif text-base text-[#45474b] leading-[1.7]">
                We reject the spectacle of crowded three-minute pitch competitions. Every interaction is designed around real business discussions with decision-makers who evaluate pricing, contracts, and unit economics.
              </p>
            </div>

            <div class="pt-6 border-t border-[#0c0e12]/10 flex items-center justify-between">
              <span class="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#76777b]">
                ARCHIVAL PLATE II · 417 5TH AVE
              </span>
              <span class="w-1.5 h-1.5 bg-[#00d2ff]"></span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= INCORPORATION INFRASTRUCTURE ================= -->
    <section class="w-full bg-[#fbf9f4] border-b border-[#0c0e12]/15 py-16 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div>
          <div class="flex items-center gap-2 mb-4">
            <span class="w-2.5 h-2.5 bg-[#00d2ff] shrink-0"></span>
            <span class="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#5e636e] uppercase">
              INCORPORATION INFRASTRUCTURE
            </span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-semibold text-[#0c0e12] leading-[1.08] tracking-[-0.03em] uppercase">
            YOUR U.S. PRESENCE STARTS HERE.
          </h2>
          <p class="font-serif italic text-2xl sm:text-3xl text-[#5e636e] mt-1">
            From regional market traction to an operational Delaware C-Corp entity.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="border border-[#0c0e12]/15 bg-[#f4f2ec] p-8 flex flex-col justify-between space-y-6">
            <div>
              <span class="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#76777b] block mb-2">ORIGIN POINT</span>
              <h3 class="text-lg font-bold tracking-[0.06em] text-[#0c0e12] uppercase mb-4">HOME MARKET</h3>
              <p class="font-serif text-sm sm:text-base text-[#45474b] leading-[1.65]">
                Proven product-market fit, enterprise traction, and validated revenue across South America.
              </p>
            </div>
            <div class="pt-4 border-t border-[#0c0e12]/10 flex justify-between items-center text-[10px] uppercase font-semibold text-[#76777b]">
              <span>TIER-1 LATAM TRACTION</span>
              <span>01</span>
            </div>
          </div>

          <div class="border border-[#0c0e12]/15 bg-[#f4f2ec] p-8 flex flex-col justify-between space-y-6">
            <div>
              <span class="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#00677f] block mb-2">CORPORATE VEHICLE</span>
              <h3 class="text-lg font-bold tracking-[0.06em] text-[#0c0e12] uppercase mb-4">DELAWARE C-CORP</h3>
              <p class="font-serif text-sm sm:text-base text-[#45474b] leading-[1.65]">
                U.S. tax structuring, corporate banking, clean cap table, and legal entity formed during residency.
              </p>
            </div>
            <div class="pt-4 border-t border-[#0c0e12]/10 flex justify-between items-center text-[10px] uppercase font-semibold text-[#00677f]">
              <span>RESIDENCY FORMATION</span>
              <span>02</span>
            </div>
          </div>

          <div class="border border-[#0c0e12]/15 bg-[#f4f2ec] p-8 flex flex-col justify-between space-y-6">
            <div>
              <span class="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#76777b] block mb-2">EXPANSION MANDATE</span>
              <h3 class="text-lg font-bold tracking-[0.06em] text-[#0c0e12] uppercase mb-4">U.S. ENTERPRISE MARKET</h3>
              <p class="font-serif text-sm sm:text-base text-[#45474b] leading-[1.65]">
                Direct dollar invoicing, domestic customer contracts, and American venture syndication.
              </p>
            </div>
            <div class="pt-4 border-t border-[#0c0e12]/10 flex justify-between items-center text-[10px] uppercase font-semibold text-[#76777b]">
              <span>SCALE ACCELERATION</span>
              <span>03</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= VALUE & 8 STARTUPS BLOCK ================= -->
    <section id="founders" class="w-full bg-[#fbf9f4] border-b border-[#0c0e12]/15 py-16 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div class="lg:col-span-7 space-y-8">
            <div>
              <h2 class="text-3xl sm:text-5xl font-semibold text-[#0c0e12] leading-[1.08] tracking-[-0.03em] uppercase">
                YOU'VE BUILT THE COMPANY.
              </h2>
              <span class="text-3xl sm:text-5xl font-semibold text-[#00b8f5] leading-[1.08] tracking-[-0.03em] uppercase block mt-1">
                NOW BUILD THE NEXT MARKET.
              </span>
            </div>

            <p class="font-serif text-base sm:text-lg text-[#23262b] leading-[1.7] max-w-2xl">
              We do not accept raw prototypes or speculative pitches. Southern Cone Tech Bridge NYC is engineered specifically for growth-stage technology ventures with documented revenue, proven product-market fit in South America, and an unmistakable strategic reason to operate in the United States.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#0c0e12]/15">
              <div class="space-y-1">
                <span class="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#76777b]">SELECTIVITY</span>
                <p class="text-sm font-bold tracking-[0.06em] text-[#0c0e12] uppercase">STRICT CAP OF 8 STARTUPS</p>
              </div>

              <div class="space-y-1">
                <span class="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#76777b]">ECONOMIC MODEL</span>
                <p class="text-sm font-bold tracking-[0.06em] text-[#0c0e12] uppercase">1% ENDOWMENT STAKE · NO FEES</p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="bg-[#0c0e12] text-white p-10 sm:p-14 border border-[#0c0e12] flex flex-col justify-center items-center text-center space-y-4">
              <div class="text-8xl sm:text-9xl font-bold text-[#00d2ff] leading-none">8</div>
              <h3 class="text-sm sm:text-base font-semibold tracking-[0.16em] uppercase text-white">
                STARTUPS PER COHORT
              </h3>
              <p class="font-serif text-sm sm:text-base text-[#dbdad5] leading-[1.6] max-w-xs">
                An intimate room of vetted peers. Two weeks of total immersion, followed by half a year of active execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= ECOSYSTEM ARCHITECTURE (DARK) ================= -->
    <section id="network" class="w-full bg-[#0c0e12] text-white border-b border-[#0c0e12] py-16 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-2 mb-8">
          <span class="w-2.5 h-2.5 bg-[#00d2ff] shrink-0"></span>
          <span class="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#00d2ff] uppercase">
            ECOSYSTEM ARCHITECTURE
          </span>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div class="lg:col-span-5 space-y-6">
            <h2 class="text-3xl sm:text-5xl font-semibold text-white leading-[1.08] tracking-[-0.03em] uppercase">
              YOU DON'T BUILD YOUR U.S. NETWORK FROM ZERO.
            </h2>
            <p class="font-serif text-base sm:text-lg text-[#dbdad5] leading-[1.7]">
              The bridge is backed by a permanent coalition of physical infrastructure, proven New York accelerators, the premier Latino executive network, and diplomatic chambers.
            </p>
          </div>

          <div class="lg:col-span-7 divide-y divide-white/15 border-t border-b border-white/15">
            ${ECOSYSTEM_PARTNERS.map(partner => `
            <div class="py-7 first:pt-4 last:pb-4 space-y-2.5">
              <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 class="text-sm sm:text-base font-semibold tracking-[0.06em] text-white uppercase">${partner.name}</h3>
                <span class="text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-[#00d2ff] shrink-0">${partner.role}</span>
              </div>
              <p class="font-serif text-sm sm:text-base text-[#c6c6cb] leading-[1.65]">
                ${partner.description}
              </p>
            </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- ================= STRUCTURED CONTINUITY ================= -->
    <section class="w-full bg-[#fbf9f4] border-b border-[#0c0e12]/15 py-16 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div>
          <div class="flex items-center gap-2 mb-4">
            <span class="w-2.5 h-2.5 bg-[#00d2ff] shrink-0"></span>
            <span class="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#5e636e] uppercase">
              STRUCTURED CONTINUITY
            </span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-semibold text-[#0c0e12] leading-[1.08] tracking-[-0.03em] uppercase">
            TWO WEEKS IS THE START.
          </h2>
          <span class="text-3xl sm:text-5xl font-semibold text-[#00b8f5] leading-[1.08] tracking-[-0.03em] uppercase block mt-1">
            SIX MONTHS IS THE JOURNEY.
          </span>
          <p class="font-serif italic text-xl sm:text-2xl text-[#5e636e] mt-3">
            The work continues long after the return flight.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          ${ROADMAP_PHASES.map(phase => `
          <div class="p-6 flex flex-col justify-between space-y-6 border ${
            phase.isHighlight
              ? 'border-[#00d2ff] bg-[#fbf9f4] ring-1 ring-[#00d2ff]'
              : 'border-[#0c0e12]/15 bg-[#fbf9f4]'
          }">
            <div>
              <div class="flex items-center justify-between border-b border-[#0c0e12]/10 pb-3 mb-4">
                <span class="text-[11px] font-bold tracking-[0.16em] uppercase text-[#0c0e12]">${phase.phase}</span>
                <span class="text-[10px] font-semibold tracking-[0.12em] px-2 py-0.5 uppercase ${
                  phase.isHighlight ? 'bg-[#00d2ff] text-[#0c0e12]' : 'bg-[#f0eee9] text-[#5e636e]'
                }">${phase.duration}</span>
              </div>
              <h3 class="text-base font-bold tracking-[0.06em] text-[#0c0e12] uppercase mb-3">${phase.title}</h3>
              <p class="font-serif text-sm text-[#45474b] leading-[1.65]">${phase.description}</p>
            </div>
            <div class="pt-4 border-t border-[#0c0e12]/10 flex items-center justify-between">
              <span class="text-[10px] uppercase tracking-[0.12em] text-[#76777b]">MILESTONE OBJECTIVE</span>
              <span class="w-2 h-2 ${phase.isHighlight ? 'bg-[#00d2ff]' : 'bg-[#0c0e12]/30'}"></span>
            </div>
          </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ================= CTA BANNER ================= -->
    <section id="cta" class="relative w-full overflow-hidden bg-[#0c0e12] text-white py-24 sm:py-32">
      <div class="absolute inset-0 z-0">
        <img
          src="${IMAGES.ctaBg}"
          alt="Manhattan street view at dusk"
          class="w-full h-full object-cover object-center grayscale contrast-125 brightness-[0.22]"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-transparent to-[#0c0e12]/80"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 bg-[#00d2ff] shrink-0"></span>
          <span class="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#00d2ff] uppercase">
            NEXT COHORT SELECTION
          </span>
        </div>

        <div class="space-y-4 max-w-3xl">
          <h2 class="text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-[-0.035em] uppercase text-white">
            READY TO BUILD IN THE U.S.?
          </h2>
          <p class="font-serif italic text-2xl sm:text-3xl text-[#dbdad5]">
            Bring the company you've built. Come to New York. See what happens next.
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-4 pt-4">
          <a
            href="mailto:admissions@southernconetechbridge.org?subject=Application%20Next%20Cohort"
            class="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0c0e12] text-xs font-semibold tracking-[0.14em] uppercase hover:bg-[#00d2ff] transition-colors rounded-none"
          >
            APPLY FOR THE NEXT COHORT &rarr;
          </a>
          <a
            href="mailto:team@southernconetechbridge.org?subject=Inquiry"
            class="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/40 text-white text-xs font-semibold tracking-[0.14em] uppercase hover:bg-white hover:text-[#0c0e12] transition-colors rounded-none"
          >
            TALK TO THE TEAM
          </a>
        </div>

        <div class="pt-6 border-t border-white/15 text-[11px] font-medium tracking-[0.1em] text-[#a0a3aa] uppercase">
          APPLICATIONS REVIEWED ON A ROLLING BASIS · STRICT CAP OF 8 COMPANIES
        </div>
      </div>
    </section>

    <!-- ================= FOOTER ================= -->
    <footer class="w-full bg-[#fbf9f4] border-t border-[#0c0e12]/15 pt-16 pb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          <div class="md:col-span-5 space-y-3">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 bg-[#00d2ff]"></span>
              <span class="font-semibold tracking-[0.14em] text-xs text-[#0c0e12] uppercase">
                SOUTHERN CONE TECH BRIDGE NYC
              </span>
            </div>
            <p class="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#76777b]">
              Montevideo · Buenos Aires · Santiago · New York
            </p>
            <p class="font-serif text-sm text-[#45474b] leading-[1.65] max-w-sm pt-2">
              An institutional framework connecting Tier-1 technological leadership from South America's Southern Cone to New York capital markets and venture infrastructure.
            </p>
          </div>

          <div class="md:col-span-3 space-y-2">
            <h4 class="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#0c0e12]">
              MANHATTAN HEADQUARTERS
            </h4>
            <div class="font-serif text-sm text-[#45474b] leading-[1.6]">
              <p>417 5th Avenue</p>
              <p>Midtown Manhattan</p>
              <p>New York, NY 10016</p>
            </div>
          </div>

          <div class="md:col-span-4 space-y-2">
            <h4 class="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#0c0e12]">
              INSTITUTIONAL GOVERNANCE
            </h4>
            <p class="font-serif text-sm text-[#45474b] leading-[1.65]">
              Convened with the cooperation of regional bilateral chambers, research foundations, and metropolitan venture partner councils across the Americas.
            </p>
          </div>
        </div>

        <div class="pt-8 border-t border-[#0c0e12]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] uppercase text-[#76777b]">
          <div>
            © 2025 SOUTHERN CONE TECH BRIDGE NYC. ALL RIGHTS RESERVED.
          </div>
          <div class="flex items-center gap-4 text-[#0c0e12]">
            <span>URUGUAY</span>
            <span>·</span>
            <span>ARGENTINA</span>
            <span>·</span>
            <span>CHILE</span>
          </div>
        </div>
      </div>
    </footer>

  </body>
</html>`;
}

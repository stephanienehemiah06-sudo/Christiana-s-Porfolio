"use client";
/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Cocktails & Mocktails",
    description:
      "Beautifully crafted drinks designed to bring colour, flavour and character to every celebration.",
    image: "/cocktails.jpeg",
  },
  {
    number: "02",
    title: "Desserts",
    description:
      "Elegant sweet treats thoughtfully prepared and beautifully presented for memorable occasions.",
    image: "/dessert.jpeg",
  },
  {
    number: "03",
    title: "Canapés",
    description:
      "Delicate savoury bites created for stylish entertaining and effortless celebrations.",
    image: "/canapes.jpeg",
  },
];

const menuItems = [
  {
    number: "01",
    category: "Cocktails & Mocktails",
    title: "Signature Drinks",
    description:
      "Beautifully presented drinks created to complement your celebration.",
  },
  {
    number: "02",
    category: "Cocktails & Mocktails",
    title: "Fresh Mocktails",
    description:
      "Refreshing alcohol-free creations with vibrant flavours and elegant presentation.",
  },
  {
    number: "03",
    category: "Desserts",
    title: "Desserts",
    description:
      "Sweet creations made to add something special to your occasion.",
  },
  {
    number: "04",
    category: "Canapés & Small Bites",
    title: "Savoury Canapés",
    description:
      "Elegant bite-sized treats made for entertaining and sharing.",
  },
];

const occasions = [
  "Weddings",
  "Birthdays",
  "Bridal Showers",
  "Corporate Events",
  "Private Parties",
];

const faqs = [
  {
    question: "How far in advance should I book?",
    answer:
      "Booking requirements can vary depending on your event. Contact Trina's Treat directly with your event date and requirements.",
  },
  {
    question: "Can the menu be customised?",
    answer:
      "Menu options can be discussed based on your event and preferences. Contact Trina's Treat directly to discuss your requirements.",
  },
  {
    question: "Do you provide event setup?",
    answer:
      "For setup details and available options, please contact Trina's Treat directly.",
  },
  {
    question: "How do I request the rate card?",
    answer:
      "You can view the rate card on this website or contact Trina's Treat directly for further information.",
  },
  {
    question: "How can I book Trina's Treat?",
    answer:
      "The easiest way to get started is to contact Trina's Treat through WhatsApp, phone or email.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#211014] text-[#f6f3ee]">

      {/* =========================================================
          NAVIGATION
      ========================================================== */}

      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
          <nav className="rounded-full border border-white/10 bg-[#211014]/80 px-4 py-2.5 shadow-2xl backdrop-blur-xl sm:px-6">
            <div className="flex items-center justify-between gap-5">

              {/* LOGO */}

              <a
                href="#home"
                onClick={closeMenu}
                className="flex shrink-0 items-center"
              >
                <img
                  src="/logo.jpeg"
                  alt="Trina's Treat"
                  className="h-11 w-[78px] rounded-md object-cover object-center sm:h-12 sm:w-[84px]"
                />
              </a>

              {/* DESKTOP NAVIGATION */}

              <div className="hidden items-center gap-6 lg:flex">
                <a
                  href="#home"
                  className="text-[11px] uppercase tracking-[0.16em] text-white/70 transition hover:text-[#e8a384]"
                >
                  Home
                </a>

                <a
                  href="#services"
                  className="text-[11px] uppercase tracking-[0.16em] text-white/70 transition hover:text-[#e8a384]"
                >
                  Services
                </a>

                <a
                  href="#menu"
                  className="text-[11px] uppercase tracking-[0.16em] text-white/70 transition hover:text-[#e8a384]"
                >
                  Menu
                </a>

                <a
                  href="#work"
                  className="text-[11px] uppercase tracking-[0.16em] text-white/70 transition hover:text-[#e8a384]"
                >
                  Our Work
                </a>

                <a
                  href="#about"
                  className="text-[11px] uppercase tracking-[0.16em] text-white/70 transition hover:text-[#e8a384]"
                >
                  About
                </a>

                <a
                  href="#faq"
                  className="text-[11px] uppercase tracking-[0.16em] text-white/70 transition hover:text-[#e8a384]"
                >
                  FAQ
                </a>

                <a
                  href="#contact"
                  className="text-[11px] uppercase tracking-[0.16em] text-white/70 transition hover:text-[#e8a384]"
                >
                  Contact
                </a>
              </div>

              {/* DESKTOP CTA */}

              <a
                href="https://wa.me/2348068934276"
                target="_blank"
                rel="noreferrer"
                className="hidden rounded-full bg-[#e8a384] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#32151f] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f0b295] lg:block"
              >
                Book Trina's Treat
              </a>

              {/* MOBILE MENU BUTTON */}

              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
              >
                <span className="text-xl">
                  {menuOpen ? "×" : "☰"}
                </span>
              </button>
            </div>

            {/* MOBILE NAVIGATION */}

            {menuOpen && (
              <div className="mt-4 border-t border-white/10 pb-3 pt-4 lg:hidden">
                <div className="flex flex-col">

                  <a
                    href="#home"
                    onClick={closeMenu}
                    className="border-b border-white/5 py-3 text-xs uppercase tracking-[0.16em] text-white/75"
                  >
                    Home
                  </a>

                  <a
                    href="#services"
                    onClick={closeMenu}
                    className="border-b border-white/5 py-3 text-xs uppercase tracking-[0.16em] text-white/75"
                  >
                    Services
                  </a>

                  <a
                    href="#menu"
                    onClick={closeMenu}
                    className="border-b border-white/5 py-3 text-xs uppercase tracking-[0.16em] text-white/75"
                  >
                    Menu
                  </a>

                  <a
                    href="#work"
                    onClick={closeMenu}
                    className="border-b border-white/5 py-3 text-xs uppercase tracking-[0.16em] text-white/75"
                  >
                    Our Work
                  </a>

                  <a
                    href="#about"
                    onClick={closeMenu}
                    className="border-b border-white/5 py-3 text-xs uppercase tracking-[0.16em] text-white/75"
                  >
                    About
                  </a>

                  <a
                    href="#faq"
                    onClick={closeMenu}
                    className="border-b border-white/5 py-3 text-xs uppercase tracking-[0.16em] text-white/75"
                  >
                    FAQ
                  </a>

                  <a
                    href="#contact"
                    onClick={closeMenu}
                    className="border-b border-white/5 py-3 text-xs uppercase tracking-[0.16em] text-white/75"
                  >
                    Contact
                  </a>

                  <a
                    href="https://wa.me/2348068934276"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 rounded-full bg-[#e8a384] px-5 py-3.5 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-[#32151f]"
                  >
                    Book Trina's Treat
                  </a>
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>


      {/* =========================================================
          HERO
          IMPORTANT: hero.jpeg MUST NOT BE MODIFIED
      ========================================================== */}

      <section
        id="home"
        className="relative flex min-h-screen items-end overflow-hidden"
      >

        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero.jpeg"
          aria-hidden="true"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* ONLY CSS OVERLAYS */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#211014]/95 via-[#211014]/65 to-[#211014]/25" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#211014] via-transparent to-[#211014]/20" />

        {/* HERO CONTENT */}

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-40 sm:px-8 lg:px-12 lg:pb-28">

          <div className="max-w-4xl">

            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.42em] text-[#e8a384]">
              Trina's Treat
            </p>

            <h1 className="font-serif text-5xl leading-[0.94] tracking-[-0.035em] sm:text-7xl lg:text-[92px]">
              Beautifully made
              <br />
              <span className="italic text-[#e8a384]">
                for your best moments.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
              Premium cocktails, desserts and canapés thoughtfully created
              for celebrations worth remembering.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="https://wa.me/2348068934276"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#e8a384] px-7 py-4 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-[#32151f] transition duration-300 hover:-translate-y-1"
              >
                Plan Your Event
              </a>

              <a
                href="#services"
                className="rounded-full border border-white/25 bg-white/5 px-7 py-4 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition duration-300 hover:border-[#e8a384] hover:text-[#e8a384]"
              >
                Explore Our Services
              </a>

            </div>
          </div>

          <div className="mt-16 flex items-center gap-4 text-[9px] uppercase tracking-[0.3em] text-white/45">
            <span className="h-px w-12 bg-[#e8a384]/60" />
            Crafted for beautiful occasions
          </div>

        </div>
      </section>


      {/* =========================================================
          INTRODUCTION
      ========================================================== */}

      <section className="bg-[#f6f3ee] px-5 py-24 text-[#32151f] sm:px-8 lg:px-12 lg:py-32">

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          <div>

            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#8c5c5c]">
              The Experience
            </p>

            <h2 className="font-serif text-5xl leading-[0.98] tracking-tight sm:text-6xl">
              More than catering.
              <br />
              <span className="italic text-[#8c5c5c]">
                It's part of the experience.
              </span>
            </h2>

          </div>

          <div className="max-w-xl lg:ml-auto">

            <p className="text-lg leading-8 text-[#6d5b52]">
              Trina's Treat brings together beautiful drinks, delicious
              desserts, savoury bites and thoughtful event experiences —
              creating details that make celebrations feel even more special.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">

              {[
                "Cocktails",
                "Mocktails",
                "Desserts",
                "Canapés",
              ].map((item) => (
                <div
                  key={item}
                  className="border-t border-[#32151f]/15 pt-4 text-xs font-semibold uppercase tracking-[0.14em]"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SERVICES
      ========================================================== */}

      <section
        id="services"
        className="bg-[#32151f] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end">

            <div>

              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#e8a384]">
                What We Create
              </p>

              <h2 className="font-serif text-5xl leading-none sm:text-6xl lg:text-7xl">
                Beautifully made.
                <br />
                <span className="italic text-[#e8a384]">
                  Thoughtfully served.
                </span>
              </h2>

            </div>

            <p className="max-w-sm text-sm leading-6 text-white/55">
              From refreshing drinks to beautifully presented bites, every
              offering is created with the occasion in mind.
            </p>

          </div>


          {/* SERVICE CARDS */}

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {services.map((service) => (

              <article
                key={service.number}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035]"
              >

                <div className="relative overflow-hidden">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-[390px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#211014]/80 via-transparent to-transparent" />

                  <span className="absolute left-6 top-6 rounded-full border border-white/20 bg-[#211014]/50 px-4 py-2 text-[9px] tracking-[0.2em] text-[#e8a384] backdrop-blur-md">
                    {service.number}
                  </span>

                </div>

                <div className="p-7">

                  <h3 className="font-serif text-3xl text-[#f6f3ee]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/55">
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#e8a384]"
                  >
                    Explore Service
                    <span className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </a>

                </div>

              </article>

            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          MENU
      ========================================================== */}

      <section
        id="menu"
        className="bg-[#211014] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#e8a384]">
                The Menu
              </p>

              <h2 className="font-serif text-5xl leading-none sm:text-6xl">
                The Trina's
                <br />
                <span className="italic text-[#e8a384]">
                  Treat Menu.
                </span>
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
                Explore our cocktails, mocktails, desserts and canapés,
                thoughtfully created for your occasion.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">

                <a
                  href="https://wa.me/2348068934276"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#e8a384] px-6 py-3.5 text-center text-[10px] font-semibold uppercase tracking-[0.15em] text-[#32151f]"
                >
                  Request the Full Menu
                </a>

                <a
                  href="#rate-card"
                  className="rounded-full border border-white/15 px-6 py-3.5 text-center text-[10px] font-semibold uppercase tracking-[0.15em] text-white/80 transition hover:border-[#e8a384] hover:text-[#e8a384]"
                >
                  View Rate Card
                </a>

              </div>

            </div>


            {/* MENU LIST */}

            <div>

              <div className="border-t border-white/15">

                {menuItems.map((item) => (

                  <div
                    key={`${item.category}-${item.title}`}
                    className="group border-b border-white/10 py-7"
                  >

                    <div className="grid gap-4 sm:grid-cols-[70px_1fr]">

                      <span className="text-xs tracking-[0.2em] text-[#e8a384]/70">
                        {item.number}
                      </span>

                      <div>

                        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35">
                          {item.category}
                        </p>

                        <h3 className="mt-2 font-serif text-3xl transition group-hover:text-[#e8a384]">
                          {item.title}
                        </h3>

                        <p className="mt-2 max-w-lg text-sm leading-6 text-white/45">
                          {item.description}
                        </p>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          RATE CARD
      ========================================================== */}

      <section
        id="rate-card"
        className="bg-[#eee7df] px-5 py-24 text-[#32151f] sm:px-8 lg:px-12 lg:py-32"
      >

        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">

            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#8c5c5c]">
              Pricing
            </p>

            <h2 className="font-serif text-5xl sm:text-6xl">
              The Rate Card
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#6d5b52]">
              Explore the current Trina's Treat rate card for available
              offerings and pricing.
            </p>

          </div>


          {/* RATE CARD IMAGE */}

          <div className="overflow-hidden rounded-[2rem] border border-[#32151f]/10 bg-[#f6f3ee] p-3 shadow-2xl sm:p-5">

            <iframe
              src="/trina-rate-card.pdf"
              title="Trina's Treat rate card"
              className="h-[650px] w-full"
            />

          </div>


          <div className="mt-8 text-center">

            <a
              href="/trina-rate-card.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-[#32151f] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f6f3ee] transition hover:-translate-y-1"
            >
              View Full Rate Card
            </a>

          </div>

        </div>
      </section>


      {/* =========================================================
          OUR WORK
      ========================================================== */}

      <section
        id="work"
        className="bg-[#f6f3ee] px-5 py-24 text-[#32151f] sm:px-8 lg:px-12 lg:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <div>

              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#8c5c5c]">
                Our Work
              </p>

              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl">
                The details
                <br />
                <span className="italic text-[#8c5c5c]">
                  make the moment.
                </span>
              </h2>

            </div>

            <p className="max-w-sm text-sm leading-6 text-[#6d5b52]">
              A glimpse into the drinks, desserts, canapés and celebrations
              brought to life by Trina's Treat.
            </p>

          </div>


          {/* GALLERY */}

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">

            {/* COCKTAILS */}

            <div className="group relative overflow-hidden rounded-[1.75rem] lg:col-span-7">

              <img
                src="/cocktails.jpeg"
                alt="Trina's Treat cocktails and mocktails"
                className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#211014]/75 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 text-white">

                <p className="text-[9px] uppercase tracking-[0.25em] text-[#e8a384]">
                  Drinks
                </p>

                <h3 className="mt-1 font-serif text-3xl">
                  Cocktails & Mocktails
                </h3>

              </div>

            </div>


            {/* DESSERTS */}

            <div className="group relative overflow-hidden rounded-[1.75rem] lg:col-span-5">

              <img
                src="/dessert.jpeg"
                alt="Trina's Treat desserts"
                className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#211014]/75 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 text-white">

                <p className="text-[9px] uppercase tracking-[0.25em] text-[#e8a384]">
                  Sweet
                </p>

                <h3 className="mt-1 font-serif text-3xl">
                  Desserts
                </h3>

              </div>

            </div>


            {/* CANAPÉS */}

            <div className="group relative overflow-hidden rounded-[1.75rem] lg:col-span-5">

              <img
                src="/canapes.jpeg"
                alt="Trina's Treat canapés"
                className="h-[400px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#211014]/75 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 text-white">

                <p className="text-[9px] uppercase tracking-[0.25em] text-[#e8a384]">
                  Bites
                </p>

                <h3 className="mt-1 font-serif text-3xl">
                  Canapés
                </h3>

              </div>

            </div>


            {/* EVENTS */}

            <div className="group relative overflow-hidden rounded-[1.75rem] lg:col-span-7">

              <img
                src="/events.jpeg"
                alt="Trina's Treat event experience"
                className="h-[400px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#211014]/75 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 text-white">

                <p className="text-[9px] uppercase tracking-[0.25em] text-[#e8a384]">
                  Experiences
                </p>

                <h3 className="mt-1 font-serif text-3xl">
                  Events
                </h3>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          EVENTS / OCCASIONS
      ========================================================== */}

      <section className="overflow-hidden bg-[#621f32] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#e8a384]">
                Event Experiences
              </p>

              <h2 className="font-serif text-5xl leading-none sm:text-6xl">
                Wherever the
                <br />
                moment takes you.
              </h2>

            </div>


            <div className="grid sm:grid-cols-2">

              {occasions.map((occasion, index) => (

                <div
                  key={occasion}
                  className="group border-t border-white/15 py-7"
                >

                  <div className="flex items-center justify-between gap-5">

                    <div className="flex items-center gap-5">

                      <span className="text-xs tracking-[0.2em] text-[#e8a384]">
                        0{index + 1}
                      </span>

                      <h3 className="font-serif text-3xl transition group-hover:text-[#e8a384]">
                        {occasion}
                      </h3>

                    </div>

                    <span className="text-xl text-white/30 transition group-hover:translate-x-1 group-hover:text-[#e8a384]">
                      →
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          ABOUT
      ========================================================== */}

      <section
        id="about"
        className="bg-[#211014] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">

          <div className="overflow-hidden rounded-[2rem]">

            <img
              src="/events.jpeg"
              alt="Trina's Treat event experience"
              className="h-[560px] w-full object-cover"
            />

          </div>


          <div className="lg:pl-8">

            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#e8a384]">
              About Trina's Treat
            </p>

            <h2 className="font-serif text-5xl leading-[1] sm:text-6xl">
              The Trina's Treat
              <br />
              <span className="italic text-[#e8a384]">
                experience.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-white/55">
              Beautiful presentation, delicious food and drinks, thoughtful
              preparation and attention to detail come together to help make
              your celebration feel special.
            </p>

            <p className="mt-5 text-base leading-8 text-white/55">
              Whether it is an intimate gathering or a larger occasion,
              Trina's Treat is designed to add something memorable to the
              experience.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full border border-[#e8a384]/50 px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#e8a384] transition hover:bg-[#e8a384] hover:text-[#32151f]"
            >
              Start Planning
            </a>

          </div>

        </div>
      </section>


      {/* =========================================================
          WHY TRINA'S TREAT
      ========================================================== */}

      <section className="bg-[#eee7df] px-5 py-24 text-[#32151f] sm:px-8 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14">

            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#8c5c5c]">
              Why Trina's Treat
            </p>

            <h2 className="font-serif text-5xl sm:text-6xl">
              Thoughtful details.
              <br />
              <span className="italic text-[#8c5c5c]">
                Beautiful experiences.
              </span>
            </h2>

          </div>


          <div className="grid gap-0 border-t border-[#32151f]/15 sm:grid-cols-2 lg:grid-cols-4">

            {[
              [
                "01",
                "Thoughtful Presentation",
                "Every detail is considered.",
              ],
              [
                "02",
                "Beautiful Flavours",
                "Food and drinks made to complement the occasion.",
              ],
              [
                "03",
                "Flexible Experiences",
                "Designed around the celebration.",
              ],
              [
                "04",
                "Memorable Moments",
                "Created to make gatherings feel special.",
              ],
            ].map(([number, title, description]) => (

              <div
                key={number}
                className="border-b border-[#32151f]/15 p-7 sm:border-r lg:min-h-[250px]"
              >

                <span className="text-xs tracking-[0.2em] text-[#8c5c5c]">
                  {number}
                </span>

                <h3 className="mt-12 font-serif text-2xl">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#6d5b52]">
                  {description}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          CUSTOMER EXPERIENCE / REACTIONS
          NO FAKE TESTIMONIALS
      ========================================================== */}

      <section className="bg-[#32151f] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">

          <div>

            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#e8a384]">
              Customer Experiences
            </p>

            <h2 className="font-serif text-5xl leading-[1] sm:text-6xl lg:text-7xl">
              Your celebration.
              <br />
              <span className="italic text-[#e8a384]">
                Their experience.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/55">
              Beautiful food, refreshing drinks and thoughtful details come
              together to create moments guests can enjoy and remember.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full border border-[#e8a384]/50 px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#e8a384] transition hover:bg-[#e8a384] hover:text-[#32151f]"
            >
              Create Your Moment
            </a>

          </div>


          <div className="overflow-hidden rounded-[2rem]">

            <img
              src="/customers.jpeg"
              alt="Trina's Treat customers"
              className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

        </div>
      </section>


      {/* =========================================================
          FAQ
      ========================================================== */}

      <section
        id="faq"
        className="bg-[#f6f3ee] px-5 py-24 text-[#32151f] sm:px-8 lg:px-12 lg:py-32"
      >

        <div className="mx-auto max-w-5xl">

          <div className="mb-12">

            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#8c5c5c]">
              FAQ
            </p>

            <h2 className="font-serif text-5xl sm:text-6xl">
              Frequently asked
              <br />
              <span className="italic text-[#8c5c5c]">
                questions.
              </span>
            </h2>

          </div>


          <div className="border-t border-[#32151f]/15">

            {faqs.map((faq, index) => {

              const isOpen = openFaq === index;

              return (

                <div
                  key={faq.question}
                  className="border-b border-[#32151f]/15"
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-6 py-7 text-left"
                  >

                    <span className="font-serif text-xl sm:text-2xl">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#32151f]/20 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>

                  </button>


                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] pb-7 opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >

                    <div className="overflow-hidden">

                      <p className="max-w-2xl text-sm leading-7 text-[#6d5b52]">
                        {faq.answer}
                      </p>

                    </div>

                  </div>

                </div>

              );
            })}

          </div>

        </div>
      </section>


      {/* =========================================================
          FINAL CONTACT / BOOKING
      ========================================================== */}

      <section
        id="contact"
        className="relative overflow-hidden bg-[#621f32] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#e8a384]/10" />

        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border border-[#e8a384]/10" />


        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.7fr] lg:items-center">

          <div>

            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#e8a384]">
              Let's Create
            </p>

            <h2 className="font-serif text-5xl leading-[0.95] sm:text-7xl">
              Let's make your
              <br />
              celebration
              <br />
              <span className="italic text-[#e8a384]">
                special.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-base leading-7 text-white/60">
              Tell us about your event and let's create something beautiful
              for your guests.
            </p>


            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="https://wa.me/2348068934276"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#e8a384] px-7 py-4 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-[#32151f] transition hover:-translate-y-1"
              >
                Chat on WhatsApp
              </a>

              <a
                href="mailto:trinastreatng@gmail.com"
                className="rounded-full border border-white/20 px-7 py-4 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition hover:border-[#e8a384] hover:text-[#e8a384]"
              >
                Send an Email
              </a>

            </div>

          </div>


          {/* QR CODE */}

          <div className="flex justify-center lg:justify-end">

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm">

              <div className="rounded-[1.5rem] bg-[#f6f3ee] p-5">

                <img
                  src="/qr-code.jpeg"
                  alt="Trina's Treat QR code"
                  className="h-52 w-52 object-contain sm:h-64 sm:w-64"
                />

              </div>

              <p className="mt-4 text-center text-[9px] uppercase tracking-[0.2em] text-white/45">
                Connect with Trina's Treat
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          CONTACT DETAILS
      ========================================================== */}

      <section className="bg-[#211014] px-5 py-16 sm:px-8 lg:px-12">

        <div className="mx-auto grid max-w-7xl gap-8 border-y border-white/10 py-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* WHATSAPP */}

          <a
            href="https://wa.me/2348068934276"
            target="_blank"
            rel="noreferrer"
            className="group"
          >

            <p className="text-[9px] uppercase tracking-[0.25em] text-white/35">
              WhatsApp
            </p>

            <p className="mt-2 text-sm text-white/75 transition group-hover:text-[#e8a384]">
              08068934276
            </p>

          </a>


          {/* PHONE */}

          <a
            href="tel:+2348068934276"
            className="group"
          >

            <p className="text-[9px] uppercase tracking-[0.25em] text-white/35">
              Phone
            </p>

            <p className="mt-2 text-sm text-white/75 transition group-hover:text-[#e8a384]">
              08068934276
            </p>

          </a>


          {/* EMAIL */}

          <a
            href="mailto:trinastreatng@gmail.com"
            className="group"
          >

            <p className="text-[9px] uppercase tracking-[0.25em] text-white/35">
              Email
            </p>

            <p className="mt-2 break-all text-sm text-white/75 transition group-hover:text-[#e8a384]">
              trinastreatng@gmail.com
            </p>

          </a>


          {/* INSTAGRAM */}

          <a
            href="https://www.instagram.com/trinastreat__/"
            target="_blank"
            rel="noreferrer"
            className="group"
          >

            <p className="text-[9px] uppercase tracking-[0.25em] text-white/35">
              Instagram
            </p>

            <p className="mt-2 text-sm text-white/75 transition group-hover:text-[#e8a384]">
              @trinastreat__
            </p>

          </a>

        </div>

      </section>


      {/* =========================================================
          FOOTER
      ========================================================== */}

      <footer className="bg-[#211014] px-5 pb-8 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col items-center justify-between gap-7 border-b border-white/10 pb-10 sm:flex-row">

            {/* LOGO */}

            <img
              src="/logo.jpeg"
              alt="Trina's Treat"
              className="h-14 w-[82px] rounded-md object-cover"
            />


            <p className="max-w-sm text-center text-xs leading-6 text-white/35 sm:text-right">
              Premium cocktails, desserts, canapés and event experiences
              thoughtfully created for beautiful moments.
            </p>

          </div>


          <div className="flex flex-col items-center justify-between gap-5 pt-7 text-[9px] uppercase tracking-[0.2em] text-white/30 sm:flex-row">

            <p>
              © 2026 Trina's Treat.
            </p>

            <div className="flex gap-5">

              <a
                href="#home"
                className="transition hover:text-[#e8a384]"
              >
                Back to Top
              </a>

              <a
                href="https://www.instagram.com/trinastreat__/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#e8a384]"
              >
                Instagram
              </a>

            </div>

          </div>

        </div>
      </footer>

    </main>
  );
}

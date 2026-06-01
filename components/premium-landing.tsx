"use client";

import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Calendar,
  Clapperboard,
  Compass,
  Instagram,
  Play,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
  Zap
} from "lucide-react";
import {
  motion,
  type Variants,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform
} from "framer-motion";
import { ComponentType, SVGProps, useEffect, useState } from "react";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

const whatsappHref =
  "https://wa.me/5543996365271?text=Ol%C3%A1%2C%20quero%20falar%20com%20a%20RP%20Marketing%20sobre%20posicionamento%20digital.";
const instagramHref =
  "https://www.instagram.com/rp_.marketing?igsh=bnhlazVtYmdsczJl&utm_source=qr";

const reveal: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: "easeOut" }
  }
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09
    }
  }
};

const services = [
  {
    icon: Instagram,
    title: "Gestão de redes sociais",
    copy: "Rotina, calendário, direção editorial e consistência para sua marca aparecer com intenção."
  },
  {
    icon: Clapperboard,
    title: "Criação de conteúdo",
    copy: "Reels, scripts, criativos e formatos que traduzem sua autoridade em atenção."
  },
  {
    icon: Target,
    title: "Tráfego pago",
    copy: "Campanhas para atrair demanda qualificada com leitura clara de funil e performance."
  },
  {
    icon: Sparkles,
    title: "Branding",
    copy: "Identidade verbal e visual para sua empresa ser lembrada, desejada e reconhecida."
  },
  {
    icon: Compass,
    title: "Posicionamento digital",
    copy: "Narrativa, promessa e percepção de valor alinhadas ao público que você quer conquistar."
  },
  {
    icon: TrendingUp,
    title: "Estratégia de crescimento",
    copy: "Plano de ação, ofertas, canais e métricas para escalar com decisão e previsibilidade."
  }
];

const highlights = [
  { icon: Rocket, title: "Estratégia antes de volume", copy: "Cada conteúdo nasce de posicionamento, oferta e contexto." },
  { icon: BarChart3, title: "Performance com leitura humana", copy: "Métricas conectadas ao que realmente move o negócio." },
  { icon: Zap, title: "Execução com ritmo", copy: "Velocidade de creator com acabamento de agência premium." }
];

const contentVideos = [
  {
    title: "Conteúdo interativo para redes sociais",
    label: "Conteúdo criativo",
    src: "/assets/projetos/video-interativo-s10.mp4",
    accent: "from-cyan-300 to-sky-500",
    posterLabel: "S10"
  },
  {
    title: "Conteúdo interativo para redes sociais",
    label: "Conteúdo criativo",
    src: "/assets/projetos/video-interativo-cobalt.mp4",
    accent: "from-sky-300 to-blue-500",
    posterLabel: "Projeto"
  },
  {
    title: "Videoclipe para redes sociais",
    label: "Captação e edição",
    src: "/assets/projetos/videoclipe.mp4",
    accent: "from-blue-300 to-cyan-500",
    posterLabel: "Reels"
  }
];

const resultImages = [
  {
    title: "Crescimento de visualizações",
    src: "/assets/projetos/resultado-crescimento.png",
    stat: "+36%",
    label: "crescimento comparado ao mês anterior"
  },
  {
    title: "Resumo mensal",
    src: "/assets/projetos/resultado-resumo.png",
    stat: "96 mil",
    label: "visualizações de reels e posts"
  }
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={reveal}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-cyan-100 shadow-neon backdrop-blur-xl"
    >
      <span className="h-2 w-2 rounded-full bg-neon shadow-[0_0_18px_rgba(0,191,255,0.85)]" />
      {children}
    </motion.div>
  );
}

function PremiumButton({
  children,
  href,
  variant = "primary",
  icon: IconComponent
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  icon?: Icon;
}) {
  return (
    <motion.a
      whileHover={{ y: -3, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      className={`group relative inline-flex min-h-14 items-center justify-center overflow-hidden rounded-full px-6 text-base font-semibold transition-colors ${
        variant === "primary"
          ? "bg-neon text-[#03101e] shadow-[0_0_34px_rgba(0,191,255,0.46)]"
          : "border border-white/14 bg-white/[0.055] text-white backdrop-blur-xl hover:border-cyan-200/45"
      }`}
    >
      <span className="absolute inset-y-0 -left-1/2 w-1/2 skew-x-12 bg-white/25 opacity-0 blur-md transition-opacity group-hover:animate-shimmer group-hover:opacity-100" />
      <span className="relative z-10 inline-flex items-center gap-2">
        {IconComponent ? <IconComponent className="h-5 w-5" /> : null}
        {children}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </motion.a>
  );
}

function WhatsAppLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" {...props}>
      <path
        d="M5.4 18.7 6.2 16A7.2 7.2 0 1 1 9 18.4l-3.6.3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.2.1.4-.1.6l-.4.5c-.1.2-.2.4 0 .6.4.8 1.3 1.7 2.2 2.1.2.1.4.1.6-.1l.5-.6c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.4.6 0 .7-.6 1.6-1.4 1.8-1.1.3-2.7-.1-4.5-1.4-1.7-1.3-2.9-3-3.1-4.3-.1-.8.3-1.5.8-1.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CursorLight() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const background = useMotionTemplate`radial-gradient(520px circle at ${mouseX}px ${mouseY}px, rgba(0,191,255,0.16), transparent 42%)`;
  const cursorX = useTransform(mouseX, (value) => value - 10);
  const cursorY = useTransform(mouseY, (value) => value - 10);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        aria-hidden
        style={{ background }}
        className="pointer-events-none fixed inset-0 z-30 hidden mix-blend-screen md:block"
      />
      <motion.div
        aria-hidden
        style={{ x: cursorX, y: cursorY }}
        className="pointer-events-none fixed left-0 top-0 z-50 hidden h-5 w-5 rounded-full border border-cyan-200/70 bg-cyan-100/10 shadow-[0_0_26px_rgba(0,191,255,0.7)] backdrop-blur-sm md:block"
      />
    </>
  );
}

function LoadingScreen() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoaded(true), 980);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: loaded ? 0 : 1, pointerEvents: loaded ? "none" : "auto" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="fixed inset-0 z-[60] grid place-items-center bg-night"
      aria-hidden={loaded}
    >
      <div className="relative grid place-items-center">
        <div className="absolute h-28 w-28 rounded-full border border-cyan-300/20" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.35, ease: "linear" }}
          className="h-28 w-28 rounded-full border border-transparent border-t-neon shadow-[0_0_42px_rgba(0,191,255,0.32)]"
        />
        <Image
          src="/assets/logo-rp-marketing.png"
          alt="RP Marketing"
          width={72}
          height={72}
          className="absolute h-16 w-16 rounded-full object-cover"
          priority
        />
      </div>
    </motion.div>
  );
}

function SmoothPhrase() {
  const phrases = ["conteúdo.", "estratégia.", "performance."];

  return (
    <span className="relative inline-grid min-w-[12ch] align-baseline text-cyan-200">
      <span className="invisible col-start-1 row-start-1">performance.</span>
      {phrases.map((phrase, index) => (
        <motion.span
          key={phrase}
          className="col-start-1 row-start-1"
          initial={{ opacity: index === 0 ? 1 : 0, y: 0, filter: "blur(0px)" }}
          animate={{
            opacity: [0, 1, 1, 0, 0],
            y: [8, 0, 0, -8, -8],
            filter: ["blur(6px)", "blur(0px)", "blur(0px)", "blur(6px)", "blur(6px)"]
          }}
          transition={{
            duration: 6.6,
            delay: index * 2.2,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.08, 0.28, 0.36, 1]
          }}
        >
          {phrase}
        </motion.span>
      ))}
    </span>
  );
}

function HeroSection() {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const y = useTransform(scrollYProgress, [0, 0.28], prefersReducedMotion ? [0, 0] : [0, 90]);
  const opacity = useTransform(scrollYProgress, [0, 0.22], [1, 0.35]);

  return (
    <section id="topo" className="relative min-h-[92svh] overflow-hidden pb-16 pt-5 sm:pb-24">
      <motion.div style={{ y, opacity }} className="absolute inset-0 hero-mask">
        <Image
          src="/assets/rp-hero-cinematic.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(0,191,255,0.16),transparent_26rem),linear-gradient(90deg,rgba(5,8,22,0.96)_0%,rgba(5,8,22,0.72)_46%,rgba(5,8,22,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-night to-transparent" />
      </motion.div>

      <div className="noise-layer pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-neon/15 blur-[96px]" />

      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <motion.a
          href="#topo"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="flex items-center gap-3"
          aria-label="RP Marketing"
        >
          <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-2xl border border-cyan-200/20 bg-black shadow-neon backdrop-blur-xl">
            <Image
              src="/assets/logo-rp-marketing.png"
              alt=""
              width={44}
              height={44}
              className="h-full w-full object-cover"
              priority
            />
          </span>
          <span className="hidden text-sm text-premium sm:block">RP Marketing</span>
        </motion.a>

        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="hidden items-center gap-7 text-sm text-premium md:flex"
        >
          <a className="transition-colors hover:text-white" href="#sobre">Sobre</a>
          <a className="transition-colors hover:text-white" href="#servicos">Serviços</a>
          <a className="transition-colors hover:text-white" href="#projetos">Projetos</a>
          <a className="transition-colors hover:text-white" href="#contato">Contato</a>
        </motion.nav>

        <motion.a
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18 }}
          href={whatsappHref}
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 text-sm font-semibold text-white backdrop-blur-xl transition-colors hover:border-cyan-200/50"
        >
          <WhatsAppLogo className="h-4 w-4 text-neon" />
          <span className="hidden sm:inline">WhatsApp</span>
        </motion.a>
      </header>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto grid max-w-7xl items-end gap-10 px-5 pb-4 pt-16 sm:px-8 sm:pt-24 lg:pt-28 2xl:grid-cols-[1fr_390px]"
      >
        <div className="max-w-4xl">
          <SectionLabel>Ryan Elizario & Pietro Freitas</SectionLabel>

          <motion.h1
            variants={reveal}
            className="mt-7 max-w-5xl text-balance font-display text-[2.8rem] font-semibold leading-[0.98] text-white sm:text-[4.15rem] lg:text-[5.1rem] xl:text-[5.65rem] 2xl:text-[6.2rem]"
          >
            Transformamos presença digital em posicionamento.
          </motion.h1>

          <motion.p
            variants={reveal}
            className="mt-6 max-w-2xl text-balance text-lg leading-8 text-slate-300 sm:text-xl"
          >
            Cuidamos do seu marketing enquanto você cuida do seu negócio, com{" "}
            <SmoothPhrase />
          </motion.p>

          <motion.div variants={reveal} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PremiumButton href={whatsappHref} icon={Calendar}>
              Agendar reunião
            </PremiumButton>
            <PremiumButton href="#projetos" variant="secondary" icon={Play}>
              Ver projetos
            </PremiumButton>
          </motion.div>

          <motion.div variants={reveal} className="mt-9 flex items-center gap-3">
            {[
              { label: "Instagram", icon: Instagram, href: instagramHref },
              { label: "WhatsApp", icon: WhatsAppLogo, href: whatsappHref }
            ].map((item) => (
              <motion.a
                whileHover={{ y: -4 }}
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.055] text-slate-200 backdrop-blur-xl transition-colors hover:border-cyan-200/55 hover:text-white"
              >
                <item.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={reveal}
          className="glass-panel neon-border hidden rounded-[28px] p-4 2xl:block"
        >
          <div className="rounded-3xl bg-[#061021]/80 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-premium">Posicionamento</p>
                <p className="mt-1 font-display text-2xl font-semibold text-white">Growth room</p>
              </div>
              <div className="grid h-11 w-11 place-items-center rounded-full bg-neon text-[#03101e] shadow-neon">
                <TrendingUp className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {["Conteúdo", "Criativos", "Funil", "Autoridade"].map((item, index) => (
                <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-200">{item}</span>
                    <span className="text-cyan-200">{78 + index * 5}%</span>
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/8">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${78 + index * 5}%` }}
                      transition={{ duration: 1.2, delay: 0.8 + index * 0.12 }}
                      className="h-full rounded-full bg-gradient-to-r from-neon to-emerald-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <motion.section
      id="sobre"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <SectionLabel>Sobre nós</SectionLabel>
          <motion.h2 variants={reveal} className="mt-6 font-display text-4xl font-semibold leading-tight text-white sm:text-6xl">
            Marketing com estratégia, estética e execução.
          </motion.h2>
        </div>

        <motion.p variants={reveal} className="text-lg leading-8 text-slate-300 sm:text-xl">
          Criamos estratégias, conteúdo e posicionamento para empresas que querem crescer no digital de forma profissional.
          A RP Marketing une narrativa, performance e acabamento visual para transformar atenção em valor percebido.
        </motion.p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <motion.article
            variants={reveal}
            whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
            key={item.title}
            className="glass-panel neon-border rounded-3xl p-6"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-neon">
              <item.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 leading-7 text-premium">{item.copy}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

function ServicesSection() {
  return (
    <motion.section
      id="servicos"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      className="relative overflow-hidden py-20 sm:py-28"
    >
      <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionLabel>Serviços</SectionLabel>
          <motion.h2 variants={reveal} className="mt-6 font-display text-4xl font-semibold leading-tight text-white sm:text-6xl">
            Uma operação digital pronta para elevar sua marca.
          </motion.h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              variants={reveal}
              whileHover={{
                y: -10,
                scale: 1.015,
                rotateX: index % 2 === 0 ? 2 : -2,
                rotateY: index % 2 === 0 ? -2 : 2
              }}
              key={service.title}
              className="group glass-panel neon-border min-h-[260px] rounded-3xl p-6 transition-colors hover:bg-white/[0.075]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0a1f36] text-neon shadow-[0_0_26px_rgba(0,191,255,0.22)] transition-transform group-hover:scale-110">
                  <service.icon className="h-7 w-7" />
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-400">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-7 font-display text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 leading-7 text-premium">{service.copy}</p>
              <div className="mt-7 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function VideoShowcaseCard({ item }: { item: (typeof contentVideos)[number] }) {
  return (
    <motion.article
      variants={reveal}
      whileHover={{ y: -6 }}
      className="glass-panel neon-border overflow-hidden rounded-3xl p-3"
    >
      <div className="relative aspect-[9/16] overflow-hidden rounded-[24px] bg-[#030812]">
        <div className={`absolute inset-x-8 top-8 h-32 rounded-full bg-gradient-to-r ${item.accent} opacity-25 blur-3xl`} />
        <video
          className="relative z-10 h-full w-full object-cover"
          src={item.src}
          controls
          playsInline
          preload="metadata"
        />
      </div>
      <div className="flex items-center justify-between gap-4 px-2 py-5">
        <div>
          <p className="text-sm text-cyan-100">{item.label}</p>
          <h3 className="mt-1 font-display text-2xl font-semibold text-white">{item.title}</h3>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cyan-300/12 text-cyan-100">
          <Play className="h-5 w-5" />
        </span>
      </div>
    </motion.article>
  );
}

function InstagramResultsPanel() {
  const [activeResult, setActiveResult] = useState(0);
  const result = resultImages[activeResult];

  return (
    <motion.article variants={reveal} className="glass-panel rounded-3xl p-4 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-cyan-100">Painel profissional</p>
          <h3 className="mt-2 font-display text-3xl font-semibold text-white">Crescimento no Instagram</h3>
        </div>
        <div className="flex gap-2">
          {resultImages.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveResult(index)}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                activeResult === index
                  ? "bg-neon text-[#03101e]"
                  : "border border-white/10 bg-white/[0.045] text-slate-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[0.86fr_1fr] lg:items-center">
        <div className="rounded-3xl border border-white/10 bg-[#030812] p-3">
          <div className="relative aspect-[9/16] overflow-hidden rounded-[22px] bg-black">
            <Image
              src={result.src}
              alt={result.title}
              fill
              sizes="(min-width: 1024px) 34vw, 92vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
          <p className="text-sm text-cyan-100">{result.title}</p>
          <strong className="mt-3 block font-display text-5xl font-semibold text-white">{result.stat}</strong>
          <p className="mt-3 leading-7 text-premium">{result.label}</p>
          <div className="mt-6 grid gap-3">
            {["Alcance", "Visualizações", "Crescimento"].map((item, index) => (
              <div key={item}>
                <div className="mb-2 flex justify-between text-sm text-slate-300">
                  <span>{item}</span>
                  <span>{82 + index * 6}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div
                    style={{ width: `${82 + index * 6}%` }}
                    className="h-full rounded-full bg-gradient-to-r from-neon to-emerald-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function BeforeAfterCharts() {
  return (
    <div className="mx-auto mt-12 grid max-w-7xl gap-4 px-5 sm:px-8 lg:grid-cols-2">
      <motion.div variants={reveal} className="glass-panel rounded-3xl p-5 sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold text-white">Antes</h3>
          <span className="rounded-full bg-white/8 px-3 py-1 text-sm text-premium">presença sem direção</span>
        </div>
        <div className="mt-6 grid gap-3">
          {[36, 48, 28].map((width) => (
            <div key={width} className="h-3 rounded-full bg-white/10">
              <div style={{ width: `${width}%` }} className="h-full rounded-full bg-slate-500/50" />
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={reveal} className="glass-panel neon-border rounded-3xl p-5 sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold text-white">Depois</h3>
          <span className="rounded-full bg-cyan-300/12 px-3 py-1 text-sm text-cyan-100">marca posicionada</span>
        </div>
        <div className="mt-6 grid gap-3">
          {[86, 74, 94].map((width) => (
            <div key={width} className="h-3 rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${width}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-neon to-emerald-300"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function ResultsSection() {
  return (
    <motion.section
      id="projetos"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      className="relative overflow-hidden py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-4xl">
          <div>
            <SectionLabel>Projetos</SectionLabel>
            <motion.h2 variants={reveal} className="mt-6 font-display text-4xl font-semibold leading-tight text-white sm:text-6xl">
              Conteúdos, campanhas e resultados reais em um só lugar.
            </motion.h2>
          </div>
        </div>

        <motion.div variants={stagger} className="mt-12 grid gap-5 lg:grid-cols-2">
          {contentVideos.map((item) => (
            <VideoShowcaseCard key={item.title} item={item} />
          ))}
        </motion.div>

        <div className="mt-5">
          <InstagramResultsPanel />
        </div>
      </div>

      <BeforeAfterCharts />
    </motion.section>
  );
}

function CtaSection() {
  return (
    <motion.section
      id="contato"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="absolute inset-x-8 top-24 h-56 rounded-full bg-cyan-300/15 blur-[110px]" />
      <motion.div
        variants={reveal}
        className="neon-border relative overflow-hidden rounded-[32px] bg-[#061022] p-6 shadow-[0_0_90px_rgba(0,191,255,0.18)] sm:p-12 lg:p-16"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_0%,rgba(0,191,255,0.26),transparent_28rem),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)]" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-cyan-200/20 bg-neon/10 blur-2xl" />
        <div className="relative max-w-4xl">
          <SectionLabel>Próximo passo</SectionLabel>
          <h2 className="mt-7 font-display text-5xl font-semibold leading-none text-white sm:text-7xl">
            Seu negócio merece ser visto.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Enquanto você foca na operação, nós posicionamos sua marca para crescer.
          </p>
          <div className="mt-9">
            <PremiumButton href={whatsappHref} icon={WhatsAppLogo}>
              Falar no WhatsApp
            </PremiumButton>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/8 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-2xl border border-cyan-200/20 bg-black shadow-neon">
              <Image
                src="/assets/logo-rp-marketing.png"
                alt=""
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </span>
            <div className="font-display text-2xl font-semibold text-white">RP Marketing</div>
          </div>
          <p className="mt-2 text-sm text-premium">Você cuida do seu negócio. A gente cuida do seu marketing.</p>
        </div>
        <div className="flex items-center gap-3">
          {[
            { label: "Instagram", icon: Instagram, href: instagramHref },
            { label: "WhatsApp", icon: WhatsAppLogo, href: whatsappHref }
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.045] text-slate-300 transition-colors hover:border-cyan-200/55 hover:text-white"
            >
              <item.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
        <p className="text-sm text-premium">© 2026 RP Marketing.</p>
      </div>
    </footer>
  );
}

export function PremiumLanding() {
  return (
    <main className="premium-scrollbar min-h-screen overflow-hidden bg-night text-pearl">
      <LoadingScreen />
      <CursorLight />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ResultsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}

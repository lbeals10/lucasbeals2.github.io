import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const FadeInSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-serif text-3xl md:text-4xl text-foreground section-divider mb-10">
    {children}
  </h2>
);

/* ---- ABOUT ---- */
export const AboutSection = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="container mx-auto px-6 max-w-3xl">
      <FadeInSection>
        <SectionHeading>About</SectionHeading>
      </FadeInSection>
      <FadeInSection delay={0.1}>
        <p className="text-lg text-foreground font-medium mb-6">
          CFO-level finance leadership grounded in execution, accountability, and measurable results.
        </p>
      </FadeInSection>
      <FadeInSection delay={0.15}>
        <p className="text-muted-foreground leading-relaxed mb-5">
          Experience spans manufacturing and media environments across public, private, and private equity-backed
          organizations. The focus remains consistent: create clarity early, strengthen operating rhythm, and ensure
          financial discipline supports strategic intent.
        </p>
      </FadeInSection>
      <FadeInSection delay={0.2}>
        <p className="text-muted-foreground leading-relaxed">
          Organizations navigating growth, integration, or transition benefit most from finance functions that illuminate
          risk, align incentives, and bring structure to decision-making.
        </p>
      </FadeInSection>
    </div>
  </section>
);

/* ---- APPROACH ---- */
const approachItems = [
  {
    title: "Create clarity early",
    desc: "Surface financial realities, forward risks, and performance drivers before decisions are forced.",
  },
  {
    title: "Reinforce operating cadence",
    desc: "Establish reporting rhythms that align leadership, operations, and accountability.",
  },
  {
    title: "Translate strategy into execution",
    desc: "Connect capital allocation, acquisition efforts, and initiatives to measurable outcomes.",
  },
  {
    title: "Steady the organization",
    desc: "Finance should illuminate the business, not simply measure it.",
  },
];

export const ApproachSection = () => (
  <section id="approach" className="py-24 md:py-32 bg-secondary/30">
    <div className="container mx-auto px-6 max-w-4xl">
      <FadeInSection>
        <SectionHeading>Approach</SectionHeading>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-12">
          Effective finance leadership during periods of change centers on three priorities: clarity, cadence, and execution.
        </p>
      </FadeInSection>

      <div className="grid md:grid-cols-2 gap-6">
        {approachItems.map((item, i) => (
          <FadeInSection key={i} delay={i * 0.08}>
            <div className="glass-card rounded-lg p-7 h-full hover:border-primary/30 transition-colors duration-300">
              <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
);

/* ---- EXPERIENCE ---- */
const experiences = [
  {
    period: "Current",
    title: "Global Finance Leadership — Multi-Entity Operations",
    desc: "Oversight of finance and FP&A across multiple operating entities, supporting international acquisitions, integration planning, treasury priorities, and organizational modernization.",
  },
  {
    period: "Prior",
    title: "Public Company Finance & Operations",
    desc: "Ownership of major operating P&Ls, development of executive KPI reporting, and consolidation initiatives designed to strengthen cost discipline and performance visibility.",
  },
  {
    period: "Prior",
    title: "Strategy & FP&A Buildout — PE-Backed Environment",
    desc: "Establishment of planning processes, board-level reporting cadence, and scalable forecasting infrastructure supporting growth and operational alignment.",
  },
];

export const ExperienceSection = () => (
  <section id="experience" className="py-24 md:py-32">
    <div className="container mx-auto px-6 max-w-3xl">
      <FadeInSection>
        <SectionHeading>Experience</SectionHeading>
      </FadeInSection>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <FadeInSection key={i} delay={i * 0.1}>
              <div className="relative pl-10">
                <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background" />
                <span className="text-xs font-sans uppercase tracking-[0.2em] text-primary mb-2 block">{exp.period}</span>
                <h3 className="font-serif text-xl text-foreground mb-3">{exp.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>

      <FadeInSection delay={0.3}>
        <p className="mt-10 text-sm text-muted-foreground">
          Full role detail available on{" "}
          <a href="https://www.linkedin.com/in/lucasbeals/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            LinkedIn
          </a>.
        </p>
      </FadeInSection>
    </div>
  </section>
);

/* ---- FRACTIONAL CFO ---- */
const services = [
  "Forecasting and operating model stabilization",
  "Cash flow visibility and capital allocation frameworks",
  "M&A readiness and post-close integration support",
  "Executive KPI dashboards and cadence establishment",
  "Finance team structure and capability development",
];

export const FractionalSection = () => (
  <section id="fractional" className="py-24 md:py-32 bg-secondary/30">
    <div className="container mx-auto px-6 max-w-4xl">
      <FadeInSection>
        <SectionHeading>Fractional CFO & Interim Finance Leadership</SectionHeading>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-10">
          Senior-level finance support for organizations requiring stability, discipline, and visibility without a full-time hire.
        </p>
      </FadeInSection>

      <div className="grid md:grid-cols-2 gap-10">
        <FadeInSection delay={0.1}>
          <ul className="space-y-4">
            {services.map((s, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-sm text-secondary-foreground leading-relaxed">{s}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted-foreground">
            Project-based or retainer structures available. Remote-first with on-site support as needed.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.15}>
          <div className="space-y-8">
            <div className="glass-card rounded-lg p-6">
              <h4 className="font-serif text-lg text-foreground mb-2">Best fit</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Owner-led, PE-backed, or growth-stage teams that need clearer visibility and stronger finance cadence.
              </p>
            </div>
            <div className="glass-card rounded-lg p-6">
              <h4 className="font-serif text-lg text-foreground mb-2">Engagements</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Confidential, structured, and execution-focused—designed to stabilize quickly and sustain improvements.
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  </section>
);

/* ---- CONTACT ---- */
export const ContactSection = () => (
  <section id="contact" className="py-24 md:py-32">
    <div className="container mx-auto px-6 max-w-xl">
      <FadeInSection>
        <SectionHeading>Start a Conversation</SectionHeading>
        <p className="text-muted-foreground leading-relaxed mb-10">
          For leadership opportunities or fractional support, confidential conversations are welcome.
          All inquiries are responded to personally.
        </p>
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            // Form submission placeholder
          }}
        >
          <div>
            <label className="block text-sm text-muted-foreground mb-2">Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-sm text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-sm text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-2">Message</label>
            <textarea
              rows={5}
              required
              className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-sm text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
              placeholder="How can I help?"
            />
          </div>
          <button
            type="submit"
            className="w-full px-7 py-3.5 text-sm font-medium rounded-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity tracking-wide"
          >
            Send message
          </button>
        </form>
      </FadeInSection>
    </div>
  </section>
);

/* ---- FOOTER ---- */
export const Footer = () => (
  <footer className="py-10 border-t border-border">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span className="font-serif text-foreground">Beals Advisory</span>
      <span>© {new Date().getFullYear()} All rights reserved.</span>
    </div>
  </footer>
);

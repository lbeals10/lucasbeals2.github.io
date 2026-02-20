import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 70% 30%, hsl(40 65% 55% / 0.15) 0%, transparent 60%)"
        }} />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left column */}
          <div className="lg:col-span-3">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs font-sans uppercase tracking-[0.3em] text-primary mb-8"
            >
              Finance Leader • Fractional CFO • Advisor
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] text-foreground mb-8"
            >
              Stability, clarity, and disciplined execution{" "}
              <span className="text-gradient-gold italic">when it matters most.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10"
            >
              Finance leadership designed to strengthen forecasting, restore operating cadence,
              and support confident capital decisions across growth, integration, and transformation environments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#contact"
                className="inline-flex items-center px-7 py-3.5 text-sm font-medium rounded-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity tracking-wide"
              >
                Start a Conversation
              </a>
              <a
                href="#experience"
                className="inline-flex items-center px-7 py-3.5 text-sm font-medium rounded-sm border border-border text-foreground hover:border-primary/50 hover:text-primary transition-colors tracking-wide"
              >
                View Experience
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground"
            >
              <span>Available for Fractional CFO and Consulting engagements.</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex items-center gap-2 text-sm text-muted-foreground mt-3"
            >
              <span>Based in Barrington, IL</span>
              <span className="text-primary">•</span>
              <a
                href="https://www.linkedin.com/in/lucasbeals/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Right column — value card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-2 glass-card rounded-lg p-8 mt-4"
          >
            <h2 className="font-serif text-2xl text-foreground mb-6">Where Value Is Created</h2>
            <ul className="space-y-4">
              {[
                "Establishing disciplined forecasting and cash visibility",
                "Strengthening executive and board-level reporting cadence",
                "Supporting acquisition diligence and integration execution",
                "Aligning operations, finance, and capital allocation",
                "Building finance teams capable of sustaining performance",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-secondary-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

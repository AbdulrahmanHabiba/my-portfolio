const AboutInfo = () => (
  <section className="space-y-4">
    <h3 className="text-lg font-bold text-foreground">Who Am I?</h3>
    <p className="text-muted-foreground text-base leading-relaxed">
      I'm{" "}
      <span className="text-neon-pink font-semibold">Abdulrahman Habiba</span>, a
      Frontend Developer with Full-Stack capabilities, specializing in building premium, high-performance applications with <span className="text-blue-500 dark:text-blue-400 font-semibold">React</span> and <span className="text-blue-600 dark:text-blue-500 font-semibold">Next.js</span>.
    </p>

    <h3 className="text-lg font-bold text-foreground">What I Do</h3>
    <p className="text-muted-foreground text-base leading-relaxed">
      I craft production-ready applications focusing on scalability and accessibility. My expertise includes leveraging <span className="text-neon-purple font-semibold">Node.js</span>, <span className="text-green-500 dark:text-green-400 font-semibold">Prisma</span>, and <span className="text-neon-blue font-semibold">PostgreSQL</span> for seamless end-to-end solutions, and creating fluid UIs with <span className="text-neon-pink font-semibold">Framer Motion</span> and <span className="text-cyan-500 font-semibold">Shadcn UI</span>.
    </p>

    <h3 className="text-lg font-bold text-foreground">My Goal</h3>
    <p className="text-muted-foreground text-base leading-relaxed">
      I aim to deliver high-impact digital experiences that solve complex business challenges through rapid prototyping and evidence-based design. Detail-oriented and always evolving with the modern web ecosystem.
    </p>

    <div className="pt-4 border-t border-border/50">
      <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">Languages</h3>
      <div className="flex gap-4 text-sm">
        <span className="text-muted-foreground"><span className="text-foreground font-semibold">Arabic:</span> Native</span>
        <span className="text-muted-foreground"><span className="text-foreground font-semibold">English:</span> Intermediate</span>
      </div>
    </div>
  </section>
);

export default AboutInfo;

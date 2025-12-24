import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing clean, maintainable, and efficient code following best practices and design patterns.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing applications for speed and responsiveness to ensure a smooth user experience.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with cross-functional teams to deliver high-quality software solutions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying updated with the latest technologies and trends to bring fresh ideas to projects.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Front-end Developer with 5 years of experience working with
                JavaScript and React on large-scale projects. I hold a degree in
                Information Systems and have a strong passion for web
                development, always aiming to design and implement efficient
                solutions that enhance the end-user experience.
              </p>
              <p>
                Outside of work, I enjoy exploring new technologies and market
                trends to stay up to date and continuously improve my technical
                skills. I have strong communication and teamwork skills, and I’m
                always eager to learn and grow through challenging projects.
              </p>
              <p>
                If you’re looking for a dedicated developer with a passion for
                innovation, I’m always open to new opportunities and
                collaborations on exciting projects. Let’s work together to take
                on new challenges!
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                “I enjoy building digital experiences that work well, feel good
                to use, and are easy for developers to maintain.”
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

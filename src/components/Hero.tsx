import designerPortrait from '@/assets/designer-portrait.webp';

import javaLogo from '@/assets/java.svg';
import reactLogo from '@/assets/react.svg';
import tailwindLogo from '@/assets/tailwind.svg';
import jsLogo from '@/assets/javascript.svg';
import htmlLogo from '@/assets/html.svg';
import cssLogo from '@/assets/css.svg';
import gitLogo from '@/assets/github.svg';
import clogo from '@/assets/c.svg';

const skills = [
  { name: 'Java', src: javaLogo },
  { name: 'React', src: reactLogo },
  { name: 'Tailwind', src: tailwindLogo },
  { name: 'JavaScript', src: jsLogo },
  { name: 'HTML', src: htmlLogo },
  { name: 'CSS', src: cssLogo },
  { name: 'GitHub', src: gitLogo },
  { name: 'C', src: clogo }
];

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-secondary"></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-10 text-lg lg:text-xl leading-relaxed">
          <div className="space-y-6">
            <p className="text-primary font-semibold text-3xl lg:text-4xl">
              Hi, I Am Vitthal Karanjkar
            </p>

            <p className="text-2xl lg:text-3xl text-muted-foreground max-w-lg">
              I’m a computer engineering student who enjoys building practical
              tools that solve everyday problems.
            </p>

            {/* Skills/Technologies as images */}
            <div className="grid grid-cols-4 gap-5 max-w-lg">
              {skills.map(({ name, src }) => (
                <div
                  key={name}
                  className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full p-3"
                  aria-label={name}
                  title={name}
                >
                  <img
                    src={src}
                    alt={`${name} logo`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content - Clean Profile Image */}
        <div className="flex justify-center">
          <div className="relative group w-64 h-64">
            {/* Gradient Ring */}
            <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-tr from-primary to-accent">
              <div className="w-full h-full bg-card rounded-full flex items-center justify-center shadow-xl overflow-hidden">
                <img
                  src={designerPortrait}
                  alt="Vitthal Karanjkar"
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4 pb-4">
                <p className="text-white font-semibold text-lg">Vitthal Karanjkar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

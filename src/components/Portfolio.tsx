import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Linkedin, Code2 } from 'lucide-react';

const Portfolio = () => {
  const profileLinks = [
    {
      platform: 'GitHub',
      url: 'https://github.com/Vitthalkaranjkar23',
      icon: Github,
      description: 'View my code repositories and open source contributions'
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vitthal-karanjkar-a90836226/',
      icon: Linkedin,
      description: 'Connect with me professionally'
    },
    {
      platform: 'LeetCode',
      url: 'https://leetcode.com/u/Vitthalkaranjkar23/',
      icon: Code2,
      description: 'Check out my coding challenges and solutions'
    }
  ];

  const project = {
    title: 'File Type Conversion Utility (C)',
    description:
      'Implemented a file conversion tool in C using custom data structures to efficiently parse, map, and convert between formats. Part of the DSA-PROJECT collection showcasing low-level memory-safe transformations and algorithmic design.',
    techStack: ['C', 'Data Structures', 'File I/O'],
    tag: 'DSA Project',
    repoUrl: 'https://github.com/Vitthalkaranjkar23/DSA-PROJECT'
  };

  return (
    <section id="profiles" className="py-20">
      <div className="container mx-auto px-6">
        {/* Web Presence Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              MY WEB <span className="text-primary">PRESENCE</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Connect with me across different platforms
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {profileLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <Card
                  key={index}
                  className="group bg-card hover:bg-card/80 border-border hover:border-primary/20 transition-all duration-300 hover:shadow-card"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <IconComponent className="w-12 h-12 mx-auto text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{link.platform}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{link.description}</p>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(link.url, '_blank', 'noopener')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit {link.platform}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Project Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            MY <span className="text-primary">PROJECT</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-card hover:bg-card/80 border-border hover:border-primary/20 transition-all duration-300 hover:shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">{project.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-3 text-primary">TECH STACK:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <span className="text-xs font-semibold uppercase mb-2">{project.tag}</span>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open(project.repoUrl, '_blank', 'noopener')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Repository
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

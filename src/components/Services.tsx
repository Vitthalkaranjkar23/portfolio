import { Card, CardContent } from '@/components/ui/card';
import { Palette, Smartphone, Globe, Briefcase } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'ILLUSTRATION DESIGN',
      subtitle: '& BRANDING BRANDING',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.'
    },
    {
      icon: Smartphone,
      title: 'MOBILE APP',
      subtitle: 'DESIGN',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.'
    },
    {
      icon: Globe,
      title: 'WEB DESIGN',
      subtitle: '& DEVELOPMENT',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.'
    },
    {
      icon: Briefcase,
      title: 'BUSINESS',
      subtitle: 'BRANDING',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            MY BEST QUALITY <span className="text-primary">SERVICE</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card hover:bg-card/80 border-border hover:border-primary/20 transition-all duration-300 group hover:shadow-card"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1">{service.title}</h3>
                  <h4 className="font-bold text-sm text-primary mb-3">{service.subtitle}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
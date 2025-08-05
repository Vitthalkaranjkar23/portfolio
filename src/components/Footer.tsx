import { Github, Linkedin, Twitter, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              SOFT
            </div>
            <p className="text-muted-foreground">
              Creative visual designer specializing in modern web design, 
              branding, and digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#services" className="block text-muted-foreground hover:text-foreground transition-colors">
                Services
              </a>
              <a href="#portfolio" className="block text-muted-foreground hover:text-foreground transition-colors">
                Portfolio
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground">Web Design</p>
              <p className="text-muted-foreground">Brand Identity</p>
              <p className="text-muted-foreground">Mobile App Design</p>
              <p className="text-muted-foreground">Business Branding</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Get in Touch</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground">jhon.designer@email.com</p>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
              <p className="text-muted-foreground">New York, NY</p>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 bg-muted hover:bg-primary rounded-full flex items-center justify-center transition-colors hover:text-primary-foreground"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          <div className="flex items-center text-muted-foreground text-sm">
            <span>© 2024 Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
            <span>by Jhon Designer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
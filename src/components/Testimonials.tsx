import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import designerPortrait from '@/assets/designer-portrait.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Smith',
      role: 'CEO, TechCorp',
      content: 'Working with this designer was an absolute pleasure. The attention to detail and creative vision exceeded our expectations.',
      rating: 5,
      avatar: designerPortrait,
    },
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      content: 'Outstanding work! The designs perfectly captured our brand essence and helped us stand out in the market.',
      rating: 5,
      avatar: designerPortrait,
    },
    {
      name: 'Mike Davis',
      role: 'Startup Founder',
      content: 'Professional, creative, and timely delivery. I couldn\'t have asked for a better design partner for my project.',
      rating: 5,
      avatar: designerPortrait,
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            CLIENT LOVED <span className="text-primary">TESTIMONIAL</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's what my clients say about working with me. 
            Their satisfaction is my greatest achievement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card hover:bg-card/80 border-border hover:border-primary/20 transition-all duration-300 hover:shadow-card"
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
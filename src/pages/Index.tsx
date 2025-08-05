import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Index;

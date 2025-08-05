import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import workspaceImage from '@/assets/workspace-3d.jpg';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg('All fields are required.'); 
      return false;
    }
    // basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setErrorMsg('Please provide a valid email.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    if (!validate()) return;

    setStatus('sending');
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        publicKey
      );
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg('Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            GET IN <span className="text-primary">TOUCH</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out to me through any of the platforms below or send me a message directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact + Form Card */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Me</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-6">
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-semibold text-primary mb-1">
                      Vitthal Prashant Karanjkar
                    </h4>
                    <p className="text-muted-foreground">TY Computer Engineering Student</p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:vitthalkaranjkarvpk@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        vitthalkaranjkarvpk@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Github className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <a
                        href="https://github.com/Vitthalkaranjkar23"
                        target="_blank"
                        rel="noopener"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        github.com/Vitthalkaranjkar23
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/vitthal-karanjkar-a90836226/"
                        target="_blank"
                        rel="noopener"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        linkedin.com/in/vitthal-karanjkar-a90836226
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">COEP Hostel</p>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col space-y-4"
                  noValidate
                >
                  <div>
                    <label className="block font-medium mb-1" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-md border px-4 py-2 bg-background"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-medium mb-1" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-md border px-4 py-2 bg-background"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-medium mb-1" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full rounded-md border px-4 py-2 bg-background resize-none"
                      placeholder="What would you like to talk about?"
                      required
                    />
                  </div>

                  {errorMsg && (
                    <p className="text-sm text-red-500">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="mt-2 inline-flex items-center justify-center rounded-xl px-6 py-3 bg-primary text-white font-semibold hover:opacity-90 transition"
                  >
                    {status === 'sending'
                      ? 'Sending...'
                      : status === 'success'
                      ? 'Sent!'
                      : 'Send Message'}
                  </button>

                  {status === 'success' && (
                    <p className="text-sm text-green-500">
                      Message sent successfully. I will get back to you soon.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-sm text-red-500">
                      {errorMsg ||
                        'There was an error sending your message. Please try again.'}
                    </p>
                  )}
                </form>
              </div>
            </CardContent>
          </Card>

          {/* Workspace Image */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src={workspaceImage}
                alt="Developer workspace"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-xl font-bold">Ready to Connect?</h3>
                <p className="text-white/90">
                  Let's collaborate on something amazing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { contactInfo } from '../data/mock';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Check } from 'lucide-react';
import { toast } from 'sonner';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    
    // Reset form after delay
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
      description: "Call us directly"
    },
    {
      icon: Mail,
      title: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      description: "Send us an email"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      href: null,
      description: "We respond quickly"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MessageCircle size={16} />
            Get in Touch
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Contact & Support
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Have questions about OneWay? We're here to help. Reach out to us and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-4">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={index} className="bg-white border-slate-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">{method.title}</h3>
                        <p className="text-slate-500 text-sm mb-2">{method.description}</p>
                        {method.href ? (
                          <a 
                            href={method.href}
                            className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <span className="text-slate-700 font-medium">{method.value}</span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Additional Info Card */}
            <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 border-0">
              <CardContent className="p-6 text-white">
                <MapPin className="mb-4" size={28} />
                <h3 className="font-semibold text-lg mb-2">Based in India</h3>
                <p className="text-blue-100 text-sm">
                  OneWay is proudly built and operated from India, serving job seekers worldwide.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white border-slate-200">
              <CardContent className="p-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Send us a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="text-green-600" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-600">Thank you for reaching out. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="h-12"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can we help you?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="h-12"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send size={18} />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

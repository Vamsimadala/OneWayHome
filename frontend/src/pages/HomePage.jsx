import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { features, problems, benefits } from '../data/mock';
import { 
  Bookmark, LayoutDashboard, Sparkles, Zap, Mail, Ban,
  ArrowRight, Check, X, Target, Rocket, Brain
} from 'lucide-react';

const iconMap = {
  Bookmark, LayoutDashboard, Sparkles, Zap, Mail, Ban
};

const HomePage = () => {
  const handleJoinWaitlist = () => {
    window.open('https://onewayproductsolutions.com/home', '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-60 -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-40 -z-10" />
        
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Rocket size={16} />
            The universal productivity layer for job seekers
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            OneWay — <span className="text-blue-600">Get Hired Faster</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Organize your entire job search, apply smarter, and never lose track — all in one place.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
              onClick={handleJoinWaitlist}
            >
              Join the Waitlist
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-slate-300 text-slate-700 px-8 py-6 text-lg hover:bg-slate-50"
              onClick={handleJoinWaitlist}
            >
              Get Early Access
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <X size={16} />
              The Problem
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Job hunting today is chaos
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Most job seekers waste dozens of hours every week just trying to stay organized.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem) => (
              <Card key={problem.id} className="border-red-100 bg-red-50/50 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <X className="text-red-600" size={20} />
                  </div>
                  <p className="text-slate-700 font-medium">{problem.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Check size={16} />
              The Solution
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              One platform that runs your job search for you
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              With OneWay, you get a complete system to manage every aspect of your job hunt.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <Card key={feature.id} className="bg-white border-slate-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                      <IconComponent className="text-blue-600 group-hover:text-white transition-colors duration-300" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Job Seekers Love Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Brain size={16} />
                Why Job Seekers Love OneWay
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Focus on landing the job, not managing chaos
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit.id} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-green-600" size={14} />
                    </div>
                    <span className="text-slate-700">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                <Target className="mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-3">Built for Job Seekers</h3>
                <p className="text-blue-100 mb-6">
                  Not recruiters. Not spreadsheets. Just a clean system to help you get hired faster.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>Trusted by thousands of job seekers</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-100 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stop managing chaos. Start getting interviews.
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Early users get priority access to all features.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-6 text-lg"
            onClick={handleJoinWaitlist}
          >
            Join the OneWay Waitlist
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

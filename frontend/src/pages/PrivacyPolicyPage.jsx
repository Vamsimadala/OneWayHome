import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Shield, Lock, Eye, Database, UserCheck, Bell } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const lastUpdated = "January 2025";

  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Personal information you provide (name, email, phone number) when creating an account or contacting us.",
        "Job application data you choose to track, including company names, job titles, application status, and notes.",
        "Usage data such as how you interact with our platform, features you use, and time spent on the application.",
        "Technical data including IP address, browser type, device information, and cookies for improving our services."
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our job tracking service and personalize your experience.",
        "To communicate with you about updates, features, and respond to your inquiries.",
        "To analyze usage patterns and improve our platform's functionality and user experience.",
        "To send you relevant notifications about your job applications (with your consent).",
        "To protect against fraudulent or unauthorized activity."
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your personal information.",
        "All data transmission is encrypted using SSL/TLS protocols.",
        "We regularly review and update our security practices to ensure data protection.",
        "Access to personal data is restricted to authorized personnel only."
      ]
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: [
        "Access: You can request a copy of the personal data we hold about you.",
        "Correction: You can update or correct your personal information at any time.",
        "Deletion: You can request deletion of your account and associated data.",
        "Portability: You can request your data in a portable format.",
        "Opt-out: You can unsubscribe from marketing communications at any time."
      ]
    },
    {
      icon: Bell,
      title: "Cookies & Tracking",
      content: [
        "We use essential cookies to ensure the proper functioning of our platform.",
        "Analytics cookies help us understand how users interact with our service.",
        "You can manage cookie preferences through your browser settings.",
        "We do not sell your personal information to third parties."
      ]
    },
    {
      icon: Shield,
      title: "Data Retention",
      content: [
        "We retain your personal data only as long as necessary to provide our services.",
        "Job application data is retained until you delete it or close your account.",
        "Upon account deletion, your data is permanently removed within 30 days.",
        "Some data may be retained for legal compliance purposes."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield size={16} />
            Legal
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-600">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Introduction */}
        <Card className="bg-slate-50 border-slate-200 mb-8">
          <CardContent className="p-6">
            <p className="text-slate-700 leading-relaxed">
              At OneWay, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
              job application tracking platform. By using OneWay, you agree to the collection and use of information in 
              accordance with this policy.
            </p>
          </CardContent>
        </Card>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <section key={index} className="border-b border-slate-200 pb-8 last:border-0">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="text-blue-600" size={20} />
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900 pt-2">{section.title}</h2>
                </div>
                <ul className="space-y-3 ml-14">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-slate-600 leading-relaxed flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        {/* Contact */}
        <Card className="bg-blue-50 border-blue-200 mt-12">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Questions About Privacy?</h3>
            <p className="text-slate-600 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-slate-700">
              <p><strong>Email:</strong> madala.vamsikrishna9@gmail.com</p>
              <p><strong>Phone:</strong> +91 9440194688</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

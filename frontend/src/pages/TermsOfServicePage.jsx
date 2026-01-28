import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { FileText, Users, AlertTriangle, Scale, Shield, RefreshCw } from 'lucide-react';

const TermsOfServicePage = () => {
  const lastUpdated = "January 2025";

  const sections = [
    {
      icon: Users,
      title: "1. Acceptance of Terms",
      content: [
        "By accessing or using OneWay, you agree to be bound by these Terms of Service.",
        "If you do not agree to these terms, please do not use our service.",
        "We reserve the right to update these terms at any time with notice to users.",
        "Continued use of the service after changes constitutes acceptance of new terms."
      ]
    },
    {
      icon: FileText,
      title: "2. Description of Service",
      content: [
        "OneWay is a job application tracking platform designed to help job seekers organize their job search.",
        "Features include job tracking, application status management, and productivity tools.",
        "We strive to provide reliable service but do not guarantee uninterrupted access.",
        "Features and functionality may be updated, modified, or removed at our discretion."
      ]
    },
    {
      icon: Shield,
      title: "3. User Accounts & Responsibilities",
      content: [
        "You must provide accurate and complete information when creating an account.",
        "You are responsible for maintaining the confidentiality of your account credentials.",
        "You agree not to share your account or allow others to access your account.",
        "You must notify us immediately of any unauthorized use of your account.",
        "You are responsible for all activities that occur under your account."
      ]
    },
    {
      icon: AlertTriangle,
      title: "4. Prohibited Activities",
      content: [
        "Using the service for any unlawful purpose or in violation of any laws.",
        "Attempting to gain unauthorized access to our systems or other user accounts.",
        "Transmitting viruses, malware, or any code of a destructive nature.",
        "Harassing, abusing, or harming another person through the service.",
        "Using automated systems or bots to access the service without permission.",
        "Copying, modifying, or distributing our content without authorization."
      ]
    },
    {
      icon: Scale,
      title: "5. Intellectual Property",
      content: [
        "OneWay and its original content, features, and functionality are owned by us.",
        "Our service is protected by copyright, trademark, and other intellectual property laws.",
        "You retain ownership of the data you input into our platform.",
        "You grant us a license to use your data solely to provide and improve our services."
      ]
    },
    {
      icon: RefreshCw,
      title: "6. Termination",
      content: [
        "We may terminate or suspend your account at any time for violations of these terms.",
        "You may terminate your account at any time by contacting us.",
        "Upon termination, your right to use the service will immediately cease.",
        "We may retain certain information as required by law or for legitimate business purposes."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FileText size={16} />
            Legal
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-600">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Introduction */}
        <Card className="bg-slate-50 border-slate-200 mb-8">
          <CardContent className="p-6">
            <p className="text-slate-700 leading-relaxed">
              Welcome to OneWay. These Terms of Service ("Terms") govern your access to and use of our job application 
              tracking platform and services. Please read these terms carefully before using our service. By using OneWay, 
              you acknowledge that you have read, understood, and agree to be bound by these Terms.
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

        {/* Disclaimer */}
        <Card className="bg-amber-50 border-amber-200 mt-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="text-amber-600" size={20} />
              Disclaimer of Warranties
            </h3>
            <p className="text-slate-600">
              OneWay is provided "as is" and "as available" without warranties of any kind. We do not guarantee that 
              the service will be uninterrupted, secure, or error-free. Your use of the service is at your own risk.
            </p>
          </CardContent>
        </Card>

        {/* Limitation of Liability */}
        <Card className="bg-slate-50 border-slate-200 mt-6">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Limitation of Liability</h3>
            <p className="text-slate-600">
              To the maximum extent permitted by law, OneWay shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages, including loss of profits, data, or other intangible losses resulting 
              from your use or inability to use the service.
            </p>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="bg-blue-50 border-blue-200 mt-12">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Questions About Terms?</h3>
            <p className="text-slate-600 mb-4">
              If you have any questions about these Terms of Service, please contact us:
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

export default TermsOfServicePage;

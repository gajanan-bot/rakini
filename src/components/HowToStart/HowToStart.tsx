import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';
import { Separator } from '../ui/separator';
import { Header } from '../Header/Header';

export const HowToStart = (): JSX.Element => {
  const processSteps = [
    {
      number: '01',
      title: 'Request',
      description: 'Tell us more about your requirements and technical needs',
      icon: '📝',
      bgColor: 'bg-yellow-100',
    },
    {
      number: '02',
      title: 'Interview',
      description: 'You interview candidates. Average 2 interviews to hire.',
      icon: '💬',
      bgColor: 'bg-green-100',
    },
    {
      number: '03',
      title: 'Hire',
      description: 'You choose who to hire and we handle all the paperwork.',
      icon: '✅',
      bgColor: 'bg-blue-100',
    },
  ];

  const benefits = [
    { title: 'Talent shortage', icon: '👥' },
    { title: 'Lack of Expertise', icon: '🎯' },
    { title: 'Quick Kick-Off', icon: '⚡' },
    { title: 'Cost Optimization', icon: '💰' },
    { title: 'Talent Accessibility', icon: '🌐' },
    { title: 'Administrative Hassle', icon: '📋' },
  ];

  const stats = [
    { number: '1000+', label: 'Developers', bgColor: 'bg-blue-600' },
    { number: '50+', label: 'Projects', bgColor: 'bg-orange-500' },
    { number: '98%', label: 'Success Rate', bgColor: 'bg-green-500' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">How to Start</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We specialize in helping you build a team of expert developers.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How to Get Started with Courtney
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From full-time remote engineering teams to hourly contractors,
              work with remote devs as needed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <div
                    className={`w-20 h-20 ${step.bgColor} rounded-full flex items-center justify-center text-3xl mx-auto mb-6`}
                  >
                    {step.icon}
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hire Remote Developers Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why You Need To Hire Remote Developers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="text-2xl">{benefit.icon}</div>
                <span className="font-medium text-gray-900">
                  {benefit.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className={`${stat.bgColor} text-white rounded-2xl p-8 mb-4`}
                >
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🤝</div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Ready to get started?
                  </h3>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="font-bold text-gray-900 text-4xl mb-8">
                Connect With Your Next Great Hire Today!
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="font-medium text-gray-700 text-sm mb-2 block">
                    Company
                  </label>
                  <Input
                    className="h-12 rounded-lg border-gray-300"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="font-medium text-gray-700 text-sm mb-2 block">
                    Your Name
                  </label>
                  <Input
                    className="h-12 rounded-lg border-gray-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="font-medium text-gray-700 text-sm mb-2 block">
                    Phone Number
                  </label>
                  <Input
                    className="h-12 rounded-lg border-gray-300"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="font-medium text-gray-700 text-sm mb-2 block">
                    Email
                  </label>
                  <Input
                    className="h-12 rounded-lg border-gray-300"
                    placeholder="Your email address"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="font-medium text-gray-700 text-sm mb-2 block">
                  Project Detail
                </label>
                <Textarea
                  className="h-24 rounded-lg border-gray-300"
                  placeholder="Tell us about your project requirements"
                />
              </div>

              <div className="flex items-start mb-8">
                <Checkbox id="privacy" className="mt-1" />
                <label
                  htmlFor="privacy"
                  className="ml-3 font-normal text-gray-600 text-sm leading-relaxed"
                >
                  By sending this form I confirm that I have read and accept the{' '}
                  <span className="font-medium text-blue-600">
                    Privacy Policy
                  </span>
                </label>
              </div>

              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium text-lg">
                GET CONSULTATION
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-16 h-16  flex items-center justify-center">
                  <img src="./public/img/logo 1.png" alt="logo" />
                </div>
                <div className="font-semibold text-xl">Rakini Softech</div>
              </div>
              <p className="text-gray-300 text-base mb-6">
                Expertly trained, battle-tested, elite software developers on
                demand
              </p>
              <div className="space-y-2 mb-6">
                <div className="text-gray-300">📞 +94 713249222</div>
                <div className="text-gray-300">✉️ hello@courtney.lk</div>
                <div className="text-gray-300">
                  📍 Courtney Lanka (Private) Limited
                  <br />
                  Level 35, World Trade Center
                  <br />
                  Colombo 01
                </div>
              </div>
              <div>
                <h4 className="font-medium text-lg mb-4">Follow us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white">
                    LinkedIn
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Facebook
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Instagram
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Twitter
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Hire Permanent Staff
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Staff Augmentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Software Outsourcing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Build Remote Office
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">How to Start</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    You Asked
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    We Proceed
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Negotiate
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    You Get
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="border-gray-700 mb-8" />

          <div className="pb-8">
            <p className="text-gray-400 text-sm">
              © 2024 Rakini Softech. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

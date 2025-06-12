import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import { Textarea } from "../../components/ui/textarea";
import { Header } from "../../components/Header/Header";

export const Frame = (): JSX.Element => {
  // Service cards data
  const serviceCards = [
    {
      title: "Architect your Solution",
      description:
        "Our team in on your operational, technological, and strategic challenges through an in-depth understanding of your business. We design a strategic roadmap to guide your result-oriented goals.",
      icon: "🏗️",
      bgColor: "bg-yellow-100",
    },
    {
      title: "Engineer your Solution",
      description:
        "We promptly put together your nearshore engineering dream team to fulfill your specific requirements. We create the most elegant solution for your difficulties by combining our deep tech expertise, Top 1% Tech Talent, and industry-specific experience.",
      icon: "⚙️",
      bgColor: "bg-green-100",
    },
    {
      title: "ReEngineer your Business Process",
      description:
        "Bolster by our team, your digital transformation swiftly gains speed and evolves into a digital acceleration. This process places the foundation for a more efficient and strong business that can meet demands at scale.",
      icon: "🔄",
      bgColor: "bg-blue-100",
    },
  ];

  // Process steps
  const processSteps = [
    { number: "01", title: "YOU ASK", icon: "❓" },
    { number: "02", title: "WE PROCEED", icon: "⚡" },
    { number: "03", title: "Negotiate", icon: "🤝" },
    { number: "04", title: "YOU GET", icon: "✅" },
  ];

  // Service types
  const serviceTypes = [
    {
      title: "Dedicated Teams",
      description: "Find your next team member",
      icon: "👥",
    },
    {
      title: "Staff Augmentation",
      description: "Build a distributed development team",
      icon: "📈",
    },
    {
      title: "Software Outsourcing",
      description: "End-to-End Software Development Outsourcing Solutions",
      icon: "💻",
    },
    {
      title: "Remote Office",
      description:
        "Open your own remote development center and grow your business",
      icon: "🏢",
    },
  ];

  // Specialized staff data
  const specializedStaff = [
    { title: "Frontend Engineers", icon: "🎨" },
    { title: "Angular Developers", icon: "🅰️" },
    { title: "Fullstack Engineers", icon: "🔧" },
    { title: "DevOps + DevSecOps Engineers", icon: "🛠️" },
    { title: "UI/UX Engineers", icon: "🎯" },
    { title: "PHP Developers", icon: "🐘" },
    { title: "QA Engineers", icon: "✅" },
    { title: "Wordpress CMS Developers", icon: "📝" },
    { title: "Product Designer", icon: "💡" },
    { title: "Mobile App Developers", icon: "📱" },
    { title: "Database admin", icon: "🗄️" },
    { title: "Application Security Engineers", icon: "🔒" },
    { title: "AI and ML Engineers Deep Learning/Machine Vision/NLP", icon: "🤖" },
    { title: "Data Scientist / Data Engineers", icon: "📊" },
    { title: "IOS and Android Developers", icon: "📲" },
    { title: "Project Managers", icon: "📋" },
    { title: "Solution Architects", icon: "🏗️" },
    { title: "Business Analyst", icon: "📈" },
    { title: "Tech Leads / Team Leads", icon: "👨‍💼" },
    { title: "Information Security Engineers", icon: "🛡️" },
    { title: "Golang Dev", icon: "🐹" },
  ];

  // Technologies
  const technologies = [
    { name: "React", logo: "⚛️" },
    { name: "Angular", logo: "🅰️" },
    { name: "Next.js", logo: "▲" },
    { name: "Node.js", logo: "🟢" },
    { name: "Vue.js", logo: "💚" },
    { name: "Python", logo: "🐍" },
  ];

  // Client logos
  const clientLogos = [
    { name: "Client 1", id: 1 },
    { name: "Client 2", id: 2 },
    { name: "Client 3", id: 3 },
    { name: "Client 4", id: 4 },
  ];

  // Footer links
  const footerLinks = {
    company: [
      "About Us",
      "Success Stories",
      "Privacy Policy",
      "Terms & Conditions",
      "Contact Us",
    ],
    services: [
      "Hire Permanent Staff",
      "Staff Augmentation",
      "Software Outsourcing",
      "Build Remote Office",
    ],
    howToStart: ["You Asked", "We Proceed", "Negotiate", "You Get"],
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full relative">
        {/* Header/Navigation */}
        <Header />

        {/* Hero Section */}
        <section className="relative w-full py-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-8">
            <div className="md:w-1/2 flex flex-col justify-center">
              <h1 className="font-bold text-gray-900 text-5xl md:text-6xl leading-tight mb-6">
                Building dev team,{" "}
                <span className="text-blue-600">Quickly</span> and{" "}
                <span className="text-orange-500">Affordably</span>
              </h1>
              <p className="font-normal text-gray-600 text-xl mb-8 max-w-lg">
                We specialize in helping you build a team of expert developers,
                testers, and leaders. We are setup to deliver long term
                solutions, or scale to different needs quickly.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium text-lg w-fit">
                Build a team
              </Button>
            </div>
            <div className="md:w-1/2 relative mt-8 md:mt-0">
              <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-6xl">👥💻</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="max-w-7xl mx-auto py-16 px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCards.map((service, index) => (
              <div key={index} className="flex flex-col items-start space-y-4">
                <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center text-2xl`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-2xl mb-4">
                    {service.title}
                  </h3>
                  <p className="font-normal text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section id="how-to-start" className="bg-orange-400 py-16">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-12">
              <h4 className="font-medium text-orange-100 text-lg mb-2">
                How to Start
              </h4>
              <h2 className="font-bold text-white text-4xl mb-6">
                Easy Process
              </h2>
              <p className="font-normal text-orange-100 text-lg max-w-md mx-auto">
                We specialize in helping you build a team of expert developers,
                testers, and leaders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-3xl mb-6">
                    {step.icon}
                  </div>
                  <div className="font-bold text-white text-3xl mb-2">
                    {step.number}
                  </div>
                  <div className="font-semibold text-white text-xl">
                    {step.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="max-w-7xl mx-auto py-16 px-8">
          <div className="mb-12">
            <h4 className="font-medium text-blue-600 text-lg mb-2">
              Expertise
            </h4>
            <h2 className="font-bold text-gray-900 text-4xl mb-6">
              Hire Permanent and Remote Developers
            </h2>
            <p className="font-normal text-gray-600 text-lg max-w-lg">
              From full-time remote engineering teams to hourly contractors,
              work with remote devs as needed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceTypes.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-xl mb-3">
                  {service.title}
                </h3>
                <p className="font-normal text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Specialized Staff Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-12">
              <h4 className="font-medium text-blue-600 text-lg mb-2">
                Specialized
              </h4>
              <h2 className="font-bold text-gray-900 text-4xl mb-8">
                Specialized Staff We Provide
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {specializedStaff.map((staff, index) => (
                <Card
                  key={index}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-yellow-400"
                >
                  <CardContent className="p-4 flex items-center">
                    <div className="w-12 h-12 flex items-center justify-center mr-4 text-xl">
                      {staff.icon}
                    </div>
                    <div className="font-medium text-gray-900 text-sm">
                      {staff.title}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" className="max-w-7xl mx-auto py-16 px-8">
          <div className="text-center mb-12">
            <h4 className="font-medium text-blue-600 text-lg mb-2">
              Specialized
            </h4>
            <h2 className="font-bold text-gray-900 text-4xl">
              Technologies
            </h2>
          </div>

          <div className="flex justify-center items-center space-x-12 mb-8">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-2xl mb-2">
                  {tech.logo}
                </div>
                <span className="text-sm font-medium text-gray-700">{tech.name}</span>
              </div>
            ))}
            <button className="flex items-center justify-center">
              <ChevronRightIcon className="w-8 h-8 text-gray-400" />
            </button>
          </div>
        </section>

        {/* Clients Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-12">
              <h4 className="font-medium text-blue-600 text-lg mb-2">
                Clients
              </h4>
              <h2 className="font-bold text-gray-900 text-4xl">
                Amazing clients who trust us
              </h2>
            </div>

            <div className="flex justify-center items-center space-x-16">
              {clientLogos.map((logo) => (
                <div key={logo.id} className="w-20 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 font-medium text-sm">{logo.name}</span>
                </div>
              ))}
              <button className="flex items-center justify-center">
                <ChevronRightIcon className="w-8 h-8 text-gray-400" />
              </button>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="max-w-7xl mx-auto py-16 px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl p-8 h-full flex items-center justify-center">
                <div className="text-6xl">📞💼</div>
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
                  By sending this form I confirm that I have read and accept the{" "}
                  <span className="font-medium text-blue-600">Privacy Policy</span>
                </label>
              </div>

              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium text-lg">
                GET CONSULTATION
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white pt-16">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">R</span>
                  </div>
                  <div className="font-semibold text-xl">
                    Rakini Softech
                  </div>
                </div>
                <p className="text-gray-300 text-base mb-6">
                  Expertly trained, battle-tested, elite software developers on
                  demand
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <span className="text-gray-300">📞 +94 713249222</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-300">✉️ hello@courtney.lk</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-300">
                      📍 Courtney Lanka (Private) Limited<br />
                      Level 35, World Trade Center<br />
                      Colombo 01
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-lg mb-4">Follow us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
                    <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
                    <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
                    <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-6">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-300 hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-6">Services</h3>
                <ul className="space-y-3">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-300 hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-6">How to Start</h3>
                <ul className="space-y-3">
                  {footerLinks.howToStart.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-300 hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
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
    </div>
  );
};
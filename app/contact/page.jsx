"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Twitter, MessageCircle, Calendar, Clock } from 'lucide-react'
import {Button} from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "",
    budget: "",
    timeline: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you within 24 hours.")
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      projectType: "",
      budget: "",
      timeline: ""
    })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "janavi.chauhan@email.com",
      href: "mailto:janavi.chauhan@email.com",
      description: "Best way to reach me for professional inquiries"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
      description: "Available Mon-Fri, 9 AM - 6 PM IST"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Gujarat, India",
      href: "#",
      description: "Open to remote work and collaboration"
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/janavi-185",
      color: "hover:text-gray-400",
      description: "Check out my code and contributions"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/janavi-chauhan-87a611283/",
      color: "hover:text-blue-600",
      description: "Connect with me professionally"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/_janavi.18/",
      color: "hover:text-pink-600",
      description: "Follow my creative journey"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com",
      color: "hover:text-blue-400",
      description: "Tech thoughts and updates"
    },
  ]

  const projectTypes = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Full Stack Development",
    "Consultation",
    "Other"
  ]

  const budgetRanges = [
    "Under $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000+",
    "Let's discuss"
  ]

  const timelineOptions = [
    "ASAP",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Flexible"
  ]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-format text-transparent">
              Let's Work Together
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm always excited to connect with fellow developers, potential collaborators, or anyone interested in 
            discussing technology and innovation. Let's create something amazing together!
          </p>
        </div>

        {/* Quick Contact Options */}
        {/* <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-shadow duration-300 animate-fadeInUp">
            <MessageCircle className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Quick Chat</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Have a quick question? Let's have a brief conversation about your project.
            </p>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
              Schedule a Call
            </Button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-shadow duration-300 animate-fadeInUp">
            <Calendar className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Project Discussion</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Ready to start a project? Let's discuss your requirements in detail.
            </p>
            <Button variant="outline" className="border-purple-200 hover:bg-purple-50 dark:border-purple-800">
              Book Meeting
            </Button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-shadow duration-300 animate-fadeInUp">
            <Clock className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Response Time</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              I typically respond to all inquiries within 24 hours during business days.
            </p>
            <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
              Usually within 2-4 hours
            </span>
          </div>
        </div> */}

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl animate-slideInLeft hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <Send className="w-6 h-6 text-green-800 mr-3" />
              Send me a detailed message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  >
                    <option value="">Select timeline</option>
                    {timelineOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Brief subject line"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Details *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full"
                  placeholder="Please describe your project in detail. Include any specific requirements, features, or goals you have in mind..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8 animate-slideInRight">
            {/* Contact Information */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.title}
                    href={info.href}
                    className="flex items-start p-4 bg-gradient-to-r from-yellow-50 to-green-50 dark:from-gray-700 dark:to-gray-600 rounded-xl hover:shadow-md transition-all duration-300 group hover:scale-101"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-300 to-green-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">{info.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 font-medium">{info.value}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{info.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Connect on Social Media</h2>
              <div className="space-x-5 flex">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center \ p-4 bg-gray-100 dark:bg-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 group hover:scale-101 ${social.color}`}
                  >
                    <social.icon className="w-6 h-6 " />
                    <div>
                      {/* <span className="font-medium text-lg">{social.name}</span> */}
                      {/* <p className="text-sm text-gray-500 dark:text-gray-400">{social.description}</p> */}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            {/* <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></div>
                <h3 className="text-xl font-bold">Currently Available</h3>
              </div>
              <p className="mb-4 opacity-90">
                I'm currently accepting new projects and collaborations. Let's discuss how we can work together!
              </p>
              <div className="flex items-center text-sm opacity-75">
                <Clock className="w-4 h-4 mr-2" />
                <span>Next available: Immediately</span>
              </div>
            </div> */}

            {/* Call to Action */}
            
          </div>
          
        </div>. 
        <div className="bg-gradient-to-r from-yellow-100 to-green-100 rounded-2xl p-8 text-gray-600 text-center hover:scale-101 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="mb-6 opacity-90">
                Whether you have a clear vision or just an idea, I'm here to help bring your project to life.
              </p>
              <Button variant="secondary" className="bg-white text-green-800 hover:bg-gray-100" asChild>
                <a href="mailto:janavi.chauhan@email.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Start a Conversation
                </a>
              </Button>
            </div>.                      
      </div>
    </div>
  )
}

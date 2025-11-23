'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  })

  const handleSend = () => {
  const recipient = "chauhanjanavi06@gmail.com"; // your email
  const subject = `Portfolio Contact - Message from ${formData.name}`;
  const body = `
    Name: ${formData.name}
    Email: ${formData.email}

    Message:
    ${formData.message}
      `;

      const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        recipient
      )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.open(gmailURL, "_blank");
    };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', subject: '' , email: '', message: '' })
  }
  

  return (
    <main className="flex-1">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12 border-b border-border pb-8 ">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-pretty">Get In Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className='grid grid-cols-2 gap-3'>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2"> 
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject here"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2"> 
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" onClick={handleSend}  className="hover:bg-accent/20 bg-transparent border border-input rounded-sm py-6 text-foreground hover:text-primary cursor-pointer">
                Send Message
              </Button>
            </form>
          </div>

           
            <div className="pt-7">
              <h3 className="font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a href="https://github.com/janavi-185" className="text-muted-foreground hover:text-primary transition-colors">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/janavi-chauhan-87a611283/" className="text-muted-foreground hover:text-primary transition-colors">
                  LinkedIn
                </a>
                <a href="https://x.com/_janavi_18" className="text-muted-foreground hover:text-primary transition-colors">
                  Twitter
                </a>
              </div>
            </div>
        </div>
      </section>
    </main>
  )
}

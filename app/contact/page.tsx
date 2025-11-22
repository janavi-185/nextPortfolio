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
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <main className="flex-1">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="mb-12 border-b border-border pb-8 ">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-pretty">Get In Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
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

              <Button type="submit" size="lg" className="w-full cursor-pointer">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 rounded-sm">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:hello@example.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    chauhanjanavi06@gamil.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 rounded-sm">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 6354939816
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 rounded-sm">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <div className="pt-4">
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
        </div>
      </section>
    </main>
  )
}

'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { contact } from '@/constants'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  })

  const handleSend = () => {
    const recipient = 'chauhanjanavi06@gmail.com'
    const subject = `Portfolio Contact - Message from ${formData.name}`
    const body = `
    Name: ${formData.name}
    Email: ${formData.email}

    Message:
    ${formData.message}
    `
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      recipient
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(gmailURL, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: '', subject: '', email: '', message: '' })
  }

  return (
    <main className="flex-1">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          className="mb-12 border-b border-border pb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-pretty">Get In Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Have a project in mind? Let&apos;s discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="grid grid-cols-2 gap-3" variants={itemVariants}>
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
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
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
            </motion.div>

            <motion.div variants={itemVariants}>
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
            </motion.div>

            <motion.div variants={itemVariants}>
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
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Button
                  type="submit"
                  onClick={handleSend}
                  className="hover:bg-accent/20 bg-transparent border border-input rounded-sm py-6 text-foreground hover:text-primary cursor-pointer"
                >
                  Send Message
                </Button>
              </motion.div>
            </motion.div>
          </motion.form>

          {/* Social Links */}
          <motion.div
            className="pt-7"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-semibold mb-4">Follow Me</h3>
            <div className="flex gap-4">
              {contact.map((item) => {
                const Icon = item.icon
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    aria-label={item.label}
                  >
                    <Icon />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

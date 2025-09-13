import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Github, Linkedin, Mail } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('#contact h2, #contact p.lead', {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 75%',
        },
      })

      gsap.from('#contact form', {
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#contact form',
          start: 'top 80%',
        },
      })

      gsap.from('#contact .footer-text', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#contact',
          start: 'bottom 95%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-fit flex flex-col items-center justify-center px-6 py-20 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_70%)]"></div>
      <div className="absolute inset-0 [background-image:linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="relative z-10 max-w-3xl w-full text-center">
        <h2 className="text-2xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-[0_0_20px_#22d3ee] mb-6">
          Let’s Connect
        </h2>
        <p className="lead text-gray-400 mb-12 max-w-xl mx-auto font-mono text-sm md:text-base">
          Wanna collab? Hire me? Or just share your fav anime OP? <br />
          Drop me a line through the form below or hit me up on socials ↓
        </p>
        <div className="bg-black/60 border border-cyan-400/30 rounded-lg p-6 shadow-[0_0_25px_rgba(0,255,255,0.4)] backdrop-blur-md relative">
          <form
            action="https://formspree.io/f/mayvlwqg"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="> Enter your name..."
              className="w-full px-4 py-3 rounded-md bg-black/70 border border-cyan-400/40 text-cyan-300 font-mono focus:ring-2 focus:ring-pink-500 focus:outline-none placeholder-gray-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="> Enter your email..."
              className="w-full px-4 py-3 rounded-md bg-black/70 border border-cyan-400/40 text-cyan-300 font-mono focus:ring-2 focus:ring-pink-500 focus:outline-none placeholder-gray-500"
              required
            />
            <textarea
              name="message"
              placeholder="> Type your message..."
              rows={5}
              className="w-full px-4 py-3 rounded-md bg-black/70 border border-cyan-400/40 text-cyan-300 font-mono focus:ring-2 focus:ring-pink-500 focus:outline-none placeholder-gray-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-md bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold tracking-wide shadow-[0_0_15px_rgba(0,255,255,0.7)] hover:shadow-[0_0_30px_rgba(255,0,255,0.9)] transition duration-300"
            >
              SEND MESSAGE 🚀
            </button>
          </form>
        </div>
        <div className="mt-12 flex justify-center gap-6">
          <a
            href="https://github.com/bluntswordman"
            target="_blank"
            className="text-gray-400 hover:text-cyan-400 transition transform hover:scale-110"
          >
            <Github className="w-7 h-7 drop-shadow-[0_0_10px_#22d3ee]" />
          </a>
          <a
            href="https://www.linkedin.com/in/bedy-briliant-wijaya/"
            target="_blank"
            className="text-gray-400 hover:text-pink-400 transition transform hover:scale-110"
          >
            <Linkedin className="w-7 h-7 drop-shadow-[0_0_10px_#ec4899]" />
          </a>
          <a
            href="mailto:wijaya.bedybriliant@gmail.com"
            className="text-gray-400 hover:text-purple-400 transition transform hover:scale-110"
          >
            <Mail className="w-7 h-7 drop-shadow-[0_0_10px_#a855f7]" />
          </a>
        </div>
        <p className="footer-text mt-8 text-xs text-gray-500 font-mono">
          © {new Date().getFullYear()} Bedy Briliant Wijaya.
        </p>
      </div>
    </section>
  )
}

export default ContactSection

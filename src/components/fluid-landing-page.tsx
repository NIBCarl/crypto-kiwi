"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Import assets
import CoinImage from "../../assets/Coin.png";
import KiwiWebsite from "../../assets/Kewi Website.png";
import TwitterCover from "../../assets/Socials/Twitter Cover.jpg";
import LinkedInCover from "../../assets/Socials/LinkedIn Cover.jpg";
import YoutubeCover from "../../assets/Socials/Youtube Cover.jpg";
import FacebookCover from "../../assets/Socials/Facebook Cover.jpg";

// Import assets from the assets folder
import LogoText from "../../assets/Logo Text.png";
import BackgroundImage from "../../assets/background.jpeg";
import Pfp1Image from "../../assets/Pfp1.png";
import Pfp2Image from "../../assets/Pfp2.png";

export function FluidLandingPage() {
  return (
    <div 
      className="min-h-screen text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.9), rgba(6, 78, 59, 0.8)), url(${BackgroundImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-16">
          <div className="flex-1">
            <Image 
              src={LogoText} 
              alt="Kiwi Labs" 
              width={120} 
              height={40} 
              className="h-10 w-auto"
            />
          </div>
          <div className="flex gap-4">
            <Link 
              href="/assets" 
              className="px-6 py-2 border border-white/20 rounded-md hover:bg-white/10 transition-colors"
            >
              Assets
            </Link>
            <Link 
              href="/swap" 
              className="px-6 py-2 border border-white/20 rounded-md hover:bg-white/10 transition-colors"
            >
              Swap
            </Link>
            <Link 
              href="/app" 
              className="px-6 py-2 bg-green-500 text-black rounded-md flex items-center gap-2 hover:bg-green-400 transition-colors"
            >
              Launch App <span className="text-xl">→</span>
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
          <div className="md:w-1/2">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Kiwi Labs
            </motion.h1>
          </div>
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{
                duration: 8,
                ease: "linear",
                repeat: Infinity,
              }}
              style={{ perspective: 1000 }}
            >
              <Image 
                src={CoinImage} 
                alt="Kiwi Labs Logo" 
                width={400} 
                height={400} 
                className="w-64 md:w-96 h-auto"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <h2 className="text-2xl text-center mb-8">OUR TEAM</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 items-center justify-items-center">
            <div className="flex flex-col items-center">
              <Image 
                src={Pfp1Image} 
                alt="Team Member 1" 
                width={150} 
                height={150} 
                className="rounded-full mb-4 border-2 border-green-500"
              />
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-green-400">Founder & CEO</p>
            </div>
            <div className="flex flex-col items-center">
              <Image 
                src={Pfp2Image} 
                alt="Team Member 2" 
                width={150} 
                height={150} 
                className="rounded-full mb-4 border-2 border-green-500"
              />
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-green-400">CTO</p>
            </div>
          </div>
        </motion.div>

        {/* Social Media Showcase */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <h2 className="text-2xl text-center mb-8">FOLLOW OUR JOURNEY</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/30 rounded-xl overflow-hidden border border-green-500/20">
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={TwitterCover}
                  alt="Twitter Cover"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center border-2 border-green-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Twitter</h3>
                      <p className="text-xs text-gray-300">@Kewi_L2</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-300">Follow us on Twitter for the latest updates, announcements, and community engagement.</p>
                <Link href="https://x.com/Kewi_L2" className="mt-3 inline-block text-green-400 text-sm hover:text-green-300 transition-colors">
                  Follow →
                </Link>
              </div>
            </div>

            <div className="bg-black/30 rounded-xl overflow-hidden border border-green-500/20">
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={LinkedInCover}
                  alt="Telegram Cover"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center border-2 border-green-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.5 7.5a2.25 2.25 0 0 0 .126 4.073l3.9 1.205 2.306 6.54c.376 1.02 1.598 1.688 2.91 1.147l.012-.005a1.05 1.05 0 0 0 .402-.367l1.53-1.813 3.322 2.45c.83.607 2 .07 2.458-.91l4.537-13.5c.501-1.478-.64-2.926-2.18-3.034zM10.464 14.5l-1.17 1.395 4.5 3.33-3.33-4.725z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Telegram</h3>
                      <p className="text-xs text-gray-300">KewiNews</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-300">Join our Telegram channel for news, updates, and community discussions.</p>
                <Link href="https://t.me/KewiNews" className="mt-3 inline-block text-green-400 text-sm hover:text-green-300 transition-colors">
                  Join →
                </Link>
              </div>
            </div>

            <div className="bg-black/30 rounded-xl overflow-hidden border border-green-500/20">
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={YoutubeCover}
                  alt="YouTube Cover"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center border-2 border-green-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white">YouTube</h3>
                      <p className="text-xs text-gray-300">@KewiLabs</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-300">Watch our tutorials, demos, and educational content about the Kiwi ecosystem.</p>
                <Link href="https://www.youtube.com/@KewiLabs" className="mt-3 inline-block text-green-400 text-sm hover:text-green-300 transition-colors">
                  Subscribe →
                </Link>
              </div>
            </div>

            <div className="bg-black/30 rounded-xl overflow-hidden border border-green-500/20">
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={FacebookCover}
                  alt="Facebook Cover"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center border-2 border-green-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Facebook</h3>
                      <p className="text-xs text-gray-300">KewiLabs</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-300">Join our Facebook community for events, news, and connecting with other Kiwi enthusiasts.</p>
                <Link href="https://www.facebook.com/KewiLabs" className="mt-3 inline-block text-green-400 text-sm hover:text-green-300 transition-colors">
                  Like →
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Website Preview */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
        >
          <h2 className="text-2xl text-center mb-8">OUR PLATFORM</h2>
          <div className="bg-black/30 rounded-xl p-6 border border-green-500/20">
            <div className="flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-lg overflow-hidden shadow-xl border-2 border-green-500/30 mb-6 max-w-3xl mx-auto"
              >
                <Image
                  src={KiwiWebsite}
                  alt="Kiwi Website Preview"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </motion.div>
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-xl font-bold text-green-400 mb-3">The Future of DeFi on Fuel</h3>
                <p className="text-gray-300 mb-6">
                  Experience the next generation of decentralized finance with Kiwi Labs. Our platform combines security, speed, and simplicity to deliver the best stablecoin experience in the Fuel ecosystem.
                </p>
                <Link
                  href="/app"
                  className="px-6 py-3 bg-green-500 text-black rounded-md inline-flex items-center gap-2 hover:bg-green-400 transition-colors font-medium"
                >
                  Launch App <span className="text-xl">→</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <footer className="mt-16 pb-8">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4 text-green-400">Connect With Us</h3>
            <div className="flex justify-center gap-8">
              <Link href="https://x.com/Kewi_L2" aria-label="Twitter" className="text-white hover:text-green-400 transition-colors">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center border-2 border-green-500 mb-2 hover:bg-black/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </div>
                  <span className="text-xs">Twitter</span>
                </div>
              </Link>
              <Link href="https://www.facebook.com/KewiLabs" aria-label="Facebook" className="text-white hover:text-green-400 transition-colors">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center border-2 border-green-500 mb-2 hover:bg-black/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </div>
                  <span className="text-xs">Facebook</span>
                </div>
              </Link>
              <Link href="https://t.me/KewiNews" aria-label="Telegram" className="text-white hover:text-green-400 transition-colors">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center border-2 border-green-500 mb-2 hover:bg-black/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.5 7.5a2.25 2.25 0 0 0 .126 4.073l3.9 1.205 2.306 6.54c.376 1.02 1.598 1.688 2.91 1.147l.012-.005a1.05 1.05 0 0 0 .402-.367l1.53-1.813 3.322 2.45c.83.607 2 .07 2.458-.91l4.537-13.5c.501-1.478-.64-2.926-2.18-3.034zM10.464 14.5l-1.17 1.395 4.5 3.33-3.33-4.725z" />
                    </svg>
                  </div>
                  <span className="text-xs">Telegram</span>
                </div>
              </Link>
              <Link href="https://www.youtube.com/@KewiLabs" aria-label="YouTube" className="text-white hover:text-green-400 transition-colors">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center border-2 border-green-500 mb-2 hover:bg-black/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  </div>
                  <span className="text-xs">YouTube</span>
                </div>
              </Link>
              <Link href="https://www.instagram.com/kewilabs/" aria-label="Instagram" className="text-white hover:text-green-400 transition-colors">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center border-2 border-green-500 mb-2 hover:bg-black/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                  <span className="text-xs">Instagram</span>
                </div>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
} 
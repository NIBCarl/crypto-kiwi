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
import TwitterLogo from "../../assets/Socials icon/1.png";
import FacebookLogo from "../../assets/Socials icon/2.png";
import TelegramLogo from "../../assets/Socials icon/3.png";
import YoutubeLogo from "../../assets/Socials icon/4.png";
import InstagramLogo from "../../assets/Socials icon/5.png";

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
              Kewi Labs
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-green-400 font-mono mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              POWERED BY KUSD
            </motion.p>
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
                alt="Kewi Labs Logo" 
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
                      <Image 
                        src={TwitterLogo} 
                        alt="X (Twitter)" 
                        width={12} 
                        height={12} 
                        className="w-5 h-5"
                      />
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
                      <Image 
                        src={TelegramLogo} 
                        alt="Telegram" 
                        width={12} 
                        height={12} 
                        className="w-5 h-5"
                      />
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
                      <Image 
                        src={YoutubeLogo} 
                        alt="YouTube" 
                        width={12} 
                        height={12} 
                        className="w-5 h-5"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">YouTube</h3>
                      <p className="text-xs text-gray-300">@KewiLabs</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-300">Watch our tutorials, demos, and educational content about the Kewi ecosystem.</p>
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
                      <Image 
                        src={FacebookLogo} 
                        alt="Facebook" 
                        width={12} 
                        height={12} 
                        className="w-5 h-5"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Facebook</h3>
                      <p className="text-xs text-gray-300">KewiLabs</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-300">Join our Facebook community for events, news, and connecting with other Kewi enthusiasts.</p>
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
                  alt="Kewi Website Preview"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </motion.div>
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-xl font-bold text-green-400 mb-3">Bridging Web2 & Web3</h3>
                <p className="text-gray-300 mb-6">
                  Kewi Labs is a USA based blockchain development company focusing on bridging the gap between web2 & web3 with its research, development and contributions to open source software across BTC & ETH networks.
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
                    <Image 
                      src={TwitterLogo} 
                      alt="X (Twitter)" 
                      width={12} 
                      height={12} 
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="text-xs">Twitter</span>
                </div>
              </Link>
              <Link href="https://www.facebook.com/KewiLabs" aria-label="Facebook" className="text-white hover:text-green-400 transition-colors">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center border-2 border-green-500 mb-2 hover:bg-black/50 transition-colors">
                    <Image 
                      src={FacebookLogo} 
                      alt="Facebook" 
                      width={12} 
                      height={12} 
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="text-xs">Facebook</span>
                </div>
              </Link>
              <Link href="https://t.me/KewiNews" aria-label="Telegram" className="text-white hover:text-green-400 transition-colors">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center border-2 border-green-500 mb-2 hover:bg-black/50 transition-colors">
                    <Image 
                      src={TelegramLogo} 
                      alt="Telegram" 
                      width={12} 
                      height={12} 
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="text-xs">Telegram</span>
                </div>
              </Link>
              <Link href="https://www.youtube.com/@KewiLabs" aria-label="YouTube" className="text-white hover:text-green-400 transition-colors">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center border-2 border-green-500 mb-2 hover:bg-black/50 transition-colors">
                    <Image 
                      src={YoutubeLogo} 
                      alt="YouTube" 
                      width={12} 
                      height={12} 
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="text-xs">YouTube</span>
                </div>
              </Link>
              <Link href="https://www.instagram.com/kewilabs/" aria-label="Instagram" className="text-white hover:text-green-400 transition-colors">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center border-2 border-green-500 mb-2 hover:bg-black/50 transition-colors">
                    <Image 
                      src={InstagramLogo} 
                      alt="Instagram" 
                      width={12} 
                      height={12} 
                      className="w-5 h-5"
                    />
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
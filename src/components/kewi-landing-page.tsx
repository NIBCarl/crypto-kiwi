"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Only import assets that exist
// If you have SVG files in @/assets/social, uncomment these
// import DiscordIcon from "@/assets/social/discord.svg";
// import TwitterIcon from "@/assets/social/twitter.svg";
// import MediumIcon from "@/assets/social/medium.svg";
// import DocsIcon from "@/assets/social/docs.svg";

// Import logo and security partner logos
// import KiwiLogo from "@/assets/kiwi-logo.png";
// import OtterSecLogo from "@/assets/security/ottersec-logo.png";
// import ImmunefiLogo from "@/assets/security/immunefi-logo.png";

// Import investor logos
// import AnimocaLogo from "@/assets/investors/animoca.png";
// import BlockcelerateLogo from "@/assets/investors/blockcelerate.png";
// import BuilderLogo from "@/assets/investors/builder.png";
// import CmsLogo from "@/assets/investors/cms.png";
// import InfinityLogo from "@/assets/investors/infinity.png";
// import MaelstromLogo from "@/assets/investors/maelstrom.png";
// import OpticLogo from "@/assets/investors/optic.png";
// import DelayedCapitalLogo from "@/assets/investors/delayed-capital.png";
// import RocktreeLogo from "@/assets/investors/rocktree.png";
// import StakeLogo from "@/assets/investors/stake.png";
// import VeilLogo from "@/assets/investors/veil.png";
// import Wise3Logo from "@/assets/investors/wise3.png";

// Import assets from the assets folder
import LogoText from "../../assets/Logo Text.png";
import LogoImage from "../../assets/Logo.png";
import CoinImage from "../../assets/Coin.png";
import BackgroundImage from "../../assets/background.jpeg";
import KiwiWebsite from "../../assets/Kewi Website.png";
import TwitterLogo from "../../assets/Socials icon/1.png";
import FacebookLogo from "../../assets/Socials icon/2.png";
import TelegramLogo from "../../assets/Socials icon/3.png";
import YoutubeLogo from "../../assets/Socials icon/4.png";
import InstagramLogo from "../../assets/Socials icon/5.png";

// Social media images
// import TwitterCover from "../../assets/Socials/Twitter Cover.jpg";
// import FacebookCover from "../../assets/Socials/Facebook Cover.jpg";
// import LinkedInCover from "../../assets/Socials/LinkedIn Cover.jpg";
// import YoutubeCover from "../../assets/Socials/Youtube Cover.jpg";

// Parallax effect for background
const useParallaxEffect = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed') || '0.5';
        if (element instanceof HTMLElement) {
          element.style.transform = `translateY(${scrollY * parseFloat(speed)}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial call to position elements
    handleScroll();
    
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export function KewiLandingPage() {
  // Enable parallax effect
  useParallaxEffect();

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-black to-green-950 text-white relative overflow-hidden"
    >
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0 parallax" 
        data-speed="0.2"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.85), rgba(6, 78, 59, 0.75)), url(${BackgroundImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Circuit Board Overlay */}
      <div className="absolute inset-0 z-0 opacity-30 parallax" data-speed="0.1">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-8 flex flex-col min-h-screen relative z-10">
        {/* Enhanced Navigation */}
        <motion.nav 
          className="flex justify-between items-center mb-16 py-4 px-6 rounded-xl bg-black/20 backdrop-blur-sm border border-green-500/10"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image 
                src={LogoImage} 
                alt="Kewi Labs" 
                width={50} 
                height={50} 
                className="h-12 w-auto mr-3 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image 
                src={LogoText} 
                alt="Kewi Labs" 
                width={120} 
                height={40} 
                className="h-10 w-auto drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]"
              />
            </motion.div>
          </div>
          <div className="flex gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/assets" 
                className="px-6 py-2 border border-white/20 rounded-md hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 flex items-center justify-center min-w-[100px]"
              >
                Assets
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/swap" 
                className="px-6 py-2 border border-white/20 rounded-md hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 flex items-center justify-center min-w-[100px]"
              >
                Swap
              </Link>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/app" 
                className="px-6 py-2 bg-green-500 text-black rounded-md flex items-center justify-center gap-2 hover:bg-green-400 transition-colors font-medium border border-green-500 min-w-[140px]"
              >
                Launch App <span className="text-xl">→</span>
              </Link>
            </motion.div>
          </div>
        </motion.nav>

        {/* Enhanced Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24 flex-grow">
          <div className="md:w-1/2">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Kewi Labs
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-green-400 font-mono mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              POWERED BY KUSD
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="text-gray-300 max-w-md">
                Kewi is a high-performance Layer 2 blockchain designed to enhance scalability and usability for decentralized applications.
              </p>
            </motion.div>
          </div>
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              {/* Glow effect behind coin */}
              <div className="absolute inset-0 bg-green-500 blur-3xl opacity-20 rounded-full"></div>
              <motion.div
                animate={{ 
                  rotateY: 360,
                  y: [0, -10, 0]
                }}
                transition={{
                  rotateY: {
                    duration: 8,
                    ease: "linear",
                    repeat: Infinity
                  },
                  y: {
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity
                  }
                }}
                style={{ perspective: 1000 }}
              >
                <Image 
                  src={CoinImage} 
                  alt="Kewi Coin" 
                  width={400} 
                  height={400} 
                  className="w-64 md:w-96 h-auto drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Website Preview Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <h2 className="text-2xl text-center mb-8 font-semibold relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">KEWI ECOSYSTEM</span>
            <div className="absolute h-1 w-24 bg-gradient-to-r from-green-500 to-transparent rounded-full bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
          </h2>
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.03, rotate: -1 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-lg overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.8)] border-2 border-green-500/40 relative group"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/0 to-green-400/0 group-hover:from-green-600/20 group-hover:to-green-400/20 transition-all duration-500"></div>
                  <Image
                    src={KiwiWebsite}
                    alt="Kewi Website Preview"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
              <div className="lg:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold text-green-400">Seamless DeFi Experience</h3>
                <p className="text-gray-300 text-lg">
                  Kewi is a high-performance Layer 2 blockchain designed to enhance scalability and usability for decentralized applications.
                </p>
                <ul className="space-y-3 mt-6">
                  <motion.li 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-black font-bold shadow-lg">✓</div>
                    <span className="text-lg">Secure stablecoin minting and management</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-black font-bold shadow-lg">✓</div>
                    <span className="text-lg">Efficient cross-chain transfers</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-black font-bold shadow-lg">✓</div>
                    <span className="text-lg">Advanced liquidity provision tools</span>
                  </motion.li>
                </ul>
                <div className="pt-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative inline-block group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-green-400 rounded-md blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                    <Link
                      href="/app"
                      className="relative px-8 py-3 bg-green-500 text-black rounded-md inline-flex items-center gap-2 hover:bg-green-400 transition-colors font-medium text-lg"
                    >
                      Explore Platform <span className="text-xl">→</span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Social Links */}
        <footer className="mt-auto pb-8">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-6 text-green-400 relative">
              Connect With Us
              <div className="absolute h-1 w-16 bg-gradient-to-r from-green-500 to-transparent rounded-full bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
            </h3>
            <div className="flex justify-center gap-8 flex-wrap">
              <motion.div
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="https://x.com/Kewi_L2" aria-label="Twitter" className="text-white hover:text-green-400 transition-colors">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border-2 border-green-500 mb-2 hover:bg-black/70 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                      <Image 
                        src={TwitterLogo} 
                        alt="X (Twitter)" 
                        width={16} 
                        height={16} 
                        className="w-6 h-6"
                      />
                    </div>
                    <span className="text-sm font-medium">Twitter</span>
                  </div>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="https://www.facebook.com/KewiLabs" aria-label="Facebook" className="text-white hover:text-green-400 transition-colors">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border-2 border-green-500 mb-2 hover:bg-black/70 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                      <Image 
                        src={FacebookLogo} 
                        alt="Facebook" 
                        width={16} 
                        height={16} 
                        className="w-6 h-6"
                      />
                    </div>
                    <span className="text-sm font-medium">Facebook</span>
                  </div>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="https://t.me/KewiNews" aria-label="Telegram" className="text-white hover:text-green-400 transition-colors">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border-2 border-green-500 mb-2 hover:bg-black/70 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                      <Image 
                        src={TelegramLogo} 
                        alt="Telegram" 
                        width={16} 
                        height={16} 
                        className="w-6 h-6"
                      />
                    </div>
                    <span className="text-sm font-medium">Telegram</span>
                  </div>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="https://www.youtube.com/@KewiLabs" aria-label="YouTube" className="text-white hover:text-green-400 transition-colors">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border-2 border-green-500 mb-2 hover:bg-black/70 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                      <Image 
                        src={YoutubeLogo} 
                        alt="YouTube" 
                        width={16} 
                        height={16} 
                        className="w-6 h-6"
                      />
                    </div>
                    <span className="text-sm font-medium">YouTube</span>
                  </div>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="https://www.instagram.com/kewilabs/" aria-label="Instagram" className="text-white hover:text-green-400 transition-colors">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border-2 border-green-500 mb-2 hover:bg-black/70 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                      <Image 
                        src={InstagramLogo} 
                        alt="Instagram" 
                        width={16} 
                        height={16} 
                        className="w-6 h-6"
                      />
                    </div>
                    <span className="text-sm font-medium">Instagram</span>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
} 
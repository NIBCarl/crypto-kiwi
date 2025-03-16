"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

// Import all assets
import LogoImage from "../../assets/Logo.png";
import LogoText from "../../assets/Logo Text.png";
import CoinImage from "../../assets/Coin.png";
import BackgroundImage from "../../assets/background.jpeg";
import Pfp1Image from "../../assets/Pfp1.png";
import Pfp2Image from "../../assets/Pfp2.png";
import KiwiWebsite from "../../assets/Kewi Website.png";
import TwitterLogo from "../../assets/Socials icon/1.png";
import FacebookLogo from "../../assets/Socials icon/2.png";
import TelegramLogo from "../../assets/Socials icon/3.png";
import YoutubeLogo from "../../assets/Socials icon/4.png";
import InstagramLogo from "../../assets/Socials icon/5.png";

// Social media images
import TwitterCover from "../../assets/Socials/Twitter Cover.jpg";
import FacebookCover from "../../assets/Socials/Facebook Cover.jpg";
import LinkedInCover from "../../assets/Socials/LinkedIn Cover.jpg";
import YoutubeCover from "../../assets/Socials/Youtube Cover.jpg";

interface AssetItemProps {
  src: string | StaticImageData;
  alt: string;
  title: string;
  delay: number;
}

function AssetItem({ src, alt, title, delay }: AssetItemProps) {
  return (
    <motion.div
      className="bg-black/30 rounded-lg p-4 flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="text-lg font-medium text-white">{title}</h3>
    </motion.div>
  );
}

export function AssetGallery() {
  const assets = [
    { src: LogoImage, alt: "Kewi Logo", title: "Logo.png" },
    { src: LogoText, alt: "Kewi Logo with Text", title: "Logo Text.png" },
    { src: CoinImage, alt: "Kewi Coin", title: "Coin.png" },
    { src: BackgroundImage, alt: "Background Image", title: "background.jpeg" },
    { src: Pfp1Image, alt: "Profile Picture 1", title: "Pfp1.png" },
    { src: Pfp2Image, alt: "Profile Picture 2", title: "Pfp2.png" },
    { src: KiwiWebsite, alt: "Kewi Website", title: "Kewi Website.png" },
  ];

  const socialAssets = [
    { src: TwitterCover, alt: "Twitter Cover", title: "Twitter Cover.jpg" },
    { src: FacebookCover, alt: "Facebook Cover", title: "Facebook Cover.jpg" },
    { src: LinkedInCover, alt: "LinkedIn Cover", title: "LinkedIn Cover.jpg" },
    { src: YoutubeCover, alt: "YouTube Cover", title: "Youtube Cover.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-green-950 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Kewi Assets Gallery
        </motion.h1>

        <motion.p
          className="text-xl text-center mb-12 text-green-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Showcasing all available assets from the assets folder
        </motion.p>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 border-b border-green-500 pb-2">Main Assets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {assets.map((asset, index) => (
              <AssetItem
                key={asset.title}
                src={asset.src}
                alt={asset.alt}
                title={asset.title}
                delay={0.1 * index}
              />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 border-b border-green-500 pb-2">Social Media Assets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialAssets.map((asset, index) => (
              <AssetItem
                key={asset.title}
                src={asset.src}
                alt={asset.alt}
                title={asset.title}
                delay={0.1 * index}
              />
            ))}
          </div>
        </div>

        {/* Social Icons Demo Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 border-b border-green-500 pb-2">Social Icons Demo</h2>
          <div className="bg-black/30 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-center text-green-400">Connect With Us</h3>
            <div className="flex justify-center gap-8 flex-wrap">
              <motion.div 
                className="flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 rounded-full bg-black/30 flex items-center justify-center border-2 border-green-500 mb-2 hover:bg-black/50 transition-colors">
                  <Image 
                    src={TwitterLogo} 
                    alt="X (Twitter)" 
                    width={14} 
                    height={14} 
                    className="w-6 h-6"
                  />
                </div>
                <span className="text-sm">Twitter</span>
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 rounded-full bg-black/30 flex items-center justify-center border-2 border-green-500 mb-2 hover:bg-black/50 transition-colors">
                  <Image 
                    src={FacebookLogo} 
                    alt="Facebook" 
                    width={14} 
                    height={14} 
                    className="w-6 h-6"
                  />
                </div>
                <span className="text-sm">Facebook</span>
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 rounded-full bg-black/30 flex items-center justify-center border-2 border-green-500 mb-2 hover:bg-black/50 transition-colors">
                  <Image 
                    src={TelegramLogo} 
                    alt="Telegram" 
                    width={14} 
                    height={14} 
                    className="w-6 h-6"
                  />
                </div>
                <span className="text-sm">Telegram</span>
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 rounded-full bg-black/30 flex items-center justify-center border-2 border-green-500 mb-2 hover:bg-black/50 transition-colors">
                  <Image 
                    src={YoutubeLogo} 
                    alt="YouTube" 
                    width={14} 
                    height={14} 
                    className="w-6 h-6"
                  />
                </div>
                <span className="text-sm">YouTube</span>
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 rounded-full bg-black/30 flex items-center justify-center border-2 border-green-500 mb-2 hover:bg-black/50 transition-colors">
                  <Image 
                    src={InstagramLogo} 
                    alt="Instagram" 
                    width={14} 
                    height={14} 
                    className="w-6 h-6"
                  />
                </div>
                <span className="text-sm">Instagram</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Social Media Showcase */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 border-b border-green-500 pb-2">Social Media Showcase</h2>
          <div className="bg-black/30 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6 text-center text-green-400">How We Use Social Media Assets</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-black/50 rounded-xl overflow-hidden border border-green-500/20">
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
                  <p className="text-sm text-gray-300">Twitter Cover.jpg used as background with overlay gradient and icon.</p>
                </div>
              </div>

              <div className="bg-black/50 rounded-xl overflow-hidden border border-green-500/20">
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
                  <p className="text-sm text-gray-300">Facebook Cover.jpg used as background with overlay gradient and icon.</p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 p-6 rounded-lg border border-green-500/20">
              <h4 className="font-semibold mb-3 text-green-400">Website Preview Implementation</h4>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden border border-green-500/30">
                    <Image
                      src={KiwiWebsite}
                      alt="Kewi Website Preview"
                      width={500}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <p className="text-sm text-gray-300">
                    The Kewi Website.png image is used to showcase the platform interface in the website preview section. 
                    It&apos;s displayed with a subtle border and hover animation to draw attention to the platform&apos;s features.
                  </p>
                  <div className="mt-3 text-xs text-gray-400">
                    <code className="bg-black/30 p-1 rounded">Kewi Website.png</code> - Used in both landing pages
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coin Animation Demo */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 border-b border-green-500 pb-2">Coin Animation Demo</h2>
          <div className="bg-black/30 p-8 rounded-lg flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-6 text-center text-green-400">Interactive Coin</h3>
            
            <div className="flex flex-wrap gap-12 justify-center">
              {/* Basic Rotation */}
              <div className="flex flex-col items-center">
                <h4 className="mb-4 text-center">Continuous Rotation</h4>
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
                    alt="Rotating Coin" 
                    width={200} 
                    height={200} 
                    className="w-40 h-auto"
                  />
                </motion.div>
              </div>
              
              {/* Hover Rotation */}
              <div className="flex flex-col items-center">
                <h4 className="mb-4 text-center">Hover to Flip</h4>
                <motion.div
                  whileHover={{ rotateY: 180 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  style={{ perspective: 1000 }}
                >
                  <Image 
                    src={CoinImage} 
                    alt="Hover Flip Coin" 
                    width={200} 
                    height={200} 
                    className="w-40 h-auto"
                  />
                </motion.div>
              </div>
              
              {/* Bounce and Rotate */}
              <div className="flex flex-col items-center">
                <h4 className="mb-4 text-center">Bounce and Rotate</h4>
                <motion.div
                  animate={{ 
                    rotateY: 360,
                    y: [0, -20, 0]
                  }}
                  transition={{
                    rotateY: {
                      duration: 8,
                      ease: "linear",
                      repeat: Infinity
                    },
                    y: {
                      duration: 1.5,
                      ease: "easeInOut",
                      repeat: Infinity
                    }
                  }}
                  style={{ perspective: 1000 }}
                >
                  <Image 
                    src={CoinImage} 
                    alt="Bouncing Coin" 
                    width={200} 
                    height={200} 
                    className="w-40 h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
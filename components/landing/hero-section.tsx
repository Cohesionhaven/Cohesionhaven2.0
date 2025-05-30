"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Shield, Users } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative w-full overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background z-10" />
        <Image 
          src="https://images.pexels.com/photos/7642001/pexels-photo-7642001.jpeg"
          alt="People connecting in a welcoming home setting"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="container relative z-20 pt-24 pb-20 md:pt-36 md:pb-32">
        <div className="max-w-3xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
              Connect Hearts, Share Homes,{" "}
              <span className="text-primary-orange-500 relative">
                Build Community
                <div className="absolute bottom-1 left-0 w-full h-2 bg-primary-orange-500/30 -z-10 rounded-full" />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              HomeShare connects those experiencing homelessness with compassionate home providers 
              for mutual support, companionship, and life-changing opportunities.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="bg-primary-orange-500 hover:bg-primary-orange-600" asChild>
              <Link href="/sign-up">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/how-it-works">Learn How It Works</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-6 md:pt-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-orange-500 flex items-center justify-center">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-white">Meaningful Connections</h3>
                </div>
                <p className="mt-2 text-sm text-white/80">Create lasting bonds based on mutual understanding and support.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary-blue-500 flex items-center justify-center">
                    <Heart className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-white">Companionship</h3>
                </div>
                <p className="mt-2 text-sm text-white/80">Share experiences, stories, and daily life with someone who cares.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-teal-500 flex items-center justify-center">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-white">Safe & Trusted</h3>
                </div>
                <p className="mt-2 text-sm text-white/80">Our verification system ensures safety and security for all participants.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Heart, Home, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function MissionSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden"
          >
            <Image
              src="https://images.pexels.com/photos/7437860/pexels-photo-7437860.jpeg"
              alt="People sharing a meal together"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-primary-orange-500 flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <span className="text-white text-lg font-semibold">Our Purpose</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
              Our Mission: Building Bridges & Creating Community
            </h2>
            <p className="text-lg text-muted-foreground">
              HomeShare exists to create meaningful connections between those experiencing 
              homelessness and compassionate home providers, fostering mutual support, 
              reducing isolation, and creating pathways to stable housing solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-primary-orange-500">
                  <Users className="h-5 w-5" />
                  <h3 className="text-lg font-medium">For Those Seeking Shelter</h3>
                </div>
                <p className="text-muted-foreground">
                  Access compassionate support, meaningful connections, and potential 
                  housing solutions in a dignified, person-centered way.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-secondary-blue-500">
                  <Home className="h-5 w-5" />
                  <h3 className="text-lg font-medium">For Home Providers</h3>
                </div>
                <p className="text-muted-foreground">
                  Share your space, offer companionship, and make a direct impact by helping 
                  someone in need in your community.
                </p>
              </div>
            </div>
            <Button className="mt-6 bg-primary-orange-500 hover:bg-primary-orange-600" asChild>
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
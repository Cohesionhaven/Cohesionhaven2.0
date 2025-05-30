"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Lock, Shield, UserCheck } from "lucide-react";
import Image from "next/image";

export function SafetySection() {
  const safetyFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Identity Verification",
      description: "We verify all users through a comprehensive process including ID checks and references.",
      color: "bg-primary-orange-500",
    },
    {
      icon: <BadgeCheck className="h-6 w-6" />,
      title: "Background Screening",
      description: "Optional background checks provide additional security and peace of mind for participants.",
      color: "bg-secondary-blue-500",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Secure Messaging",
      description: "Our messaging system includes content moderation and safety features to protect all users.",
      color: "bg-accent-teal-500",
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Safety Agreement",
      description: "Clear guidelines and boundaries ensure everyone's comfort and security during the sharing process.",
      color: "bg-success-500",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
              Your Safety Is Our Priority
            </h2>
            <p className="text-lg text-muted-foreground">
              HomeShare employs comprehensive safety measures to create a secure environment for 
              everyone in our community. Our multi-layered approach ensures peace of mind while 
              fostering meaningful connections.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {safetyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`h-10 w-10 rounded-full ${feature.color} flex items-center justify-center text-white`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-medium">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground pl-12">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg"
                alt="Safe community interaction"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="inline-block bg-white bg-opacity-20 backdrop-blur-md rounded-lg px-4 py-2 text-white mb-2">
                    <Shield className="h-5 w-5 inline-block mr-2" />
                    <span className="font-medium">Safety Verified</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Building Trust Through Verification
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
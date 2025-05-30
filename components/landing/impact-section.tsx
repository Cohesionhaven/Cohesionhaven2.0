"use client";

import { motion } from "framer-motion";
import { Home, Users, Smile, Heart } from "lucide-react";

const stats = [
  {
    icon: <Users className="h-8 w-8" />,
    value: "1,200+",
    label: "Successful Matches",
    color: "bg-primary-orange-500",
  },
  {
    icon: <Home className="h-8 w-8" />,
    value: "800+",
    label: "Home Providers",
    color: "bg-secondary-blue-500",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    value: "94%",
    label: "Positive Experiences",
    color: "bg-accent-teal-500",
  },
  {
    icon: <Smile className="h-8 w-8" />,
    value: "15,000+",
    label: "Community Members",
    color: "bg-success-500",
  },
];

export function ImpactSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Our Impact
          </h2>
          <p className="text-lg text-muted-foreground">
            HomeShare is making a measurable difference in communities across the country,
            connecting people and creating lasting positive change.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl p-6 shadow-sm border border-border/50 text-center"
            >
              <div className={`h-16 w-16 ${stat.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-primary-orange-500 to-secondary-blue-500 rounded-xl p-8 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">Beyond Numbers: Human Impact</h3>
              <p className="mb-4">
                Our success isn't just measured in statistics. It's measured in the strength of 
                relationships formed, the dignity restored, and the communities transformed.
              </p>
              <p>
                Every match creates ripples of positive change that extend far beyond housing solutions,
                building stronger, more connected communities.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 text-center">
              <div className="text-5xl font-bold mb-2">78%</div>
              <p className="text-white/90">
                of homeless individuals in our program find stable long-term housing within 12 months
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
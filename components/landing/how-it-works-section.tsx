"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Home, MessageSquare, Search, UserCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
  {
    number: 1,
    title: "Create Your Profile",
    description: "Sign up and build your profile. Tell us about yourself, your needs, and what you're looking for.",
    icon: <Users className="h-6 w-6" />,
    color: "bg-primary-orange-500",
  },
  {
    number: 2,
    title: "Verification Process",
    description: "Complete our verification steps to ensure safety and build trust in the community.",
    icon: <BadgeCheck className="h-6 w-6" />,
    color: "bg-secondary-blue-500",
  },
  {
    number: 3,
    title: "Find Your Match",
    description: "Browse potential matches based on location, needs, preferences, and compatibility.",
    icon: <Search className="h-6 w-6" />,
    color: "bg-accent-teal-500",
  },
  {
    number: 4,
    title: "Connect Safely",
    description: "Message and get to know potential matches through our secure messaging system.",
    icon: <MessageSquare className="h-6 w-6" />,
    color: "bg-success-500",
  },
  {
    number: 5,
    title: "Create Agreements",
    description: "Once you've found a match, establish clear expectations and boundaries together.",
    icon: <UserCheck className="h-6 w-6" />,
    color: "bg-warning-500",
  },
  {
    number: 6,
    title: "Start Sharing",
    description: "Begin your HomeShare journey together with ongoing support from our community.",
    icon: <Home className="h-6 w-6" />,
    color: "bg-primary-orange-500",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            How HomeShare Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Our simple six-step process connects those seeking shelter with compassionate home providers,
            ensuring safety, compatibility, and mutual benefit every step of the way.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={item}
              className="bg-background rounded-xl p-6 shadow-sm border border-border/50 flex flex-col h-full"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`h-12 w-12 rounded-full ${step.color} flex items-center justify-center text-white`}>
                  {step.icon}
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Step {step.number}</span>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
              </div>
              <p className="text-muted-foreground flex-grow">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button size="lg" className="bg-primary-orange-500 hover:bg-primary-orange-600" asChild>
            <Link href="/sign-up">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
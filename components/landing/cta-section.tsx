"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Heart, Home, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Whether you need support or want to provide it, joining HomeShare connects you to a 
            community focused on compassion, dignity, and meaningful change.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background rounded-xl p-6 shadow-md border border-border flex flex-col items-center text-center"
            >
              <div className="h-14 w-14 rounded-full bg-primary-orange-500 flex items-center justify-center text-white mb-4">
                <Home className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Home Providers</h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                Share your space and make a direct impact in someone's life while building community.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/sign-up?role=provider">Become a Provider</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background rounded-xl p-6 shadow-md border border-border flex flex-col items-center text-center"
            >
              <div className="h-14 w-14 rounded-full bg-secondary-blue-500 flex items-center justify-center text-white mb-4">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Seeking Shelter</h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                Connect with compassionate people offering support, companionship, and housing solutions.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/sign-up?role=homeless">Find Support</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-background rounded-xl p-6 shadow-md border border-border flex flex-col items-center text-center"
            >
              <div className="h-14 w-14 rounded-full bg-accent-teal-500 flex items-center justify-center text-white mb-4">
                <Heart className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                Donate, volunteer, or become a community organizer to help us expand our impact.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/donate">Support Our Mission</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-primary-orange-50 dark:bg-primary-orange-900/20 rounded-xl p-10 border border-primary-orange-200 dark:border-primary-orange-800/30"
          >
            <h3 className="text-2xl font-bold mb-4">Begin Your Journey Today</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Join thousands of others who are creating connections that transform lives and communities.
            </p>
            <Button size="lg" className="bg-primary-orange-500 hover:bg-primary-orange-600" asChild>
              <Link href="/sign-up">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
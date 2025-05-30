"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "HomeShare connected me with a compassionate family when I had nowhere else to go. They didn't just provide shelter - they helped me rebuild my life.",
    author: "Michael T.",
    role: "Former Homeless Individual",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    stars: 5,
  },
  {
    quote: "Opening our home to someone in need has been one of the most rewarding experiences of our lives. We've gained a friend and learned so much about resilience.",
    author: "The Williams Family",
    role: "Home Provider",
    image: "https://images.pexels.com/photos/3807746/pexels-photo-3807746.jpeg",
    stars: 5,
  },
  {
    quote: "As a community organizer, I've seen firsthand how HomeShare creates lasting positive change. Their verification system makes everyone feel secure in the process.",
    author: "Sarah K.",
    role: "Community Partner",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    stars: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Stories of Connection & Hope
          </h2>
          <p className="text-lg text-muted-foreground">
            Real experiences from people who have found community, support, and 
            life-changing opportunities through HomeShare.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl p-6 shadow-sm border border-border/50 flex flex-col"
            >
              <div className="flex-1">
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary-orange-500 text-primary-orange-500" />
                  ))}
                </div>
                <p className="italic text-muted-foreground mb-6">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
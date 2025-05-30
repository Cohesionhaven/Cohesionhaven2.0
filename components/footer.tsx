import Link from "next/link";
import { Heart } from "lucide-react";

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Stories', href: '/stories' },
    { name: 'Resources', href: '/resources' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Donate', href: '/donate' },
    { name: 'Contact', href: '/contact' },
  ],
  support: [
    { name: 'Safety', href: '/safety' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Terms', href: '/terms' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Cookies', href: '/cookies' },
  ],
  social: [
    { name: 'Twitter', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'LinkedIn', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-orange-500 text-white">
                <Heart className="h-4 w-4" />
              </div>
              <span className="font-bold text-xl">HomeShare</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              HomeShare connects individuals experiencing homelessness with compassionate home providers for mutual support and life-changing opportunities.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary-orange-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary-orange-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Sign up for updates</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest news, stories, and updates from our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-orange-500 focus:border-primary-orange-500"
              />
              <button className="bg-primary-orange-500 hover:bg-primary-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/20 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} HomeShare. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            {navigation.social.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary-orange-500 transition-colors"
              >
                <span className="sr-only">{item.name}</span>
                <div className="h-6 w-6 flex items-center justify-center rounded-full border border-border hover:border-primary-orange-500 transition-colors">
                  <span className="text-xs">{item.name.charAt(0)}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
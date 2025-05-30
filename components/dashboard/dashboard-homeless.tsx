"use client";

import Link from "next/link";
import { BarChart, Heart, MapPin, MessageSquare, Users } from "lucide-react";
import { motion } from "framer-motion";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Mock data for demonstration
const recentMessages = [
  {
    id: "msg-1",
    sender: "The Williams Family",
    avatar: "https://images.pexels.com/photos/3807746/pexels-photo-3807746.jpeg",
    preview: "We'd love to have you over for dinner...",
    time: "2h ago",
    unread: true,
  },
  {
    id: "msg-2",
    sender: "Maria G.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    preview: "I can help you with that resume...",
    time: "Yesterday",
    unread: false,
  },
];

const nearbyResources = [
  {
    id: "res-1",
    name: "Downtown Food Pantry",
    distance: "0.8 miles",
    type: "FOOD",
    availability: "Open today until 6pm",
  },
  {
    id: "res-2",
    name: "Community Health Clinic",
    distance: "1.2 miles",
    type: "HEALTHCARE",
    availability: "Appointments available",
  },
  {
    id: "res-3",
    name: "Job Training Center",
    distance: "2.5 miles",
    type: "EMPLOYMENT",
    availability: "Walk-ins welcome",
  },
];

const dashboardCards = [
  {
    title: "Profile Views",
    value: "24",
    description: "Last 30 days",
    icon: <Users className="h-4 w-4" />,
    color: "bg-primary-orange-500",
  },
  {
    title: "Potential Matches",
    value: "12",
    description: "In your area",
    icon: <Heart className="h-4 w-4" />,
    color: "bg-secondary-blue-500",
  },
  {
    title: "New Messages",
    value: "5",
    description: "Unread messages",
    icon: <MessageSquare className="h-4 w-4" />,
    color: "bg-accent-teal-500",
  },
  {
    title: "Resources Near You",
    value: "19",
    description: "Within 5 miles",
    icon: <MapPin className="h-4 w-4" />,
    color: "bg-success-500",
  },
];

export function DashboardHomeless() {
  return (
    <div className="grid gap-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {card.title}
                </CardTitle>
                <div className={`${card.color} rounded-full p-1 text-white`}>
                  {card.icon}
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.value}</div>
                <p className="text-xs text-muted-foreground">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Messages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Recent Messages</CardTitle>
              <CardDescription>
                Stay in touch with potential hosts and supporters
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentMessages.map((message) => (
                <div key={message.id} className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={message.avatar} alt={message.sender} />
                    <AvatarFallback>{message.sender[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{message.sender}</p>
                      <span className="text-xs text-muted-foreground">
                        {message.time}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {message.preview}
                    </p>
                  </div>
                  {message.unread && (
                    <Badge variant="destructive" className="ml-2 px-1.5 h-1.5 rounded-full" />
                  )}
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/messages">View All Messages</Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Profile Completion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Profile Completion</CardTitle>
              <CardDescription>
                Complete your profile to improve matching and opportunities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Overall Completion</span>
                  <span className="font-medium">65%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Badge className="mr-2 bg-secondary-blue-500">Pending</Badge>
                    <span className="font-medium">ID Verification</span>
                  </div>
                  <Button size="sm" variant="outline">Complete</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Badge className="mr-2 bg-success-500">Completed</Badge>
                    <span className="font-medium">Basic Information</span>
                  </div>
                  <Button size="sm" variant="ghost">Edit</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Badge className="mr-2 bg-warning-500">Partial</Badge>
                    <span className="font-medium">Preferences & Needs</span>
                  </div>
                  <Button size="sm" variant="outline">Continue</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Badge className="mr-2 bg-secondary-blue-500">Pending</Badge>
                    <span className="font-medium">Emergency Contact</span>
                  </div>
                  <Button size="sm" variant="outline">Add</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Nearby Resources */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Resources Near You</CardTitle>
            <CardDescription>
              Services and support available in your area
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {nearbyResources.map((resource) => (
                <Card key={resource.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">{resource.name}</CardTitle>
                      <Badge variant="outline">{resource.distance}</Badge>
                    </div>
                    <CardDescription>{resource.availability}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      Get Directions
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/resources">View All Resources</Link>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
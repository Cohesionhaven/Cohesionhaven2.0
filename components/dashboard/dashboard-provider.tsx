"use client";

import Link from "next/link";
import { BarChart, Heart, MessageSquare, Users } from "lucide-react";
import { motion } from "framer-motion";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// Mock data for demonstration
const recentMessages = [
  {
    id: "msg-1",
    sender: "Michael T.",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    preview: "Hi Jane, I wanted to thank you for...",
    time: "1h ago",
    unread: true,
  },
  {
    id: "msg-2",
    sender: "Sarah K.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    preview: "Would you be available to meet on...",
    time: "5h ago",
    unread: false,
  },
];

const upcomingConnections = [
  {
    id: "conn-1",
    name: "Coffee with Robert",
    date: "Tomorrow, 10:00 AM",
    location: "Central Park Cafe",
  },
  {
    id: "conn-2",
    name: "Initial meeting with Lisa",
    date: "Friday, 3:30 PM",
    location: "Video Call",
  },
];

const dashboardCards = [
  {
    title: "Profile Visits",
    value: "47",
    description: "Last 30 days",
    icon: <Users className="h-4 w-4" />,
    color: "bg-primary-orange-500",
  },
  {
    title: "Active Matches",
    value: "2",
    description: "Currently connecting",
    icon: <Heart className="h-4 w-4" />,
    color: "bg-secondary-blue-500",
  },
  {
    title: "New Messages",
    value: "9",
    description: "Unread messages",
    icon: <MessageSquare className="h-4 w-4" />,
    color: "bg-accent-teal-500",
  },
  {
    title: "Impact Score",
    value: "85",
    description: "Community contribution",
    icon: <BarChart className="h-4 w-4" />,
    color: "bg-success-500",
  },
];

export function DashboardProvider() {
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
                Stay in touch with your connections
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

        {/* Upcoming Connections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Upcoming Connections</CardTitle>
              <CardDescription>
                Your scheduled meetings and activities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingConnections.map((connection) => (
                <div key={connection.id} className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium">{connection.name}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>{connection.date}</span>
                        <span className="mx-2">•</span>
                        <span>{connection.location}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Details
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/calendar">View Calendar</Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>

      {/* Potential Matches */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Potential Matches</CardTitle>
            <CardDescription>
              People in your area who might be a good fit
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="aspect-video bg-muted relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <Badge className="bg-primary-orange-500 hover:bg-primary-orange-600">92% Match</Badge>
                    </div>
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">John D.</CardTitle>
                    <CardDescription>2 miles away • Similar interests</CardDescription>
                  </CardHeader>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <Button variant="ghost" size="sm">View Profile</Button>
                    <Button size="sm" className="bg-primary-orange-500 hover:bg-primary-orange-600">Connect</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
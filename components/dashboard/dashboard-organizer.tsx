"use client";

import Link from "next/link";
import { BarChart, Heart, LandPlot, MessageSquare, Users } from "lucide-react";
import { motion } from "framer-motion";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// Mock data for demonstration
const communityStats = [
  {
    title: "Community Members",
    value: "324",
    description: "Active in your area",
    icon: <Users className="h-4 w-4" />,
    color: "bg-primary-orange-500",
  },
  {
    title: "Successful Matches",
    value: "47",
    description: "Last 3 months",
    icon: <Heart className="h-4 w-4" />,
    color: "bg-secondary-blue-500",
  },
  {
    title: "Resources Listed",
    value: "83",
    description: "Services available",
    icon: <LandPlot className="h-4 w-4" />,
    color: "bg-accent-teal-500",
  },
  {
    title: "Impact Score",
    value: "92",
    description: "Community engagement",
    icon: <BarChart className="h-4 w-4" />,
    color: "bg-success-500",
  },
];

const pendingVerifications = [
  {
    id: "ver-1",
    name: "Robert Johnson",
    role: "HOME PROVIDER",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    submitted: "2 days ago",
  },
  {
    id: "ver-2",
    name: "Lisa Williams",
    role: "HOME PROVIDER",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    submitted: "3 days ago",
  },
  {
    id: "ver-3",
    name: "Michael Davies",
    role: "HOMELESS",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    submitted: "4 days ago",
  },
];

const recentReports = [
  {
    id: "rep-1",
    type: "Safety Concern",
    status: "PENDING",
    reporter: "Anonymous",
    date: "Yesterday",
    severity: "MEDIUM",
  },
  {
    id: "rep-2",
    type: "User Feedback",
    status: "INVESTIGATING",
    reporter: "Jane Smith",
    date: "2 days ago",
    severity: "LOW",
  },
  {
    id: "rep-3",
    type: "Content Violation",
    status: "RESOLVED",
    reporter: "System Alert",
    date: "5 days ago",
    severity: "HIGH",
  },
];

export function DashboardOrganizer() {
  return (
    <div className="grid gap-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {communityStats.map((card, index) => (
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
        {/* Pending Verifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Pending Verifications</CardTitle>
              <CardDescription>
                Users waiting for identity verification
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {pendingVerifications.map((user) => (
                <div key={user.id} className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{user.name}</p>
                      <Badge variant="outline">{user.role}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Submitted {user.submitted}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Review
                  </Button>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/admin/verifications">View All Verifications</Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Recent Reports */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Recent Reports</CardTitle>
              <CardDescription>
                Safety concerns and content reports
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentReports.map((report) => (
                <div key={report.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge
                        className={
                          report.severity === "HIGH"
                            ? "bg-destructive"
                            : report.severity === "MEDIUM"
                            ? "bg-warning-500"
                            : "bg-secondary"
                        }
                      >
                        {report.severity}
                      </Badge>
                      <span className="font-medium">{report.type}</span>
                    </div>
                    <Badge variant="outline">{report.status}</Badge>
                  </div>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>By: {report.reporter}</span>
                    <span>{report.date}</span>
                  </div>
                  <div className="flex justify-end space-x-2 pt-1">
                    <Button variant="ghost" size="sm">
                      Dismiss
                    </Button>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/admin/reports">View All Reports</Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>

      {/* Community Analytics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Community Analytics</CardTitle>
            <CardDescription>
              Overview of HomeShare impact in your region
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center bg-muted rounded-md">
              <p className="text-muted-foreground">Analytics visualization would appear here</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Download Report</Button>
            <Button variant="outline" asChild>
              <Link href="/admin/analytics">Detailed Analytics</Link>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
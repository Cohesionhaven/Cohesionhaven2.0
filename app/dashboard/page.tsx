import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardProvider } from "@/components/dashboard/dashboard-provider";
import { DashboardHomeless } from "@/components/dashboard/dashboard-homeless";
import { DashboardOrganizer } from "@/components/dashboard/dashboard-organizer";

// Mock function to get user profile in lieu of actual database connection
async function getUserProfile(userId: string) {
  // In a real app, this would fetch from your database
  return {
    id: "profile-123",
    userId,
    role: "PROVIDER", // This would be the actual role from your database
    firstName: "Jane",
    lastName: "Doe",
    verificationStatus: "VERIFIED"
  };
}

export default async function DashboardPage() {
  const user = await currentUser();
  
  if (!user) {
    redirect("/sign-in");
  }

  // Get user profile from database
  const profile = await getUserProfile(user.id);

  // Render appropriate dashboard based on user role
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Dashboard"
        text="Welcome back! Here's an overview of your HomeShare activity."
      />
      
      {profile.role === "PROVIDER" && (
        <DashboardProvider />
      )}
      
      {profile.role === "HOMELESS" && (
        <DashboardHomeless />
      )}
      
      {profile.role === "ORGANIZER" && (
        <DashboardOrganizer />
      )}
    </DashboardShell>
  );
}
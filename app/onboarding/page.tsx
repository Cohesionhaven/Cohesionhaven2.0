"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Home, Heart, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  role: z.enum(["HOMELESS", "PROVIDER", "ORGANIZER"], {
    required_error: "Please select a role",
  }),
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
});

export default function OnboardingPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would submit this data to your API
      console.log(values);
      
      // Redirect based on role
      if (values.role === "HOMELESS") {
        router.push("/onboarding/homeless");
      } else if (values.role === "PROVIDER") {
        router.push("/onboarding/provider");
      } else {
        router.push("/onboarding/organizer");
      }
    } catch (error) {
      console.error("Error creating profile:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container max-w-3xl py-12 md:py-16">
      <div className="bg-background border border-border/60 rounded-xl shadow-sm p-6 md:p-8">
        <div className="mb-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome to HomeShare</h1>
          <p className="text-muted-foreground">Let's get to know you and set up your profile</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-lg">I am...</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      <FormItem className="space-y-0">
                        <FormControl>
                          <div>
                            <RadioGroupItem 
                              value="HOMELESS" 
                              id="role-homeless" 
                              className="peer sr-only" 
                            />
                            <label
                              htmlFor="role-homeless"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-background p-4 hover:bg-muted hover:text-accent-foreground peer-data-[state=checked]:border-primary-orange-500 [&:has([data-state=checked])]:border-primary-orange-500 cursor-pointer"
                            >
                              <Users className="mb-3 h-6 w-6" />
                              <p className="text-sm font-medium">Looking for Support</p>
                              <FormDescription className="text-xs text-center mt-2">
                                I'm seeking housing or companionship
                              </FormDescription>
                            </label>
                          </div>
                        </FormControl>
                      </FormItem>
                      
                      <FormItem className="space-y-0">
                        <FormControl>
                          <div>
                            <RadioGroupItem 
                              value="PROVIDER" 
                              id="role-provider" 
                              className="peer sr-only" 
                            />
                            <label
                              htmlFor="role-provider"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-background p-4 hover:bg-muted hover:text-accent-foreground peer-data-[state=checked]:border-primary-orange-500 [&:has([data-state=checked])]:border-primary-orange-500 cursor-pointer"
                            >
                              <Home className="mb-3 h-6 w-6" />
                              <p className="text-sm font-medium">Home Provider</p>
                              <FormDescription className="text-xs text-center mt-2">
                                I can offer housing or companionship
                              </FormDescription>
                            </label>
                          </div>
                        </FormControl>
                      </FormItem>
                      
                      <FormItem className="space-y-0">
                        <FormControl>
                          <div>
                            <RadioGroupItem 
                              value="ORGANIZER" 
                              id="role-organizer" 
                              className="peer sr-only" 
                            />
                            <label
                              htmlFor="role-organizer"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-background p-4 hover:bg-muted hover:text-accent-foreground peer-data-[state=checked]:border-primary-orange-500 [&:has([data-state=checked])]:border-primary-orange-500 cursor-pointer"
                            >
                              <Heart className="mb-3 h-6 w-6" />
                              <p className="text-sm font-medium">Community Organizer</p>
                              <FormDescription className="text-xs text-center mt-2">
                                I represent an organization or community
                              </FormDescription>
                            </label>
                          </div>
                        </FormControl>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your first name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary-orange-500 hover:bg-primary-orange-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Continue"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
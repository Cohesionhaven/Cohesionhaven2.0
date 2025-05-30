import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
      <SignIn 
        appearance={{
          elements: {
            formButtonPrimary: "bg-primary-orange-500 hover:bg-primary-orange-600",
            footerActionLink: "text-primary-orange-500 hover:text-primary-orange-600"
          }
        }}
      />
    </div>
  );
}
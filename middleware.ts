import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: [
    "/",
    "/about",
    "/resources",
    "/stories",
    "/sign-in(.*)",
    "/sign-up(.*)",
    "/api/webhooks(.*)",
    "/api/uploadthing(.*)",
  ],
  // Routes that can always be accessed, and have
  // no authentication information
  ignoredRoutes: [
    "/api/webhooks(.*)",
    "/api/uploadthing(.*)",
  ],
});
 
export const config = {
  // Matches all paths except for
  // files with extensions, _next/static, _next/image, favicon.ico, api/webhooks/clerk
  matcher: ["/((?!.*\\..*|_next\\/static|_next\\/image|favicon.ico).*)", "/"],
};
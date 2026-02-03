"use client";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL ?? "");

function ConvexClerkProvider({ children }: { children: React.ReactNode }): React.ReactNode {
  return (
    <ConvexClerkProvider>

    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
    </ConvexClerkProvider>
  );
}


export default ConvexClerkProvider;
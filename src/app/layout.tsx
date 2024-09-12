"use client";

import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import '../styles/globals.css';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

import React, { ReactNode } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <Elements stripe={stripePromise}>
        <html lang="en">
          <body className="bg-gray-100 min-h-screen">
            <header className="bg-blue-600 text-white p-4">
              <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">Flashcard App</div>
                <div>
                  <SignedOut>
                    <SignInButton />
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </div>
              </div>
            </header>
            <main className="container mx-auto p-4">
              {children}
            </main>
          </body>
        </html>
      </Elements>
    </ClerkProvider>
  );
}

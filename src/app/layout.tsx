"use client";

import { ClerkProvider} from '@clerk/nextjs';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { Analytics } from "@vercel/analytics/react"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

import React, { ReactNode } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <Elements stripe={stripePromise}>
        <html lang="en">
          <body className="bg-gray-100 min-h-screen">
            <Layout>            
              {children}            
            </Layout>
          </body>
        </html>
      </Elements>
    </ClerkProvider>
  );
}

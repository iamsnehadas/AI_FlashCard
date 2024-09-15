import { ReactNode } from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="entire-screen min-h-screen bg-black-100">
      <header className="start bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
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
    </div>
  );
};

export default Layout;

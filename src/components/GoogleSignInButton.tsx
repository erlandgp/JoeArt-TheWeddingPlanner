'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { FcGoogle } from 'react-icons/fc';

export function GoogleSignInButton() {
  const handleClick = () => {
    signIn('google', { callbackUrl: '/' });
  };

  return (
    <Button
      onClick={handleClick}
      variant="outline"
      className="w-full flex items-center justify-center gap-2"
    >
      <FcGoogle className="w-5 h-5" />
      <span>Continue with Google</span>
    </Button>
  );
}

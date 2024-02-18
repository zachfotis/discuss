'use client';
import * as actions from '@/actions';
import { Avatar, Button, NavbarItem, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { useSession } from 'next-auth/react';

export default function HeaderAuth() {
  const session = useSession();

  if (session?.status === 'loading')
    return (
      <NavbarItem>
        <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse" />
      </NavbarItem>
    );

  return session.data?.user ? (
    <Popover placement="left">
      <PopoverTrigger>
        <a className="cursor-pointer">
          <Avatar src={session.data?.user.image || ''} />
        </a>
      </PopoverTrigger>
      <PopoverContent>
        <div className="p-4">
          <form action={actions.signOut}>
            <Button type="submit">Sign Out</Button>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  ) : (
    <>
      <NavbarItem>
        <form action={actions.signIn}>
          <Button type="submit" color="secondary" variant="bordered">
            Sign In
          </Button>
        </form>
      </NavbarItem>
      <NavbarItem>
        <form action={actions.signIn}>
          <Button type="submit" color="primary" variant="flat">
            Sign Up
          </Button>
        </form>
      </NavbarItem>
    </>
  );
}

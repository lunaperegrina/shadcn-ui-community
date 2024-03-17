'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

import Link from "next/link"
import { ModeToggle } from "./ModeToggle"

import { Button } from '@/components/ui/button'

import { GitHubLogoIcon } from "@radix-ui/react-icons"

import { usePathname } from 'next/navigation'

import Image from 'next/image'

export default function NavBar() {

  return (
    <div className="flex place-content-between my-2">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {/* <Image
                  alt="Shadcn/ui Community Logo"
                  src='/shadcn-community-icon.png'
                  width={20}
                  height={10} /> */}
                Shadcn/ui Community
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Docs
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex gap-2">
        <Link href="https://github.com/pedroperegrinaa/shadcn-ui-community" legacyBehavior passHref>
          <Button variant="ghost" size="icon">
            <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <GitHubLogoIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </Link>
        <ModeToggle />
      </div>
    </div>
  )
}
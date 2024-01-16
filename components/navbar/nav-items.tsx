"use client"
import { TAREFAS_ROUTES } from '@/config'
import * as React from "react"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '../ui/navigation-menu'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
export function NavItems() {
    const pathname = usePathname();
  const params = useParams();
    const routes = [
        {
          href: `/tasks`,
          label: 'Encontrar tarefas',
          active: pathname === `/tasks`,
        },
        {
          href: `/dashboard`,
          label: 'Minhas tarefas',
          active: pathname === `/dashboard`,
        },
        {
          href: `/about`,
          label: 'Sobre',
          active: pathname === `/about`,
        },
        
      ]
    return (
        <div className="flex flex-row">
            {routes.map((routes) => {
                return (
                    <NavigationMenu className={cn(
                        'text-sm font-medium transition-colors hover:text-primary',
                        routes.active ? 'text-black border-b-2 border-violet-600 dark:text-white' : 'text-muted-foreground'
                      )}>
                        <Link href={routes.href} legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {routes.label}
                      </NavigationMenuLink>
                      </Link>
                  </NavigationMenu>
                )
            })}
        </div>
    )
}


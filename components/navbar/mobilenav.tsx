'use client'
import { Bell, Command, IceCream, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"

const MobileNav = () => {
    return (
        <div className="lg:hidden w-full flex flex-row justify-between items-center">
            <Link href="/"><Image className="ml-4" src="/mobile.svg" alt="logo" width={40} height={180} />
            </Link>
        <div className="flex flex-row justify-stretch gap-x-2">
        <Link href="/notifications"><Button size="icon" variant="secondary">
          <Bell color="#8c52ff" className="font-bold"/>
          </Button>
          </Link> 
        <Sheet>
        <SheetTrigger className="hover:opacity-75 transition">
          <Button asChild className="px-1.5" size="icon" variant="secondary">
          <Menu color="#8c52ff" className="font-bold"/>
          </Button> 
        </SheetTrigger>
        <SheetContent side="right" className="p-0 bg-white">
        <div>
            Rotas
        </div>
        </SheetContent>
      </Sheet>
      </div>
      </div>
    )
}
export default MobileNav
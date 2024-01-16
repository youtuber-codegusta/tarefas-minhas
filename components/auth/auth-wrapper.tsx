import { ArrowRight, LucideAlignEndHorizontal } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";

interface AuthWrapperProps{
    children: React.ReactNode,
    linkButton: string,
    linkButtonLabel: string
}

const AuthWrapper = ({
    children,
    linkButton,
    linkButtonLabel
}: AuthWrapperProps) => {
    return ( 
        <div className="w-full flex items-center h-full pt-20 flex-col container relative">

            <div className="flex flex-col items-center space-y-2 text-center">
                <Image src="/logo.svg" alt="logo" width={300} height={200} />
                <Link
              className={buttonVariants({
                variant: 'link',
                className: 'gap-1.5',
              })}
              href={linkButton}>
              {linkButtonLabel}
              <ArrowRight className='h-4 w-4' />
            </Link>
            
               
            </div>
            <div className="w-full sm:w-[350px]">
                {children}
            </div>
        </div>
     );
}
 
export default AuthWrapper;
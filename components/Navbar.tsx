import Image from "next/image"
import Link from "next/link"
import { NavLinks } from "@/constants"
import AuthProviders from "./AuthProviders"
import { getCurrentUser } from "@/lib/session"

const Navbar = async () => {
  const session = await getCurrentUser();


  return (
    <nav className="flexBetween navbar">
        <div className="flex-1 flex flex-start gap-10">
            <Link href= '/'>
                <Image 
                    src='/logo_black.png'
                    width={115}
                    height={43}
                    alt='flauntibble'
                />
            </Link>
            <ul className="xl:flex items-center hidden text-small gap-7">
               {NavLinks.map((link) => (
                <Link href={link.href} key={link.key}>
                  {link.text}
                </Link>
               ))}
            </ul>
        </div> 
        <div className="flexCenter gap-4">
          {session?.user ? (
            <>
        {session?.user?.image 
        &&
        (
          <Image 
          src={session.user.image}
          width={40}
          height={40}
          className="rounded-full"
          alt={session.user.name}
          /> )}
          
          <Link href='/create-project'>
            Share work
            </Link>
           </>
          ) : (
            <AuthProviders />
          )}
        </div>
    </nav>
  )
}

export default Navbar
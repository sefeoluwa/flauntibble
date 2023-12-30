import Image from "next/image"
import Link from "next/link"
import logo_black from '../logo_black.png'
import { NavLinks } from "@/constants"

const Navbar = () => {
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
    </nav>
  )
}

export default Navbar
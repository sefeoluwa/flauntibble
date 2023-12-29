import Image from "next/image"
import Link from "next/link"
import logo_black from 'public/logo_black.png'

const Navbar = () => {
  return (
    <nav className="flexBetween navbar">
        <div className="flex-1 flex-start gap-10">
            <Link href= '/'>
                <Image 
                    src='/logo_black.png'
                    width={115}
                    height={43}
                    alt='flauntibble'
                />
            </Link>
        </div>
    </nav>
  )
}

export default Navbar
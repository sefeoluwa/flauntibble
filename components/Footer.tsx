import Image from "next/image"

const Footer = () => {
  return (
    <footer className="flexStart">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image
          src='/logoColor.png'
          width={115}
          height={38}
          alt="Flauntibble"
          >

          </Image>
        </div>
      </div>
    </footer>
  )
}

export default Footer
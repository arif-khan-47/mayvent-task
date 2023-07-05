import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
const data = [
  {
    link:'/',
    title:'Home'
  },
  {
    link:'/#services',
    title:'Services'
  },
  {
    link:'/#about',
    title:'About'
  },
  {
    link:'/job',
    title:'Find Job'
  },
]
  return (
    <div className="">
      <header className="border-b md:flex md:items-center md:justify-between px-5 md:px-20 shadow-lg">
        <div className="flex items-center justify-between">
          <h1 className="leading-none text-2xl text-grey-darkest">
          <Link href="/">
                <div className="relative h-16 w-24 cursor-pointer my-auto">
                  <Image
                    src="https://res.cloudinary.com/dgyudczza/image/upload/v1688402995/mayvent/m_nitssu.png"
                    objectFit="contain"
                    layout="fill"
                    className="w-fit h-fit"
                    alt="logo"
                  />
                </div>
              </Link>
          </h1>

          <div
            onClick={() => setOpen(!open)}
            className="text-black cursor-pointer hover:text-orange md:hidden relative"
          >
            {open ?
              <IoClose className="h-8 w-8" />
             : 
              <CgMenuRightAlt className="h-8 w-8" />
            }
          </div>
        </div>

        <nav className={`md:block ${open ? "block" : "hidden"}`}>
          <ul className="list-reset md:flex md:items-center md:gap-6">
            {
              data.map((item, index)=>(
                <li key={index} className="md:ml-4">
                <Link className="block py-2 text-grey-darkest font-semibold md:text-lg hover:text-red-600 md:border-none md:p-0" href={item.link}>
                  {item.title}
                </Link>
              </li>
              ))
            }
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const links = [
    {
      id: 1,
      link: 'Home'
    },
    {
      id: 2,
      link: 'About'
    },
    {
      id: 3,
      link: 'Portfolio'
    },
    {
      id: 4,
      link: 'Experience'
    },
    {
      id: 5,
      link: 'Contact'
    }
  ]


  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Md Akib</h1>
      </div>
      <ul className="hidden md:flex">
        {
          links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
              <Link to={link} smooth duration={500}>{link}</Link>
            </li>
          ))
        }
      </ul>
      <div onClick={() => setToggle(!toggle)} className="cursor-pointer md:hidden pr-10 z-10 text-gray-500">
        {toggle ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {
        toggle && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
            {
              links.map(({ id, link }) => (
                <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl font-medium text-gray-500 hover:scale-105 duration-200">
                  <Link onClick={() => setToggle(false)} to={link} smooth duration={500}>{link}</Link>
                </li>
              ))
            }
          </ul>
        )
      }
    </div>
  );
};

export default Navbar;

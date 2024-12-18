import { Button, Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import logo from '../assets/logo.gif'
import {FaMoon} from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
export default function Header() {
      const  path = location.pathname; 
    return (
    <>
          
    <Navbar className='border-b-2'>   
         <Navbar.Brand>
        <img src={logo} className="mr-1.5 h-12 sm:h-15" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Blog bus</span>
      </Navbar.Brand>
      <form>
        
        <TextInput  
            type='text'
            placeholder=' Search' 
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline'
                 
        />
      </form>
       <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch/>
       </Button>
       <div className='flex gap-3 md:order-2'>
             <Button className='w-12 h-10 hidden sm:inline'  pill color='gray' >
                <FaMoon/>
             </Button> 
             <Link to='/sign-in'>
              <Button gradientDuoTone='purpleToPink' outline>
                Sign In
              </Button>
             </Link>     
             
      </div>
      <Navbar.Toggle/>
      <Navbar.Collapse>
                <Navbar.Link active={path === "/"} as={'div'}>
                    <Link to='/'>Home</Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/about"} as={'div'}>
                    <Link to='/about'>About</Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/projects"} as={'div'}>
                    <Link to='/projects'> Projects</Link>
                </Navbar.Link>
             </Navbar.Collapse>
      </Navbar>

    </>
  )
}

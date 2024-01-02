import { Button, Navbar, TextInput } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
]

export default function Header() {
  const { pathname } = useLocation()
  return (
    <Navbar className='border-b-2'>
      <Link
        to={'/'}
        className='font-semibold  dark:text-white text-sm sm:text-xl'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg via-pink-600'>
          MERN
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>
      <Button className='lg:hidden w-12 h-10' color='gray' pill>
        <AiOutlineSearch />
      </Button>

      <div className='flex items-center gap-2 md:order-2'>
        <Button className='sm:inline hidden w-12 h-10' color='gray' pill>
          <FaMoon />
        </Button>
        <Link to={'/sign-in'}>
          <Button gradientDuoTone={'purpleToBlue'}>Sign in</Button>
        </Link>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        {navLinks.map((link) => {
          return (
            <Navbar.Link
              key={link.label}
              active={pathname === link.href}
              as={'div'}>
              <Link to={link.href}>{link.label}</Link>
            </Navbar.Link>
          )
        })}
      </Navbar.Collapse>
    </Navbar>
  )
}

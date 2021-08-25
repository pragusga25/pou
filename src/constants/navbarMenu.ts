import { IconType } from 'react-icons/lib'
import { FaUserAlt, FaEnvelope, FaProjectDiagram, FaHome } from 'react-icons/fa'

export const iconStyles = {
  color: '#FF4C29',
}

interface NavbarMenu {
  name: string
  path: string
  Icon: IconType
  id: string
}

export const navbarMenu: NavbarMenu[] = [
  { name: 'home', id: 'navhm', path: '/', Icon: FaHome },
  { name: 'about', id: 'navab', path: '/about', Icon: FaUserAlt },
  { name: 'contact', id: 'navct', path: '/contact', Icon: FaEnvelope },
  { name: 'projects', id: 'navpr', path: '/projects', Icon: FaProjectDiagram },
]

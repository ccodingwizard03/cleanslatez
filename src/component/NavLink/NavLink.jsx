'use client'
 
import Link from 'next/link'
import { usePathname } from 'next/navigation'
 
export const NavLink = ({ href,activeClass,noActiveClass, exact, children, ...props }) => {
  const pathname = usePathname()
  const isActive = exact ? pathname === href : pathname.startsWith(href)
 
  if (isActive) {
    props.className += activeClass
  } else {
    props.className += noActiveClass
  }
 
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  )
}
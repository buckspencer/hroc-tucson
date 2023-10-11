import Link from 'next/link'

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="line-block rounded-lg px-2 text-lg text text-slate-700 hover:bg-red-900 hover:text-white"
    >
      {children}
    </Link>
  )
}

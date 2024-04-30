'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './nav-link.module.css';

interface NavLinkProps {
  href: string,
  children: React.ReactNode,
}

export default function NavLink({href, children}: NavLinkProps) {
  const path: string = usePathname();

  return (
    <Link
      href={href}
      className={path.startsWith(href) ? `${styles.link} ${styles.active}` : styles.link}
    >
      {children}
    </Link>
  );
}
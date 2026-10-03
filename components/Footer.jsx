'use client'

import { usePathname } from 'next/navigation'

function Footer() {
  const pathname = usePathname()
  const current_year = new Date().getFullYear();
  const use_alt_color = ['/projects'].includes(pathname);

  return (
    <div className={`footer ${use_alt_color ? 'alt-bg' : ''}`}>
      <p>
        Copyright &copy; <span>{current_year}</span>{' '}
        Khadem A. Alam Portfolio. Let&apos;s build something great together.
      </p>
    </div>
  );
}

export default Footer;

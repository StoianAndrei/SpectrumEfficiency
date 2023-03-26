import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4">
  <Link href="/">
    <a className="text-2xl font-bold text-gray-800 dark:text-white">Blog</a>
  </Link>
  <ul className="flex justify-between items-center">
    <li>
      <Link href="/learn">
        <a className="ml-6 font-bold text-2xl dark:text-white hover:text-gray-600 dark:hover:text-gray-400">Why Spectrum</a>
      </Link>
    </li>
    <li>
      <Link href="/about">
        <a className="ml-6 font-bold text-2xl dark:text-white hover:text-gray-600 dark:hover:text-gray-400">About Us</a>
      </Link>
    </li>
    <li>
    <Link href="https://stoianandreimircea.zohobookings.com/#/customer/111">
        <a className="ml-6 font-bold text-2xl dark:text-white hover:text-gray-600 dark:hover:text-gray-400">Book Here</a>
      </Link>
    </li>
  </ul>
</nav>
  );
}
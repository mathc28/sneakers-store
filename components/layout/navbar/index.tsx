import CartModal from 'components/cart/modal';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';

export async function Navbar() {
  const shopifyMenu = await getMenu('next-js-frontend-header-menu');
  const menu = [...shopifyMenu, { title: 'Nettoyage', path: '/nettoyage' }];

  return (
    <nav className="relative flex items-center justify-between border-b border-neutral-200 bg-paper px-4 py-3 lg:px-8">
      {/* Mobile : bouton menu burger */}
      <div className="block flex-none md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={menu} />
        </Suspense>
      </div>

      {/* Gauche : logo image */}
      <div className="flex justify-start md:w-1/4">
        <Link href="/" prefetch={true} className="flex items-center">
          <Image
            src="/logoss.png"
            alt="Sneakerstore"
            width={180}
            height={100}
            priority
            className="h-9 w-auto"
          />
        </Link>
      </div>

      {/* Centre : menu */}
      {menu.length ? (
        <ul className="hidden items-center justify-center gap-8 text-sm font-medium md:flex md:w-2/4">
          {menu.map((item: Menu) => (
            <li key={item.title}>
              <Link
                href={item.path}
                prefetch={true}
                className="text-ink/80 transition-colors hover:text-brand"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="hidden md:block md:w-2/4" />
      )}

      {/* Droite : recherche + panier */}
      <div className="flex items-center justify-end gap-4 md:w-1/4">
        <Suspense fallback={<SearchSkeleton />}>
          <Search />
        </Suspense>
        <CartModal />
      </div>
    </nav>
  );
}
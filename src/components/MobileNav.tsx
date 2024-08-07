import { cn } from '@/lib/utils';
import { Lilita_One } from 'next/font/google';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/data-constants';

const righteous = Lilita_One({
  weight: ['400'],
  subsets: ['latin-ext'],
});

const MobileNav = () => {
  return (
    <header className='lg:hidden bg-white flex items-center px-4 left-0 right-0 h-[4rem] fixed z-[50] top-0 w-full'>
      <nav className='flex items-center justify-between w-full'>
        <h1 className={cn('text-2xl text-blue-950', righteous.className)}>
          Precision Recalls
        </h1>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className='gap-x-1 flex items-center text-blue-950 text-sm bg-blue-200 pl-1.5 pr-3 py-2 rounded-full'>
              <ArrowRight className='size-6 bg-white rounded-full p-1.5' /> Menu
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='lg:hidden w-[15rem] mr-12 flex flex-col items-center '>
            {NAV_ITEMS.map((item, index) => (
              <DropdownMenuItem
                key={index}
                className='max-w-[90%] w-full border-b'
              >
                <Link
                  href={item.link}
                  className='w-full text-center py-2  text-blue-950 font-medium tracking-tight'
                >
                  {item.title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
};
export default MobileNav;

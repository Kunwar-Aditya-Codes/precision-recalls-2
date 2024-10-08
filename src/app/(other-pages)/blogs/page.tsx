'use client';

import { BLOGS } from '@/lib/data-constants';
import Link from 'next/link';

const Page = () => {
  return (
    <div className='mt-8'>
      {BLOGS.map((blog) => (
        <h1
          key={blog.title}
          className='text-2xl font-bold text-dark-blue underline underline-offset-2'
        >
          <Link href={blog.link} className=''>
            {blog.title}
          </Link>
        </h1>
      ))}
    </div>
  );
};
export default Page;

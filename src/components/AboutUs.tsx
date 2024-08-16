'use client';

import { ABOUT_US } from '@/lib/data-constants';
import { cn } from '@/lib/utils';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className='grow grid sm:grid-cols-2 gap-8  w-full px-4 lg:px-0'>
      {ABOUT_US.map((item, index) => (
        <div
          key={index}
          className={cn(
            ' mx-auto md:w-full relative group shadow-2xl  rounded-[2rem]  overflow-hidden p-6',
            item.shadow
          )}
        >
          <Image
            src={item.image}
            width={500}
            height={500}
            className='mx-auto object-cover h-[10rem]'
            alt='core-values'
          />
          <h2
            className={cn(
              'text-center  text-xl mt-4 font-bold uppercase tracking-wider',
              item.text
            )}
          >
            {item.title}
          </h2>
          <div
            className={cn(
              'transition-transform duration-300  absolute top-0 left-0 right-0 bottom-0 rounded-xl p-4 translate-y-full group-hover:translate-y-0',
              item.background
            )}
          >
            <div className='text-sm lg:text-lg  text-white italic flex flex-col justify-evenly h-full'>
              {item.description.map((desc, index) => (
                <p key={index} className='flex items-start gap-x-2'>
                  <span>
                    <Sparkles className='size-5 mt-1' />
                  </span>
                  <span>{desc}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;

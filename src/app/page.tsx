'use client';

import AboutUs from '@/components/AboutUs';
import MobileNav from '@/components/MobileNav';
import ParallaxTitle from '@/components/ParallaxTitle';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import TiltCard from '@/components/TiltCard';
import { COLORS, NAV_ITEMS, SERVICES } from '@/lib/data-constants';
import { cn } from '@/lib/utils';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
  useScroll,
} from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Lilita_One } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const righteous = Lilita_One({
  weight: ['400'],
  subsets: ['latin-ext'],
});

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(160% 160% at 50% 0% , #020410 50%, ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  }, []);

  return (
    <main className=' bg-zinc-100'>
      <section className=' md:p-6  mt-[4.5rem] lg:mt-0 overflow-x-hidden'>
        <MobileNav />
        <div className='md:rounded-[3rem] relative shadow  bg-gradient-to-br from-blue-200 to-purple-400 min-h-screen '>
          <div className=' bg-[url("/rect.svg")] bg-white/50 bg-blend-color  min-h-screen md:rounded-[3rem] bg-center bg-cover p-4'>
            <motion.nav
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: 0.5,
                delay: 0.25,
              }}
              initial='hidden'
              animate='visible'
              className='hidden py-6 px-24 lg:flex items-center justify-between'
            >
              <h1
                className={cn(
                  'text-4xl   text-blue-950 uppercase tracking-wide',
                  righteous.className
                )}
              >
                Precision Recalls
              </h1>

              <ul className='flex items-center gap-x-6'>
                {NAV_ITEMS.map((item, index) => (
                  <Link href={item.link} key={index}>
                    <li className='bg-white/50 text-blue-950 font-medium text-sm px-3 py-1.5 border rounded-full'>
                      {item.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </motion.nav>

            <div className='lg:px-24 flex flex-col gap-y-16 lg:gap-y-0 lg:flex-row items-center lg:gap-x-16 justify-between'>
              <div className=' max-w-[70rem] '>
                <motion.h2
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.25,
                  }}
                  initial='hidden'
                  animate='visible'
                  className={cn(
                    'text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-blue-950  text-center lg:text-start mt-8 md:mt-16 font-semibold lg:!leading-[5.125rem]'
                  )}
                >
                  From data to deployment: we drive your success
                </motion.h2>

                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.25,
                  }}
                  initial='hidden'
                  animate='visible'
                  className='text-center lg:text-start lg:text-xl tracking-wide mt-8'
                >
                  Precision Recalls offers exceptional services to elevate your
                  business, specializing in AI/ML, web and app development, data
                  analytics, digital marketing, software development, and
                  e-commerce setup. We ensure comprehensive support across all
                  your needs.
                </motion.p>

                <motion.button
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.25,
                  }}
                  initial='hidden'
                  animate='visible'
                  className='gap-x-2 flex items-center mx-auto lg:mx-0 mt-12 text-blue-950  text-lg bg-white pl-1.5 pr-3 py-2 rounded-full'
                >
                  <ArrowRight className='size-8 bg-blue-200 rounded-full p-1.5' />{' '}
                  Read More
                </motion.button>
              </div>
              <Image
                src={'/hero2.png'}
                alt='skills'
                width={500}
                height={500}
                className='lg:scale-90 xl:scale-100'
              />
            </div>
          </div>
          <motion.div
            variants={{
              hidden: { left: 0 },
              visible: { left: '100%' },
            }}
            transition={{
              duration: 0.5,
              ease: 'easeIn',
            }}
            initial='hidden'
            animate='visible'
            className='absolute top-0 left-0 right-0 bottom-0 md:rounded-[3rem] bg-blue-950 z-[5]'
          />
        </div>
      </section>

      {/* ***************** SERVICES *********************** */}

      <section id='services' className=' md:p-6 mt-4  overflow-x-hidden'>
        <div className='flex flex-col gap-y-8 xl:gap-y-0 xl:flex-row py-12 lg:px-10 xl:px-12  md:rounded-[3rem] w-full bg-gradient-to-b from-violet-200 to-blue-300 shadow-md'>
          <h2
            className={cn(
              ' text-blue-950  text-center xl:text-start text-4xl tracking-wider font-black uppercase  leading-[4rem]'
            )}
          >
            Services We Provide
          </h2>
          <div className='grow grid w-full grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12  '>
            {SERVICES.map((service, index) => (
              <TiltCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ***************** Projects *********************** */}

      <section id='portfolio' ref={ref} className=' h-[200vh] relative  '>
        <ParallaxTitle scrollYProgress={scrollYProgress} />
        <Portfolio scrollYProgress={scrollYProgress} />
      </section>

      {/* ***************** About *********************** */}

      <section
        id={'about'}
        className='overflow-x-hidden pt-16 px-4 md:px-10 bg-gradient-to-b from-black to-[#020410]'
      >
        <h3 className=' text-center text-zinc-300 w-fit mx-auto text-5xl font-bold tracking-tight'>
          About Us
        </h3>
        <AboutUs />
      </section>

      {/* ***************** Testimonials *********************** */}

      <motion.section
        style={{
          backgroundImage,
        }}
        className=' h-[calc(100vh-4rem)]'
      >
        <div className='py-8 rounded-[3rem] w-full h-full flex flex-col justify-center gap-y-28 '>
          <h3 className='px-6 text-center text-zinc-300  w-fit mx-auto text-5xl font-bold tracking-tight'>
            What our clients have to say...
          </h3>
          <Testimonials />
        </div>
      </motion.section>
    </main>
  );
}

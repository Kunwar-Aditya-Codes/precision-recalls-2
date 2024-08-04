'use client';

import MobileNav from '@/components/MobileNav';
import ParallaxTitle from '@/components/ParallaxTitle';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import TiltCard from '@/components/TiltCard';
import { cn } from '@/lib/utils';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Lilita_One } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

const righteous = Lilita_One({
  weight: ['400'],
  subsets: ['latin-ext'],
});

const NAV_ITEMS = [
  {
    title: 'About Us',
    link: '/about-us',
  },
  {
    title: 'Services',
    link: '#services',
  },
  {
    title: 'Portfolio',
    link: '#portfolio',
  },
  {
    title: 'Contact Us',
    link: '/contact-us',
  },
];

const SERVICES = [
  {
    title: 'Web Development',
    description:
      'Building responsive and high-quality websites tailored to your business needs, ensuring seamless user experiences across all devices.',
    image: '/services/web.png',
  },
  {
    title: 'App Development',
    description:
      'Creating intuitive and engaging mobile applications for iOS and Android platforms to enhance your business reach and user engagement.',
    image: '/services/app.png',
  },
  {
    title: 'Data Analytics',
    description:
      'Leveraging data to provide actionable insights and drive informed decision-making, helping you unlock the full potential of your data.',
    image: '/services/data.png',
  },
  {
    title: 'Digital Marketing',
    description:
      'Developing comprehensive digital marketing strategies to boost your online presence, increase traffic, and drive conversions through SEO, PPC, and social media marketing.',
    image: '/services/digital.png',
  },
  {
    title: 'Software Development',
    description:
      'Designing and developing custom software solutions to streamline your business processes, improve efficiency, and meet your specific requirements.',
    image: '/services/software.png',
  },
  {
    title: 'E-commerce Setup',
    description:
      'Setting up and optimizing your online store to ensure a smooth shopping experience for your customers, including payment gateway integration and inventory management.',
    image: '/services/ecommerce.png',
  },
];

const COLORS = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C'];

export default function Home() {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(130% 130% at 50% 0% , #020617 50%, ${color})`;

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
      <section className='p-2 md:p-6  mt-[4.5rem] lg:mt-0 '>
        <MobileNav />
        <div className='rounded-[3rem] relative shadow  bg-gradient-to-br from-blue-200 to-purple-400 min-h-screen '>
          <div className=' bg-[url("/rect.svg")] bg-white/50 bg-blend-color  min-h-screen rounded-[3rem] bg-center bg-cover p-4'>
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
            className='absolute top-0 left-0 right-0 bottom-0 rounded-[3rem] bg-blue-950 z-[5]'
          />
        </div>
      </section>

      {/* ***************** SERVICES *********************** */}

      <section className='p-2 md:p-6 mt-4'>
        <div className='flex flex-col gap-y-8 xl:gap-y-0 xl:flex-row py-12 lg:px-10 xl:px-12  rounded-[3rem] w-full bg-gradient-to-b from-violet-200 to-blue-300 shadow-md'>
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

      <section className='mt-16'>
        <ParallaxTitle />
        <Portfolio />
      </section>

      <motion.section
        style={{
          backgroundImage,
        }}
        className='p-6 h-screen flex-col items-center justify-center'
      >
        <div className=' py-8 rounded-[3rem]  h-full flex flex-col justify-evenly'>
          <h3 className='text-center text-white  w-fit mx-auto text-5xl font-bold tracking-tight'>
            What our clients have to say...
          </h3>
          <Testimonials />
        </div>
      </motion.section>
    </main>
  );
}

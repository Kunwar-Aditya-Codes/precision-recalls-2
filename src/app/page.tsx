'use client';

import AboutUs from '@/components/AboutUs';
import MobileNav from '@/components/MobileNav';
import Portfolio from '@/components/Portfolio';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import TiltCard from '@/components/TiltCard';
import { NAV_ITEMS, SERVICES } from '@/lib/data-constants';
import { cn } from '@/lib/utils';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  Loader2,
  Mail,
  Phone,
  X,
} from 'lucide-react';
import { Lilita_One } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { FormEvent, useRef, useState } from 'react';
import { toast } from 'sonner';

const righteous = Lilita_One({
  weight: ['400'],
  subsets: ['latin-ext'],
});

export default function Home() {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [ctaOpen, setCtaOpen] = useState<boolean>(true);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (form.current)
      emailjs //  service_pjxajqa , template_zuhpe0o, FWs2iXRB5REQskaqh
        .sendForm('service_bbd8ed3', 'template_snvjjou', form.current, {
          publicKey: 'QmrvpW6DFSh2mVBPN',
        })
        .then(
          () => {
            toast.success('Email sent successfull!', {
              duration: 1000,
            });
            form.current?.reset();
          },
          (error) => {
            toast.error('Something went wrong. Try again!', {
              duration: 1000,
            });
            console.log('FAILED...', error.text);
          }
        )
        .finally(() => {
          setLoading(false);
        });
  };

  return (
    <main className='bg-slate-200 '>
      {ctaOpen && (
        <div className='h-screen w-screen fixed z-[80] bg-white/85 flex items-center justify-center'>
          <div className='bg-dark-blue p-4 rounded-2xl w-[26rem] relative'>
            <X
              onClick={() => setCtaOpen(false)}
              className='text-white cursor-pointer size-6 p-1 absolute right-4 top-4 border rounded-full'
            />
            <h2 className='text-white  text-center text-2xl mt-6'>
              Book a free consultation
            </h2>
            <form className='flex flex-col items-center gap-y-2 px-4 my-4'>
              <input
                type='text'
                placeholder='Your name'
                name='user_name'
                className='p-2 w-full rounded-md  placeholder:text-zinc-600 focus-visible:outline-none focus-visible:border-sky-600 border-2 border-zinc-200   '
              />
              <input
                placeholder='Email'
                type='text'
                name='user_email'
                className='p-2 rounded-md  placeholder:text-zinc-600 focus-visible:outline-none focus-visible:border-sky-600 border-2 border-zinc-200  w-full '
              />
              <input
                type='number'
                pattern='\d{10}'
                name='user_contact'
                placeholder='Phone number'
                className='p-2 rounded-md  placeholder:text-zinc-600 focus-visible:outline-none focus-visible:border-sky-600 border-2 border-zinc-200  w-full '
              />
              <textarea
                placeholder='Type your message here...'
                name='message'
                className='hidden'
              />
              <button
                disabled={loading}
                className='bg-white text-dark-blue p-2 rounded-md w-full font-medium uppercase tracking-wide'
              >
                {loading ? (
                  <Loader2 className='size-5 animate-spin mx-auto' />
                ) : (
                  'Submit form'
                )}
              </button>
            </form>
          </div>
        </div>
      )}
      {/* ***************** HERO *********************** */}
      <section className='md:px-6 md:pt-6 mt-[4.5rem] lg:mt-0 overflow-x-hidden'>
        <MobileNav />
        <div className='md:rounded-t-[3rem] flex flex-col relative shadow p-4 bg-gradient-to-br from-sky-600  to-dark-blue pb-16'>
          <div className='relative bg-[#001532] md:py-4 rounded-[3rem]'>
            <motion.nav
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{
                duration: 0.5,
                delay: 0.25,
              }}
              initial='hidden'
              animate='visible'
              className='hidden  px-24 lg:flex items-center justify-between rounded-[3rem]'
            >
              <div className='flex items-center gap-x-3'>
                <img src='/logo-2.jpg' className='size-10' />
                <h1
                  className={cn(
                    'text-4xl text-white uppercase tracking-wide',
                    righteous.className
                  )}
                >
                  Flintz
                </h1>
              </div>

              <ul className='flex items-center gap-x-6'>
                {NAV_ITEMS.map((item, index) => (
                  <Link href={item.link} key={index}>
                    <li className='text-white font-base text-sm px-3 py-1.5 border border-white/35 rounded-full'>
                      {item.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </motion.nav>
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
              className='absolute md:rounded-[3rem] -skew-x-3 translate top-0 left-0 right-0 bottom-0 bg-white z-[5]'
            />
          </div>

          <div className='lg:px-24 grow flex flex-col gap-y-16 lg:gap-y-0 lg:flex-row items-center lg:gap-x-16 justify-between'>
            <div className=' max-w-[70rem] '>
              <div className='relative'>
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
                    'text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white  text-center lg:text-start mt-8 md:mt-16 font-semibold lg:!leading-[5.125rem]'
                  )}
                >
                  Smart Solutions, Real Results
                </motion.h2>
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
                  className='absolute -skew-x-3 translate  top-0 left-0 right-0 bottom-0 bg-white z-[5]'
                />
              </div>
              <div className='relative'>
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
                  className='text-center text-zinc-100  lg:text-start lg:text-xl tracking-wide mt-8'
                >
                  Flintz offers exceptional services to elevate your business,
                  specializing in AI/ML, web and app development, data
                  analytics, digital marketing, software development, and
                  e-commerce setup. We ensure comprehensive support across all
                  your needs.
                </motion.p>
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
                  className='absolute -skew-x-3 translate top-0 left-0 right-0 bottom-0 bg-white z-[5]'
                />
              </div>
              <div className='flex flex-col md:flex-row items-center justify-center lg:justify-start gap-x-4 mt-12 gap-y-3'>
                <Link href={'#contact-us'}>
                  <motion.button
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.25,
                    }}
                    initial='hidden'
                    animate='visible'
                    className='gap-x-2 flex items-center mx-auto lg:mx-0  text-blue-950  text-lg bg-white pl-1.5 pr-3 py-2 rounded-full w-[15rem] md:w-fit'
                  >
                    <ArrowRight className='size-8 bg-sky-200 rounded-full p-1.5' />{' '}
                    Book an appointment
                  </motion.button>
                </Link>
                <Link href={'#about'}>
                  <motion.button
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.25,
                    }}
                    initial='hidden'
                    animate='visible'
                    className='gap-x-2 flex items-center mx-auto lg:mx-0 w-[15rem] justify-center text-lg  text-white px-4  border-2 shadow-inner py-2  rounded-full md:w-fit'
                  >
                    Read More
                  </motion.button>
                </Link>
              </div>
            </div>
            <Image
              src={'/hero3.webp'}
              priority={true}
              alt='skills'
              width={500}
              height={500}
              className='lg:scale-90 xl:scale-100 object-cover shrink-0'
            />
          </div>
        </div>
      </section>

      {/* ***************** SERVICES *********************** */}
      <section id='services' className=' md:px-6 overflow-x-hidden '>
        <div className='flex flex-col gap-y-8 bg-white py-12 lg:px-24   w-full '>
          <h2
            className={cn(
              'text-transparent bg-clip-text bg-gradient-to-br from-sky-600 to-dark-blue text-center lg:text-start text-4xl lg:text-5xl xl:text-6xl  tracking-wide font-black  gap-x-2 xl:flex-col xl:gap-y-4'
            )}
          >
            Services We Provide
          </h2>
          <div className='grow grid justify-items-center lg:justify-items-start w-full grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12 mt-4 '>
            {SERVICES.map((service, index) => (
              <TiltCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ***************** PROJECTS *********************** */}
      <section id='portfolio' className='md:px-6 overflow-x-hidden'>
        <div className=' px-4 bg-gradient-to-b from-sky-600 to-dark-blue pt-10 lg:px-24'>
          <h2 className=' text-center py-4 px-12  mx-auto lg:mx-0 lg:text-start text-4xl lg:text-5xl xl:text-6xl font-bold border-4 border-white/40 rounded-2xl    w-fit text-white'>
            Featured Projects
          </h2>
          <Portfolio />
        </div>
      </section>

      {/* ***************** ABOUT *********************** */}
      <section id='about' className='md:px-6 overflow-x-hidden '>
        <div className='bg-white pt-6 pb-12  lg:px-24'>
          <h2 className='text-center py-8 mx-auto lg:mx-0 lg:text-start  text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide w-fit text-transparent bg-clip-text bg-gradient-to-b from-sky-600 to-dark-blue'>
            About Us
          </h2>
          <AboutUs />
        </div>
      </section>

      {/* ***************** TESTIMONIALS *********************** */}
      <section id='testimonials' className='md:px-6 overflow-x-hidden'>
        <div className='bg-gradient-to-b px-4 from-sky-800 to-dark-blue py-16 lg:px-24'>
          <h2 className=' text-center py-4 px-12  mx-auto lg:mx-0 lg:text-start text-4xl lg:text-5xl xl:text-6xl font-bold border-4 border-white/40 rounded-2xl   w-fit text-white'>
            What our clients have to say...
          </h2>

          <Testimonials />
        </div>
      </section>

      {/* ***************** TEAM *********************** */}
      <section id={'team'} className='md:px-6 overflow-x-hidden'>
        <div className='bg-white pt-6 pb-12 lg:px-24'>
          <h2 className='text-center py-8 mx-auto lg:mx-0 lg:text-start  text-4xl lg:text-5xl xl:text-6xl font-bold  w-fit text-transparent bg-clip-text bg-gradient-to-bl from-sky-600 to-dark-blue'>
            Meet the team
          </h2>
          <Team />
        </div>
      </section>

      {/* ***************** CONTACT *********************** */}
      <section id={'contact-us'} className='md:px-6'>
        <div className='flex flex-col md:flex-row justify-around pt-12  md:py-4 px-8 md:rounded-b-[3rem] lg:px-32 xl:px-36 bg-gradient-to-l from-sky-600 to-dark-blue shadow-2xl'>
          <div className=' w-full flex flex-col justify-center gap-y-4 md:gap-y-16  md:flex-[0.6]'>
            <div>
              <h3 className='text-3xl text-white lg:text-5xl xl:text-6xl font-bold tracking-wide  text-center md:text-start'>
                Contact Us
              </h3>

              <p className='text-white text-center md:text-start text-xl max-w-sm mx-auto md:mx-0 mt-2'>
                Have questions? We&apos;re here to help. Let&apos;s make great
                things happen!
              </p>
            </div>
            <div className='flex flex-col items-center font-light text-white md:items-start gap-y-4 text-xl '>
              <div className='flex items-center gap-x-3'>
                <span>
                  <Mail className='size-5' />
                </span>
                <span>contact@flintz.in</span>
              </div>
              <div className='flex items-center gap-x-3'>
                <span>
                  <Phone className='size-5' />
                </span>
                <span>+91 9529655296</span>
              </div>
            </div>
          </div>
          <div className='md:flex-[0.5] mt-8 md:mt-0  shadow-xl rounded-lg'>
            <form
              ref={form}
              onSubmit={sendEmail}
              className='flex flex-col gap-y-6 w-full   p-8 rounded-lg bg-white'
            >
              <input
                type='text'
                placeholder='Your name'
                name='user_name'
                className='p-2 rounded-md  placeholder:text-zinc-600 focus-visible:outline-none focus-visible:border-sky-600 border-2 border-zinc-200   '
              />
              <input
                placeholder='Email'
                type='text'
                name='user_email'
                className='p-2 rounded-md  placeholder:text-zinc-600 focus-visible:outline-none focus-visible:border-sky-600 border-2 border-zinc-200   '
              />
              <input
                type='number'
                pattern='\d{10}'
                name='user_contact'
                placeholder='Phone number'
                className='p-2 rounded-md  placeholder:text-zinc-600 focus-visible:outline-none focus-visible:border-sky-600 border-2 border-zinc-200   '
              />
              <textarea
                placeholder='Type your message here...'
                rows={7}
                name='message'
                className='p-2 rounded-md  placeholder:text-zinc-600 focus-visible:outline-none focus-visible:border-sky-600 border-2 border-zinc-200   '
              />
              <button
                disabled={loading}
                className='bg-sky-900 text-white p-2 rounded-md  font-medium uppercase tracking-wide'
              >
                {loading ? (
                  <Loader2 className='size-5 animate-spin mx-auto' />
                ) : (
                  'Submit form'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ***************** FOOTER ***********************  */}
      <footer className='bg-[#020410] pt-12  lg:mt-16'>
        <div className='max-w-7xl mx-auto pb-12 text-white flex flex-col md:flex-row gap-y-16 md:gap-y-0 items-start justify-between px-6'>
          <div>
            <div className='flex items-center gap-x-2'>
              <img src='/t-logo.png' className='size-8' />
              <h3 className='text-2xl font-semibold tracking-tight'>Flintz</h3>
            </div>
            <p className='text-zinc-300 mt-4 max-w-[35rem]'>
              Transform your business with solutions that work. From AI to web
              development, Flintz is your go-to partner for success. Connect
              with us today and let&apos;s create something extraordinary!
            </p>

            <div className='flex items-center space-x-6 text-zinc-300 mt-4 '>
              <Link
                href={
                  'https://www.instagram.com/flintz_?igsh=MTdtaG9qd3phajgxbg=='
                }
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-instagram hover:text-zinc-100'
                >
                  <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
                  <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
                  <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
                </svg>
              </Link>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-facebook hover:text-zinc-100'
              >
                <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
              </svg>
              <Link
                href={
                  'https://www.linkedin.com/company/104907934/admin/dashboard/'
                }
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-linkedin hover:text-zinc-100'
                >
                  <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
                  <rect width='4' height='12' x='2' y='9' />
                  <circle cx='4' cy='4' r='2' />
                </svg>
              </Link>
            </div>
          </div>
          <div className='xl:mr-28'>
            <h3 className='text-lg'>Quick Links</h3>
            <ul className='text-zinc-300  mt-1 flex flex-col gap-y-1'>
              <Link href={'#about'}>
                <li className='flex items-center gap-x-1  hover:text-zinc-100'>
                  <ChevronRight className='size-4' />
                  About Us
                </li>
              </Link>
              <Link href={'#portfolio'}>
                <li className='flex items-center gap-x-1 hover:text-zinc-100'>
                  <ChevronRight className='size-4' />
                  Portfolio
                </li>
              </Link>
              <Link href={'#testimonials'}>
                <li className='flex items-center gap-x-1 hover:text-zinc-100'>
                  <ChevronRight className='size-4' />
                  Testimonials
                </li>
              </Link>
              <Link href={'/blogs'}>
                <li className='flex items-center gap-x-1 hover:text-zinc-100'>
                  <ChevronRight className='size-4' />
                  Blogs
                </li>
              </Link>
              <Link href={'#contact-us'}>
                <li className='flex items-center gap-x-1 hover:text-zinc-100'>
                  <ChevronRight className='size-4' />
                  Contact Us
                </li>
              </Link>
              <Link href={'/privacy-policy'}>
                <li className='flex items-center gap-x-1 hover:text-zinc-100'>
                  <ChevronRight className='size-4' />
                  Privacy Policy
                </li>
              </Link>
              <Link href={'#team'}>
                <li className='flex items-center gap-x-1 hover:text-zinc-100'>
                  <ChevronRight className='size-4' />
                  Team
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <p className='border-t text-center text-white font-medium text-sm  py-4'>
          &copy; {new Date().getFullYear()} Flintz. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

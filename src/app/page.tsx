'use client';

import AboutUs from '@/components/AboutUs';
import MobileNav from '@/components/MobileNav';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import TiltCard from '@/components/TiltCard';
import { COLORS, NAV_ITEMS, SERVICES } from '@/lib/data-constants';
import { cn } from '@/lib/utils';
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion';
import { ArrowRight, Loader2, Mail, Phone } from 'lucide-react';
import { Lilita_One } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { FormEvent, useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import Team from '@/components/Team';

const righteous = Lilita_One({
  weight: ['400'],
  subsets: ['latin-ext'],
});

export default function Home() {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ['start end', 'end end'],
  // });
  // const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  // const x = useTransform(scrollYProgress, [0, 0.4, 1], ['-100%', '-5%', '0%']);

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

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (form.current)
      emailjs
        .sendForm('service_pjxajqa', 'template_zuhpe0o', form.current, {
          publicKey: 'FWs2iXRB5REQskaqh',
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
    <main className=' bg-slate-50 '>
      {/* ***************** HERO *********************** */}

      <section className=' md:p-6  mt-[4.5rem] lg:mt-0 overflow-x-hidden'>
        <MobileNav />

        <div className='md:rounded-[3rem] relative shadow  bg-gradient-to-br from-blue-200 to-purple-400 min-h-screen '>
          <div className=' bg-[url("/rect.svg")] bg-white/50 bg-blend-color  min-h-screen md:rounded-[3rem] bg-center bg-cover p-4'>
            <div className='relative'>
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
                className='absolute -skew-x-3 translate  top-0 left-0 right-0 bottom-0 bg-blue-950 z-[5]'
              />
            </div>

            <div className='lg:px-24 flex flex-col gap-y-16 lg:gap-y-0 lg:flex-row items-center lg:gap-x-16 justify-between'>
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
                      'text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-blue-950  text-center lg:text-start mt-8 md:mt-16 font-semibold lg:!leading-[5.125rem]'
                    )}
                  >
                    From data to deployment: we drive your success
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
                    className='absolute -skew-x-3 translate  top-0 left-0 right-0 bottom-0 bg-blue-950 z-[5]'
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
                    className='text-center  lg:text-start lg:text-xl tracking-wide mt-8'
                  >
                    Precision Recalls offers exceptional services to elevate
                    your business, specializing in AI/ML, web and app
                    development, data analytics, digital marketing, software
                    development, and e-commerce setup. We ensure comprehensive
                    support across all your needs.
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
                    className='absolute -skew-x-3 translate top-0 left-0 right-0 bottom-0 bg-blue-950 z-[5]'
                  />
                </div>

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
          {/* <motion.div
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
            className='absolute translate md:rounded-[3rem] top-0 left-0 right-0 bottom-0 bg-blue-950 z-[5]'
          /> */}
        </div>
      </section>

      {/* ***************** SERVICES *********************** */}

      <section id='services' className=' md:p-6 mt-4 overflow-x-hidden'>
        <div className='flex flex-col gap-y-8 xl:gap-y-0 xl:flex-row py-12 lg:px-10 xl:px-12 md:rounded-[3rem] bg-gradient-to-r from-blue-200 to-blue-100  w-full '>
          <h2
            className={cn(
              ' text-blue-950 text-center text-2xl lg:text-4xl xl:text-start  tracking-wide font-black uppercase  leading-[4rem]'
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

      {/* ***************** PROJECTS *********************** */}

      <section id='portfolio' className='relative md:p-6 overflow-hidden'>
        <div className='md:rounded-[3rem] bg-gradient-to-b from-sky-200 to-blue-400 pt-6'>
          <h2 className='px-16 text-center py-8 mx-auto md:mx-0 md:text-start text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide w-fit text-blue-950'>
            Featured Project
          </h2>
          <Portfolio />
        </div>
      </section>

      {/* ***************** ABOUT *********************** */}

      <section
        id={'about'}
        className='overflow-x-hidden min-h-screen flex flex-col pb-12'
      >
        <h2 className='text-center mx-auto text-blue-950 text-4xl lg:text-5xl xl:text-6xl font-bold w-fit  uppercase mt-8 mb-10'>
          About
        </h2>
        <AboutUs />
      </section>

      {/* ***************** TESTIMONIALS *********************** */}

      <motion.section
        style={{
          backgroundImage,
        }}
        className=' h-[calc(100vh-4rem)]'
      >
        <div className='py-8 rounded-[3rem] w-full h-full flex flex-col justify-center gap-y-28 '>
          <h3 className='px-6 text-center text-zinc-300  w-fit mx-auto text-3xl md:text-5xl font-bold tracking-tight'>
            What our clients have to say...
          </h3>
          <Testimonials />
        </div>
      </motion.section>

      {/* ***************** TEAM *********************** */}
      <section
        id={'team'}
        className='overflow-x-hidden min-h-screen flex flex-col pb-12 pt-16 bg-gradient-to-b from-white to-zinc-100'
      >
        <h2 className='text-center mx-auto text-white bg-gradient-to-br from-indigo-400 to-cyan-400 px-3 py-1.5 -skew-x-6 rounded-sm  text-4xl lg:text-5xl xl:text-6xl font-bold w-fit  uppercase mt-8 mb-10'>
          Meet our team
        </h2>
        <Team />
      </section>

      {/* ***************** CONTACT *********************** */}
      <section id={'contact-us'} className=' md:p-6 '>
        <div className='flex flex-col md:flex-row justify-around text-black px-8 py-12 md:rounded-[3rem] lg:px-32 xl:px-36'>
          <div className=' w-full flex flex-col justify-center gap-y-4 md:gap-y-16  md:flex-[0.6]'>
            <h3 className='text-3xl text-blue-950 lg:text-5xl xl:text-6xl font-bold tracking-wide  text-center md:text-start'>
              Contact Us
            </h3>
            <div className='flex flex-col items-center font-light md:items-start gap-y-4 text-xl '>
              <div className='flex items-center gap-x-3'>
                <span>
                  <Mail className='size-5' />
                </span>
                <span>test@email.com</span>
              </div>
              <div className='flex items-center gap-x-3'>
                <span>
                  <Phone className='size-5' />
                </span>
                <span>+91 123123123123</span>
              </div>
            </div>
          </div>
          <div className='md:flex-[0.5] mt-16 shadow-xl rounded-lg'>
            <form
              ref={form}
              onSubmit={sendEmail}
              className='flex flex-col gap-y-6 w-full  p-8 rounded-lg bg-white '
            >
              <input
                type='text'
                placeholder='Your name'
                name='user_name'
                className='p-2 rounded-md  placeholder:text-zinc-600 focus-visible:outline-none focus-visible:border-violet-500 border-2 border-violet-200   '
              />
              <input
                placeholder='Email'
                type='text'
                name='user_email'
                className='p-2 rounded-md  placeholder:text-zinc-600 focus-visible:outline-none focus-visible:border-violet-500 border-2 border-violet-200   '
              />
              <input
                type='number'
                pattern='\d{10}'
                name='user_contact'
                placeholder='Phone number'
                className='p-2 rounded-md  placeholder:text-zinc-600 focus-visible:outline-none focus-visible:border-violet-500 border-2 border-violet-200   '
              />
              <textarea
                placeholder='Type your message here...'
                rows={7}
                name='message'
                className='p-2 rounded-md  placeholder:text-zinc-600 focus-visible:outline-none focus-visible:border-violet-500 border-2 border-violet-200   '
              />
              <button
                disabled={loading}
                className='bg-violet-700 text-white p-2 rounded-md  font-medium uppercase tracking-wide'
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
    </main>
  );
}

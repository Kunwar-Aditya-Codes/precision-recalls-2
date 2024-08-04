import { cn } from '@/lib/utils';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Calistoga } from 'next/font/google';
import { useRef } from 'react';

const calistago = Calistoga({
  weight: ['400'],
  subsets: ['latin'],
});

const ParallaxTitle = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '400%']);

  return (
    <div ref={ref} className='w-full h-screen overflow-hidden relative'>
      <motion.h1
        style={{ y: textY }}
        className={cn(
          'font-bold text-white text-5xl sm:text-7xl md:text-8xl uppercase tracking-widest mt-48 md:mt-28 text-center relative z-10'
        )}
      >
        Featured Projects
      </motion.h1>

      <motion.div
        className='absolute  inset-0 z-0'
        style={{
          backgroundImage: `url(/parallax/p.jpg)`,
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          y: backgroundY,
        }}
      />
      <div
        className='absolute  inset-0 z-20'
        style={{
          backgroundImage: `url(/parallax/p.png)`,
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
        }}
      />
    </div>
  );
};
export default ParallaxTitle;

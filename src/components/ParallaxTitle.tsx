import { cn } from '@/lib/utils';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { Calistoga } from 'next/font/google';
import { useRef } from 'react';

const ParallaxTitle = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ['start start', 'end start'],
  // });
  // const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  // const textY = useTransform(scrollYProgress, [0, 1], ['0%', '400%']);

  return (
    <motion.div
      style={{ scale, rotate }}
      className='bg-[url("/projects/project.jpg")] bg-cover bg-center bg-black/95 bg-blend-color w-full  flex items-center justify-center   h-screen sticky top-0'
    >
      <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold uppercase tracking-wider text-center bg-gradient-to-br from-violet-600 to-rose-600 w-fit bg-clip-text text-transparent'>
        Featured Project
      </h1>
    </motion.div>
    // <div ref={ref} className='w-full h-screen overflow-hidden relative'>
    //   <motion.h1
    //     style={{ y: textY }}
    //     className={cn(
    //       'font-bold text-white text-3xl sm:text-5xl md:text-7xl uppercase tracking-widest mt-48 md:mt-28 text-center relative z-10'
    //     )}
    //   >
    //     Featured Projects
    //   </motion.h1>

    //   <motion.div
    //     className='absolute  inset-0 z-0'
    //     style={{
    //       backgroundImage: `url(/parallax/p.jpg)`,
    //       backgroundPosition: 'bottom',
    //       backgroundSize: 'cover',
    //       y: backgroundY,
    //     }}
    //   />
    //   <div
    //     className='absolute  inset-0 z-20'
    //     style={{
    //       backgroundImage: `url(/parallax/p.png)`,
    //       backgroundPosition: 'bottom',
    //       backgroundSize: 'cover',
    //     }}
    //   />
    // </div>
  );
};
export default ParallaxTitle;

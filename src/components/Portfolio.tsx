'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PROJECTS } from '@/lib/data-constants';
import { MotionValue, useTransform, motion } from 'framer-motion';

const Portfolio = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);
  return (
    <motion.div style={{ scale }} className=' bg-black h-screen  relative '>
      <Carousel
        opts={{
          align: 'start',
        }}
        className='relative max-w-[85rem] mx-auto px-4 lg:px-12 xl:px-0 pt-12 pb-20'
      >
        <CarouselContent className='-mx-4  lg:-mx-1'>
          {PROJECTS.map((project, index) => (
            <CarouselItem
              key={index}
              className='lg:basis-1/2 px-4 lg:px-1 rounded-2xl '
            >
              <div
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
                className='rounded-2xl bg-black/90 border border-zinc-800 bg-blend-color bg-cover bg-center backdrop-blur-md aspect-auto p-6 h-[38rem] flex flex-col gap-y-10'
              >
                <div className='flex flex-col gap-y-3 '>
                  <label className='bg-white w-fit text-sm tracking-wider px-3 py-1 text-black rounded-full'>
                    Title
                  </label>
                  <h1 className='text-2xl md:text-3xl font-bold text-white'>
                    {project.title}
                  </h1>
                </div>
                <div className='flex flex-col gap-y-3 '>
                  <label className='bg-white w-fit text-sm tracking-wider px-3 py-1 text-black rounded-full'>
                    Description
                  </label>
                  <p className='text-zinc-400 md:text-lg  text-balance '>
                    {project.description}
                  </p>
                </div>
                {project.client.length > 0 && (
                  <div className='flex flex-col gap-y-3 '>
                    <label className='bg-white w-fit text-sm tracking-wider px-3 py-1 text-black rounded-full'>
                      Client
                    </label>
                    <p className='text-white text-lg'>{project.client}</p>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className=' bg-white bottom-9 right-16 absolute'>
          <CarouselNext className='' />
          <CarouselPrevious className='' />
        </div>
      </Carousel>
    </motion.div>
  );
};
export default Portfolio;

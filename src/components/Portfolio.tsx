'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PROJECTS } from '@/lib/data-constants';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <motion.div className='relative mt-6'>
      <Carousel
        opts={{
          align: 'start',
        }}
        className='relative max-w-[85rem] mx-auto px-4 lg:px-12 xl:px-0  pb-20'
      >
        <CarouselContent className='-mx-4 lg:-mx-1'>
          {PROJECTS.map((project, index) => (
            <CarouselItem
              key={index}
              className='lg:basis-1/2 px-4 lg:px-1 rounded-2xl '
            >
              <div
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
                className='rounded-2xl bg-black/80 border border-zinc-800 bg-blend-color bg-cover bg-center backdrop-blur-md aspect-auto px-6 py-6 h-[28rem] flex flex-col  gap-y-10'
              >
                <h1 className='text-2xl md:text-3xl font-bold text-white'>
                  {project.title}
                </h1>

                <p className='text-zinc-200 md:text-lg  text-balance '>
                  {project.description}
                </p>
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

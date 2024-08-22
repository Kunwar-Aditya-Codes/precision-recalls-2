'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PROJECTS } from '@/lib/data-constants';

const Portfolio = () => {
  return (
    <div className=' pb-12 mt-8 px-4 lg:px-0'>
      <Carousel
        opts={{
          align: 'start',
          dragFree: true,
        }}
      >
        <CarouselContent className='mx-1 gap-x-4 pr-8'>
          {PROJECTS.map((project, index) => (
            <CarouselItem
              key={index}
              style={{
                backgroundImage: `url(${project.image})`,
              }}
              className='bg-black/80 border border-zinc-800 bg-blend-color bg-no-repeat bg-cover bg-center  aspect-auto py-6 md:basis-1/2 px-4 lg:basis-1/3 rounded-2xl'
            >
              <div className='xl:h-[28rem] flex flex-col gap-y-10 '>
                <h1 className='text-2xl md:text-3xl font-bold text-white'>
                  {project.title}
                </h1>
                <p className='text-zinc-200 text-justify text-balance '>
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
        <CarouselPrevious className='hidden lg:inline-flex' />
        <CarouselNext className='hidden lg:inline-flex' />
      </Carousel>
    </div>
  );
};
export default Portfolio;

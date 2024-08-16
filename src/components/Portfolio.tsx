'use client';

import { PROJECTS } from '@/lib/data-constants';

const Portfolio = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-0  justify-items-center pb-12  mt-8'>
      {PROJECTS.map((project, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${project.image})`,
          }}
          className='rounded-2xl bg-black/80 border border-zinc-800 bg-blend-color bg-cover bg-center backdrop-blur-md aspect-auto px-6 py-6 xl:h-[28rem] flex flex-col  gap-y-10'
        >
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
      ))}
    </div>
  );
};
export default Portfolio;

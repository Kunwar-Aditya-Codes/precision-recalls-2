'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ABOUT } from '@/lib/data-constants';
import { motion } from 'framer-motion';
import { useState } from 'react';

const AboutUs = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className='mt-12 text-white rounded-[3rem] py-8 mx-auto lg:px-24 md:gap-8 justify-items-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
      {ABOUT.map((item, index) => (
        <Dialog key={index}>
          <DialogTrigger className='w-full max-w-sm h-[20rem] flex justify-center'>
            <motion.div
              whileHover={{
                scale: 1.025,
                transition: {
                  duration: 0.2,
                },
              }}
              whileTap={{
                scale: 0.97,
              }}
              style={{
                backgroundImage: `url(/section/about-${index + 1}.jpg)`,
              }}
              onClick={() => setSelected(index)}
              className={`flex items-center justify-center p-6 rounded-2xl size-[15rem] md:size-[18rem] bg-cover bg-center bg-black/85 bg-blend-color`}
            >
              <h2 className='text-2xl md:text-3xl font-bold tracking-wide text-center'>
                {item.title}
              </h2>
            </motion.div>
          </DialogTrigger>
          {selected === index && (
            <DialogContent className='w-[90%] md:w-[50%] lg:w-[40%] bg-white/5 max-w-screen border-zinc-700 backdrop-blur-lg h-[90%] overflow-y-auto text-white'>
              <DialogHeader>
                <DialogTitle className='p-4 text-3xl'>{item.title}</DialogTitle>
                <DialogDescription className='flex flex-col gap-y-4'>
                  {item.about.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className='bg-gradient-to-br from-violet-600 to-rose-500 p-[0.1rem] rounded-md'
                    >
                      <div className='bg-[#020410] py-2.5 px-3 rounded-md flex flex-col gap-y-2'>
                        <h3 className='text-lg flex items-start gap-x-2 '>
                          <span className='text-white'>{detail.subTitle}</span>
                        </h3>
                        {detail.description.length > 0 && (
                          <p className='text-zinc-400 mt-1'>
                            {detail.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          )}
        </Dialog>
      ))}
    </div>
  );
};

export default AboutUs;

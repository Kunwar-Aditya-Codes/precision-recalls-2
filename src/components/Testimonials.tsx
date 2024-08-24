'use client';

import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const TESTIMONIALS = [
  {
    description:
      'Flintz exceeded our expectations with personalized, data-driven solutions that helped us grow. Highly recommend!',
  },
  {
    description:
      'Flintz transformed our business with innovative AI solutions that enhanced our efficiency. Their professionalism and dedication are unmatched!.',
  },

  {
    description:
      'The only downside was that some technical details took longer to finalize than we anticipated, but overall, the service was solid.',
  },

  {
    description:
      'Flintz’s Social Media marketing services were a game-changer for our business. They helped us reach a bigger audience and saw real results in just a few months.',
  },
];

const Testimonials = () => {
  return (
    <div className='mt-16  md:[mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]'>
      <motion.div
        animate={{
          translateX: ['0%', '-100%'],
        }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeatType: 'loop',
          repeat: Infinity,
        }}
        className='flex items-center gap-x-8'
      >
        {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
          <div
            key={index}
            className='bg-white/15 shrink-0 max-w-[25rem] h-[16rem] border-2 border-white/30 text-white p-8 rounded-3xl shadow-2xl '
          >
            <div className='italic flex flex-col gap-y-2 h-[80%]'>
              <Quote className='rotate-180 size-8 fill-white' />
              <span className='text-balance text-lg tracking-tight'>
                {testimonial.description}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
export default Testimonials;

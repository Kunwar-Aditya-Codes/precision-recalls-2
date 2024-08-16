'use client';

import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    username: 'JaneDoe123',
    description:
      'Fantastic service! The team was incredibly helpful and the product exceeded my expectations.',
    rating: 5,
  },
  {
    username: 'JohnSmith456',
    description:
      'A solid experience. The customer support was prompt, but the delivery took longer than expected.',
    rating: 4,
  },
  {
    username: 'EmilyJohnson789',
    description:
      'I had a few issues with the order, but they were resolved quickly. Overall, a good experience.',
    rating: 4,
  },
  {
    username: 'MichaelBrown101',
    description:
      "Not satisfied with the product quality. The description didn't match what I received.",
    rating: 2,
  },
  {
    username: 'SarahWilliams202',
    description:
      'Excellent quality and fast shipping. Highly recommend to others looking for similar products.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className='mt-16  md:[mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]'>
      <motion.div
        animate={{
          translateX: '-50%',
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className='flex items-center gap-x-8'
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <div
            key={index}
            className='bg-white/15 shrink-0 max-w-[25rem] h-[16rem] border-2 border-white/30 text-white p-8 rounded-3xl  shadow-2xl '
          >
            <div className='italic flex flex-col gap-y-2 h-[80%]'>
              <Quote className='rotate-180 size-8 fill-white' />
              <span className='text-balance text-lg tracking-tight'>
                {testimonial.description}
              </span>
            </div>
            <h4 className='text-xl font-bold text-zinc-200 tracking-wide mt-5'>
              {testimonial.username}
            </h4>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
export default Testimonials;

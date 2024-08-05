'use client';

import { Quote, Star } from 'lucide-react';
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
    <div className='flex overflow-hidden md:[mask-image:linear-gradient(to_right,transparent_0%,black_25%,black_75%,transparent_100%)]'>
      <motion.div
        animate={{
          translateX: '-50%',
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className='flex  gap-x-14 '
      >
        {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
          <div
            key={index}
            className='bg-white/20 border-2 border-white/30 text-white p-8  rounded-3xl flex-none max-w-xs md:max-w-md h-full shadow-2xl '
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

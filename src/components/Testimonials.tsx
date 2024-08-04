'use client';

import { Star } from 'lucide-react';
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
    <div className='mt-2'>
      <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_25%,black_75%,transparent_100%)]'>
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
          className='flex items-start gap-x-14 py-12 pr-14'
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className='bg-white p-8 flex flex-col justify-between rounded-3xl h-[15rem] w-[20rem] shadow-2xl'
            >
              <p className='text-lg'>{testimonial.description}</p>
              <div className='flex items-center justify-between'>
                <h4 className=''>{testimonial.username}</h4>
                <span className='flex itmes-center  gap-x-2'>
                  <span>{testimonial.rating} / 5</span>
                  <span>
                    <Star className='size-5 text-amber-500 fill-amber-500' />
                  </span>
                </span>
              </div>
            </div>
          ))}
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className='bg-white p-8 flex flex-col justify-between rounded-3xl h-[15rem] w-[20rem] shadow-2xl'
            >
              <p className='text-lg'>{testimonial.description}</p>
              <div className='flex items-center justify-between'>
                <h4 className=''>{testimonial.username}</h4>
                <span className='flex itmes-center  gap-x-2'>
                  <span>{testimonial.rating} / 5</span>
                  <span>
                    <Star className='size-5 text-amber-500 fill-amber-500' />
                  </span>
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default Testimonials;

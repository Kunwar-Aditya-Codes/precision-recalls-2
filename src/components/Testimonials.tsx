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
    <div className=''>
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
          className='flex items-start gap-x-14 py-12 pr-14'
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className='bg-white/20 border-2 border-white/30 text-white p-8 flex flex-col justify-between rounded-3xl min-h-[18rem] w-[20rem] overflow-x-hidden md:w-[25rem] shadow-2xl'
            >
              <p className=' italic flex flex-col gap-y-2'>
                <Quote className='rotate-180 size-8 fill-white mr-4' />
                <span className='text-balance text-lg'>
                  {testimonial.description}
                </span>
              </p>
              <div className='flex flex-col md:flex-row md:items-center justify-between mt-8 md:mt-0'>
                <h4 className='text-xl font-bold text-zinc-200 tracking-wide'>
                  {testimonial.username}
                </h4>
                <span className='flex mt-4 md:mt-0 w-fit itmes-center gap-x-2 bg-white text-black rounded-lg px-4 py-2'>
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
              className='bg-white/20 border-2 border-white/30 text-white p-8 flex flex-col justify-between rounded-3xl min-h-[18rem] w-[15rem]  md:w-[25rem] shadow-2xl'
            >
              <p className=' italic flex flex-col gap-y-2'>
                <Quote className='rotate-180 size-8 fill-white mr-4' />
                <span className='text-balance text-lg'>
                  {testimonial.description}
                </span>
              </p>
              <div className='flex items-center justify-between '>
                <h4 className='text-xl font-bold text-zinc-200 tracking-wide'>
                  {testimonial.username}
                </h4>
                <span className='flex itmes-center gap-x-2 bg-white text-black rounded-lg px-4 py-2'>
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

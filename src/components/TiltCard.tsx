'use client';

import {
  useMotionValue,
  useSpring,
  useTransform,
  motion,
  animate,
} from 'framer-motion';
import Image from 'next/image';

const TiltCard = ({
  service,
  index,
}: {
  service: {
    title: string;
    description: string;
    image: string;
  };
  index: number;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ['5.5deg', '-5.5deg']
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ['-5.5deg', '5.5deg']
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    const rect = target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPercent = mouseX / width - 0.5;
    const yPercent = mouseY / height - 0.5;

    x.set(xPercent);
    y.set(yPercent);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const staggeredAnimationVariant = {
    initial: (index: number) => ({
      opacity: 0,
      translateX: index % 2 === 0 ? -50 : 50,
      translateY: -50,
    }),

    animate: (index: number) => ({
      opacity: 1,
      translateX: 0,
      translateY: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
      },
    }),
  };

  return (
    <motion.div
      whileInView={'animate'}
      custom={index}
      variants={staggeredAnimationVariant}
      initial='initial'
      viewport={{
        once: true,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className='p-4 bg-white/30 cursor-default  shadow-xl rounded-2xl h-full w-[20rem]'
    >
      <div
        style={{
          transform: 'translateZ(60px)',
          transformStyle: 'preserve-3d',
        }}
        className={`bg-white/80  rounded-2xl p-4 h-full w-full`}
      >
        <Image
          style={{
            transform: 'translateZ(60px)',
          }}
          src={service.image}
          alt={service.title}
          width={200}
          height={200}
          className=' mx-auto h-[12rem] object-cover'
        />
        <h4
          style={{
            transform: 'translateZ(60px)',
          }}
          className='text-xl font-medium text-center tracking-tight mt-4'
        >
          {service.title}
        </h4>
        <p
          style={{
            transform: 'translateZ(60px)',
          }}
          className='text-center text-sm mt-2 text-zinc-700'
        >
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};
export default TiltCard;

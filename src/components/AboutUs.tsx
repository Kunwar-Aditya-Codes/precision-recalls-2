'use client';

import { cn } from '@/lib/utils';
import { motion, MotionProps } from 'framer-motion';

type BlockProps = {
  className?: string;
} & MotionProps;

const fadeInAnimationVariants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      className={cn(
        'col-span-4 p-6 rounded-lg   shadow-lg  bg-white text-lg font-light',
        className
      )}
      whileInView={'animate'}
      variants={fadeInAnimationVariants}
      initial={'initial'}
      viewport={{
        once: true,
      }}
      {...rest}
    />
  );
};

const AboutUs = () => {
  // const [selected, setSelected] = useState<number | null>(null);

  return (
    <motion.div className='grow'>
      <div className='grid grid-cols-12 gap-6 max-w-7xl mx-auto px-4 xl:px-0'>
        <Block className='col-span-12 border-b-2 border-amber-400  md:col-span-6 lg:col-span-6'>
          <p className=''>
            Skilled in leveraging technology for innovation, efficiency, and
            sustainability, with proficiency in advanced security measures and
            AI-driven solutions for business challenges.
          </p>
        </Block>
        <Block className=' col-span-12  md:col-span-3 lg:col-span-3'>
          <p className='font-normal'>
            Fair & reliable customer-centric approach
          </p>
        </Block>

        <Block className='hidden md:block md:col-span-3 '>
          <p className=''>
            Change foster growth and learning while evolving dynamically
          </p>
        </Block>
        <Block className=' col-span-12 lg:col-span-8'>
          <p className='font-normal'>
            Delivered projects worth more than 50 lakhs within 1.5 years of
            inception with expertise in hardware provisioning to algorithm
            development.
          </p>
        </Block>
        <Block className='hidden lg:block lg:col-span-4  border-b-2 border-violet-500'>
          <p className=''>A team of 10 Data Scientists with vast experience.</p>
        </Block>
        <Block className='col-span-6  lg:col-span-4'>
          <p className='font-normal'>
            92% clients prefer to renew contracts with us.
          </p>
        </Block>
        <Block className='col-span-6 border-b-2 border-rose-400  lg:col-span-4'>
          <p className=''>
            Flexible Pricing plans as per project duration/client.
          </p>
        </Block>
        <Block className='hidden lg:block lg:col-span-4'>
          <p className=''>
            Reusable Data Preprocessing Scripts for faster turn around time of
            projects to save overall costs.
          </p>
        </Block>
        <Block className='col-span-12 border-cyan-500  border-b-2'>
          <p className=''>
            Our team possesses expertise on multiple technologies which includes
            Python/JAVA/R/Node.js, SQL, Spark, Kafka, AWS, GCP, Google Looker,
            Tableau, PowerBI & Other related libraries.
          </p>
        </Block>
      </div>
    </motion.div>
    // <div className='mt-12 text-white rounded-[3rem] py-8 mx-auto lg:px-24 md:gap-8 justify-items-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
    //   {ABOUT.map((item, index) => (
    //     <Dialog key={index}>
    //       <DialogTrigger className='w-full max-w-sm h-[20rem] flex justify-center'>
    //         <motion.div
    //           whileHover={{
    //             scale: 1.025,
    //             transition: {
    //               duration: 0.2,
    //             },
    //           }}
    //           whileTap={{
    //             scale: 0.97,
    //           }}
    //           style={{
    //             backgroundImage: `url(/section/about-${index + 1}.jpg)`,
    //           }}
    //           onClick={() => setSelected(index)}
    //           className={`flex items-center justify-center p-6 rounded-2xl size-[15rem] md:size-[18rem] bg-cover bg-center bg-black/85 bg-blend-color`}
    //         >
    //           <h2 className='text-2xl md:text-3xl font-bold tracking-wide text-center'>
    //             {item.title}
    //           </h2>
    //         </motion.div>
    //       </DialogTrigger>
    //       {selected === index && (
    //         <DialogContent className='w-[90%] md:w-[50%] lg:w-[40%] bg-white/5 max-w-screen border-zinc-700 backdrop-blur-lg h-[90%] overflow-y-auto text-white'>
    //           <DialogHeader>
    //             <DialogTitle className='p-4 text-3xl'>{item.title}</DialogTitle>
    //             <DialogDescription className='flex flex-col gap-y-4'>
    //               {item.about.map((detail, detailIndex) => (
    //                 <div
    //                   key={detailIndex}
    //                   className='bg-gradient-to-br from-violet-600 to-rose-500 p-[0.1rem] rounded-md'
    //                 >
    //                   <div className='bg-[#020410] py-2.5 px-3 rounded-md flex flex-col gap-y-2'>
    //                     <h3 className='text-lg flex items-start gap-x-2 '>
    //                       <span className='text-white'>{detail.subTitle}</span>
    //                     </h3>
    //                     {detail.description.length > 0 && (
    //                       <p className='text-zinc-400 mt-1'>
    //                         {detail.description}
    //                       </p>
    //                     )}
    //                   </div>
    //                 </div>
    //               ))}
    //             </DialogDescription>
    //           </DialogHeader>
    //         </DialogContent>
    //       )}
    //     </Dialog>
    //   ))}
    // </div>
  );
};

export default AboutUs;

'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCheck } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

const PROJECTS = [
  {
    title: 'Face Clustering',
    image: '/projects/face-cluster.jpg',
    description: [
      'Detects and clusters faces from CCTV footage using advanced computer vision techniques.',
      'Provides real-time headcount metrics and threat identification for enhanced security.',
      'Integrates with existing systems for scalable and adaptable monitoring solutions.',
    ],
    client: 'Attain Ai',
  },
  {
    title: 'Activity Classification for Sports Analytics',
    image: '/projects/sports-analysis.jpg',
    description: [
      'Classifies physical activities by analyzing body posture coordinates from videos.',
      'Facilitates remote fitness training by providing detailed activity analysis.',
      'Seamlessly integrates into sports and fitness platforms to enhance user experience.',
    ],
    client: 'Timeout',
  },
  {
    title: 'Sales Forecasting Time Series Model',
    image: '/projects/market-analysis.jpg',
    description: [
      'Develops a time series model for accurate sales forecasting and inventory estimation.',
      'Optimizes financial planning and resource allocation for FMCG companies and other industries.',
      'Applicable to various sectors, improving operational efficiency and inventory management.',
    ],
    client: '',
  },
  {
    title: 'Personalized E-commerce Recommendation',
    image: '/projects/ecommerce.jpg',
    description: [
      'Led the creation of a personalized recommendation engine for e-commerce.',
      'Utilized advanced AI/ML techniques to tailor product suggestions to user preferences.',
      'Increases user engagement and sales through dynamic recommendations.',
    ],
    client: '',
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-76%']);

  return (
    <div
      className='h-[600vh] relative bg-[url("/projects/project-bg.jpg")]'
      ref={ref}
    >
      <div className='sticky top-0 flex  h-screen gap-4 items-center overflow-hidden'>
        <motion.div style={{ x }} className='flex'>
          {PROJECTS.map((project, index) => (
            <div
              className='h-screen w-screen pb-12 pt-20 lg:pb-b px-6 lg:pt-6 lg:mt-0  overflow-x-hidden'
              key={index}
            >
              <div className='flex flex-row w-fit h-full border rounded-[3rem] border-white/20'>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={500}
                  className='object-cover hidden lg:block lg:rounded-l-[3rem] lg:flex-[0.5]'
                />

                <div className='h-full  lg:flex-[0.5]  flex flex-col bg-white/10 backdrop-blur-lg text-white rounded-[3rem] lg:rounded-none lg:rounded-r-[3rem] p-8'>
                  <div>
                    <div className='bg-gradient-to-br from-cyan-600 to-fuchsia-500 w-fit rounded-full p-0.5'>
                      <h2 className='bg-zinc-950  text-white w-fit py-1.5 px-3  uppercase tracking-widest font-medium text-xs rounded-full'>
                        Project
                      </h2>
                    </div>
                    <h1 className='text-xl lg:text-3xl tracking-wide font-semibold  w-fit max-w-[35rem] !leading-[3rem]'>
                      {project.title}
                    </h1>
                  </div>
                  {project.client.length > 0 && (
                    <div className='mt-4'>
                      <div className='bg-gradient-to-br from-cyan-600 to-fuchsia-500 w-fit mb-4 rounded-full p-0.5'>
                        <h2 className='bg-zinc-950  text-white w-fit py-1.5 px-3  uppercase tracking-widest font-medium text-xs rounded-full'>
                          Client
                        </h2>
                      </div>
                      <p className='text-xl font-medium'>{project.client}</p>
                    </div>
                  )}
                  <div className='flex flex-col mt-8 max-w-[35rem]'>
                    <div className='bg-gradient-to-br from-cyan-600 to-fuchsia-500 w-fit mb-4 rounded-full p-0.5'>
                      <h2 className='bg-zinc-950 text-xs rounded-full text-white w-fit py-1.5 px-3  uppercase tracking-widest font-medium   '>
                        Project Info.
                      </h2>
                    </div>
                    {project.description.map((desc, index) => (
                      <p
                        key={index}
                        className='flex text-zinc-100 mb-1.5 items-start gap-x-4'
                      >
                        <span>
                          <CheckCheck className='size-4 mt-1' />
                        </span>
                        <span className=''>{desc}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default Portfolio;

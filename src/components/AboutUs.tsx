'use client';

import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className='grow grid gap-6 max-w-6xl mx-auto w-full px-4'>
      <div className='grid grid-cols-12 gap-6'>
        <div className='col-span-12 md:col-span-6 relative group shadow-md shadow-indigo-200  rounded-xl  overflow-hidden  h-fit p-6'>
          <Image
            src={'/about/about-1.jpg'}
            width={500}
            height={500}
            className='aspect-video object-cover h-[10rem]'
            alt='core-values'
          />
          <h2 className='text-start text-indigo-600 text-xl mt-4 font-bold uppercase tracking-wider'>
            Core Values
          </h2>
          <div
            className={`bg-gradient-to-br transition-transform duration-300 from-indigo-200 to-indigo-400 absolute top-0 left-0 right-0 bottom-0 rounded-xl p-6 translate-y-full group-hover:translate-y-0`}
          >
            <p className='text-sm md:text-md lg:text-lg font-light italic leading-[1.5rem] md:leading-[2rem]'>
              We embrace a customer-centric approach that values flexibility and
              adaptability, ensuring we remain fair and reliable while being
              dynamic and evolving. Our commitment to fostering growth and
              learning drives us to continuously embrace and drive change.
            </p>
          </div>
        </div>
        <div className='col-span-12 md:col-span-6 relative group shadow-md shadow-sky-200  rounded-xl  overflow-hidden h-fit p-6'>
          <Image
            src={'/about/about-2.jpg'}
            width={500}
            height={500}
            className='aspect-video object-cover h-[10rem]'
            alt='key-difference'
          />
          <h2 className='text-start text-sky-600 text-xl mt-4 font-bold uppercase tracking-wider'>
            Key Differentiators
          </h2>
          <div
            className={`bg-gradient-to-br transition-transform duration-300 from-sky-200 to-sky-400 absolute top-0 left-0 right-0 bottom-0 rounded-xl p-6 translate-y-full group-hover:translate-y-0`}
          >
            <p className='text-sm md:text-md lg:text-lg font-light italic leading-[1.5rem] md:leading-[2rem]'>
              Our expert DS/DA team leverages industry experience and advanced
              technologies, including AI-driven solutions, reusable data
              pipelines, and tools like Python, SQL, and AWS, to drive
              innovation, efficiency, and sustainable, cost-effective business
              outcomes.
            </p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-12 gap-6'>
        <div className='col-span-12 md:col-span-6 relative group shadow-md shadow-fuchsia-200 rounded-xl  overflow-hidden  h-fit p-6'>
          <Image
            src={'/about/about-3.jpg'}
            width={500}
            height={500}
            className='aspect-video object-cover h-[10rem]'
            alt='business-model'
          />
          <h2 className='text-start text-fuchsia-600 text-xl mt-4 font-bold uppercase tracking-wider'>
            Business Model
          </h2>
          <div
            className={`bg-gradient-to-br transition-transform duration-300 from-fuchsia-200 to-fuchsia-400 absolute top-0 left-0 right-0 bottom-0 rounded-xl p-6 translate-y-full group-hover:translate-y-0`}
          >
            <p className='text-sm md:text-md lg:text-lg font-light italic leading-[1.5rem] md:leading-[2rem]'>
              We offer flexible pricing for complex data science projects with
              hourly rates for dynamic needs, dedicated team rates based on
              experience, and fixed-cost quotes for budget-friendly solutions
              aligned with initial timelines.
            </p>
          </div>
        </div>
        <div className='col-span-12 md:col-span-6 relative group  shadow-md shadow-teal-200  rounded-xl  overflow-hidden h-fit p-6'>
          <Image
            src={'/about/about-4.jpg'}
            width={500}
            height={500}
            className='aspect-video object-cover h-[10rem]'
            alt='choice'
          />
          <h2 className='text-start  text-teal-600 text-xl mt-4 font-bold uppercase tracking-wider'>
            Why choose us ?
          </h2>
          <div
            className={`bg-gradient-to-br transition-transform duration-300 from-teal-200 to-teal-400 absolute top-0 left-0 right-0 bottom-0 rounded-xl p-6 translate-y-full group-hover:translate-y-0`}
          >
            <p className='text-sm md:text-md lg:text-lg font-light italic leading-[1.5rem] md:leading-[2rem]'>
              Our team of 10 experienced Data Scientists has delivered projects
              worth over 50 lakhs within 1.5 years, with 92% of clients renewing
              contracts. We offer flexible pricing plans tailored to project
              needs and possess expertise in everything from hardware
              provisioning to algorithm development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

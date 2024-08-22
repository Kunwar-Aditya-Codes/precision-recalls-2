import { TEAM } from '@/lib/data-constants';

const getInitials = (name: string) => {
  const names = name.split(' ');
  if (names.length === 1) {
    // Single name case
    return names[0].charAt(0).toUpperCase();
  }
  // Multiple names case
  return (
    names[0].charAt(0).toUpperCase() +
    names[names.length - 1].charAt(0).toUpperCase()
  );
};

const Team = () => {
  return (
    <div className=' grow  w-full justify-items-center  mx-auto grid grid-cols-1 md:grid-cols-2  px-4 lg:px-0 xl:grid-cols-3 mt-4 gap-6'>
      {TEAM.map((member, index) => (
        <div
          key={index}
          className='w-full h-[16rem] lg:h-[17.5rem] xl:h-[18.5rem] bg-gradient-to-b from-indigo-200  to-sky-200 border shadow-md p-6 relative rounded-xl overflow-hidden group'
        >
          <h2 className='text-3xl font-bold'>{member.memberName}</h2>
          <p className='text-zinc-700 mt-2'>{member.position}</p>
          <div className='translate-y-full  bg-white absolute top-0 left-0 right-0 bottom-0 transition-transform group-hover:translate-y-0 z-[1] text-[0.8rem] sm:text-sm md:text-base  xl:text-base lg:p-3 p-6 xl:p-3 tracking-wide border-t-4  border-t-sky-600 rounded-xl duration-300'>
            <p className=''>{member.description}</p>
          </div>
          <div className='absolute -right-[3rem] -bottom-[6.5rem]'>
            <h3 className='text-[12rem] text-blue-950/25'>
              {getInitials(member.memberName)}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Team;

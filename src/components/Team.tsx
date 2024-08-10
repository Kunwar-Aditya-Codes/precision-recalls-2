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
    <div className=' grow max-w-[85rem] w-full justify-items-center  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-6 gap-6'>
      {TEAM.map((member, index) => (
        <div
          key={index}
          className='w-[17.5rem] md:w-[20rem] h-[16rem] aspect-square bg-white border shadow-md p-6 relative rounded-xl overflow-hidden group'
        >
          <h2 className='text-3xl font-bold'>{member.memberName}</h2>
          <p className='text-zinc-700 mt-2'>{member.position}</p>
          <div className='translate-y-full overflow-y-scroll bg-white absolute top-0 left-0 right-0 bottom-0 transition-transform group-hover:translate-y-0 z-[1] text-[0.78rem] md:text-sm lg:text-base p-6 tracking-wide border-t-4  border-t-indigo-400 rounded-xl duration-300'>
            <p className=''>{member.description}</p>
          </div>
          <div className='absolute  -right-[3rem] -bottom-[6.5rem]'>
            <h3 className='text-[12rem] text-zinc-200'>
              {getInitials(member.memberName)}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Team;

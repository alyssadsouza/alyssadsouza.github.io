export default function Tab({ tab }) {
  return (
    <div className='animate-appear'>
      {tab?.content.map((item) => (
        <div key={item.heading} className='px-[5%] py-[3%] my-[2%] bg-primary-200 text-light-text bg-opacity-20 w-full rounded-xl'>
          <h3 className='text-xl font-display font-bold my-2'>{item.heading}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

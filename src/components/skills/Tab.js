export default function Tab({ tab }) {
  return (
    <div className='animate-appear'>
      {tab?.content.map((item) => (
        <div key={item.heading} className='px-[5%] py-[3%] my-[2%] bg-primary bg-opacity-10 w-full rounded-xl'>
          <h3 className='text-xl font-display font-bold'>{item.heading}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default function Tab({ tab }) {
  return (
    <div className={`flex flex-col justify-center animate-appear w-1/2`}>
      {tab?.content.map((item) => (
        <div key={item.heading} className={`px-[5%] py-[3%] my-[2%] rounded-xl ${tab.color}`}>
          <h3 className="text-xl font-display font-bold">{item.heading}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

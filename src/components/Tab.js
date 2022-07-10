export default function Tab({ tab }) {
  return (
    <div className={`flex flex-col ${tab.color} p-[5%] rounded-xl animate-appear w-1/2`}>
      <h2 className="text-2xl font-display">{tab?.title}</h2>
      {tab?.content.map((item) => (
        <div key={item.heading} className="py-[2%]">
          <h3 className="text-xl font-display font-bold">{item.heading}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default function Tab({tab}) {
    return (
        <div className={`flex flex-col ${tab.color} p-16 rounded-xl`}>
            <h2 className="text-2xl font-display">{tab?.title}</h2>
            {tab?.content.map(item => (
                <div key={item.heading} className="py-4">
                    <h3 className="text-xl font-display font-bold">{item.heading}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

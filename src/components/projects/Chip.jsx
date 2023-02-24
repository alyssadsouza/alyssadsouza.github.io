export default function Chip({item, onClick}) {
	return (
		<div onClick={onClick} className="cursor-pointer hover:bg-primary-300/20 transition-all text-xs rounded-xl px-4 py-1 bg-primary-300/10 text-primary-300">{item}</div>
	);
}
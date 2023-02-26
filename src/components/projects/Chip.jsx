export default function Chip({item, onClick, classes}) {
	return (
		<div onClick={onClick} className={`cursor-pointer h-fit hover:bg-primary-300/20 transition-all text-xs rounded-xl px-4 py-1 bg-primary-300/10 text-primary-300 ${classes}`}>{item}</div>
	);
}
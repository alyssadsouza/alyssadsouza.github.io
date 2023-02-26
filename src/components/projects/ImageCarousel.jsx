import Pagination from "../Navigation/Pagination";
import { useState } from "react";

export default function ImageCarousel({ images }) {
  const [imageIndex, setImageIndex] = useState(0);
  return (
	<div className="flex flex-col justify-between items-center">
		<img key={imageIndex} src={images.at(imageIndex)} alt="Carousel" className="animate-appear w-full my-4" />
		<Pagination index={imageIndex} setIndex={setImageIndex} total={images.length} />
	</div>
  );
}

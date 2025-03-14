interface Props {
  images: string[];
}

const HorizontalScrollImages = ({ images }: Props) => {
  return (
    <div className="flex overflow-x-auto no-scrollbar gap-2">
      {/* First Image */}
      {images.map((image) => (
        <div key={image} className="flex-none w-[40%]">
          <img
            src={`/images/${image}`}
            alt={image}
            className="w-full h-full object-cover cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};

export default HorizontalScrollImages;

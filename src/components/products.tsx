import HorizontalScrollImages from "./horizontal-scroll-images";

interface Props {
  images: string[];
  price: string;
  details: string;
}

const Products = ({ images, price, details }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <HorizontalScrollImages images={images} />
      <div className="flex flex-col gap-3">
        <p className="text-[20px] font-medium text-[#2c3e50]">{details}</p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-lg text-[#7e7e8d]">Price</p>
        <h5 className="font-semibold text-2xl text-[#0097a7]">$ {price}</h5>
      </div>
      <div className="flex gap-3">
        <div className="w-[128px] h-[48px]"></div>
        <div className="bg-[#ecf1f4] py-[10px] px-4 flex items-center gap-1 rounded-lg cursor-pointer">
          <img src="/svgs/chatCircledots.svg" alt="" />
          <p className="font-medium text-xl text-[#2c3e50]">Message</p>
        </div>
      </div>
    </div>
  );
};

export default Products;

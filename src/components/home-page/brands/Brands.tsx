import Image from "next/image";

const Brands = () => {
  return (
    <div className="w-full bg-[#323232] text-white text-center space-y-10 p-12 rounded-xl">
      <div className="text-4xl font-bold">Top Brands Deal</div>
      <p>
        Up To <span>60%</span> off on brands
      </p>
      <ul className="w-full flex flex-nowrap items-center justify-center space-x-6">
        <li className="bg-white inline-flex items-center justify-center p-3 w-44 h-20 rounded-md">
          <Image src="/brand-1.png" width={100} height={50} alt="" />
        </li>
        <li className="bg-white inline-flex items-center justify-center p-3 w-44 h-20 rounded-md">
          <Image src="/brand-2.png" width={100} height={50} alt="" />
        </li>
        <li className="bg-white inline-flex items-center justify-center p-3 w-44 h-20 rounded-md">
          <Image src="/brand-3.png" width={100} height={50} alt="" />
        </li>
        <li className="bg-white inline-flex items-center justify-center p-3 w-44 h-20 rounded-md">
          <Image src="/brand-4.png" width={100} height={50} alt="" />
        </li>
        <li className="bg-white inline-flex items-center justify-center p-3 w-44 h-20 rounded-md">
          <Image src="/brand-5.png" width={100} height={50} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default Brands;

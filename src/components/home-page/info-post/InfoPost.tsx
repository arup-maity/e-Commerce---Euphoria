import Image from "next/image";
import Link from "next/link";

const InfoPost = () => {
  return (
    <div className="flex flex-wrap rounded-md overflow-hidden">
      <div style={{ backgroundImage: `url("/img-14.png")` }} className="w-6/12 aspect-[625/400] bg-cover bg-center bg-no-repeat">
        <div className="h-full w-9/12 flex items-center mx-auto">
          <div className="space-y-4">
            <div className="text-2xl text-white font-lato font-bold mt-4">WE MADE YOUR EVERYDAY FASHION BETTER!</div>
            <p className="text-sm text-white tracking-wide">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos architecto nisi deleniti quas quod, aliquam earum in quis dicta ipsa quam iure ex, consequatur aspernatur.
            </p>
            <p>
              <Link href="/" className="text-sm text-white font-lato uppercase border border-white rounded-md py-2 px-6">
                SHOP NOW
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="w-6/12 aspect-[625/400]">
        <Image src="/Rectangle-13.png" width={625} height={600} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default InfoPost;

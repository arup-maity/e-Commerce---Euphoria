import Banner from "@/components/home-page/banner/Banner";
import NewArrival from "@/components/home-page/new-arrival/NewArrival";
import SavingZone from "@/components/home-page/big-saving-zone/SavingZone";
import Brands from "@/components/home-page/brands/Brands";
import ForMen from "@/components/home-page/categories-for-men/ForMen";
import ForWomen from "@/components/home-page/categories-for-men/ForWomen";
import InfoPost from "@/components/home-page/info-post/InfoPost";
import Limelight from "@/components/home-page/limelight/Limelight";
import Feedback from "@/components/home-page/feedback/Feedback";

export default function Home() {
  return (
    <div className="w-full">
      <Banner />
      <div className="w-full theme-container">
        <div className="w-full !py-10">
          <div className="text-2xl text-[#3c4242] font-lato font-bold leading-none border-l-4 border-[#8a33fd] pl-4 mb-10">New Arrival</div>
          <NewArrival />
        </div>
        <div className="w-full !py-10">
          <div className="text-2xl text-[#3c4242] font-lato font-bold leading-none border-l-4 border-[#8a33fd] pl-4 mb-10">Big Saving Zone</div>
          <SavingZone />
        </div>
        <div className="w-full !py-10">
          <InfoPost />
        </div>
        <div className="w-full !py-10">
          <div className="text-2xl text-[#3c4242] font-lato font-bold leading-none border-l-4 border-[#8a33fd] pl-4 mb-10">Categories For Men</div>
          <ForMen />
        </div>
        <div className="w-full !py-10">
          <div className="text-2xl text-[#3c4242] font-lato font-bold leading-none border-l-4 border-[#8a33fd] pl-4 mb-10">Categories For Women</div>
          <ForWomen />
        </div>
        <div className="w-full !py-10">
          <Brands />
        </div>
        <div className="w-full !py-10">
          <div className="text-2xl text-[#3c4242] font-lato font-bold leading-none border-l-4 border-[#8a33fd] pl-4 mb-10">In The Limelight</div>
          <Limelight />
        </div>
        <div className="w-full !py-10">
          <div className="text-2xl text-[#3c4242] font-lato font-bold leading-none border-l-4 border-[#8a33fd] pl-4 mb-10">Feedback</div>
          <Feedback />
        </div>
      </div>
    </div>
  );
}

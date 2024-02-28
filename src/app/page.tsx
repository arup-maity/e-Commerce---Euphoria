import Banner from "@/components/home-page/Banner";
import NewArrival from "@/components/home-page/NewArrival";

export default function Home() {
  return (
    <div className="w-full">
      <Banner />
      <div className="">
        <div className="">New Arrival</div>
        <NewArrival />
      </div>
    </div>
  );
}

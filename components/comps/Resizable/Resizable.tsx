import Mobile from "@/assets/Mobile login-pana.svg";
import Social from "@/assets/Social media-cuate.svg";
import Profile from "@/assets/Profile Interface-bro.svg";
import Image from "next/image";

export default function Resizable() {
  return (
    <div className="flex flex-row gap-5 max-md:grid max-md:px-16">
      <div className="basis-1/3 flex justify-center">
        <div>
          <h1 className="text-center text-xl">سجل دخولك</h1>
          <Image src={Mobile} alt="as" />
        </div>
      </div>
      <div className="basis-1/3 flex justify-center">
        <div>
          <h1 className="text-center text-xl">شارك الرابط</h1>
          <Image src={Social} alt="as" className="relative bottom-3"/>
        </div>
      </div>
      <div className="basis-1/3 flex justify-center">
        <div>
          <h1 className="text-center text-xl">استقبل</h1>
          <Image src={Profile} alt="as" />
        </div>
      </div>
    </div>
  );
}

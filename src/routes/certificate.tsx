import Tilt from "react-parallax-tilt";
import { useParams } from "react-router-dom";
import { useDoc } from "../hooks/firestore";
import { doc } from "firebase/firestore";
import { db } from "../config/firebase";

interface Member {
  code: string;
  email: string;
  firstName: string;
  lastName: string;
  timestamp: any;
}

export const Certificate = () => {
  const params = useParams();
  const [data] = useDoc<Member>(
    doc(db, `certificates/io/members/${params.code}`)
  );

  return (
    <section className="bg-[#202124] min-h-screen text-white grid place-items-center">
      <Tilt gyroscope className="max-w-[900px] mx-auto">
        <div className="w-full relative rounded-lg grid place-items-center overflow-hidden">
          <p className="absolute font-google-reg text-gray-300 left-16 sm:left-24 md:left-28 lg:left-36 [font-size:clamp(14px,3vw,24px)] mb-1">
            {data.firstName} {data.lastName}
          </p>
          <img
            className="w-full pointer-events-none h-full object-cover"
            src="/images/participation.png"
            alt="PowerOn Certificate"
          />
        </div>
      </Tilt>
    </section>
  );
};
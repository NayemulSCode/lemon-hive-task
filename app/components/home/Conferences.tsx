"use client";
import { GET_CONFERENCES } from "@/lib/Query";
import { formatDate } from "@/lib/dateFormater";
import dot from "@/public/timeline/dot.png";
import thander from "@/public/timeline/image.png";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
const Conferences = () => {
  const { data, loading, error } = useQuery(GET_CONFERENCES);

  if (loading) return <p>Loading conferences...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const conferences = data?.conferences || [];

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center  overflow-hidden md:p-24 p-4">
      <div className="w-full max-w-3xl mx-auto">
        <h1 className="font-bold text-center text-3xl text-darkBlue mb-8">
          Conferences
        </h1>
        <div className="!w-full space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {conferences.map((conference: any, index: number) => (
            <div
              key={index}
              className=" relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {index % 2 === 0 ? (
                <time className="text-[#617187] hidden sm:absolute left-56 translate-y-0.5 lg:inline-flex items-center justify-center text-xs font-semibold uppercase w-32 h-6 mb-3 sm:mb-0 rounded-full">
                  {formatDate(conference.startDate, "longDate")}
                </time>
              ) : (
                <time className="text-[#617187] hidden sm:absolute right-56 translate-y-0.5 lg:inline-flex items-center justify-center text-xs font-semibold uppercase w-32 h-6 mb-3 sm:mb-0 rounded-full">
                  {formatDate(conference.startDate, "longDate")}
                </time>
              )}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Image src={thander} alt="thander" />
              </div>
              <div className="rounded-lg overflow-hidden bg-[#CDCDCD] shadow-md w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]    border border-slate-200 ">
                <Link
                  href={`/conference/${conference.id}`}
                  className="font-bold text-slate-900 "
                >
                  <div className="bg-[#F9FAFB] mt-1 p-4 pr-4 flex items-start justify-start space-x-2">
                    <Image src={dot} className="w-4 h-4 mt-2" alt="dot" />
                    <div>
                      <h1 className="text-darkBlue font-medium">
                        {conference.name}
                      </h1>
                      <div className="text-slate-500 font-normal">
                        {conference.slogan}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Conferences;

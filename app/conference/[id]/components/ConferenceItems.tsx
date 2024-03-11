import { formatDate } from "@/lib/dateFormater";
import github from "@/public/speaker-social/github.png";
import linkedIn from "@/public/speaker-social/linked-in.png";
import dribble from "@/public/speaker-social/ww.png";
import x from "@/public/speaker-social/x.png";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
const ConferenceItems = ({ menuDetails, selectedItem }) => {
  return (
    <div className="box-border flex flex-col gap-6 md:bg-[#f9fafb] md:p-14">
      {menuDetails &&
        menuDetails.map((item) => {
          return (
            <Fragment>
              {selectedItem !== "schedules" ? (
                <div
                  className="flex rounded-lg gap-10 bg-white p-4"
                  key={item.id}
                >
                  <Image
                    src={item.image?.url}
                    alt="a"
                    width={5000}
                    height={5000}
                    className="rounded-lg md:w-36 md:h-36 w-20 h-20"
                  />
                  <div className="flex flex-1 flex-col justify-center">
                    <div className="flex justify-between md:flex-row flex-col ">
                      <h3 className="md:text-2xl text-base font-bold text-[#0A142F]">
                        {item.name}
                      </h3>
                      {selectedItem === "speakers" && (
                        <div className="flex">
                          {item.social?.twitter && (
                            <Link
                              href={item.social?.twitter}
                              className="text-[#617187] "
                            >
                              <Image className="w-4" src={x} alt="x twitter" />
                            </Link>
                          )}
                          {item.social?.linkedin && (
                            <Link
                              href={item.social?.linkedin}
                              className="text-[#617187] ml-4"
                            >
                              <Image
                                className="w-4"
                                src={linkedIn}
                                alt="linked-in"
                              />
                            </Link>
                          )}
                          {item.social?.vimeo && (
                            <Link
                              href={item.social?.dribble}
                              className="text-[#617187] ml-4"
                            >
                              <Image
                                className="w-4"
                                src={dribble}
                                alt="dribble"
                              />
                            </Link>
                          )}
                          {item.social?.github && (
                            <Link
                              href={item.social?.github}
                              className="text-[#617187] ml-4"
                            >
                              <Image
                                className="w-4"
                                src={github}
                                alt="github"
                              />
                            </Link>
                          )}
                        </div>
                      )}
                    </div>

                    <h5 className="md:text-base text-xs  text-darkBlue">
                      {item.aboutShort}
                    </h5>
                  </div>
                </div>
              ) : (
                <div key={item.id} className="bg-white box-border px-10 py-6">
                  <h1 className="text-xl mb-4 font-bold flex justify-between">
                    {formatDate(item.day, "longDate")}
                    <h1 className="font-normal">
                      {formatDate(item.day, "weekday")}
                    </h1>
                  </h1>
                  {item.intervals &&
                    item.intervals.map((interval) => {
                      return (
                        <div>
                          <p className="text-[#0A142F]">
                            Duration: {interval?.begin} - {interval?.end}
                          </p>
                          {interval?.description && (
                            <li className="mb-4 ps-3">
                              {interval?.description}
                            </li>
                          )}

                          {interval?.drawing && (
                            <li className="mb-4 ps-3">{interval?.drawing}</li>
                          )}
                          {interval?.title && (
                            <li className="mb-4 ps-3">{interval?.title}</li>
                          )}
                        </div>
                      );
                    })}
                </div>
              )}
            </Fragment>
          );
        })}
    </div>
  );
};

export default ConferenceItems;

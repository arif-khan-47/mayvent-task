import Link from "next/link";
import React from "react";

function JobCard({ data }: any) {
  return (
    <Link href={`/job/${data.designation}`}>
    <div className="border-2 p-10 mb-5 border-blue-500 rounded-tr-3xl rounded-bl-3xl cursor-pointer hover:scale-105 hover:bg-gradient-to-tl to-blue-500 from-blue-300 duration-500">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="my-auto">
          <p className="font-semibold text-xl text-center lg:text-left">{data.designation}</p>
          <p className="text-center lg:text-left">{data.location}</p>
        </div>
        <div className="font-semibold my-auto text-center lg:text-left">{data.salary}</div>
      </div>
    </div>
    </Link>
  );
}

export default JobCard;

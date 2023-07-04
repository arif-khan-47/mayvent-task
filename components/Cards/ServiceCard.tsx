import services from "@/data/Services";
import Image from "next/image";
import React from "react";

function ServiceCard({ data }: any) {
  return (
    <div className="flex lg:flex-col flex-row hover:border-2 hover:scale-110 duration-500 cursor-pointer border-red-500 rounded-tr-2xl rounded-bl-2xl h-32 lg:h-52">
      <div className="m-auto">
        <div className="flex lg:flex-col flex-row gap-5">
          <div className="relative h-20 w-20 mx-auto">
            <Image
              src={data.img}
              alt={data.title}
              className="h-fit w-fit"
              objectFit="contain"
              layout="fill"
            />
          </div>
          <div className="text-center my-auto">{data.title}</div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;

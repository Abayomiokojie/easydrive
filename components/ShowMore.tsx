"use client";

import { useRouter } from "next/navigation";

import { ShowMoreProps } from "@types";
import { updateSearchParams } from "@utils";
import { CustomButton } from "@components";
import { useState } from "react";

const ShowMore = ({ pageNumber, isNext, onClick }: ShowMoreProps) => {
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-red-700 hover:bg-red-800 rounded-full text-white"
          handleClick={onClick}
        />
      )}
    </div>
  );
};

export default ShowMore;

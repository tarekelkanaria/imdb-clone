"use client";

import Image from "next/image";
import { useEffect } from "react";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <section className="container p-10 text-center relative">
      <Image
        src="/error.svg"
        quality={100}
        width={200}
        height={300}
        priority={true}
        blurDataURL="/error.svg"
        alt="Error image"
        style={{ width: "auto" }}
        className="mx-auto mb-4"
      />
      <h2 className="mb-4 text-red-600 font-bold text-2xl">
        Something Went Wrong !!
      </h2>
      <button
        className="px-4 py-2 hover:bg-amber-500 text-lg rounded-lg"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </section>
  );
};

export default Error;

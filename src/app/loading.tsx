import Image from "next/image";

const Loading = () => {
  return (
    <section className="flex justify-center p-10">
      <Image
        src="/loader.svg"
        width={200}
        height={200}
        placeholder="blur"
        blurDataURL="/loader.svg"
        alt="Loader"
      />
    </section>
  );
};

export default Loading;

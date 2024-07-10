import { APODType } from "@/types/types";
import Image from "next/image";
import { MotionDiv } from "./MotionDiv";
import ClickToView from "./ClickToView";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export default function Photo({
  photo,
  index,
}: {
  photo: APODType,
  index: number,
}) {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.25,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="relative h-[40vw] max-h-96 overflow-hidden group"
    >
      <Image
        src={photo.url}
        alt={photo.title}
        fill={true}
        quality={100}
        sizes="(min-width: 1240px) 379px, (min-width: 780px) calc(28.18vw + 35px), (min-width: 640px) 50vw, calc(100vw - 48px)"
        className="object-cover group-hover:scale-105 transition-all duration-500 group-hover:opacity-80"
      />

      <ClickToView photo={photo} />
    </MotionDiv>
  );
}

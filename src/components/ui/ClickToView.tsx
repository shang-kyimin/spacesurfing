"use client";

import { APODType } from "@/types/types";
import { IconEye } from "@tabler/icons-react";
import Link from "next/link";

export default function ClickToView({
  photo,
}: {
  photo: APODType,
}) {
  return (
    <Link
      href={photo.hdurl === undefined ? photo.url : photo.hdurl}
      target="_blank"
      className="absolute text-background hidden group-hover:flex justify-center items-center gap-1 p-1 bg-rose-500 top-3 right-3 rounded-xl"
    >
      <IconEye stroke={1.5} className="size-4 sm:size-5 md:size-6" />
    </Link>
  );
}

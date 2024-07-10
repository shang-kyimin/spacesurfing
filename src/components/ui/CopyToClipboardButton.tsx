"use client";

import { CopyToClipboard } from "@/constants/constants";
import { IconCopy, IconLink } from "@tabler/icons-react";
import { toast } from "sonner";

export default function CopyToCliboardButton({
  text,
}: {
  text: string,
}) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(CopyToClipboard);
    toast("Link copy to clipboard");
  }

  return (
    <button
      className="relative group/btn flex items-center justify-between px-4 py-1 w-full rounded-lg sm:rounded-xl font-medium shadow-input bg-neutral-50 group"
      onClick={copyToClipboard}
    >
      <div className="flex space-x-2">
        <IconLink stroke={2} className="text-neutral-700 p-1" />
        <span className="text-neutral-700 text-sm sm:text-base">{text}</span>
      </div>
      <IconCopy stroke={2} className="text-neutral-700 p-1 hidden group-hover:block" />
    </button>
  );
}

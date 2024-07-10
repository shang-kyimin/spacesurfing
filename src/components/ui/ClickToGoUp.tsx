"use client";

import { IconArrowUp } from "@tabler/icons-react";
import Link from "next/link";

export default function ClickToGoUp() {
  return (
    <Link href="/">
      <IconArrowUp />
    </Link>
  );
}

"use client";

import { fetchAPODImages } from "@/fetch/fetch";
import { APODsType } from "@/types/types";
import { IconLoader } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { StartLoaderDate } from "@/constants/constants";
import { calculateDate } from "@/utils/utils";

let toFetch = StartLoaderDate;

export type PhotoType = JSX.Element;

export default function LoadMore() {
  const { ref, inView } = useInView();
  const [ data, setData ] = useState<PhotoType[]>([]);

  useEffect(() => {
    if (inView) {
      const newDate = calculateDate(toFetch, 12);
      fetchAPODImages({ startDate: toFetch, endDate: newDate })
        .then(res => {
          setData([...data, ...res]);
          toFetch = calculateDate(newDate, 1);
        });
    }
  }, [inView, data]);

  return (
    <>
      <section className="grid gap-2 sm:gap-3 md:gap-4 grid-cols-2 lg:grid-cols-3">
        {data}
      </section>

      <section className="mx-auto w-full">
        <div ref={ref}>
          <IconLoader stroke={1.5} className="animate-spin mx-auto" />
        </div>
      </section>
    </>
  );
}

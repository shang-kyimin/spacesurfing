import { fetchAPODImage } from "@/fetch/fetch";
import Image from "next/image";
import ClickToView from "../ui/ClickToView";

export default async function TodayImage() {
  const res = await fetchAPODImage();

  if (res.result === undefined) {
    return (
      <section className="h-14 flex justify-center items-center">
        <p className="text-lg">{res.message}</p>
      </section>
    );
  }

  return (
    <section className="w-full max-w-2xl mx-auto space-y-2">
      <h6 className="text-xl leading-6 font-bold">{res.result.title}</h6>

      <div className="relative group overflow-hidden">
        <Image
          src={res.result.hdurl === undefined ? res.result.url : res.result.hdurl}
          alt={res.result.title}
          width={1000}
          height={960}
          placeholder="blur"
          blurDataURL="/images/loader.svg"
          className="w-full group-hover:scale-105 transition-all duration-500"
        />

        <ClickToView photo={res.result} />
      </div>

      <div className="space-y-4">
        <p>{res.result.explanation}</p>

        <div>
          <p>Date: <span className="font-bold">{res.result.date}</span></p>
          <p>Media type: <span className="font-bold">{res.result.media_type}</span></p>
          <p>Copyright: <span className="font-bold">{res.result.copyright === undefined ? "Unknown" : res.result.copyright}</span></p>
        </div>
      </div>
    </section>
  );
}

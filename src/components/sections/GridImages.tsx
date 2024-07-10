import Photo from "../ui/Photo";
import LoadMore from "../shares/LoadMore";
import { InitialImages } from "@/constants/constants";

export default async function GridImages() {
  return (
    <section className="space-y-4 sm:space-y-8">
      <div className="grid gap-2 sm:gap-3 md:gap-4 grid-cols-2 lg:grid-cols-3">
        {InitialImages.map((r, index) => (
          <Photo key={r.url} photo={r} index={index} />
        ))}
      </div>

      <LoadMore />
    </section>
  );
}

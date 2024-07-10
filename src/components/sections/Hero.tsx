import { APODLink, BackgroundImageCreatorLink } from "@/constants/constants";
import CopyToCliboardButton from "../ui/CopyToClipboardButton";

export default async function Hero() {
  return (
    <section className="bg-img-1 bg-center bg-cover bg-no-repeat text-background relative">
      <div className="max-w-2xl mx-auto py-24 sm:py-36 px-6 sm:px-8 flex flex-col gap-6">
        <div className="space-y-1">
          <h2 className="text-sm text-pink-500 sm:text-base border border-pink-500 px-3 inline-block rounded-xl">Space Surfing</h2>
          <h1 className="text-xl sm:text-2xl leading-6 font-medium">Discover images and photographs of the astronomy and the wonders of the universe</h1>
        </div>

        <CopyToCliboardButton text={APODLink} />
      </div>

      <p className="opacity-75 absolute bottom-2 right-4 text-sm sm:text-base">Photo by <a target="_blank" href={BackgroundImageCreatorLink} className="font-bold">Pixabay</a></p>
    </section>
  );
}

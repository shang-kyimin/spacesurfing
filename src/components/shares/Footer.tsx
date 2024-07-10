import { ProjectSourceCode } from "@/constants/constants";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto text-xs sm:text-sm px-2 sm:px-6 md:px-12 pt-4 pb-8 border-t mt-12">
      <a href={ProjectSourceCode} target="_blank" className="font-semibold text-sm sm:text-base">
        Source Code
      </a>
      <p>
        &copy; {new Date().getFullYear()} - Kyi Min Khine, Personal Project | All rights reserved
      </p>
    </footer>
  );
}

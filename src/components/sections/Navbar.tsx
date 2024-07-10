import GridImages from "./GridImages";
import TodayImage from "./TodayImage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export default function Navbar() {
  return (
    <nav className="flex flex-col">
      <Tabs className="w-full space-y-6" defaultValue="gallery">
        <div className="sticky top-0 z-20 bg-background pt-4 pb-3">
          <div className="flex justify-between items-center">
            <h6 className="text-xl md:text-2xl mb-2">Explore</h6>
          </div>

          <TabsList className="w-full h-full grid grid-cols-2">
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="today">Today</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="gallery">
          <GridImages />
        </TabsContent>

        <TabsContent value="today">
          <TodayImage />
        </TabsContent>
      </Tabs>
    </nav>
  );
}

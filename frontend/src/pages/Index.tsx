import { useState } from "react";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "@/components/Sidebar";
import { MapView } from "@/components/MapView";
import { RestaurantDetails } from "@/components/RestaurantDetails";

interface Restaurant {
  id: string;
  name: string;
  x: number;
  y: number;
}

const Index = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="flex items-center gap-4 px-4 py-3 bg-primary/10 border-b">
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="shrink-0">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 p-0">
            <Sidebar />
          </SheetContent>
        </Sheet>
        <h1 className="text-lg font-bold">THE RESEAU</h1>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Map Section */}
        <div className="flex-1 flex flex-col p-4 overflow-hidden">
          {/* Search Bar */}
          <div className="mb-4 flex justify-center">
            <div className="relative max-w-xl w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Restaurants, Activities, Apparel, ..." 
                className="pl-10 border-primary/30 focus-visible:ring-primary"
              />
            </div>
          </div>

          {/* Map */}
          <div className="flex-1 min-h-0">
            <MapView 
              onRestaurantClick={setSelectedRestaurant}
              selectedRestaurant={selectedRestaurant}
            />
          </div>
        </div>

        {/* Restaurant Details Panel */}
        <div className={`w-80 border-l transition-all duration-300 ${
          selectedRestaurant ? 'translate-x-0' : 'translate-x-full absolute right-0 top-0 bottom-0'
        }`}>
          <RestaurantDetails 
            restaurant={selectedRestaurant}
            onClose={() => setSelectedRestaurant(null)}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;

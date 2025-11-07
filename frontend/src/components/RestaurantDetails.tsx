import { ChevronLeft, Star, ExternalLink, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Restaurant {
  id: string;
  name: string;
  x: number;
  y: number;
}

interface RestaurantDetailsProps {
  restaurant: Restaurant | null;
  onClose: () => void;
}

export const RestaurantDetails = ({ restaurant, onClose }: RestaurantDetailsProps) => {
  if (!restaurant) return null;

  return (
    <Card className="w-full h-full overflow-auto">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={onClose}>
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-xl font-bold">{restaurant.name}</h2>
        </div>

        {/* Hours */}
        <div className="text-sm text-muted-foreground">
          <p>OPEN, CLOSES AT 9:00 PM</p>
        </div>

        {/* Image placeholder */}
        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
          <MapPin className="w-12 h-12 text-muted-foreground" />
        </div>

        {/* Reviews */}
        <div>
          <h3 className="text-sm font-semibold mb-2">REVIEWS</h3>
          <div className="flex gap-1">
            {[1, 2, 3, 4].map((star) => (
              <Star key={star} className="w-5 h-5 fill-primary text-primary" />
            ))}
            <Star className="w-5 h-5 text-muted" />
          </div>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-sm font-semibold mb-2">MENU</h3>
          <Button variant="outline" className="w-full">
            View Menu
          </Button>
        </div>

        {/* Credits offer */}
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
          <p className="text-sm font-medium text-primary">
            50 CREDITS FOR FIRST VISIT
          </p>
        </div>

        {/* Contact info */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-muted-foreground" />
            <span>WEBSITE</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-muted-foreground" />
            <span>514-111-1111</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span>223, Street Name, MTL</span>
          </div>
        </div>

        {/* View full page link */}
        <Button variant="link" className="w-full text-primary">
          View full page
        </Button>
      </div>
    </Card>
  );
};

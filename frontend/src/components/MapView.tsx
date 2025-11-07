import { Utensils } from "lucide-react";

interface Restaurant {
  id: string;
  name: string;
  x: number;
  y: number;
}

interface MapViewProps {
  onRestaurantClick: (restaurant: Restaurant) => void;
  selectedRestaurant: Restaurant | null;
}

const restaurants: Restaurant[] = [
  { id: "1", name: "RESTAURANT A", x: 65, y: 25 },
  { id: "2", name: "RESTAURANT B", x: 25, y: 35 },
  { id: "3", name: "RESTAURANT C", x: 50, y: 15 },
  { id: "4", name: "RESTAURANT D", x: 35, y: 65 },
  { id: "5", name: "RESTAURANT E", x: 70, y: 70 },
];

export const MapView = ({ onRestaurantClick, selectedRestaurant }: MapViewProps) => {
  return (
    <div className="relative w-full h-full bg-muted rounded-lg overflow-hidden">
      {/* Grid pattern background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
          transform: 'rotate(-10deg) scale(1.5)',
        }}
      />

      {/* User location marker (center) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative">
          <div className="w-8 h-8 bg-accent rounded-full animate-pulse opacity-30 absolute -top-1 -left-1" />
          <div 
            className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-accent"
            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
          />
        </div>
      </div>

      {/* Restaurant markers */}
      {restaurants.map((restaurant) => (
        <button
          key={restaurant.id}
          onClick={() => onRestaurantClick(restaurant)}
          className={`absolute group transition-all duration-300 hover:scale-110 ${
            selectedRestaurant?.id === restaurant.id ? 'scale-110 z-20' : 'z-10'
          }`}
          style={{ 
            left: `${restaurant.x}%`, 
            top: `${restaurant.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="relative">
            {/* Connection line to center */}
            <svg 
              className="absolute top-1/2 left-1/2 -z-10 pointer-events-none"
              style={{
                width: '200px',
                height: '200px',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <line
                x1="100"
                y1="100"
                x2={`${100 + (50 - restaurant.x) * 2}`}
                y2={`${100 + (50 - restaurant.y) * 2}`}
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeDasharray="4 4"
                opacity="0.3"
              />
            </svg>

            {/* Restaurant icon */}
            <div className={`p-3 rounded-full bg-primary text-primary-foreground shadow-lg transition-all ${
              selectedRestaurant?.id === restaurant.id ? 'ring-4 ring-primary/50' : ''
            }`}>
              <Utensils className="w-5 h-5" />
            </div>

            {/* Restaurant label */}
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className={`text-xs font-medium px-2 py-1 rounded bg-card shadow-sm ${
                selectedRestaurant?.id === restaurant.id ? 'text-primary' : 'text-foreground'
              }`}>
                {restaurant.name}
              </span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

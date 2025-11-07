import { User, Award, Trophy, Settings, Info, Crown, HelpCircle } from "lucide-react";
import { Instagram, Facebook } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const Sidebar = () => {
  return (
    <div className="flex flex-col h-full bg-card border-r">
      {/* User Profile */}
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12">
            <AvatarFallback className="bg-muted">
              <User className="w-6 h-6" />
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-xs text-muted-foreground">HELLO,</p>
            <p className="font-semibold">TEST_USER</p>
          </div>
        </div>
        
        <div className="text-center py-2 bg-muted rounded-lg">
          <p className="text-sm font-bold">500 Ⓐ CREDITS</p>
        </div>
      </div>

      <Separator />

      {/* Main Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Award className="w-4 h-4" />
          CREDITS REWARDS
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Trophy className="w-4 h-4" />
          ACHIEVEMENTS
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Settings className="w-4 h-4" />
          USER SETTINGS
        </Button>
      </nav>

      <Separator />

      {/* Bottom Navigation */}
      <div className="p-4 space-y-2">
        <Button variant="ghost" className="w-full justify-start gap-2 text-sm">
          <Info className="w-4 h-4" />
          ABOUT US
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2 text-sm">
          <Crown className="w-4 h-4" />
          BECOME PRO MEMBER
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2 text-sm">
          <HelpCircle className="w-4 h-4" />
          HELP & SUPPORT
        </Button>
      </div>

      <Separator />

      {/* Social Media */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground mb-3">FOLLOW US</p>
        <div className="flex gap-3">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Instagram className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Facebook className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

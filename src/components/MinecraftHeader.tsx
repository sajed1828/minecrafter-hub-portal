import { Button } from "@/components/ui/button";
import { Download, Gamepad2 } from "lucide-react";

const MinecraftHeader = () => {
  return (
    <header className="w-full bg-card border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3" dir="rtl">
            <Gamepad2 className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">ماين كرافت العربي</h1>
          </div>
          
          <div className="hidden md:flex items-center gap-6" dir="rtl">
            <a href="#downloads" className="text-muted-foreground hover:text-primary transition-colors">
              التحميلات
            </a>
            <a href="#versions" className="text-muted-foreground hover:text-primary transition-colors">
              الإصدارات
            </a>
            <a href="#support" className="text-muted-foreground hover:text-primary transition-colors">
              الدعم
            </a>
          </div>
          
          <Button variant="default" className="gradient-primary" dir="rtl">
            <Download className="ml-2 h-4 w-4" />
            تحميل الآن
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default MinecraftHeader;
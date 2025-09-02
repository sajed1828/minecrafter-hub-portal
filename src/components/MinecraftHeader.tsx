import { Button } from "@/components/ui/button";
import { Download, Gamepad2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";

const MinecraftHeader = () => {
  const { t, dir } = useLanguage();
  
  return (
    <header className="w-full bg-card border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3" dir={dir}>
            <Gamepad2 className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">{t("site.title")}</h1>
          </div>
          
          <div className="hidden lg:flex items-center gap-6" dir={dir}>
            <a href="#downloads" className="text-muted-foreground hover:text-primary transition-colors">
              {t("nav.downloads")}
            </a>
            <a href="#versions" className="text-muted-foreground hover:text-primary transition-colors">
              {t("nav.versions")}
            </a>
            <a href="#support" className="text-muted-foreground hover:text-primary transition-colors">
              {t("nav.support")}
            </a>
          </div>
          
          <div className="flex items-center gap-2">
            <LanguageSelector />
            <Button variant="default" className="gradient-primary" dir={dir}>
              <Download className={dir === "rtl" ? "ml-2 h-4 w-4" : "mr-2 h-4 w-4"} />
              {t("button.download.now")}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default MinecraftHeader;
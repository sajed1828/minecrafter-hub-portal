import { Button } from "@/components/ui/button";
import { Download, Star, Users, Zap } from "lucide-react";
import heroImage from "@/assets/minecraft-hero.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const MinecraftHero = () => {
  const { t, dir } = useLanguage();
  
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto" dir={dir}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            {t("hero.title")} <span className="gradient-primary bg-clip-text text-transparent">{t("hero.title.highlight")}</span> {t("hero.title.end")}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            {t("hero.subtitle")}
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="flex items-center gap-2 text-accent">
              <Download className="h-5 w-5" />
              <span className="font-semibold">{t("hero.stats.downloads")}</span>
            </div>
            <div className="flex items-center gap-2 text-accent">
              <Star className="h-5 w-5" />
              <span className="font-semibold">{t("hero.stats.rating")}</span>
            </div>
            <div className="flex items-center gap-2 text-accent">
              <Users className="h-5 w-5" />
              <span className="font-semibold">{t("hero.stats.community")}</span>
            </div>
            <div className="flex items-center gap-2 text-accent">
              <Zap className="h-5 w-5" />
              <span className="font-semibold">{t("hero.stats.updates")}</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gradient-primary text-lg px-8 py-4 h-auto">
              <Download className={dir === "rtl" ? "ml-2 h-5 w-5" : "mr-2 h-5 w-5"} />
              {t("hero.button.java")}
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 h-auto">
              <Download className={dir === "rtl" ? "ml-2 h-5 w-5" : "mr-2 h-5 w-5"} />
              {t("hero.button.bedrock")}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default MinecraftHero;
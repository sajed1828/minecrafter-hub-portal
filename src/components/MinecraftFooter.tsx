import { Gamepad2, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const MinecraftFooter = () => {
  const { t, dir } = useLanguage();
  
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8" dir={dir}>
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Gamepad2 className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold text-card-foreground">{t("site.title")}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {dir === "rtl" 
                ? "أفضل موقع لتحميل جميع إصدارات ماين كرافت مجاناً مع ضمان الأمان والجودة"
                : "Best place to download all Minecraft versions for free with guaranteed safety and quality"}
            </p>
          </div>
          
          {/* Downloads */}
          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">{t("nav.downloads")}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">{t("version.java.title")}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t("version.bedrock.title")}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t("version.mobile.title")}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">
                {dir === "rtl" ? "أدوات إضافية" : "Additional Tools"}
              </a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">{t("nav.support")}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">
                {dir === "rtl" ? "مركز المساعدة" : "Help Center"}
              </a></li>
              <li><a href="#" className="hover:text-primary transition-colors">
                {dir === "rtl" ? "الأسئلة الشائعة" : "FAQ"}
              </a></li>
              <li><a href="#" className="hover:text-primary transition-colors">
                {dir === "rtl" ? "تواصل معنا" : "Contact Us"}
              </a></li>
              <li><a href="#" className="hover:text-primary transition-colors">
                {dir === "rtl" ? "البلاغات" : "Reports"}
              </a></li>
            </ul>
          </div>
          
          {/* Community */}
          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">
              {dir === "rtl" ? "المجتمع" : "Community"}
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4" dir={dir}>
          <p className="text-muted-foreground text-sm">
            {dir === "rtl" 
              ? "جميع الحقوق محفوظة © 2024 ماين كرافت العربي"
              : "© 2024 Minecraft Hub. All rights reserved."}
          </p>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>{dir === "rtl" ? "صُنع بـ" : "Made with"}</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>{dir === "rtl" ? "للمجتمع العربي" : "for gamers worldwide"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MinecraftFooter;
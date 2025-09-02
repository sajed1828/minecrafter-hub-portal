import { Gamepad2, Heart } from "lucide-react";

const MinecraftFooter = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8" dir="rtl">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Gamepad2 className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold text-card-foreground">ماين كرافت العربي</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              أفضل موقع لتحميل جميع إصدارات ماين كرافت مجاناً مع ضمان الأمان والجودة
            </p>
          </div>
          
          {/* Downloads */}
          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">التحميلات</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">ماين كرافت جافا</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">بيدروك إديشن</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">ماين كرافت PE</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">أدوات إضافية</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">الدعم</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">مركز المساعدة</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">تواصل معنا</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">البلاغات</a></li>
            </ul>
          </div>
          
          {/* Community */}
          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">المجتمع</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">ديسكورد</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">تويتر</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">يوتيوب</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">فيسبوك</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4" dir="rtl">
          <p className="text-muted-foreground text-sm">
            جميع الحقوق محفوظة © 2024 ماين كرافت العربي
          </p>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>صُنع بـ</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>للمجتمع العربي</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MinecraftFooter;
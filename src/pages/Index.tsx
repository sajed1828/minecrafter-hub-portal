import MinecraftHeader from "@/components/MinecraftHeader";
import MinecraftHero from "@/components/MinecraftHero";
import MinecraftFooter from "@/components/MinecraftFooter";
import DownloadCard from "@/components/DownloadCard";

const Index = () => {
  const minecraftVersions = [
    {
      title: "ماين كرافت جافا إديشن",
      version: "الإصدار 1.21.3",
      description: "النسخة الأصلية والأكثر شمولية من ماين كرافت مع إمكانيات لا محدودة للتعديل والإضافات.",
      platform: "java" as const,
      isRecommended: true,
      downloadCount: "50M+",
      fileSize: "1.2 GB",
      lastUpdate: "اليوم"
    },
    {
      title: "ماين كرافت بيدروك",
      version: "الإصدار 1.21.30",
      description: "نسخة محسنة للأداء والتشغيل المتقاطع بين جميع المنصات مع أصدقائك.",
      platform: "bedrock" as const,
      isRecommended: false,
      downloadCount: "30M+",
      fileSize: "800 MB",
      lastUpdate: "أمس"
    },
    {
      title: "ماين كرافت بوكيت إديشن",
      version: "الإصدار 1.21.31",
      description: "نسخة الجوال المحمولة التي تتيح لك اللعب في أي مكان وزمان مع تحكم محسن.",
      platform: "mobile" as const,
      isRecommended: false,
      downloadCount: "100M+",
      fileSize: "300 MB",
      lastUpdate: "قبل 3 أيام"
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* SEO Meta tags are handled in index.html */}
      
      {/* Header */}
      <MinecraftHeader />
      
      {/* Hero Section */}
      <MinecraftHero />
      
      {/* Downloads Section */}
      <main className="container mx-auto px-4 py-20">
        <section id="downloads" className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              حمل <span className="gradient-primary bg-clip-text text-transparent">الإصدارات</span> المتاحة
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              اختر الإصدار المناسب لجهازك واستمتع بتجربة ماين كرافت المثلى
            </p>
          </div>
          
          {/* Download Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {minecraftVersions.map((version, index) => (
              <DownloadCard
                key={index}
                title={version.title}
                version={version.version}
                description={version.description}
                platform={version.platform}
                isRecommended={version.isRecommended}
                downloadCount={version.downloadCount}
                fileSize={version.fileSize}
                lastUpdate={version.lastUpdate}
              />
            ))}
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              لماذا تختار <span className="text-primary">موقعنا؟</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="gaming-card text-center space-y-4">
                <div className="w-16 h-16 bg-primary/20 rounded-lg mx-auto flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold text-card-foreground">تحميل سريع</h3>
                <p className="text-muted-foreground text-sm">سرعة تحميل عالية من خوادم محسنة</p>
              </div>
              
              <div className="gaming-card text-center space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-lg mx-auto flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="font-semibold text-card-foreground">آمن ومضمون</h3>
                <p className="text-muted-foreground text-sm">جميع الملفات مفحوصة ومضمونة 100%</p>
              </div>
              
              <div className="gaming-card text-center space-y-4">
                <div className="w-16 h-16 bg-gaming-blue/20 rounded-lg mx-auto flex items-center justify-center">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="font-semibold text-card-foreground">تحديثات مستمرة</h3>
                <p className="text-muted-foreground text-sm">أحدث الإصدارات فور إطلاقها</p>
              </div>
              
              <div className="gaming-card text-center space-y-4">
                <div className="w-16 h-16 bg-gaming-purple/20 rounded-lg mx-auto flex items-center justify-center">
                  <span className="text-2xl">🎮</span>
                </div>
                <h3 className="font-semibold text-card-foreground">دعم عربي</h3>
                <p className="text-muted-foreground text-sm">دعم فني باللغة العربية على مدار الساعة</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <MinecraftFooter />
    </div>
  );
};

export default Index;

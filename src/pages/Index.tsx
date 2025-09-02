import MinecraftHeader from "@/components/MinecraftHeader";
import MinecraftHero from "@/components/MinecraftHero";
import MinecraftFooter from "@/components/MinecraftFooter";
import DownloadCard from "@/components/DownloadCard";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t, dir } = useLanguage();
  
  const minecraftVersions = [
    {
      title: t("version.java.title"),
      version: "Version 1.21.3",
      description: t("version.java.description"),
      platform: "java" as const,
      isRecommended: true,
      downloadCount: "50M+",
      fileSize: "1.2 GB",
      lastUpdate: t("common.today")
    },
    {
      title: t("version.bedrock.title"),
      version: "Version 1.21.30",
      description: t("version.bedrock.description"),
      platform: "bedrock" as const,
      isRecommended: false,
      downloadCount: "30M+",
      fileSize: "800 MB",
      lastUpdate: t("common.yesterday")
    },
    {
      title: t("version.mobile.title"),
      version: "Version 1.21.31",
      description: t("version.mobile.description"),
      platform: "mobile" as const,
      isRecommended: false,
      downloadCount: "100M+",
      fileSize: "300 MB",
      lastUpdate: t("common.days.ago")
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir={dir}>
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
              {t("downloads.title")} <span className="gradient-primary bg-clip-text text-transparent">{t("downloads.title.highlight")}</span> {t("downloads.title.end")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("downloads.subtitle")}
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
              {t("features.title")} <span className="text-primary">{t("features.title.highlight")}</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="gaming-card text-center space-y-4">
                <div className="w-16 h-16 bg-primary/20 rounded-lg mx-auto flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold text-card-foreground">{t("feature.speed.title")}</h3>
                <p className="text-muted-foreground text-sm">{t("feature.speed.desc")}</p>
              </div>
              
              <div className="gaming-card text-center space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-lg mx-auto flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="font-semibold text-card-foreground">{t("feature.safe.title")}</h3>
                <p className="text-muted-foreground text-sm">{t("feature.safe.desc")}</p>
              </div>
              
              <div className="gaming-card text-center space-y-4">
                <div className="w-16 h-16 bg-gaming-blue/20 rounded-lg mx-auto flex items-center justify-center">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="font-semibold text-card-foreground">{t("feature.updates.title")}</h3>
                <p className="text-muted-foreground text-sm">{t("feature.updates.desc")}</p>
              </div>
              
              <div className="gaming-card text-center space-y-4">
                <div className="w-16 h-16 bg-gaming-purple/20 rounded-lg mx-auto flex items-center justify-center">
                  <span className="text-2xl">🎮</span>
                </div>
                <h3 className="font-semibold text-card-foreground">{t("feature.support.title")}</h3>
                <p className="text-muted-foreground text-sm">{t("feature.support.desc")}</p>
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

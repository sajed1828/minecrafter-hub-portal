import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Monitor, Smartphone, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface DownloadCardProps {
  title: string;
  version: string;
  description: string;
  platform: "java" | "bedrock" | "mobile";
  isRecommended?: boolean;
  downloadCount: string;
  fileSize: string;
  lastUpdate: string;
  downloadLink: string; 
}

const DownloadCard = ({
  title,
  version,
  description,
  platform,
  isRecommended = false,
  downloadCount,
  fileSize,
  lastUpdate,
  downloadLink = "https://launcher.mojang.com/download/MinecraftInstaller.exe?ref=mcnet", 
}: DownloadCardProps) => {
  const { t, dir } = useLanguage();

  const getPlatformIcon = () => {
    switch (platform) {
      case "java":
        return <Monitor className="h-6 w-6" />;
      case "bedrock":
        return <Monitor className="h-6 w-6" />;
      case "mobile":
        return <Smartphone className="h-6 w-6" />;
      default:
        return <Monitor className="h-6 w-6" />;
    }
  };

  const getPlatformColor = () => {
    switch (platform) {
      case "java":
        return "text-gaming-orange";
      case "bedrock":
        return "text-gaming-blue";
      case "mobile":
        return "text-gaming-purple";
      default:
        return "text-primary";
    }
  };

  return (
    <Card className="gaming-card relative overflow-hidden group" dir={dir}>
      {isRecommended && (
        <Badge
          className={`absolute top-4 ${
            dir === "rtl" ? "right-4" : "left-4"
          } gradient-primary border-0 text-primary-foreground`}
        >
          {t("common.most.popular")}
        </Badge>
      )}

      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-card-foreground">{title}</h3>
            <div className="flex items-center gap-2">
              <div className={getPlatformColor()}>{getPlatformIcon()}</div>
              <span className="text-sm font-medium text-accent">{version}</span>
            </div>
          </div>

          <CheckCircle className="h-6 w-6 text-primary" />
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed">{description}</p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">{t("common.downloads")}</p>
            <p className="font-semibold text-accent">{downloadCount}</p>
          </div>
          <div>
            <p className="text-muted-foreground">{t("common.size")}</p>
            <p className="font-semibold text-accent">{fileSize}</p>
          </div>
          <div>
            <p className="text-muted-foreground">{t("common.update")}</p>
            <p className="font-semibold text-accent">{lastUpdate}</p>
          </div>
        </div>

        {/* Download Button */}
        <a
          href={downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button
            className="w-full gradient-primary group-hover:shadow-lg transition-all duration-300"
            size="lg"
          >
            <Download
              className={
                dir === "rtl" ? "ml-2 h-4 w-4" : "mr-2 h-4 w-4"
              }
            />
            {t("common.free.download")}
          </Button>
        </a>

        {/* Features */}
        <div className="text-xs text-muted-foreground space-y-1">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-primary" />
            <span>{t("common.safe.guaranteed")}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-primary" />
            <span>{t("common.no.ads")}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-primary" />
            <span>{t("common.high.speed")}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DownloadCard;

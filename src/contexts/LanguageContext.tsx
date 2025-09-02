import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "ar" | "en" | "fr" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "rtl" | "ltr";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ar: {
    // Header
    "site.title": "ماين كرافت العربي",
    "nav.downloads": "التحميلات",
    "nav.versions": "الإصدارات",
    "nav.support": "الدعم",
    "button.download.now": "تحميل الآن",
    
    // Hero
    "hero.title": "حمل",
    "hero.title.highlight": "ماين كرافت",
    "hero.title.end": "مجاناً",
    "hero.subtitle": "استمتع بأحدث إصدارات ماين كرافت مع تحديثات مستمرة وأدوات حصرية",
    "hero.stats.downloads": "+10M تحميل",
    "hero.stats.rating": "تقييم 5 نجوم",
    "hero.stats.community": "مجتمع عربي",
    "hero.stats.updates": "تحديث سريع",
    "hero.button.java": "تحميل ماين كرافت جافا",
    "hero.button.bedrock": "تحميل بيدروك إديشن",
    
    // Downloads
    "downloads.title": "حمل",
    "downloads.title.highlight": "الإصدارات",
    "downloads.title.end": "المتاحة",
    "downloads.subtitle": "اختر الإصدار المناسب لجهازك واستمتع بتجربة ماين كرافت المثلى",
    
    // Versions
    "version.java.title": "ماين كرافت جافا إديشن",
    "version.java.description": "النسخة الأصلية والأكثر شمولية من ماين كرافت مع إمكانيات لا محدودة للتعديل والإضافات.",
    "version.bedrock.title": "ماين كرافت بيدروك",
    "version.bedrock.description": "نسخة محسنة للأداء والتشغيل المتقاطع بين جميع المنصات مع أصدقائك.",
    "version.mobile.title": "ماين كرافت بوكيت إديشن",
    "version.mobile.description": "نسخة الجوال المحمولة التي تتيح لك اللعب في أي مكان وزمان مع تحكم محسن.",
    
    // Features
    "features.title": "لماذا تختار",
    "features.title.highlight": "موقعنا؟",
    "feature.speed.title": "تحميل سريع",
    "feature.speed.desc": "سرعة تحميل عالية من خوادم محسنة",
    "feature.safe.title": "آمن ومضمون",
    "feature.safe.desc": "جميع الملفات مفحوصة ومضمونة 100%",
    "feature.updates.title": "تحديثات مستمرة",
    "feature.updates.desc": "أحدث الإصدارات فور إطلاقها",
    "feature.support.title": "دعم عربي",
    "feature.support.desc": "دعم فني باللغة العربية على مدار الساعة",
    
    // Common
    "common.most.popular": "الأكثر شعبية",
    "common.free.download": "تحميل مجاني",
    "common.safe.guaranteed": "آمن ومضمون 100%",
    "common.no.ads": "بدون إعلانات مزعجة",
    "common.high.speed": "سرعة تحميل عالية",
    "common.downloads": "التحميلات",
    "common.size": "الحجم",
    "common.update": "التحديث",
    "common.today": "اليوم",
    "common.yesterday": "أمس",
    "common.days.ago": "قبل 3 أيام"
  },
  
  en: {
    // Header
    "site.title": "Minecraft Hub",
    "nav.downloads": "Downloads",
    "nav.versions": "Versions",
    "nav.support": "Support",
    "button.download.now": "Download Now",
    
    // Hero
    "hero.title": "Download",
    "hero.title.highlight": "Minecraft",
    "hero.title.end": "for Free",
    "hero.subtitle": "Enjoy the latest Minecraft versions with continuous updates and exclusive tools",
    "hero.stats.downloads": "+10M Downloads",
    "hero.stats.rating": "5 Star Rating",
    "hero.stats.community": "Global Community",
    "hero.stats.updates": "Fast Updates",
    "hero.button.java": "Download Minecraft Java",
    "hero.button.bedrock": "Download Bedrock Edition",
    
    // Downloads
    "downloads.title": "Available",
    "downloads.title.highlight": "Versions",
    "downloads.title.end": "",
    "downloads.subtitle": "Choose the right version for your device and enjoy the optimal Minecraft experience",
    
    // Versions
    "version.java.title": "Minecraft Java Edition",
    "version.java.description": "The original and most comprehensive version of Minecraft with unlimited modding and addon possibilities.",
    "version.bedrock.title": "Minecraft Bedrock",
    "version.bedrock.description": "Performance-optimized version with cross-platform play across all devices with friends.",
    "version.mobile.title": "Minecraft Pocket Edition",
    "version.mobile.description": "The portable mobile version that lets you play anywhere, anytime with enhanced controls.",
    
    // Features
    "features.title": "Why Choose",
    "features.title.highlight": "Our Site?",
    "feature.speed.title": "Fast Download",
    "feature.speed.desc": "High-speed downloads from optimized servers",
    "feature.safe.title": "Safe & Secure",
    "feature.safe.desc": "All files scanned and 100% guaranteed",
    "feature.updates.title": "Regular Updates",
    "feature.updates.desc": "Latest versions available upon release",
    "feature.support.title": "24/7 Support",
    "feature.support.desc": "Technical support available around the clock",
    
    // Common
    "common.most.popular": "Most Popular",
    "common.free.download": "Free Download",
    "common.safe.guaranteed": "100% Safe & Guaranteed",
    "common.no.ads": "No Annoying Ads",
    "common.high.speed": "High-Speed Download",
    "common.downloads": "Downloads",
    "common.size": "Size",
    "common.update": "Updated",
    "common.today": "Today",
    "common.yesterday": "Yesterday",
    "common.days.ago": "3 days ago"
  },
  
  fr: {
    // Header
    "site.title": "Minecraft Hub",
    "nav.downloads": "Téléchargements",
    "nav.versions": "Versions",
    "nav.support": "Support",
    "button.download.now": "Télécharger",
    
    // Hero
    "hero.title": "Téléchargez",
    "hero.title.highlight": "Minecraft",
    "hero.title.end": "Gratuitement",
    "hero.subtitle": "Profitez des dernières versions de Minecraft avec des mises à jour continues et des outils exclusifs",
    "hero.stats.downloads": "+10M Téléchargements",
    "hero.stats.rating": "Note 5 Étoiles",
    "hero.stats.community": "Communauté Mondiale",
    "hero.stats.updates": "Mises à Jour Rapides",
    "hero.button.java": "Télécharger Minecraft Java",
    "hero.button.bedrock": "Télécharger Bedrock Edition",
    
    // Downloads
    "downloads.title": "Versions",
    "downloads.title.highlight": "Disponibles",
    "downloads.title.end": "",
    "downloads.subtitle": "Choisissez la version adaptée à votre appareil et profitez de l'expérience Minecraft optimale",
    
    // Versions
    "version.java.title": "Minecraft Java Edition",
    "version.java.description": "La version originale et la plus complète de Minecraft avec des possibilités illimitées de mods et d'addons.",
    "version.bedrock.title": "Minecraft Bedrock",
    "version.bedrock.description": "Version optimisée pour les performances avec jeu cross-platform sur tous les appareils avec vos amis.",
    "version.mobile.title": "Minecraft Pocket Edition",
    "version.mobile.description": "La version mobile portable qui vous permet de jouer n'importe où, n'importe quand avec des contrôles améliorés.",
    
    // Features
    "features.title": "Pourquoi Choisir",
    "features.title.highlight": "Notre Site?",
    "feature.speed.title": "Téléchargement Rapide",
    "feature.speed.desc": "Téléchargements haute vitesse depuis des serveurs optimisés",
    "feature.safe.title": "Sûr et Sécurisé",
    "feature.safe.desc": "Tous les fichiers scannés et garantis 100%",
    "feature.updates.title": "Mises à Jour Régulières",
    "feature.updates.desc": "Dernières versions disponibles dès leur sortie",
    "feature.support.title": "Support 24/7",
    "feature.support.desc": "Support technique disponible 24h/24",
    
    // Common
    "common.most.popular": "Le Plus Populaire",
    "common.free.download": "Téléchargement Gratuit",
    "common.safe.guaranteed": "100% Sûr et Garanti",
    "common.no.ads": "Sans Publicités Gênantes",
    "common.high.speed": "Téléchargement Haute Vitesse",
    "common.downloads": "Téléchargements",
    "common.size": "Taille",
    "common.update": "Mise à Jour",
    "common.today": "Aujourd'hui",
    "common.yesterday": "Hier",
    "common.days.ago": "Il y a 3 jours"
  },
  
  es: {
    // Header
    "site.title": "Minecraft Hub",
    "nav.downloads": "Descargas",
    "nav.versions": "Versiones",
    "nav.support": "Soporte",
    "button.download.now": "Descargar Ahora",
    
    // Hero
    "hero.title": "Descarga",
    "hero.title.highlight": "Minecraft",
    "hero.title.end": "Gratis",
    "hero.subtitle": "Disfruta de las últimas versiones de Minecraft con actualizaciones continuas y herramientas exclusivas",
    "hero.stats.downloads": "+10M Descargas",
    "hero.stats.rating": "Calificación 5 Estrellas",
    "hero.stats.community": "Comunidad Global",
    "hero.stats.updates": "Actualizaciones Rápidas",
    "hero.button.java": "Descargar Minecraft Java",
    "hero.button.bedrock": "Descargar Bedrock Edition",
    
    // Downloads
    "downloads.title": "Versiones",
    "downloads.title.highlight": "Disponibles",
    "downloads.title.end": "",
    "downloads.subtitle": "Elige la versión correcta para tu dispositivo y disfruta de la experiencia óptima de Minecraft",
    
    // Versions
    "version.java.title": "Minecraft Java Edition",
    "version.java.description": "La versión original y más completa de Minecraft con posibilidades ilimitadas de mods y complementos.",
    "version.bedrock.title": "Minecraft Bedrock",
    "version.bedrock.description": "Versión optimizada para rendimiento con juego multiplataforma en todos los dispositivos con amigos.",
    "version.mobile.title": "Minecraft Pocket Edition",
    "version.mobile.description": "La versión móvil portátil que te permite jugar en cualquier lugar y momento con controles mejorados.",
    
    // Features
    "features.title": "¿Por Qué Elegir",
    "features.title.highlight": "Nuestro Sitio?",
    "feature.speed.title": "Descarga Rápida",
    "feature.speed.desc": "Descargas de alta velocidad desde servidores optimizados",
    "feature.safe.title": "Seguro y Confiable",
    "feature.safe.desc": "Todos los archivos escaneados y 100% garantizados",
    "feature.updates.title": "Actualizaciones Regulares",
    "feature.updates.desc": "Últimas versiones disponibles al momento de lanzamiento",
    "feature.support.title": "Soporte 24/7",
    "feature.support.desc": "Soporte técnico disponible las 24 horas",
    
    // Common
    "common.most.popular": "Más Popular",
    "common.free.download": "Descarga Gratuita",
    "common.safe.guaranteed": "100% Seguro y Garantizado",
    "common.no.ads": "Sin Anuncios Molestos",
    "common.high.speed": "Descarga de Alta Velocidad",
    "common.downloads": "Descargas",
    "common.size": "Tamaño",
    "common.update": "Actualizado",
    "common.today": "Hoy",
    "common.yesterday": "Ayer",
    "common.days.ago": "Hace 3 días"
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("ar");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const dir: "rtl" | "ltr" = language === "ar" ? "rtl" : "ltr";

  const value = {
    language,
    setLanguage,
    t,
    dir
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
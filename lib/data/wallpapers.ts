// Centralized wallpaper configuration for the Minecraft Museum

export const WALLPAPERS = {
  // General/Default wallpapers
  bedrockEdition: '/minecraft/wallpapers/wallpaper_minecraft_bedrock_edition_2058x1440.png',
  javaEdition: '/minecraft/wallpapers/wallpaper_minecraft_java_edition_2560x1440.png',
  pcBundle: '/minecraft/wallpapers/wallpaper_minecraft_pc_bundle_2560x1440.png',
  
  // Themed wallpapers
  netherUpdate: '/minecraft/wallpapers/wallpaper_minecraft_nether_update_2560x1440.png',
  wildUpdate: '/minecraft/wallpapers/wallpaper_minecraft_wild_update_2560x1440.png',
  buzzybees: '/minecraft/wallpapers/wallpaper_minecraft_buzzybees_2560x1440.png',
  adventure: '/minecraft/wallpapers/wallpaper_minecraft_adventure_Adventure_2058x1440.png',
  mangroves: '/minecraft/wallpapers/wallpaper_minecraft_mangroves_2560x1440.png',
  warden: '/minecraft/wallpapers/wallpaper_minecraft_warden_2560x1440.png',
  
  // Seasonal wallpapers
  springDrop: '/minecraft/wallpapers/MCV_SpringDrop_DotNet_Downloadable_Wallpaper_2560x1440.png',
  summerDrop: '/minecraft/wallpapers/MCV_SummerDrop_Hero_DotNet_Downloadable_Wallpaper_r2560x1440.png',
  fallDrop: '/minecraft/wallpapers/MCV_FallDrop_NetDownloadableWallpaper_2560x1440.png',
  fallDropAlt: '/minecraft/wallpapers/Minecraft_Fall_Drop_Campaign_Key_Art_DotNet_Downloadable_Wallpaper_2560x1440.png',
} as const;

export type WallpaperKey = keyof typeof WALLPAPERS;

// Page-specific wallpaper assignments
export const PAGE_WALLPAPERS = {
  home: WALLPAPERS.bedrockEdition,
  about: WALLPAPERS.adventure,
  exhibits: WALLPAPERS.wildUpdate,
  events: WALLPAPERS.buzzybees,
  tickets: WALLPAPERS.pcBundle,
  shop: WALLPAPERS.springDrop,
  visit: WALLPAPERS.javaEdition,
  contact: WALLPAPERS.mangroves,
} as const;

// Exhibit category to wallpaper mapping
export type ExhibitCategory = 'survival' | 'redstone' | 'exploration' | 'community' | 'history' | 'creative';

export const EXHIBIT_CATEGORY_WALLPAPERS: Record<ExhibitCategory, string> = {
  survival: WALLPAPERS.wildUpdate,
  redstone: WALLPAPERS.pcBundle,
  exploration: WALLPAPERS.netherUpdate,
  community: WALLPAPERS.buzzybees,
  history: WALLPAPERS.javaEdition,
  creative: WALLPAPERS.mangroves,
};

// Special exhibit overrides based on exhibit slug
export const EXHIBIT_SLUG_WALLPAPERS: Record<string, string> = {
  'nether-chronicles': WALLPAPERS.netherUpdate,
  'the-end-gallery': WALLPAPERS.warden,
  'herobrines-vault': WALLPAPERS.warden,
  'the-first-night': WALLPAPERS.wildUpdate,
  'mob-hall-of-fame': WALLPAPERS.buzzybees,
  'redstone-revolution': WALLPAPERS.pcBundle,
  'sound-of-blocks': WALLPAPERS.mangroves,
  'speedrunners-sanctum': WALLPAPERS.adventure,
  'community-legends': WALLPAPERS.buzzybees,
  'mining-through-time': WALLPAPERS.javaEdition,
  'block-evolution': WALLPAPERS.javaEdition,
  'the-marketplace': WALLPAPERS.springDrop,
};

/**
 * Get the appropriate wallpaper for an exhibit based on slug or category
 */
export function getExhibitWallpaper(slug: string, category: ExhibitCategory): string {
  // Check for specific slug override first
  if (EXHIBIT_SLUG_WALLPAPERS[slug]) {
    return EXHIBIT_SLUG_WALLPAPERS[slug];
  }
  // Fall back to category-based wallpaper
  return EXHIBIT_CATEGORY_WALLPAPERS[category];
}

/**
 * Get a seasonal wallpaper based on current month
 */
export function getSeasonalWallpaper(): string {
  const month = new Date().getMonth();
  
  // Spring: March-May (2-4)
  if (month >= 2 && month <= 4) {
    return WALLPAPERS.springDrop;
  }
  // Summer: June-August (5-7)
  if (month >= 5 && month <= 7) {
    return WALLPAPERS.summerDrop;
  }
  // Fall: September-November (8-10)
  if (month >= 8 && month <= 10) {
    return WALLPAPERS.fallDrop;
  }
  // Winter: December-February (11, 0, 1)
  return WALLPAPERS.bedrockEdition;
}


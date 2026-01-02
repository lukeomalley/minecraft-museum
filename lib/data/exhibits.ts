export interface Exhibit {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: 'survival' | 'redstone' | 'exploration' | 'community' | 'history' | 'creative';
  difficulty: 'all-ages' | 'beginner' | 'intermediate' | 'expert';
  duration: string;
  isNew: boolean;
  isFeatured: boolean;
  color: string;
  icon: string;
  image: string;
  experiences: string[];
  facts: string[];
  location: string;
  floor: number;
}

export const exhibits: Exhibit[] = [
  {
    id: '1',
    slug: 'the-first-night',
    name: 'The First Night',
    tagline: 'Survive your first night all over again',
    description: 'An immersive recreation of your first survival night - punch trees, build shelter, and survive until dawn.',
    longDescription: `Step into a life-sized recreation of a Minecraft world as night falls. This groundbreaking exhibit puts you in the shoes of every player who has ever asked "What do I do when it gets dark?"

    Using projection mapping, animatronics, and real-time environmental controls, you'll experience the rising tension as the sun sets, the sounds of zombies groaning in the distance, and the desperate scramble to build a shelter before the monsters spawn.

    Whether you're a veteran who remembers their actual first night or a newcomer experiencing it for the first time, The First Night captures the magic and terror that made Minecraft legendary.`,
    category: 'survival',
    difficulty: 'all-ages',
    duration: '20 min',
    isNew: false,
    isFeatured: true,
    color: '#5cb85c',
    icon: '🌙',
    image: '/minecraft/wallpapers/MCV_FallDrop_NetDownloadableWallpaper_2560x1440.png',
    experiences: [
      'Punch actual foam trees to gather wood',
      'Build a shelter with life-sized blocks',
      'Experience a simulated Minecraft night cycle',
      'Hear zombie groans and skeleton rattles',
      'Craft your first wooden pickaxe'
    ],
    facts: [
      'The night cycle lasts 7 real minutes in Minecraft',
      'Zombies can break down wooden doors on Hard difficulty',
      'The first night has inspired countless memes and stories'
    ],
    location: 'Ground Floor - Survival Wing',
    floor: 1
  },
  {
    id: '2',
    slug: 'redstone-revolution',
    name: 'Redstone Revolution',
    tagline: 'Where engineering meets creativity',
    description: 'Interactive circuit displays featuring working doors, calculators, music machines, and even a functional computer.',
    longDescription: `Welcome to the engineering heart of Minecraft. The Redstone Revolution exhibit showcases the incredible potential of Minecraft's electrical system through working demonstrations and hands-on activities.

    Marvel at a room-sized calculator that actually computes, listen to note block compositions that rival classical music, and try your hand at building your own redstone contraption.

    From simple doors to complex computing machines, this exhibit proves that Minecraft isn't just a game - it's a platform for learning real engineering and computer science concepts.`,
    category: 'redstone',
    difficulty: 'intermediate',
    duration: '45 min',
    isNew: false,
    isFeatured: false,
    color: '#f44336',
    icon: '⚡',
    image: '/minecraft/minecraft-dungeons-keyart.jpg',
    experiences: [
      'Build working redstone circuits',
      'See a functional in-game computer',
      'Create music with note blocks',
      'Open massive piston doors',
      'Learn Boolean logic through gameplay'
    ],
    facts: [
      'Redstone was added in Alpha 1.0.1 in 2010',
      'Players have built working CPUs in Minecraft',
      'The longest redstone signal travels 15 blocks'
    ],
    location: 'Second Floor - Innovation Hall',
    floor: 2
  },
  {
    id: '3',
    slug: 'nether-chronicles',
    name: 'The Nether Chronicles',
    tagline: 'Journey through the underworld\'s evolution',
    description: 'Walk through the Nether\'s complete transformation from a barren hellscape to a diverse dimension.',
    longDescription: `The Nether has undergone one of the most dramatic transformations in Minecraft history. This exhibit takes you on a chronological journey through every version of this fiery dimension.

    Starting in the original empty hellscape of 2010, you'll walk through portals into increasingly detailed recreations of the Nether as it evolved. Experience the addition of Nether Fortresses, meet the Wither for the first time, and finally enter the stunning biomes of the 1.16 Nether Update.

    Feel the heat (literally - we have climate-controlled zones), hear the ambient sounds of each era, and learn how community feedback shaped this beloved dimension.`,
    category: 'exploration',
    difficulty: 'all-ages',
    duration: '30 min',
    isNew: false,
    isFeatured: false,
    color: '#b71c1c',
    icon: '🔥',
    image: '/minecraft/wallpapers/wallpaper_minecraft_nether_update_2560x1440.png',
    experiences: [
      'Walk through a real Nether portal',
      'Experience heat effects in climate-controlled zones',
      'Meet animatronic Ghasts and Piglins',
      'Mine ancient debris in the simulation',
      'Collect Netherite artifacts'
    ],
    facts: [
      'The Nether was originally called "The Slip"',
      'Beds explode in the Nether due to dimensional instability',
      'The 1.16 update added 4 new biomes to the Nether'
    ],
    location: 'Lower Level - Dimension Wing',
    floor: -1
  },
  {
    id: '4',
    slug: 'mob-hall-of-fame',
    name: 'Mob Hall of Fame',
    tagline: 'Meet the creatures that made Minecraft unforgettable',
    description: 'Life-size animatronic mobs with their complete history, sounds, and behaviors on full display.',
    longDescription: `From the iconic Creeper (born from a coding accident) to the terrifying Warden, every mob in Minecraft history has a story to tell. The Mob Hall of Fame brings these creatures to life with stunning animatronics and interactive displays.

    Each mob station features life-size figures, original concept art, developer commentary, and the ability to hear every sound they make. Learn why the Enderman can't touch water, discover the Creeper's explosive origin story, and find out which mob was inspired by a developer's cat.

    Special sections cover mob behavior, spawning mechanics, and the community's most creative mob farms.`,
    category: 'history',
    difficulty: 'all-ages',
    duration: '40 min',
    isNew: false,
    isFeatured: true,
    color: '#4fc3f7',
    icon: '👾',
    image: '/minecraft/creeper.webp',
    experiences: [
      'Pose with life-size Creeper statues',
      'Hear authentic mob sounds in surround sound',
      'See original concept art and designs',
      'Learn mob AI and spawning mechanics',
      'Interactive mob behavior simulator'
    ],
    facts: [
      'The Creeper was a failed pig model',
      'Endermen are 3 blocks tall',
      'The Warden is the strongest mob in the game'
    ],
    location: 'Ground Floor - Main Hall',
    floor: 1
  },
  {
    id: '5',
    slug: 'speedrunners-sanctum',
    name: 'Speedrunner\'s Sanctum',
    tagline: 'Where legends race against time',
    description: 'Famous speedrun moments recreated, world record displays, and your chance to try the parkour course.',
    longDescription: `Witness the evolution of Minecraft speedrunning from casual attempts to the hyper-optimized runs of today. This exhibit celebrates the players who have pushed the game to its absolute limits.

    See recreations of famous world-record moments, watch analysis breakdowns of optimal strategies, and try your hand at our custom parkour course designed by speedrun champions.

    The centerpiece is our live leaderboard where visitors can attempt simplified speedrun challenges and compete for museum records. Will you set a new personal best?`,
    category: 'community',
    difficulty: 'expert',
    duration: '35 min',
    isNew: true,
    isFeatured: false,
    color: '#ffb300',
    icon: '⏱️',
    image: '/minecraft/wallpapers/wallpaper_minecraft_adventure_Adventure_2058x1440.png',
    experiences: [
      'Attempt our visitor speedrun challenge',
      'Watch world record breakdowns',
      'Try the museum parkour course',
      'Learn speedrun strategies and glitches',
      'Meet speedrunners at special events'
    ],
    facts: [
      'The current world record is under 10 minutes',
      'Dream\'s speedrun controversy sparked huge debate',
      'Speedrunners use F3 coordinates for navigation'
    ],
    location: 'Third Floor - Champions Gallery',
    floor: 3
  },
  {
    id: '6',
    slug: 'the-end-gallery',
    name: 'The End Gallery',
    tagline: 'Journey to slay the dragon',
    description: 'A complete journey through the End dimension with projection-mapped dragon battle experience.',
    longDescription: `The End represents Minecraft's ultimate challenge - and our most ambitious exhibit. Enter through an End Portal recreation and find yourself floating among obsidian towers and the void below.

    The highlight is our dragon battle experience, using 360-degree projection mapping to simulate fighting the Ender Dragon. Dodge fireball attacks, destroy End Crystals, and deliver the final blow in this immersive recreation.

    Beyond the dragon, explore the End Cities, see Shulkers in action, and learn about the mysterious End Poem that awaits victorious players.`,
    category: 'exploration',
    difficulty: 'intermediate',
    duration: '25 min',
    isNew: false,
    isFeatured: true,
    color: '#9b59b6',
    icon: '🐉',
    image: '/minecraft/wallpapers/wallpaper_minecraft_warden_2560x1440.png',
    experiences: [
      'Enter through a real End Portal',
      '360-degree dragon battle simulation',
      'Collect dragon breath souvenirs',
      'Explore an End City recreation',
      'Read the complete End Poem'
    ],
    facts: [
      'The Ender Dragon is named Jean',
      'The End was added in Beta 1.9',
      'The End Poem was written by Julian Gough'
    ],
    location: 'Lower Level - Dimension Wing',
    floor: -1
  },
  {
    id: '7',
    slug: 'block-evolution',
    name: 'Block Evolution',
    tagline: 'Every block tells a story',
    description: 'Every block ever added to Minecraft, organized chronologically with texture comparisons and history.',
    longDescription: `Minecraft has grown from 30 blocks to over 800. Block Evolution documents this incredible expansion through an interactive timeline that lets you explore every addition to the game.

    Touch screens allow you to compare old and new textures, see blocks in their natural habitats, and learn the community stories behind each addition. Discover why Copper was so requested, how the texture update divided players, and which blocks were removed forever.

    A special section covers JAPPA's texture overhaul and includes side-by-side comparisons of classic and modern textures.`,
    category: 'history',
    difficulty: 'all-ages',
    duration: '30 min',
    isNew: false,
    isFeatured: false,
    color: '#8B4513',
    icon: '🧱',
    image: '/minecraft/minecraft-grass.png',
    experiences: [
      'Interactive block timeline',
      'Compare classic and modern textures',
      'Vote for your favorite blocks',
      'See removed and unreleased blocks',
      'Touch actual block replicas'
    ],
    facts: [
      'Grass was one of the original 2 blocks',
      'There are over 800 unique blocks now',
      'The texture update happened in 2018'
    ],
    location: 'Second Floor - Archive Wing',
    floor: 2
  },
  {
    id: '8',
    slug: 'community-legends',
    name: 'Community Legends',
    tagline: 'The builds that inspired millions',
    description: 'Scale recreations of famous community builds including Hogwarts, Middle Earth, and more.',
    longDescription: `The Minecraft community has created wonders that rival real-world architecture. Community Legends showcases the most ambitious and beloved builds in Minecraft history.

    Walk through scale models of the WesterosCraft King's Landing, see sections of the 1:1 scale Earth project, and explore recreations of iconic builds that have garnered billions of views.

    Each display includes builder interviews, time-lapse footage of construction, and the stories of the teams who spent years creating these masterpieces.`,
    category: 'community',
    difficulty: 'all-ages',
    duration: '35 min',
    isNew: false,
    isFeatured: false,
    color: '#2ecc71',
    icon: '🏰',
    image: '/minecraft/The-Blockworks (1).png',
    experiences: [
      'Walk through scale model builds',
      'Watch construction time-lapses',
      'Meet builders at special events',
      'Vote on community favorites',
      'Submit your own build for display'
    ],
    facts: [
      'WesterosCraft took over 10 years to build',
      'The 1:1 Earth project is still ongoing',
      'Some builds have over 10 million downloads'
    ],
    location: 'Third Floor - Community Hall',
    floor: 3
  },
  {
    id: '9',
    slug: 'mining-through-time',
    name: 'Mining Through Time',
    tagline: 'From Classic to modern, play them all',
    description: 'Playable stations featuring every major Minecraft version from Classic to the latest release.',
    longDescription: `Experience Minecraft as it was - and as it has become. Mining Through Time features playable stations running authentic versions of Minecraft from every major era.

    Start with the browser-based Classic from 2009, work through Alpha and Beta, and see how the game transformed with each major update. Each station includes version notes, community reactions from the time, and the most significant changes.

    Our archive includes some truly rare versions, including unreleased builds and exclusive previews that shaped the game's development.`,
    category: 'history',
    difficulty: 'all-ages',
    duration: '60 min',
    isNew: false,
    isFeatured: false,
    color: '#607d8b',
    icon: '⛏️',
    image: '/minecraft/wallpapers/wallpaper_minecraft_java_edition_2560x1440.png',
    experiences: [
      'Play every major Minecraft version',
      'Experience removed features',
      'Compare old and new gameplay',
      'See original launcher designs',
      'Read community reactions from each era'
    ],
    facts: [
      'Minecraft Classic was released in May 2009',
      'Beta 1.8 was called the Adventure Update',
      'The game officially released on 11/11/11'
    ],
    location: 'Second Floor - Archive Wing',
    floor: 2
  },
  {
    id: '10',
    slug: 'sound-of-blocks',
    name: 'The Sound of Blocks',
    tagline: 'Immerse yourself in C418\'s masterpiece',
    description: 'An immersive listening room dedicated to C418\'s iconic soundtrack and Minecraft\'s sound design.',
    longDescription: `Close your eyes and let the music transport you back to your first Minecraft world. The Sound of Blocks is a meditative space dedicated to the audio that made Minecraft unforgettable.

    Our listening pods feature the complete C418 soundtrack in spatial audio, allowing you to experience familiar tracks in ways you've never heard before. Learn about the creation of iconic sounds, from the "oof" damage sound to the cave ambience that haunts your dreams.

    Special exhibits cover Lena Raine's additions to the soundtrack and the technical evolution of Minecraft's audio engine.`,
    category: 'creative',
    difficulty: 'all-ages',
    duration: '20 min',
    isNew: false,
    isFeatured: false,
    color: '#e91e63',
    icon: '🎵',
    image: '/minecraft/wallpapers/wallpaper_minecraft_buzzybees_2560x1440.png',
    experiences: [
      'Spatial audio listening pods',
      'Create your own note block songs',
      'Learn sound design secrets',
      'Hear rare unused tracks',
      'Meet C418 at special events'
    ],
    facts: [
      'C418 composed the soundtrack alone',
      '"Sweden" is the most iconic track',
      'The cave sounds were designed to be unsettling'
    ],
    location: 'Ground Floor - Creative Wing',
    floor: 1
  },
  {
    id: '11',
    slug: 'herobrines-vault',
    name: 'Herobrine\'s Vault',
    tagline: 'Explore the myths and legends',
    description: 'A creepy exhibit dedicated to Minecraft myths, legends, and the mysterious Herobrine.',
    longDescription: `In the darkest corner of the museum lies Herobrine's Vault - a tribute to the myths, legends, and creepypastas that emerged from Minecraft's community.

    Learn the true origin of Herobrine, explore recreations of famous "sightings," and discover other legends like Entity 303 and Null. The exhibit is designed to be appropriately spooky (but family-friendly), with flickering lights, mysterious sounds, and plenty of jump-scare-free scares.

    A special section covers how gaming myths spread and evolve, making this both entertaining and educational.`,
    category: 'community',
    difficulty: 'all-ages',
    duration: '15 min',
    isNew: true,
    isFeatured: false,
    color: '#424242',
    icon: '👁️',
    image: '/minecraft/Enderman.webp',
    experiences: [
      'Walk through Herobrine "sightings"',
      'Learn the truth behind the legends',
      'Spooky (but safe) atmosphere',
      'Create your own Minecraft myth',
      'See original creepypasta sources'
    ],
    facts: [
      'Herobrine originated from a 4chan post',
      '"Removed Herobrine" appears in every changelog',
      'Notch\'s brother does not exist'
    ],
    location: 'Lower Level - Hidden Corridor',
    floor: -1
  },
  {
    id: '12',
    slug: 'the-marketplace',
    name: 'The Marketplace',
    tagline: 'Mods, servers, and the creator economy',
    description: 'The history of modding, servers, and how Minecraft\'s community created an entire economy.',
    longDescription: `Minecraft's true power lies in its community. The Marketplace exhibit explores how players transformed a simple sandbox game into a platform for creativity, entrepreneurship, and connection.

    From the earliest mods to massive server networks, discover how the community extended Minecraft far beyond Mojang's vision. See the evolution of the Marketplace, learn about famous servers like Hypixel and Hermitcraft, and explore how content creators built careers.

    Interactive displays let you try classic mods and see how the modding community influenced official game development.`,
    category: 'community',
    difficulty: 'intermediate',
    duration: '40 min',
    isNew: false,
    isFeatured: false,
    color: '#00bcd4',
    icon: '🛒',
    image: '/minecraft/marketplace-tile.jpg',
    experiences: [
      'Try classic mods on playable stations',
      'See server evolution timeline',
      'Learn about content creation',
      'Explore the Marketplace history',
      'Meet creators at special events'
    ],
    facts: [
      'Hypixel has served 24+ million unique players',
      'Some mods have more downloads than games',
      'The Marketplace launched in 2017'
    ],
    location: 'Third Floor - Community Hall',
    floor: 3
  }
];

export const getExhibitBySlug = (slug: string): Exhibit | undefined => {
  return exhibits.find(exhibit => exhibit.slug === slug);
};

export const getFeaturedExhibits = (): Exhibit[] => {
  return exhibits.filter(exhibit => exhibit.isFeatured);
};

export const getExhibitsByCategory = (category: Exhibit['category']): Exhibit[] => {
  return exhibits.filter(exhibit => exhibit.category === category);
};

export const getNewExhibits = (): Exhibit[] => {
  return exhibits.filter(exhibit => exhibit.isNew);
};


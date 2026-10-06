export interface PartnerItem {
  id: string;
  name: string;
  category: "DSP" | "Video & Social" | "High-Fidelity & Specialist";
  territory: string;
  reach: string;
  description: string;
}

export const PARTNERS: PartnerItem[] = [
  {
    id: "spotify",
    name: "Spotify",
    category: "DSP",
    territory: "Global (180+ Markets)",
    reach: "600M+ Monthly Active Users",
    description: "The global leader in audio streaming with industry-standard editorial playlists and direct discovery algorithms."
  },
  {
    id: "apple-music",
    name: "Apple Music",
    category: "DSP",
    territory: "Global (167 Markets)",
    reach: "100M+ Songs in Spatial Audio",
    description: "High-fidelity lossless streaming integrated seamlessly across Apple's hardware and cultural ecosystem."
  },
  {
    id: "amazon-music",
    name: "Amazon Music",
    category: "DSP",
    territory: "Global (50+ Markets)",
    reach: "Prime & Unlimited Network",
    description: "Massive reach driven by smart speaker integration, voice command curation, and global retail synergy."
  },
  {
    id: "deezer",
    name: "Deezer",
    category: "DSP",
    territory: "Global (185+ Markets)",
    reach: "Europe & Latin America Focus",
    description: "Artist-centric royalty model champion with strong roots across Europe, France, and Latin America."
  },
  {
    id: "tiktok-music",
    name: "TikTok Music",
    category: "Video & Social",
    territory: "Global & ByteDance Ecosystem",
    reach: "1B+ Viral Audiences",
    description: "The epicenter of viral discovery, sound licensing, and video-first music trends defining modern chart hits."
  },
  {
    id: "tidal",
    name: "Tidal",
    category: "High-Fidelity & Specialist",
    territory: "Global (60+ Markets)",
    reach: "Audiophile & Hi-Res FLAC",
    description: "Artist-first philosophy with master quality sound, fan payouts, and dedicated curatorial spotlights."
  },
  {
    id: "youtube-music",
    name: "YouTube Music",
    category: "Video & Social",
    territory: "Global (100+ Markets)",
    reach: "2B+ Video & Audio Streamers",
    description: "Unmatched combination of visual music videos, official tracks, live performances, and Shorts monetization."
  },
  {
    id: "meta",
    name: "Instagram & Facebook Music",
    category: "Video & Social",
    territory: "Global",
    reach: "3B+ Active Social Creators",
    description: "Direct library integration for Instagram Reels, Stories, and Facebook Video content worldwide."
  },
  {
    id: "soundcloud",
    name: "SoundCloud",
    category: "High-Fidelity & Specialist",
    territory: "Global",
    reach: "Underground & Creator Community",
    description: "The premier launchpad for underground movements, remix culture, and direct fan-to-artist engagement."
  },
  {
    id: "pandora",
    name: "Pandora",
    category: "DSP",
    territory: "North America",
    reach: "SiriusXM Media Network",
    description: "Pioneer in Music Genome Project radio algorithms and personalized streaming across the United States."
  },
  {
    id: "beatport",
    name: "Beatport",
    category: "High-Fidelity & Specialist",
    territory: "Global DJ Ecosystem",
    reach: "World's Top DJs & Clubs",
    description: "The undisputed electronic and club music standard for DJs, producers, and electronic tastemakers."
  },
  {
    id: "audiomack",
    name: "Audiomack",
    category: "High-Fidelity & Specialist",
    territory: "US, Africa & Latin America",
    reach: "30M+ Monthly Listeners",
    description: "Fast-growing streaming and discovery platform focused on hip-hop, Afrobeats, and emerging urban scenes."
  }
];

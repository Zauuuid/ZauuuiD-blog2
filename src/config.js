import { Linkedin, Github, Mail, Instagram } from 'lucide-react';
import { DiscordIcon, HackTheBoxIcon, FlagYardIcon } from '@/components/ui/CustomIcons';

export const siteConfig = {
    // ============================================
    // Profile Configuration (Pulled from hidden .env)
    // ============================================
    name: import.meta.env.VITE_NAME || "ZauuuiD",
    avatarUrl: import.meta.env.BASE_URL + "avatar.png",
    bio: import.meta.env.VITE_BIO || "Red Team Enthusiast | Vulnerability Researcher",

    // ============================================
    // Badges / Titles
    // ============================================
    badges: [
        import.meta.env.VITE_BADGE_1,
        import.meta.env.VITE_BADGE_2
    ].filter(Boolean),

    // ============================================
    // Social Links
    // ============================================
    socials: [
        { icon: Linkedin, href: import.meta.env.VITE_LINKEDIN, label: 'LinkedIn' },
        { icon: Github, href: import.meta.env.VITE_GITHUB, label: 'GitHub' },
        { icon: Mail, href: import.meta.env.VITE_EMAIL, label: 'Email' },
        { icon: Instagram, href: import.meta.env.VITE_INSTAGRAM, label: 'Instagram' },
        { icon: DiscordIcon, href: import.meta.env.VITE_DISCORD, label: 'Discord' },
        { icon: HackTheBoxIcon, href: import.meta.env.VITE_HACKTHEBOX, label: 'HackTheBox' },
        { icon: FlagYardIcon, href: import.meta.env.VITE_FLAGYARD, label: 'FlagYard' },
    ].filter(link => link.href && link.href !== ""),
};

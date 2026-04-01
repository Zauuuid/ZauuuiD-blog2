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
        { icon: Linkedin, href: "https://www.linkedin.com/in/ZauuuiD-mulla/", label: 'LinkedIn' },
        { icon: Github, href: "https://github.com/ZauuuiD", label: 'GitHub' },
        { icon: Mail, href: "mailto:rshashmanab00@gmail.com", label: 'Email' },
        { icon: Instagram, href: "https://instagram.com/8ktg", label: 'Instagram' },
        { icon: DiscordIcon, href: "https://discord.com/users/429005656457084956", label: 'Discord' },
        { icon: HackTheBoxIcon, href: "https://app.hackthebox.com/users/2096634", label: 'HackTheBox' },
        { icon: FlagYardIcon, href: "https://flagyard.com/profile/zauuuid", label: 'FlagYard' },
    ].filter(link => link.href && link.href !== ""),
};

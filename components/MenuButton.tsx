// components/MenuButton.tsx
import { useState } from 'react';
import { 
  Check, 
  User, 
  Briefcase, 
  Broom, 
  Users, 
  Globe, 
  Shield, 
  EyeOff, 
  Plus, 
  Video, 
  UsersSlash,
  Tool,
  UserCog 
} from 'lucide-react';

interface MenuButtonProps {
  icon: string;
  label: string;
  links: string[];
  className?: string;
}

const iconMap: Record<string, any> = {
  'check': Check,
  'user': User,
  'briefcase': Briefcase,
  'broom': Broom,
  'users': Users,
  'globe': Globe,
  'shield': Shield,
  'eye-off': EyeOff,
  'plus': Plus,
  'video': Video,
  'users-slash': UsersSlash,
  'tool': Tool,
  'user-cog': UserCog
};

const MenuButton = ({ icon, label, links = [], className = '' }: MenuButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const Icon = iconMap[icon];

  const openMultipleLinks = () => {
    const originalBeforeUnload = window.onbeforeunload;
    window.onbeforeunload = null;
    
    links.forEach((link) => {
      if (link && link.trim()) {
        const win = window.open(link.trim(), '_blank');
        if (win) {
          win.opener = null;
        }
      }
    });
    
    setTimeout(() => {
      window.onbeforeunload = originalBeforeUnload;
    }, 100);
  };

  const handleClick = () => {
    setIsLoading(true);
    try {
      openMultipleLinks();
    } catch (error) {
      console.error('Error opening links:', error);
    }
    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className={`
        w-full px-4 py-2 
        flex items-center justify-center gap-2
        text-white font-medium rounded-lg
        transition-colors duration-200
        ${isLoading ? 'bg-blue-400' : 'bg-blue-500 hover:bg-blue-600'}
        ${className}
      `}
    >
      {Icon && <Icon className="w-4 h-4" />}
      <span className="text-sm">{label}</span>
    </button>
  );
};

export default MenuButton;
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface DesignerBadgeProps {
  image: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
}

export function DesignerBadge({ image, name, size = 'sm' }: DesignerBadgeProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  return (
    <Avatar className={`${sizeClasses[size]} ring-2 ring-white`}>
      <AvatarImage src={image} alt={name} />
      <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
}

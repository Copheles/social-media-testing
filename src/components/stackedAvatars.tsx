import React from "react";

interface StackedAvatarsProps {
  avatars: string[]; 
  maxAvatars?: number; 
  avatarSize?: number; 
  overlap?: number; 
}

const StackedAvatars: React.FC<StackedAvatarsProps> = ({
  avatars,
  maxAvatars = 2,
  avatarSize = 28,
  overlap = 12,
}) => {
  // Limit avatars to display
  const visibleAvatars = avatars.slice(0, maxAvatars);
  const remainingAvatars = avatars.length - maxAvatars;

  return (
    <div className="flex items-center">
      {visibleAvatars.map((avatar, index) => (
        <div
          key={index}
          className="rounded-full border-2 border-white"
          style={{
            width: avatarSize,
            height: avatarSize,
            marginLeft: index === 0 ? 0 : -overlap, 
            zIndex: index, 
          }}
        >
          <img
            src={avatar}
            alt={`Avatar ${index + 1}`}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      ))}
      {remainingAvatars > 0 && (
        <div
          className="flex items-center justify-center rounded-full bg-[#3975b1]"
          style={{
            width: avatarSize,
            height: avatarSize,
            marginLeft: -overlap,
            zIndex: maxAvatars,
          }}
        >
          <span className="text-xs text-white">+{remainingAvatars}</span>
        </div>
      )}
    </div>
  );
};

export default StackedAvatars;
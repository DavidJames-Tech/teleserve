import React from 'react';

interface ProfileCardProps {
  name: string;
  jobTitle: string;
  rating: number;
  latestComment: string;
  imageUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  jobTitle,
  rating,
  latestComment,
  imageUrl,
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img
          className="w-full h-56 object-cover"
          src={imageUrl}
          alt={`${name}'s profile`}
        />
        <div className="absolute top-0 left-0 p-2">
          <span className="bg-indigo-500 text-white text-xs px-2 py-1 rounded-full">
            {rating.toFixed(1)}
          </span>
        </div>
      </div>
      <div className="py-4 px-6">
        <h1 className="text-2xl font-semibold text-gray-800">{name}</h1>
        <p className="text-sm text-gray-600">{jobTitle}</p>
        <p className="text-gray-700 mt-2">{latestComment}</p>
      </div>
    </div>
  );
};

export default ProfileCard;

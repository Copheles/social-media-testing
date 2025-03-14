const Avatar = ({ avatar }: { avatar: string }) => {
  return (
    <div className="relative w-12 h-12">
      <img src={`/images/${avatar}`} className="w-12 h-12 rounded-full" />
      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
    </div>
  );
};

export default Avatar;

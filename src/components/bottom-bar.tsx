interface Props {
  isLike: boolean;
  likes?: number;
  comment?: number;
  up?: number;
  trends?: number;
}

const BottomBar = ({ isLike, likes, comment, up, trends }: Props) => {
  return (
    <div className="flex gap-3">
      <div className="w-12 h-6"></div>
      <div className="flex flex-1 gap-7">
        <div className="flex gap-1 items-center cursor-pointer">
          {isLike ? (
            <>
              <img src="/svgs/fillheart.svg" alt="" />
              <span className="text-sm font-normal text-[#FF4A78]">
                {likes}
              </span>
            </>
          ) : (
            <>
              <img src="/svgs/heart.svg" alt="" />
              <span className="text-sm font-normal">{likes}</span>
            </>
          )}
        </div>
        <div className="flex gap-1 items-center cursor-pointer">
          <img src="/svgs/chatcenter.svg" alt="" />
          <span className="text-sm font-normal text-[#2C3E50]">{comment === 0 ? null : comment}</span>
        </div>
        <div className="flex gap-1 items-center cursor-pointer">
          <img src="/svgs/handpointing.svg" alt="" />
          <span className="text-sm font-normal text-[#2C3E50]">{up}</span>
        </div>
        <div className="flex gap-1 items-center cursor-pointer">
          <img src="/svgs/trendup.svg" alt="" />
          <span className="text-sm font-normal text-[#2C3E50]">{trends}</span>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;

const Article = () => {
  return (
    <div className="flex justify-between border border-[#ECF1F4] rounded-lg">
      {/* Text Container (Larger) */}
      <div className="px-4 py-4 flex flex-col gap-2 flex-5">
        <div className="flex items-center gap-1">
          <div className="w-[13px] h-[13px]">
            <img src="/svgs/note.svg" alt="" />
          </div>
          <p className="text-[16px] font-normal text-[#2C3E50]">Article</p>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="text-xl font-medium">The Art of Simple Living</h6>
          {/* Text with 3-line truncation */}
          <p className="text-[16px] text-[#7E7E8D] line-clamp-3">
            Explore how simplifying your surroundings and mindset can lead to a
            more fulfilling life. Learn practical steps to declutter your space,
            focus on what truly matters, and embrace mindfulness in your daily
            routine. Discover the joy of living with less and finding peace in
            simplicity.
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <img
            src="/images/user1.png"
            className="w-6 h-6 rounded-full"
            alt="User"
          />
          <h6 className="text-[16px] text-[#2C3E50] font-medium">Jane Doe</h6>
          {/* dot */}
          <div className="w-[2px] h-[2px] rounded-full bg-gray-500"></div>
          <p className="text-[16px] text-[#7E7E8D]">3m read</p>
        </div>
      </div>
      {/* Image Container (Smaller) */}
      <div className="flex-4 flex items-center justify-center">
        <img
          src="/images/flower.png"
          alt="Flower"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Article;

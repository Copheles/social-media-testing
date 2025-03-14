import Avatar from "./avatar";

const CreatePost = () => {
  return (
    <div className="p-[20px] w-full border-b border-[#ECF1F4]">
      <div className="flex flex-col gap-4">
        <div className="flex gap-3">
          <Avatar avatar="user1.png" />
          <div className="flex flex-col gap-2">
            <div>
              <div className="flex items-center gap-1">
                <h6 className="text-xl font-[500]">John Doe</h6>

                <img src="/svgs/bluemark.svg" />
              </div>
              <p className="text-lg font-normal text-[#7E7E8D]">
                Share your thoughts
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-12 h-8"></div>
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-3">
              <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
                <img src="/svgs/image.svg" alt="" />
              </div>
              <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
                <img src="/svgs/gif.svg" alt="" />
              </div>
              <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
                <img src="/svgs/poll.svg" alt="" />
              </div>
              <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
                <img src="/svgs/mappin.svg" alt="" />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex gap-1 cursor-pointer items-center">
                <div className="w-6 h-6 flex justify-center items-center">
                  <img src="/svgs/handbag.svg" alt="" />
                </div>
                <h3 className="text-[16px] hidden md:block font-[400] text-[#2C3E50]">
                  Product/Service
                </h3>
              </div>
              <div className="flex gap-1 cursor-pointer items-center">
                <div className="w-6 h-6 flex justify-center items-center">
                  <img src="/svgs/note.svg" alt="" />
                </div>
                <h3 className="text-[16px]  hidden md:block font-[400] text-[#2C3E50]">
                  Create article
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

import Article from "./article";
import Avatar from "./avatar";
import BottomBar from "./bottom-bar";
import HorizontalScrollImages from "./horizontal-scroll-images";
import Products from "./products";
import StackedAvatars from "./stackedAvatars";
import CustomVideoPlayer from "./video-player";

export interface PostProps {
  author: string;
  avatar: string;
  content?: string;
  timeAgo: string;
  video?: string;
  image?: string;
  imageList?: string[];
  article?: boolean;
  products?: { price: string; images: string[]; details: string };
  isLike?: boolean;
  isShowLikedPost?: boolean;
  likes?: number;
  comment?: number;
  up?: number;
  trends?: number;
}

const Post = (props: PostProps) => {
  const {
    author,
    avatar,
    content,
    video,
    image,
    article,
    isShowLikedPost,
    isLike = false,
    timeAgo,
    imageList,
    products,
    likes,
    comment,
    up,
    trends,
  } = props;

  // 🔹 Render media content dynamically
  const renderMedia = () => {
    if (video && imageList) {
      return (
        <div className="flex flex-col gap-3">
          <CustomVideoPlayer src={video} />
          <HorizontalScrollImages images={imageList} />
        </div>
      );
    }
    if (video && image)
      return (
        <div className="flex flex-row  gap-2">
          <div className="flex-2 relative cursor-pointer">
            <video className="w-full h-auto rounded-lg" muted>
              <source src={`/videos/${video}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Mute Icon */}
            <button className="absolute bottom-4 right-4 bg-black bg-opacity-50 p-2 rounded-full">
              <img src="/svgs/muted.svg" alt="Mute" className="w-3 h-3" />
            </button>
          </div>

          <div className="flex-3 cursor-pointer">
            {" "}
            <img
              src={`/images/${image}`}
              alt="Photo"
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      );
    if (video) return <CustomVideoPlayer src={video} />;
    if (imageList) return <HorizontalScrollImages images={imageList} />;
    return null;
  };

  return (
    <div className="p-5 w-full border-b border-[#ECF1F4]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          {isShowLikedPost && (
            <div className="flex justify-between">
              <div className="flex gap-2">
                <StackedAvatars
                  avatars={[
                    "/images/user1.png",
                    "/images/user2.png",
                    "/images/user3.png",
                    "/images/user4.png",
                  ]}
                  maxAvatars={2}
                  avatarSize={30}
                  overlap={17}
                />
                <h6 className="text-lg text-[#2c3e50]">
                  <span className="font-bold text-lg mr-2 text-[#2c3e50]">
                    Charlie Robert
                  </span>
                  and 5 others flicked this post.
                </h6>
              </div>
              <div className="flex items-center justify-center cursor-pointer">
                <img src="/svgs/threeDots.svg" alt="" />
              </div>
            </div>
          )}
          <div className="flex gap-3">
            <Avatar avatar={avatar} />
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 flex-1">
                  <div className="flex gap-1 items-center">
                    <h6 className="text-xl font-[500]">{author}</h6>
                    <img src="/svgs/greenmark.svg" alt="" />
                  </div>
                  <div className="w-[2px] h-[2px] rounded-full bg-gray-500"></div>
                  <p className="text-sm font-[400] text-[#7E7E8D]">{timeAgo}</p>
                  <div className="w-[2px] h-[2px] rounded-full bg-gray-500"></div>
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer">
                    <img src="/svgs/userPlus.svg" alt="" />
                  </div>
                </div>
                {!isShowLikedPost && (
                  <div className="flex items-center justify-center cursor-pointer">
                    <img src="/svgs/threeDots.svg" alt="" />
                  </div>
                )}
              </div>
              {content && (
                <p className="text-lg font-normal text-[#2C3E50]">{content}</p>
              )}
              {/* 🔹 Render dynamic post content */}
              {products && (
                <Products
                  images={products.images}
                  price={products.price}
                  details={products.details}
                />
              )}
              {article && <Article />}

              {/* 🔹 Render media */}
              {renderMedia()}
            </div>
          </div>
        </div>

        <BottomBar
          isLike={isLike}
          likes={likes}
          comment={comment}
          up={up}
          trends={trends}
        />
      </div>
    </div>
  );
};

export default Post;

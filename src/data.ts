import { PostProps } from "./components/post";

export const data: PostProps[] = [
  {
    avatar: "user2.png",
    author: "Jane Doe",
    timeAgo: "4m",
    content:
      "Lorem ipsum dolor sit amet consectetur. Ipsum fermentum neque sollicitudin tempor tortor cursus ultricies et. Id tortor fames nunc nisi congue suscipit.",
    likes: 12,
    isLike: true,
    comment: 0,
    up: 3,
    trends: 32,
  },
  {
    avatar: "user2.png",
    author: "Jane Doe",
    timeAgo: "4m",
    video: "myvideo.mp4",
    content:
      "Lorem ipsum dolor sit amet consectetur. Ipsum fermentum neque sollicitudin tempor tortor cursus ultricies et. Id tortor fames nunc nisi congue suscipit.",
    likes: 12,
    comment: 0,
    up: 3,
    trends: 32,
  },
  {
    avatar: "user2.png",
    author: "Jane Doe",
    timeAgo: "4m",
    article: true,
    likes: 12,
    comment: 0,
    up: 3,
    trends: 32,
  },
  {
    avatar: "user2.png",
    author: "Jane Doe",
    isShowLikedPost: true,
    timeAgo: "4m",
    content:
      "UI Designဆွဲတယ်ဆိုတာ Productတစ်ခုရဲ့ Interfaceကို ကြည့်လို့လှရုံသက်သက် ဆွဲရတာမျိုးမဟုတ်ဘဲ UX Research, User Personna, User Flow and Journey Mapping စတဲ့ UX Design Process အဆင့်ဆင့်ကရလာတဲ့ resultတွေ၊ Decision တွေပေါ်မှာအခြေခံပြီးမှ Productကိုအ... See more",
    imageList: ["image1.png", "image2.png", "image3.png"],
    likes: 12,
    comment: 3,
    up: 5,
    trends: 32,
  },
  {
    avatar: "user2.png",
    author: "Jane Doe",
    timeAgo: "4m",
    content:
      "Unleash power and creativity with the iPad Pro M4. Redefine what's possible—get yours today!",
    products: {
      price: "1299.00",
      images: ["image4.png", "image5.png", "image6.png"],
      details: "iPad Pro 13-Inch (M4): Built for Apple Intelligence, Ultra Retina XDR Display, 256GB, 12MP Front/Back Camera, LiDAR Scanner, Wi-Fi 6E, Face ID, All-Day Battery Life — Space Black"
    },
    likes: 12,
    comment: 3,
    up: 5,
    trends: 32,
  },
  {
    avatar: "user2.png",
    author: "Jane Doe",
    timeAgo: "4m",
    content:
      "Lorem ipsum dolor sit amet consectetur. Ipsum fermentum neque sollicitudin tempor tortor cursus ultricies et. Id tortor fames nunc nisi congue suscipit.",
    video: 'secondVideo.mp4',
    image:'lastImage.png',
    likes: 12,
    comment: 0,
    up: 3,
    trends: 32,
  },
];

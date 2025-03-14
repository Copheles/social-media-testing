import CreatePost from "./components/create-post";
import Post from "./components/post";
import { data } from "./data";
import Skeletons from "./components/skeletons";


const App = () => {
  return (
    <main className="container mx-auto h-screen max-w-[744px]">
      <CreatePost />
      {
        data.map((post, index) => (
          <Post {...post} key={index} />
        ))
      }
      <Skeletons />
    </main>
  );
};

export default App;

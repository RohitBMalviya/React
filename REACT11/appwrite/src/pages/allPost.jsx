import { useState, useEffect } from "react";
import { PostCard, Container } from "../components";
import services from "../appwrite/config";
export default function AllPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    services
      .getAllPost([])
      .then((post) => {
        if (post) {
          setPosts(post.documents);
        }
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/2">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

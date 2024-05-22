import { useState, useEffect } from "react";
import { Container, PostForm } from "../components";
import services from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

export default function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (slug) {
      services
        .getPost(slug)
        .then((post) => {
          if (post) {
            setPost(post);
          } else {
            navigator("/");
          }
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

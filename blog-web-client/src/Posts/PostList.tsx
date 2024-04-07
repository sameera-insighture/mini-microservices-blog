import axios from "axios";
import { useEffect, useState } from "react";
import Comments from "../Comments/Comments";

export interface Comment {
  id: string;
  content: string;
}

interface Post {
  id: string;
  title: string;
  comments: Comment[];
}
interface PostList {
  [key: string]: Post;
}
function PostList() {
  const [postList, setPostList] = useState<PostList>({});

  const getPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts");
    setPostList(res.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="row">
      {Object.values(postList).map((post) => (
        <div className="col-12 col-md-4" key={post.id}>
          <div className="card">
            <div className="card-body">
              <h4>{post.title}</h4>
              <div>
                <Comments postId={post.id} comments={post.comments} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;

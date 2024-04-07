import { Comment } from "../Posts/PostList";
import CommentsCreate from "./CommentsCreate";
import CommentsList from "./CommentsList";

function Comments({
  postId,
  comments,
}: {
  postId: string;
  comments: Comment[];
}) {
  return (
    <div className="mt-2">
      <CommentsList comments={comments} />
      <CommentsCreate postId={postId} />
    </div>
  );
}

export default Comments;

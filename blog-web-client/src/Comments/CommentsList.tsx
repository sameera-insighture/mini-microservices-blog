import { Comment } from "../Posts/PostList";

function CommentsList({ comments }: { comments: Comment[] }) {
  return (
    <ul>
      {comments.map((comment) => {
        let content = comment.content;
        const status = comment.status;
        if (status === "rejected") {
          content = "This comment has been rejected";
        }
        if (status === "pending") {
          content = "This comment is awaiting moderation";
        }
        return <li key={comment.id}>{content}</li>;
      })}
    </ul>
  );
}

export default CommentsList;

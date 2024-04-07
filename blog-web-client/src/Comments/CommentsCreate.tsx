import axios from "axios";
import { FormEvent, useState } from "react";

function CommentsCreate({ postId }: { postId: string }) {
  const [content, setContent] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
    setContent("");
  };
  return (
    <div className="mb-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="content" className="form-label">
            Add Comment
          </label>
          <input
            id="content"
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary btn-sm">
            Create Comment
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommentsCreate;

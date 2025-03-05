import { Post } from '../types/post';

async function PostCard({ postId }: { postId: number }) {
  const post: Post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((res) =>
    res.json()
  );

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default PostCard;
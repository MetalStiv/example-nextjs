import { Post } from '../../types/post';

async function PostsPage() {
  const posts: Post[] = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
    res.json()
  );

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/posts/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsPage;
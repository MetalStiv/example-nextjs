import Counter from "@/client-components/counter";
import PostCard from "@/server-components/post";
  
export default async function PostPage({ params }: {params: Promise<{ id: string }>}) {
    const id = (await params).id;

    return (
        <div>
            <h1>Post Details</h1>
            <PostCard postId={parseInt(id)} />
            <Counter />
        </div>
    );
}
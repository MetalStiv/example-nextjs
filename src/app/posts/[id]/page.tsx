import Counter from "@/client-components/counter";
import PostCard from "@/server-components/post";

interface PostPageProps {
    params: {
      id: string;
    };
}
  
export default function PostPage({ params }: PostPageProps) {
    const { id } = params;

    return (
        <div>
            <h1>Post Details</h1>
            <PostCard postId={parseInt(id)} />
            <Counter />
        </div>
    );
}
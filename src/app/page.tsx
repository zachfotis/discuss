import PostList from '@/components/posts/postList';
import TopicCreateForm from '@/components/topics/topicCreateForm';
import TopicList from '@/components/topics/topicList';
import { fetchTopPosts } from '@/db/queries/posts';
import { Divider } from '@nextui-org/react';

export const revalidate = 60 * 3;  // 3 minutes

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
        <PostList fetchData={() => fetchTopPosts()} />
      </div>
      <div className="border shadow rounded-md py-3 px-2">
        <TopicCreateForm />
        <Divider className='my-2' />
        <h3 className="text-lg m-2">Topics</h3>
        <TopicList />
      </div>
    </div>
  );
}

import { useRecoilValue } from "recoil";
import { users as usersState, posts as postsState } from "./atoms";

export default function View() {
  const users = useRecoilValue(usersState);
  const posts = useRecoilValue(postsState);

  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}

      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  );
}

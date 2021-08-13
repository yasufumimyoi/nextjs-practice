import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { users as usersState, posts as postsState } from "./atoms";
import View from "./view";

export default function Home() {
  // useRecoilStateで定義したstateにアクセス出来る
  // const [users, setUsers] = useRecoilState(usersState);
  // const [posts, setPosts] = useRecoilState(postsState);
  // userRecoilValueはstateにアクセスし、読み取りで使用
  //const view = useRecoilValue(usersState);
  const setUsers = useSetRecoilState(usersState);
  const setPosts = useSetRecoilState(postsState);

  useEffect(() => {
    const getUsers = async () => {
      const url = "https://jsonplaceholder.typicode.com/users";
      const res = await fetch(url);
      const data = await res.json();
      setUsers(data);
    };

    getUsers();
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      const url = "https://jsonplaceholder.typicode.com/posts";
      const res = await fetch(url);
      const data = await res.json();
      setPosts(data);
    };

    getPosts();
  }, []);
  return (
    <div>
      <View />
    </div>
  );
}

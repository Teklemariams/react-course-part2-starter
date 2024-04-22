import { useQuery } from "@tanstack/react-query";
import axios from "axios";
//Custom hook to return the query object
interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

const usePosts = () => useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: () =>
        axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((res) => res.data),
    staleTime: 10*1000 //stale=old, 10 seconds-the duration it stays aold
  });


export default usePosts;

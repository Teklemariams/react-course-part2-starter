import { useQuery } from "@tanstack/react-query";
import axios from "axios";
//Custom hook to return the query object
interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  const fetchTodos = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);
  //return query object
  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime: 10*1000 //stale=old, 10 seconds-the duration it stays aold
  });
};

export default useTodos;

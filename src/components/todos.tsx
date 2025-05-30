import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Input, Button } from "@chakra-ui/react";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const todos: Todo[] = [
    {
        id: 1,
        title: "Go to Capisoft Office",
        completed: true,
    },
    {
        id: 2,
        title: "Chose a floor",
        completed: true,
    },
    {
        id: 3,
        title: "Chose a desk",
        completed: true,
    },
    {
        id: 4,
        title: "start working",
        completed: true,
    },
    {
        id: 5,
        title: "do something",
        completed: false,
    },
];

// mock function to mimick fetching from a database
export const fetchTools = async (query = ""): Promise<Todo[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("fetched todos");

    const filteredTodos = todos.filter((todo) =>
        todo.title.toLowerCase().includes(query.toLowerCase())
    );

    return [...filteredTodos];
};

// mock function to add todo to database
export const addTodo = async (todo: Pick<Todo, "title">): Promise<Todo> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newTodo = {
        id: todos.length + 1,
        title: todo. title,
        completed: false,
    };

    //todo stored in memory and cleared on page reload
    todos.push(newTodo);

    return newTodo;
};

export default function TodoCard() {
    const queryClient = useQueryClient();

    const [title, setTitle] = useState("");

    const {data: todos, isLoading} = useQuery({
        queryFn: () => fetchTools(),
        queryKey: ["todos"],
    });

    // adding mutation
    const {mutateAsync: addTodoMutation} = useMutation({
        mutationFn: addTodo,
        onSuccess: () => {
            queryClient.invalidateQueries(["todos"])
        },
    });

    // loading visual
    if (isLoading) {
        return <div>Loading...</div>
    }

    // console.log("gets through loading")
    
    if (!todos || todos.length === 0) {
        return <div>Nothing to do. Go relax!</div>
    }

    return (
        <>
            <div>
                <Input
                    margin={2}
                    borderColor={"black"}
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <br/>
                <Button margin={2} borderColor={"black"} color={"white"} 
                onClick={async () => {
                    try {
                        await addTodoMutation({ title });
                        setTitle("");
                    } catch (e) {
                        console.error(e);
                    }
                }}>Add Todo</Button>
            </div>

            {/* mapping todo items by key and adding checkbox based on their bool val */}
            {todos?.map((todo) => {
                return (<div key={todo.id}>
                    <label>
                        {todo.title}:
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            readOnly
                        />
                    </label>
                </div>)
            })}
        </>
    )
}


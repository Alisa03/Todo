import { useState, useEffect } from "react";

import { Block, Container } from "../../../assets/styles/stylesComponents"

import ListTodo from "../TodoList"
import AddTodo from "../AddTodo"

export default function Todo() {
    const [todo, setTodo] = useState<any[]>(JSON.parse(String(sessionStorage.getItem('todo'))) || []);

    useEffect(() => {
        window.sessionStorage.setItem('todo', JSON.stringify(todo));
    }, [todo]);

    return (
        <main>
            <Container>
                <AddTodo setTodo={setTodo} todo={todo} />
                {todo.length > 0 &&
                    <Block>
                        <ListTodo setTodo={setTodo}
                            title="To-do"
                            list={todo}
                            bool={false}
                        />
                        <ListTodo
                            setTodo={setTodo}
                            title="Completed"
                            list={todo}
                            bool={true}
                        />
                    </Block>
                }
            </Container>
        </main>
    )
}
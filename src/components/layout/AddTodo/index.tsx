import { ChangeEvent, useState, KeyboardEvent } from "react";

import { Button } from "../../../assets/styles/stylesComponents";
import { AddBlock, Input } from "./AddTodoStyles"

export default function AddTodo({ todo, setTodo }: any) {
    const [task, setTask] = useState<string>("");

    const handleKeypress = (event: KeyboardEvent): void => {
        if (event.key == 'Enter') {
            AddTodo()
        }
    };

    const AddTodo = () => {
        if (task !== "") {
            const newTask = {
                id: Date.now(),
                title: task,
                checked: false
            };
            setTodo([...todo, newTask])
            setTask("")
        }
    }

    return (
        <AddBlock>
            <Input
                type="text"
                placeholder="Add to-do"
                value={task}
                onChange={(event: ChangeEvent<HTMLInputElement>): void => {
                    setTask(event.target.value);
                }}
                onKeyPress={handleKeypress}
            />
            <Button onClick={AddTodo}>+</Button>
        </AddBlock>
    )
}
import React, { useState } from "react";
import './App.css';
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Button = styled.button`
  display: inline-block;
  flex: 1;
  border: none;
  background-color: var(--accent);
  color: white;
  height: 30px;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
`;
const Text = styled.input`
  border: 2px solid var(--accent);
  border-radius: 4px;
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  margin-bottom: 10px;
  `;
const TaskCount = styled.span`
  margin: 10px;
`;
const Tasks = styled.div`
  border: none;
  margin: 10px 0 10px 0;
`;
const LIST = styled.li`
  listStyle:"none";
  text-decoration: "line-through";
  border: none;
  background-color: var(--grey-light);
  margin-bottom: 5px;
  padding: 5px 10px;
  border-radius: 4px;
`;

const TaskList = styled.ul`
  padding: 0;
  margin: 0;
`;

function App() {

const [input, setInput] = useState("");
const [todoList, setTodoList] = useState([]);
const [completedTaskCount, setCompletedTaskCount] = useState(0);

const handleClick = () => {
  const id = todoList.length + 1;
  setTodoList((prev) => [
    ...prev,
    {
      id: id,
      task: input,
      complete: false,
    },
  ]);
  setInput("");
};

const handleComplete = (id) => {
    let list = todoList.map((task) => {
      let item = {};
      if (task.id == id) {
        if (!task.complete){
            //Task is pending, modifying it to complete and increment the count
            setCompletedTaskCount(completedTaskCount + 1);
        } 
        else {
            //Task is complete, modifying it back to pending, decrement Complete count
            setCompletedTaskCount(completedTaskCount - 1);
        }
item = { ...task, complete: !task.complete };
      } else item = { ...task };
return item;
    });
    setTodoList(list);
  };



  return (
    <Container>
      <div>
          <h1>WIP Kanban</h1>
          <h2>Todo List</h2>
          <Text value={input} onInput={(e) =>setInput(e.target.value)} />
          <Button onClick={() => handleClick()}>Add</Button>
        <Tasks>
          <TaskCount>
            <b>Pending Tasks</b> {todoList.length - completedTaskCount}
          </TaskCount>
          <TaskCount>
            <b>Completed Tasks</b> {completedTaskCount}
          </TaskCount>
        </Tasks>
        <div>
          <TaskList>
            {todoList.map((todo) => {
              return (
                <LIST
                  complete={todo.complete}
                  id={todo.id}
                  onClick={() => handleComplete(todo.id)}
                  style={{
                    listStyle: "none",
                    textDecoration: todo.complete && "line-through",
                    color: todo.complete && "var(--grey-medium)",
                  }}
                >
                  {todo.task}
                </LIST>
              );
            })}
          </TaskList>
        </div>
      </div>
    </Container>
  );
}

export default App;

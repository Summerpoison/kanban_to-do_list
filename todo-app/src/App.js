import React from 'react';
import './App.css';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Button = styled.button`
  display:inline-block;
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  height: 30px;
  width: 50px;
  border-radius: 2px;
  cursor: pointer;
`;
const Text = styled.input`
  border: 2px solid #000;
`;
const TaskCount = styled.span`
  margin: 10px;
`;
const Tasks = styled.div`
`;



function App() {
  return (
    <Container>
      <div>
          <h1>WIP Kanban</h1>
          <h2>Todo List</h2>
          <Text value={input} />
          <Button>Add</Button>
        <Tasks>
          <TaskCount>
            <b>Pending Tasks</b> 
          </TaskCount>
          <TaskCount>
            <b>Completed Tasks</b>
          </TaskCount>
        </Tasks>
        <div>
          <ul>
              /* List items consisting of tasks will be listed here */
          </ul>
        </div>
        <Button>Clear</Button>
      </div>
    </Container>
  );
}

export default App;

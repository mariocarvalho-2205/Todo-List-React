import * as S from './App.styles';
import { useState } from 'react';
import ListItem from './components/ListItem/index'
import { AddArea } from './components/AddArea';

function App () {

  const [ list, setList ] = useState([
    {
      id: 1,
      name: "Comprar o pão",
      done: false,
    },
    {
      id: 2,
      name: "Levar o lixo",
      done: false,
    },
  ]);

  const handleAddTask = (taskName) => {
    let newList = [...list];
    newList.push({
      id: list.length++,
      name: taskName,
      done: false
    })
    setList(newList)
  }

  return (
    <S.Container >
      <S.Area>
        <S.Header>Lista de Tarefas</S.Header>

        <AddArea onEnter={handleAddTask}/>



        {list.map((item, index) =>(
          
          <ListItem key={index} item={item}/>
          
        ))}
        
      </S.Area>
    </S.Container>
  )
}

export default App
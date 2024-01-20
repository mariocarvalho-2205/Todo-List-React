// App.js
import * as S from './App.styles';
import { useState } from 'react';
import ListItem from './components/ListItem/index';
import { AddArea } from './components/AddArea';

function App () {
  const [list, setList] = useState([
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

  // Modificação na função handleAddTask para calcular o próximo ID corretamente
  const handleAddTask = (taskName) => {
    setList(prevList => [
      ...prevList,
      {
        id: prevList.length > 0 ? prevList[prevList.length - 1].id + 1 : 1,
        name: taskName,
        done: false,
      },
    ]);
  };

  // Adição da função handleCheckboxChange para lidar com a mudança no checkbox
  const handleCheckboxChange = (taskId, isChecked) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === taskId ? { ...item, done: isChecked } : item
      )
    );
  };

  return (
    <S.Container>
      <S.Area>
        <S.Header>Lista de Tarefas</S.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          // Adição da propriedade onCheckboxChange para o componente ListItem
          <ListItem key={index} item={item} onCheckboxChange={handleCheckboxChange} />
        ))}
      </S.Area>
    </S.Container>
  );
}

export default App;

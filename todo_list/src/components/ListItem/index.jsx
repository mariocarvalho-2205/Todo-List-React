// ListItem.js
import React, { useState } from "react";
import * as S from "./styles";

const ListItem = ({ item, onCheckboxChange }) => {
  const [isChecked, setIsChecked] = useState(item.done);

  // Função para lidar com a mudança no checkbox
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    // Chama a função fornecida pelo componente pai (App) para atualizar o estado global
    onCheckboxChange(item.id, e.target.checked);
  };

  return (
    <S.Container done={isChecked}>
      <input
        type="checkbox"
        name={item.name}
        id={item.name}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={item.name}>
        <span>{item.name} - {item.done.toString()}</span>
      </label>
    </S.Container>
  );
};

export default ListItem;

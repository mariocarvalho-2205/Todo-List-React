import * as S from './styles'

const ListItem = ({ item }) => {
  return (
    <S.Container>
        <input type="checkbox" name={item.name} id={item.name}/>
      <label htmlFor={item.name}>
        {item.name}
      </label>
    </S.Container>
  )
}

export default ListItem
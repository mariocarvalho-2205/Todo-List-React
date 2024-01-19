import * as S from './styles'

const ListItem = ({ id, name, done}) => {
  return (
    <S.Container>
        <p>{name} {done}</p>
    </S.Container>
  )
}

export default ListItem
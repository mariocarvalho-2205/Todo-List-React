import * as S from './styles'
import { useState } from 'react'

export const AddArea = ({ onEnter }) => {

    const [ inputText, setInputText ] = useState('')

    function handleKeyUp (e) {
        if (e.code === 'Enter' && inputText !== '') {
            onEnter(inputText)
            setInputText('')
        }
    }

    return (
        <S.Container>
            <div className='image'>➕</div>
            <input 
                type="text"
                placeholder='Adicione uma tarefa'
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
                />
            
        </S.Container>

    )
}
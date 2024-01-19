import * as S from './styles'
import { useState, KeyboardEvent } from 'react'

export const AddArea = () => {

    const [ inputText, setInputText ] = useState('')

    function handleKeyUp (e) {
        if (e.code === 'Enter') {
            
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
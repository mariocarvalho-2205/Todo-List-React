import { useState } from "react";
import * as S from "./styles";

const ListItem = ({ item }) => {
	const [isChecked, setIsChecked] = useState(item.done);

	return (
		<S.Container done={isChecked}>
			<input
				type="checkbox"
				name={item.name}
				id={item.name}
				checked={isChecked}
        onChange={e => setIsChecked(e.target.checked)}
			/>
			<label htmlFor={item.name}>
				<span>{item.name}</span>
			</label>
		</S.Container>
	);
};

export default ListItem;

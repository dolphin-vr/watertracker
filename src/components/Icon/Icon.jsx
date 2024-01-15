
import sprite from "../../images/sprite.svg";

export const Icon = ({tag}) =>{	
	return (
		<use href={`${sprite}#${tag}`} ></use>
	)
}

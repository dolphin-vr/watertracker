import sprite from "../../assets/sprite.svg";

export const Icon = ({ tag, className }) => {
  return (
    <svg className={className}>
      <use href={`${sprite}#${tag}`}></use>
    </svg>
  );
};

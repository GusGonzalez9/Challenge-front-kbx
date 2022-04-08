import "./Nav.css";
import descarga from "./descarga.png";

type Props = {
  items: string[];
  title?: string;
  image?: string;
};

export const Nav = ({ items, title, image }: Props) => {
  return (
    <div className="nav">
      <img src={descarga} height="80px" alt=""/>
      <div className="itemsContainer">
        {items.map((i) => {
          return (
            <div>
              <p>{i}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

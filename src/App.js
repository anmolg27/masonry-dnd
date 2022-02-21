import { DragDropContext } from "react-beautiful-dnd";
import { Fragment, useContext, useState } from "react";
import { returnGridImages } from "./dummyImageList";
import GridContext from "./context/GridContext";
import "./styles.css";

import Masonry from "./components/Masonry";
import CardList from "./components/CardsList";
import Card from "./components/Card";
import Button from "./components/Button";
import ButtonGroup from "./components/ButtonGroup";

export default function App() {
  const [view, setView] = useState("masonry");
  const { items, moveItem } = useContext(GridContext);

  function renderImages() {
    if (view === "masonry") {
      const { list1, list2, list3, list4 } = returnGridImages(items);
      return (
        <Fragment>
          <CardList>
            {list1.map(({ src, id }) => (
              <Card src={src} key={id} id={id} onMoveItem={moveItem} />
            ))}
          </CardList>
          <CardList>
            {list2.map(({ src, id }) => (
              <Card src={src} key={id} id={id} onMoveItem={moveItem} />
            ))}
          </CardList>
          <CardList>
            {list3.map(({ src, id }) => (
              <Card src={src} key={id} id={id} onMoveItem={moveItem} />
            ))}
          </CardList>
          <CardList>
            {list4.map(({ src, id }) => (
              <Card src={src} key={id} id={id} onMoveItem={moveItem} />
            ))}
          </CardList>
        </Fragment>
      );
    }
    return (
      <CardList>
        {items.map(({ src, id }) => (
          <Card src={src} key={id} id={id} onMoveItem={moveItem} />
        ))}
      </CardList>
    );
  }
  return (
    <div className="App">
      <nav className="nav-bar">
        <ButtonGroup>
          <Button
            active={view === "masonry"}
            onClick={() => setView("masonry")}
          >
            Masonry View
          </Button>
          <Button active={view === "list"} onClick={() => setView("list")}>
            List View
          </Button>
        </ButtonGroup>
      </nav>

      <Masonry>{renderImages()}</Masonry>
    </div>
  );
}

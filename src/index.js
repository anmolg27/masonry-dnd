import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { GridProvider } from "./context/GridContext";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
    <GridProvider>
      <App />
    </GridProvider>
  </DndProvider>,
  rootElement
);

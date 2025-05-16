import ButtonView3 from "./Component/View/Menu";
import data from "../src/Component/Data/data.json"
import Menu from "./Component/View/Menu";
import sectionAction from "./Component/Action/SectionAction";

const metadata = data

function App() {
  return (
    <div >
     {sectionAction.getMenu(metadata)}
    </div>
  );
}

export default App;

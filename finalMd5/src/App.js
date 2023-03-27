import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ListStudent from "./pages/student/listStudent";
import AddStudent from "./pages/student/addStudent";
import EditStudent from "./pages/student/editStudent";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Routes>
          <Route path={"home"} element={<Home></Home>}>
            <Route path={""} element={<ListStudent/>}></Route>
            <Route path={"add-student"} element={<AddStudent />}></Route>
            <Route path={"edit-student/:id"} element={<EditStudent />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

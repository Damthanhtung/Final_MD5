import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteStudents,
  getStudents,
} from "../../services/studentService";
export default function ListStudent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const students = useSelector((state) => {
    console.log(state.students.students);
    return state.students.students;
  });

  useEffect(() => {
    dispatch(getStudents());
  }, []);
  return (
    <div className="row">
      <div className="col-12">
        <table border={1}>
          <tr>
            <td>STT</td>
            <td>Name</td>
            <td>Description</td>
            {/*<td>Image</td>*/}
            <td>Action</td>

            <td>Action</td>
          </tr>
          {students !== undefined &&
            students.map((item, key) => (
              <tr>
                <td>{key + 1}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.action}</td>
                {/*<td>*/}
                {/*  <img src={item.image} alt="" width={200} height={200} />*/}
                {/*</td>*/}
                <button
                  onClick={() => {
                    dispatch(deleteStudents(item.id)).then(() => {
                      dispatch(getStudents()).then(() => {
                        navigate("/home");
                      });
                    });
                  }}
                >
                  Delete
                </button>
                <Link to={`edit-student/${item.id}`}>
                  <button>Edit</button>
                </Link>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}

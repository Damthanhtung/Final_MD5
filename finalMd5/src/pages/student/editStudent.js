import { useDispatch, useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import {editStudents} from "../../services/studentService";
import { useNavigate, useParams } from "react-router-dom";

export default function EditStudent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = useParams();
  const students = useSelector((state) => {
    console.log(state.students.students[0]);
    return state.students.students[0];
  });
  const handleEdit = (values) => {
    let data = { ...values };
    console.log(3, data);

    dispatch(editStudents(data)).then(() => {
      navigate("/home");
    });
  };
  return (
    <div className="row">
      <div className="col-12">
        <Formik
          initialValues={{
            id: id.id,
            name: students.name,
            description: students.description,
            // image: students.image,
            action: students.action,
          }}
          onSubmit={(values) => {
            handleEdit(values);
          }}
          enableReinitialize={true}
        >
          <Form>
            <Field type="text" name={"name"} />
            <Field type="text" name={"description"} />
            <Field type="text" name={"action"} />
            <button type="submit">Edit</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

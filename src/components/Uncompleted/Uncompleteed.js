import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../../contexts/ProductsContexts";
import "../All/All.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCircle,
  faCircleNotch,
  faCircleXmark,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

function All(props) {
  const { data, setData } = useContext(DataContext);
  console.log(data);

  const navigate = useNavigate();

  const handleDelete = (index) => {
    const t = [...data];
    t.splice(index, 1);
    setData(t);
  };

  const { register, reset, handleSubmit } = useForm({
    defaultValues: {},
  });

  const submit = (info) => {
    console.log(info);
    const t = [...data];
    console.log(t);
    const title = info.title;
    const obj = {
      title: title,
      completed: false,
    };
    t.push(obj);
    setData(t);
  };

  const clearCompleted = () => {
    const t = [];
    data.map((item) => {
      if (!item.completed) {
        t.push(item);
      }
    });
    setData(t);
  };

  return (
    <div>
      <div className="conatiner  d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-lg-12 rounded bg-white d-flex flex-column justify-content-center align-items-center  w-100">
            <div className=" w-100">
              <form onSubmit={handleSubmit(submit)}>
                <div className="d-flex gap-3 p-3">
                  <input
                    className="form-control w-100"
                    placeholder="Enter the task"
                    {...register("title", { required: true })}
                  ></input>
                  <button className="btn   styledBtn" type="submit">
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-12 rounded bg-white d-flex w-100 flex-column justify-content-center align-items-center mt-3  coll">
            <ul className="p-0 w-100 m-0">
              {data.map((item, index) => {
                if (!item.completed) {
                  return (
                    <>
                      <div className="d-flex lidiv w-100 align-items-center justify-content-between">
                        <div className="d-flex w-100 align-items-center">
                          <button className="btn">
                            <FontAwesomeIcon icon={faCircleNotch} />
                          </button>
                          <li>{item.title}</li>
                        </div>
                        <div>
                          <button
                            onClick={() => handleDelete(index)}
                            className="delete btn"
                          >
                            <FontAwesomeIcon
                              icon={faCircleXmark}
                              className=""
                            />
                          </button>
                        </div>
                      </div>
                    </>
                  );
                }
              })}
            </ul>
            <div className="d-flex w-100 align-items-center justify-content-between">
              <button className="btn" onClick={() => navigate(`/`)}>
                All
              </button>
              <button className="btn text-primary">Active</button>
              <button className="btn" onClick={() => navigate(`/completed`)}>
                Completed
              </button>
              <button className="btn" onClick={() => clearCompleted()}>
                Clear Completed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default All;

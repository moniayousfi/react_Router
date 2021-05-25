import React, { useState } from "react";
import Modal from "react-modal";
import "../MovieCard/add.css";
import ReactStars from "react-rating-stars-component";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

function Add({ onSubmitMovie }) {
  const [addForm, setAddForm] = useState({
    title: "",
    description: "",
    rating: "0",
    posterUrl: "",
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  const change = (e) => {
    setAddForm({
      ...addForm,
      [e.target.name]: e.target.value,
    });
  };

 

  return (
    <div >
      <button className="add" onClick={setModalIsOpenToTrue}>Add New Movie</button>

      <Modal isOpen={modalIsOpen} style={customStyles}>
        <button onClick={setModalIsOpenToFalse}>x</button>

        <ul className="form-style-1">
          <li>
            <label className="label1">
              Title <span className="required">*</span>
            </label>
            <input
              type="text"
              name="title"
              className="field-long"
              placeholder="Title"
              defaultValue={addForm.title}
              onChange={change}
            />{" "}
          </li>
          <li>
            <label className="label1" >
              URL <span className="required">*</span>
            </label>
            <input
              type="text"
              name="posterUrl"
              className="field-long"
              defaultValue={addForm.posterUrl}
              onChange={change}
            />
          </li>

          <li>
            <label className="label1">
              Description <span className="required">*</span>
            </label>
            <textarea
              name="description"
              id="field5"
              className="field-long field-textarea"
              defaultValue={addForm.description}
              onChange={change}
            ></textarea>
          </li>

          <ReactStars
            count={5}
            name="rating"
            onChange={(rat) => {
              setAddForm({
                ...addForm,
                rating: rat,
              });
            }}
            size={24}
            activeColor="#ffd700"
          />
          <li>
            <button
              onClick={() => {
                onSubmitMovie(addForm);
                setAddForm({
                  title: "",
                  description: "",
                  posterUrl: "",
                  rating: "",
                });
                setModalIsOpen(false);
              }}
            >
              Add
            </button>
          </li>
        </ul>
      </Modal>
    </div>
  );
}
export default Add;

import { useState } from "react";
import CardButton from "./CardButton";

export default function CardTask() {
  const [todoList, setTodoList] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputTextArea, setInputTextArea] = useState("");

  const handleAddTask = () => {
    // First you need to create an object
    const newTask = {
      id: todoList.length - 1 === -1 ? 1 : todoList.length + 1,
      title: inputTitle,
      description: inputTextArea,
    };

    setTodoList([newTask, ...todoList]);
  };

  const handleInputTitle = (event) => {
    let title = event.target.value;
    setInputTitle(title);
    event.target.reset;
  };

  const handleInputTextArea = (event) => {
    let description = event.target.value;
    setInputTextArea(description);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  return (
    <section className="container flex justify-center items-center border mx-auto h-auto w-1/2 ">
      <form onSubmit={handleOnSubmit}>
        <div className="flex flex-col border bg-Glass p-8 rounded-lg">
          <input
            onChange={handleInputTitle}
            type="text"
            placeholder=" Title"
            className="border  rounded px-6 py-2.5 text-lg font-semibold"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            className="border  mt-3 p-2"
            onChange={handleInputTextArea}
            placeholder=" Description"
          ></textarea>
          <CardButton handleAddTask={handleAddTask}></CardButton>
        </div>
      </form>
    </section>
  );
}

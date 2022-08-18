import React from "react";

export default function CardButton(props) {
  return (
    <button
      className="mt-3 border rounded px-6 py-2.5 text-ColorStone bg-ButtonBgColor hover:bg-ButtonHoverColor hover:duration-100"
      onClick={() => props.handleAddTask()}
    >
      Add Task
    </button>
  );
}

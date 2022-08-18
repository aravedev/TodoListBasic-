import React from "react";

export default function TaskDisplay() {
  return (
    <section className="mx-auto  flex justify-center  lg:w-1/2 p-4 border">
      <div className="max-w-md bg-Glass p-3 rounded">
        <div className="bg-Teal p-2 flex justify-between items-center rounded">
          <h1 className="text-ColorStone text-3xl">My first task</h1>
          <button>
            <span className="border p-3 font-bold rounded hover:bg-ButtonHoverColor hover:duration-100 hover:text-ColorStone ">
              Complete !
            </span>
          </button>
        </div>
        <div className="mt-3 text-lg leading-7 p-4 ">
          <p>Description of my first task.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            architecto odit deserunt, cumque quasi blanditiis ea voluptatem
            corporis quisquam quia dolorum, inventore sed laboriosam accusamus
            error ut eos impedit voluptatibus!
          </p>
        </div>
      </div>
    </section>
  );
}

import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
export default function NewProject({ onSave,onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    if (
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === "" ||
      enteredTitle.trim() === ""
    ) {
      modal.current.open();
      return
    }
    onSave({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption='Close'>
        <h2 className="text-stone-700 my-4 font-bold text-xl">Invalid Input</h2>
        <p className="text-stone-600 mb-4"> oops...You can't leave the fields empty.</p>
        <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
      </Modal>
      <div className="w-[35rem] py-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="bg-stone-700 text-stone-200 hover:bg-stone-900 hover:text-stone-50 rounded px-6 py-2 "
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} title="Title" />
          <Input ref={description} title="Description" textarea />
          <Input type="date" ref={dueDate} title="Due Date" />
        </div>
      </div>
    </>
  );
}

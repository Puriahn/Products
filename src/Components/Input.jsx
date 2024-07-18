import { ForwardRefRenderFunction, forwardRef } from "react";

const Input = forwardRef(function Input({ title, textarea, ...props }, ref) {
  const classes =
    "bg-stone-200 w-full p-1 border-b-2 border-stone-300 rounded-sm text-stone-600 focus:outline-none focus:border-stone-500";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-stone-500 text-sm font-bold upppercase ">
        {title}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props}></textarea>
      ) : (
        <input ref={ref} className={classes} {...props}></input>
      )}
    </p>
  );
});
export default Input;

export default function Input({label,id,...props}) {
  return (
    <div >
      <label htmlFor={id}>{label}</label>
      <input className="rounded-md my-1.5 mx-3 ring-1 bg-slate-300 focus:bg-white" id={id} name={id} required {...props}/>
    </div>
  );
}

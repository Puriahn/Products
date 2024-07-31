import { Link } from "react-router-dom";
import Button from "../Common/Button";

export default function Welcome() {
  return (
    <>
      <div className="text-center font-bold text-3xl">welcom</div>
      <Button>
        <Link to='/Products'>PRODUCTS</Link>
      </Button>
    </>
  );
}

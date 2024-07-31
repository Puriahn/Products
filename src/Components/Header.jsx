import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFHDMOi5U7ObjrvITpfiiPDYjzM2urr4oyhw&s"
            className="h-8"
          />
          <span className="pl-3 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            SomeThing
          </span>
        </div>

        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded
                md:bg-transparent md:text-blue-700 md:p-0 dark:text-white
                md:dark:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Products"
                className="block py-2 px-3 text-gray-900 rounded
                hover:bg-gray-100 md:hover:bg-transparent md:border-0
                md:hover:text-blue-700 md:p-0 dark:text-white
                md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 px-3 text-gray-900 rounded
                hover:bg-gray-100 md:hover:bg-transparent md:border-0
                md:hover:text-blue-700 md:p-0 dark:text-white
                md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Services
              </Link>
            </li>
            <li>
              <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Contact
              </Link>
            </li>
          </ul>
        </div>
          <button className="float-right block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Cart
          </button>
        
      </div>
    </nav>
  );
}

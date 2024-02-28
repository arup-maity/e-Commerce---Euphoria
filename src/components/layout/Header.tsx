import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full bg-white">
      <div className="theme-container">
        <div className="h-20 flex items-center justify-around">
          <div className="logo">
            <Link href="/">
              <Image src="/logo.png" width={100} height={45} alt="euphoria logo" className="" />
            </Link>
          </div>
          <ul className="flex flex-col lg:flex-row lg:space-x-10 *:text-sm *:uppercase">
            <li>Shop</li>
            <li>Men</li>
            <li>Women</li>
            <li>Combos</li>
            <li>Joggers</li>
          </ul>
          <div className="">
            <form>
              <div className="h-11 w-64 flex items-center rounded-lg bg-[#f6f6f6] p-1">
                <button type="submit" className="p-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16.6363 17.697C16.9292 17.9899 17.4041 17.9899 17.697 17.697C17.9899 17.4041 17.9899 16.9292 17.697 16.6363L16.6363 17.697ZM13.9167 8.83334C13.9167 11.6408 11.6408 13.9167 8.83334 13.9167V15.4167C12.4692 15.4167 15.4167 12.4692 15.4167 8.83334H13.9167ZM8.83334 13.9167C6.02589 13.9167 3.75 11.6408 3.75 8.83334H2.25C2.25 12.4692 5.19746 15.4167 8.83334 15.4167V13.9167ZM3.75 8.83334C3.75 6.02589 6.02589 3.75 8.83334 3.75V2.25C5.19746 2.25 2.25 5.19746 2.25 8.83334H3.75ZM8.83334 3.75C11.6408 3.75 13.9167 6.02589 13.9167 8.83334H15.4167C15.4167 5.19746 12.4692 2.25 8.83334 2.25V3.75ZM12.4697 13.5303L16.6363 17.697L17.697 16.6363L13.5303 12.4697L12.4697 13.5303Z"
                      fill="#807D7E"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  placeholder="Search"
                  className="!bg-transparent w-full h-10 text-sm text-[#807d7e] placeholder:text-sm placeholder:italic placeholder:text-[#807d7e] focus:outline-0"
                />
              </div>
            </form>
          </div>
          <ul className="flex space-x-3 *:w-11 *:h-11 *:bg-[#f6f6f6] *:flex *:justify-center *:items-center *:rounded-lg">
            <li role="button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.99486 4.9298C8.49535 3.18229 5.99481 2.71221 4.11602 4.31241C2.23723 5.91261 1.97273 8.58806 3.44815 10.4806C4.67486 12.0542 8.38733 15.3729 9.60407 16.447C9.7402 16.5672 9.80827 16.6273 9.88766 16.6509C9.95695 16.6715 10.0328 16.6715 10.1021 16.6509C10.1815 16.6273 10.2495 16.5672 10.3857 16.447C11.6024 15.3729 15.3149 12.0542 16.5416 10.4806C18.017 8.58806 17.7848 5.89578 15.8737 4.31241C13.9626 2.72904 11.4944 3.18229 9.99486 4.9298Z"
                  stroke="#807D7E"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </li>
            <li role="button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.0007 11.6663C12.3018 11.6663 14.1673 9.80086 14.1673 7.49967C14.1673 5.19849 12.3018 3.33301 10.0007 3.33301C7.69946 3.33301 5.83398 5.19849 5.83398 7.49967C5.83398 9.80086 7.69946 11.6663 10.0007 11.6663ZM10.0007 11.6663C6.31875 11.6663 3.33398 13.9049 3.33398 16.6663M10.0007 11.6663C13.6825 11.6663 16.6673 13.9049 16.6673 16.6663"
                  stroke="#807D7E"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </li>
            <li role="button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.5 3.33301H3.00526C3.85578 3.33301 4.56986 3.97343 4.6621 4.81893L5.3379 11.0138C5.43014 11.8593 6.14422 12.4997 6.99474 12.4997H14.205C14.9669 12.4997 15.6317 11.9831 15.82 11.2449L16.9699 6.7356C17.2387 5.68179 16.4425 4.65708 15.355 4.65708H5.5M5.52063 15.5205H6.14563M5.52063 16.1455H6.14563M14.6873 15.5205H15.3123M14.6873 16.1455H15.3123M6.66667 15.833C6.66667 16.2932 6.29357 16.6663 5.83333 16.6663C5.3731 16.6663 5 16.2932 5 15.833C5 15.3728 5.3731 14.9997 5.83333 14.9997C6.29357 14.9997 6.66667 15.3728 6.66667 15.833ZM15.8333 15.833C15.8333 16.2932 15.4602 16.6663 15 16.6663C14.5398 16.6663 14.1667 16.2932 14.1667 15.833C14.1667 15.3728 14.5398 14.9997 15 14.9997C15.4602 14.9997 15.8333 15.3728 15.8333 15.833Z"
                  stroke="#807D7E"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

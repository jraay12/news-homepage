import Logo from "../image/logo.svg";

export default function Header({setOpen, open}) {
    const handleClick  = () => {
        setOpen(true)
    }
  return (
    <header className="flex justify-between items-center  min-w-full  py-10 ">
      <img src={Logo} />
      <button className="sm:hidden" onClick={handleClick}>&#9776;</button>
      <ul className="hidden sm:flex gap-10 font-sans text-Grayishblue">
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </header>
  );
}

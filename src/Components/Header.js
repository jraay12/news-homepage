import Logo from "../image/logo.svg";

export default function Header() {
  return (
    <header className="flex justify-between items-center  min-w-full px-20 py-6 border-2 border-black">
      <img src={Logo} />
      <ul className="flex gap-10 font-sans text-Grayishblue">
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </header>
  );
}

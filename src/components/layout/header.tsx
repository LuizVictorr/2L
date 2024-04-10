import CartButton from "./cart-button";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 shadow">
      <div className="container ms-auto p-4 flex items-center justify-between">
        oi
        <div className="flex items-center justify-center space-x-4">
          <CartButton />
        </div>
      </div>
    </header>
  );
}
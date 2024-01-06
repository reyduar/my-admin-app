import { CartCounter } from "@/app/shopping-cart";

export const meta = {
  title: "Shopping Cart",
  description: "Cart items",
};

export default function CounterPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <span>Shopping Cart</span>
        <CartCounter value={1} />
      </div>
    </>
  );
}

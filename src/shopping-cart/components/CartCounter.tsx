"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, substractOne, initCount } from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 10 }: Props) => {
  // const [counter, setCounter] = useState(value);
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initCount(value));
  }, [dispatch, value]);

  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex">
        <button
          onClick={() => dispatch(addOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +
        </button>
        <button
          onClick={() => dispatch(substractOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -
        </button>
      </div>
    </>
  );
};

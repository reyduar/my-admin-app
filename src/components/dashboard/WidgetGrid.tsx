"use client";
import { SimpleWidget } from "..";
import { IoCartOutline } from "react-icons/io5";
import { useAppSelector } from "../../store/index";

export const WidgetGrid = () => {
  const count = useAppSelector((state) => state.counter.value);
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        title={`${count}`}
        subtitle="Productos"
        label="Time"
        icon={<IoCartOutline size={40} className="text-blue-600" />}
        href="/dashboard/counter"
      />
    </div>
  );
};

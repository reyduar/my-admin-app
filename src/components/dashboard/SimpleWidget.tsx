import Link from "next/link";
import { IoCafeOutline } from "react-icons/io5";

interface Props {
  title: string;
  subtitle?: string;
  label?: string;
  icon?: React.ReactNode;
  href?: string;
}

export function SimpleWidget({ title, subtitle, label, icon, href }: Props) {
  return (
    <div className="bg-white shadow-xl p-3 sm:min-w-[25%] min-w-full rounded-2xl border-1 border-gray-50 mx-2 my-2">
      <div className="flex flex-col">
        <div>
          <h2 className="font-bold text-gray-600 text-center">{label}</h2>
        </div>
        <div className="my-3">
          <div className="flex flex-row items-center justify-center space-x-1 ">
            <div id="icon">
              {icon ? (
                icon
              ) : (
                <IoCafeOutline size={40} className="text-blue-600" />
              )}
            </div>
            <div id="temp" className="text-center">
              <h5 className="text-3xl">{title}</h5>
              <p className="text-xs text-gray-500">{subtitle}</p>
            </div>
          </div>
        </div>

        {href && (
          <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
            <Link href={href} className="text-indigo-600 text-xs font-medium">
              Show more
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

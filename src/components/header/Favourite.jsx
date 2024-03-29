import { HeartIcon } from "../../constants/images";

export default function Favourite({ onShow }) {
  return (
    <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
      <img src={HeartIcon} alt="" />
      <span className="text-gray-200" onClick={onShow}>
        Favourite Locations
      </span>
    </div>
  );
}

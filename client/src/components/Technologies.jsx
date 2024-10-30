import { FaJava } from "react-icons/fa";
import { RiNodejsLine, RiReactjsLine } from "react-icons/ri";
import {
  SiExpress,
  SiLaravel,
  SiMongodb,
  SiMui,
  SiMysql,
  SiPhp,
} from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiNodejsLine className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-7xl text-yellow-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500 " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-blue-700 " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJava className="text-7xl text-orange-500 " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiLaravel className="text-7xl  text-red-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPhp className="text-7xl text-blue-700 " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMui className="text-7xl text-blue-800" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;

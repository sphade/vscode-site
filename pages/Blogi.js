import Head from "next/head";
import Buttons from "@components/Buttons";
import Code from "@components/Code";
import { motion } from "framer-motion";
import AnimatedBox from "@components/AnimatedBox";
import { useEffect } from "react";
import { themeChange } from "theme-change";

export default function Blog() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1.5,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <motion.div className=" bg-primary text-gray-300">
      <Head>
        <title>Lawal Adebola</title>
        <meta name="description" content="lawal Adebola portfolio website" />
      </Head>
      <button data-set-theme="" data-act-class="ACTIVECLASS">
        qwrqwrwqr
      </button>
      <button data-set-theme="dark" data-act-class="ACTIVECLASS">
        wqrqwrr
      </button>
      <button data-set-theme="pink" data-act-class="ACTIVECLASS">
        wrqrw
      </button>
      <select data-choose-theme>
        <option value="">Default</option>
        <option value="dark">Dark</option>
        <option value="pink">Pink</option>
      </select>
      <div data-tip="hello" className="tooltip tooltip-right">
        <button className="btn">Hover me</button>
      </div>

      <div className="collapse w-96 border rounded-box border-base-300 collapse-arrow">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          I open/close with click
        </div>
        <div className="collapse-content">
          <p>
            Collapse content reveals with focus. If you add a checkbox, you can
            control it using checkbox instead of focus. Or you can
            force-open/force-close using
            <span className="badge badge-outline">collapse-open</span> and
            <span className="badge badge-outline">collapse-close</span> classes.
          </p>
        </div>
      </div>

      <div className="mockup-code">
        <pre data-prefix="1">
          <code>npm i frontend-developer</code>
        </pre>
        <pre data-prefix="2">
          <code>installing...</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Done!</code>
        </pre>
      </div>
      <div className="dropdown dropdown-end">
        <div tabindex="0" className="m-1 btn">
          Dropdown
        </div>
        <ul
          tabindex="0"
          className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>

      <div className="w-full shadow stats">
        <div className="stat place-items-center place-content-center">
          <div className="stat-title">Downloads</div>
          <div className="stat-value">310M</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>
        <div className="stat place-items-center place-content-center">
          <div className="stat-title">New Users</div>
          <div className="stat-value text-success">4,200</div>
          <div className="stat-desc text-success">↗︎ 400 (22%)</div>
        </div>
        <div className="stat place-items-center place-content-center">
          <div className="stat-title">New Registers</div>
          <div className="stat-value text-error">1,200</div>
          <div className="stat-desc text-error">↘︎ 90 (14%)</div>
        </div>
      </div>
    </motion.div>
  );
}

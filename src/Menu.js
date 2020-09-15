import React from 'react';

import { useRecoilState } from "recoil";
import { view as viewAtom } from "./atoms";

export default () => {
  const viewOptions = ["users", "posts", "todos"];
  const [view, setView] = useRecoilState(viewAtom);

  return(
    <nav>
      {
        viewOptions.map((v)=>{
          return(
            <li>
              <a
                className={view === v ? "text-bold": ""}
                href="#"
                onClick={()=>setView(v)}
              >
                {v}
              </a>
            </li>
          )
        })
      }
    </nav>
  )
}
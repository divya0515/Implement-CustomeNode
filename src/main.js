import * as editor from "./editor/editor.js";
import { log } from "./editor/log.js";

function init({ defaultNodes }) {
  
  function onNodesChange(nodes) {
    try {
      //displayMesh({ nodes });
      log("RR001: here is where the node change function call is updated")
    } catch (err) {
      console.error(err);
    }
  }

  editor.render({ onNodesChange, defaultNodes });
}

Promise.all([
  fetch("/defaults/nodes.json").then((r) => r.json()),
  fetch("/demo1.json").then((r) => r.json()),
])
  .then(([nodes, demo]) => {
    window.default_project = demo;
    

    const defaultNodes = nodes.reduce((ret, node) => {
      ret[node.type] = node;
      return ret;
    }, {});
    init({ defaultNodes });
  })
  .catch(console.error);


console.log(
  `%c👋 ThreeGN, build ${_HASH_}`,
  "color: rgb(160, 100, 255); font-size: 16px; font-weight: 500; text-shadow: 1px 1px rgb(23 255 199);"
);

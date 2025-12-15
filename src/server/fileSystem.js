const fileTree = {
    "/": {
      bin: {},
      etc: {},
      var: {},
      www: {
        "index.html": "<h1>Hello Internet</h1>",
        images: {},
        logs: {
          "access.log": "127.0.0.1 - - [GET /index.html]"
        }
      }
    }
  };
  
  export function listDir(path) {
    const node = resolvePath(path);
    if (!node) return ["Directory not found"];
    return Object.keys(node);
  }
  
  export function changeDir(path, target) {
    if (!target) return path;
    if (target === "..") return "/";
    return "/" + target;
  }
  
  export function readFile(path, file) {
    const node = resolvePath(path);
    if (node && typeof node[file] === "string") {
      return node[file].split("\n");
    }
    return ["File not found"];
  }
  
  export function tree(path, indent = "") {
    const node = resolvePath(path);
    if (!node) return [];
  
    let lines = [];
    for (const key in node) {
      lines.push(indent + key);
      if (typeof node[key] === "object") {
        lines = lines.concat(tree("/" + key, indent + "  "));
      }
    }
    return lines;
  }
  
  function resolvePath(path) {
    if (path === "/") return fileTree["/"];
    const key = path.replace("/", "");
    return fileTree["/"][key];
  }
  
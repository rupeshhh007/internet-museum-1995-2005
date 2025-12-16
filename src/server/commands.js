import * as FS from "./fileSystem";
import * as NET from "./Network";

export function execute(cmd, context) {
  const { cwd, setCwd, reboot } = context;

  if (!cmd) return [];

  const parts = cmd.trim().split(" ");
  const base = parts[0];

  switch (base) {
    /* ================= SYSTEM ================= */

    case "help":
      return [
        "Available commands:",
        "abhinav : help clear uptime whoami date reboot ps",
        "network: ping traceroute ifconfig netstat nslookup",
        "files  : ls cd pwd cat tree",
        "misc   : hack exit"
      ];

    case "uptime":
      return ["Uptime: 12 days, 4 hours, 33 minutes"];

    case "whoami":
      return ["root"];

    case "date":
      return [new Date().toString()];

    case "ps":
      return [
        "PID   PROCESS",
        "101   httpd",
        "102   ftpd",
        "103   named",
        "104   inetd"
      ];

    case "reboot":
      reboot();
      return [];

    case "clear":
      return ["__CLEAR__"];

    /* ================= FILE SYSTEM ================= */

    case "pwd":
      return [`/server${cwd}`];

    case "ls":
      return FS.listDir(cwd);

    case "cd":
      if (!parts[1]) return ["usage: cd <directory>"];
      setCwd(FS.changeDir(cwd, parts[1]));
      return [];

    case "cat":
      if (!parts[1]) return ["usage: cat <file>"];
      return FS.readFile(cwd, parts[1]);

    case "tree":
      return FS.tree(cwd);

    /* ================= NETWORK ================= */

    case "ping":
      return NET.ping(parts[1] || "localhost");

    case "traceroute":
      return NET.traceroute(parts[1] || "destination");

    case "ifconfig":
      return NET.ifconfig();

    case "netstat":
      return NET.netstat();

    case "nslookup":
      return NET.nslookup(parts[1] || "example.com");

    /* ================= MISC ================= */

    case "hack":
      return [
        "ACCESS DENIED",
        "This incident will be reported."
      ];

    case "exit":
      return ["Session terminated."];

    /* ================= FALLBACK ================= */

    default:
      return [`Command not found: ${cmd}`];
  }
}

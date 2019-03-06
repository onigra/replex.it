export interface ReplInfo {
  id: string;
  title: string;
  command: string;
  keyword: string;
}

const Repls: Array<ReplInfo> = [
  {
    id: "Ruby",
    title: "Ruby(irb, pry)",
    command: "exit",
    keyword: "ruby irb pry"
  },
  {
    id: "Node",
    title: "Node.js",
    command: "process.exit();",
    keyword: "node js javascript"
  },
  {
    id: "Python",
    title: "Python",
    command: "quit()",
    keyword: "python"
  },
  {
    id: "Java",
    title: "Java(jshell)",
    command: "/exit",
    keyword: "java jshell"
  },
  {
    id: "Kotlin",
    title: "Kotlin",
    command: ":quit",
    keyword: "kotlin"
  },
  {
    id: "Swift",
    title: "Swift",
    command: ":exit",
    keyword: "swift"
  },
  {
    id: "Haskell",
    title: "Haskell(ghci)",
    command: ":quit",
    keyword: "haskell ghci"
  },
  {
    id: "PHP",
    title: "PHP",
    command: "exit",
    keyword: "php"
  },
  {
    id: "MySQL",
    title: "MySQL",
    command: "exit",
    keyword: "mysql db"
  },
  {
    id: "PostgreSQL",
    title: "PostgreSQL",
    command: "\\q",
    keyword: "postgresql db"
  },
  {
    id: "SQLite",
    title: "SQLite",
    command: ".exit",
    keyword: "sqlite db"
  }
];

export default Repls;

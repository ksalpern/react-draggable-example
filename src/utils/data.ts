import { Card, Column } from "./types";

export const DEFAULT_CARDS: Card[] = [
  // BACKLOG
  { title: "", id: "1", column: "backlog" },
  { title: "Add dark mode 🧚", id: "2", column: "backlog" },
  { title: "👀 Add drag and drop 👀", id: "3", column: "backlog" },
  { title: "Add tests 🙈", id: "4", column: "backlog" },
  // TODO
  {
    title: "Add drag and drop to mobile 👽",
    id: "5",
    column: "todo",
  },
  { title: "👻 Add toast notifications 👻", id: "6", column: "todo" },
  { title: "Add user authentication 💔", id: "7", column: "todo" },
  // DOING
  {
    title: "🚀 Add drag and drop to mobile 🚀",
    id: "8",
    column: "doing",
  },
  { title: "Set up Express server 🙈", id: "9", column: "doing" },
  { title: "Set up Lambda function", id: "10", column: "doing" },
  { title: "Add tests to new endpoints 💥💯", id: "11", column: "doing" },
  { title: "Migrate to TypeScript", id: "12", column: "doing" },
  { title: "Set up CI/CD pipeline", id: "13", column: "doing" },
  { title: "Create react draggable example", id: "14", column: "doing" },
  { title: "Create react dnd example", id: "15", column: "doing" },
  { title: "Create dashboard page 🤌👌", id: "16", column: "doing" },
  { title: "Create user profile page", id: "17", column: "doing" },
  { title: "Create settings page", id: "18", column: "doing" },
  { title: "Create dark mode toggle", id: "19", column: "doing" },
  // DONE
  {
    title: "✨ Update README ✨",
    id: "20",
    column: "done",
  },
  {
    title: "💣 Create draggable component witout libs 💣",
    id: "21",
    column: "done",
  },
];

export const COLUMNS_DATA: Column[] = [
  { title: "Backlog", id: "backlog", backgroundColor: "text-neutral-500" },
  { title: "To Do", id: "todo", backgroundColor: "bg-red-600/30" },
  { title: "In Progress", id: "doing", backgroundColor: "bg-sky-600/30" },
  { title: "Done", id: "done", backgroundColor: "bg-green-600/30" },
];

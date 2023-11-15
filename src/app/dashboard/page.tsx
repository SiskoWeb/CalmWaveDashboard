import TodoList from "./features/todoList/TodoList";
import ToolsBar from "./features/toolsBar/ToolsBar";

import BackgroundLayout from "./layout";

export default function dashboard() {
  return (
    <BackgroundLayout>
      <TodoList />
      <ToolsBar />
    </BackgroundLayout>
  );
}

import TodoList from "./features/todoList/TodoList";
import ToolsBar from "./features/toolsBar/ToolsBar";

import BackgroundLayout from "./layout";

export default function dashboard() {
  return (
    <BackgroundLayout>
      <div className="fixed top-20 left-5 ">
        <TodoList />
      </div>

      <div>
        <ToolsBar />
      </div>
    </BackgroundLayout>
  );
}

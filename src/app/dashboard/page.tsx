import SoundEffectBtn from "./features/SoundsBtns/SoundEffectBtn";
import TodoList from "./features/todoList/TodoList";
import ToolsBar from "./features/toolsBar/ToolsBar";

import BackgroundLayout from "./layout";

export default function Dashboard() {
  return (
    <BackgroundLayout>
      <SoundEffectBtn />
      <TodoList />
      <ToolsBar />
    </BackgroundLayout>
  );
}

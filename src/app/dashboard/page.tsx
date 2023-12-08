// import SoundEffectBtn from "./features/SoundsBtns/SoundEffectBtn";
import TodoList from "./features/todoList/TodoList";
import ToolsBar from "./features/toolsBar/ToolsBar";

import BackgroundLayout from "./layout";
import dynamic from "next/dynamic";

const SoundEffectBtn = dynamic(
  () => import("./features/SoundsBtns/SoundEffectBtn"),
  {
    ssr: false,
  }
);

// Use DynamicComponentWithNoSSR in your component tree

export default function Dashboard() {
  return (
    <BackgroundLayout>
      <SoundEffectBtn />
      <TodoList />
      <ToolsBar />
    </BackgroundLayout>
  );
}

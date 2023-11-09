import Button from "../../components/Button";
import { FaClockRotateLeft, FaXmark } from "react-icons/fa6";

export default function Timer() {
  return (
    <Button icon={<FaClockRotateLeft />} style="bottom-20 h-[200px] w-[300px]">
      Timer
    </Button>
  );
}

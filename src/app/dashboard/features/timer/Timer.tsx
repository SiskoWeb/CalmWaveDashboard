import Button from "../../components/Button";
import { FaClockRotateLeft, FaXmark } from "react-icons/fa6";

export default function Timer() {
  return (
    <Button icon={<FaClockRotateLeft />} height="h-[200px]" width="w-[300px]">
      Timer
    </Button>
  );
}

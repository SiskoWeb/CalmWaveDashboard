import { FaRegImage, FaXmark } from "react-icons/fa6";
import Button from "../../components/Button";

export default function BtnChangeBG() {
  return (
    <Button icon={<FaRegImage />} height="h-[200px]" width="w-[300px]">
      <div className="overflow-x-scroll h-full">
        <h2>Backgound gallery</h2>
        <p>This is the content of the Todo.</p>
      </div>
    </Button>
  );
}

import { FaRegImage } from "react-icons/fa6";
import Button from "../../components/Button";

export default function BtnChangeBG() {
  return (
    <Button icon={<FaRegImage />} style="bottom-20 h-[200px] w-[60%]">
      <div className="overflow-x-scroll h-full">
        <h2>Change Backgound</h2>
      </div>
    </Button>
  );
}

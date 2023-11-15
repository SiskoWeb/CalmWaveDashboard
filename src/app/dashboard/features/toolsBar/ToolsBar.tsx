import BtnChangeBG from "../background/BtnChangeBG";
import MusicPlayer from "../musicPlayer/MusicPlayer";
import Timer from "../timer/Timer";
import YoutubePlayer from "../youtubePlayer/YoutubePlayer";

export default function ToolsBar() {
  return (
    <div className="fixed bottom-[20px]  w-full px-40  h-50 flex justify-center">
      <div className="text-white  bg-black/75 rounded-sm h-[35px] flex items-center px-4 gap-6">
        <MusicPlayer />
        <span className="w-[1px] bg-white/40 rounded-sm h-[50%]"></span>
        <BtnChangeBG />
        <span className="w-[1px] bg-white/40 rounded-sm h-[50%]"></span>
        <Timer />
        <span className="w-[1px] bg-white/40 rounded-sm h-[50%]"></span>

        <YoutubePlayer />
      </div>
    </div>
  );
}

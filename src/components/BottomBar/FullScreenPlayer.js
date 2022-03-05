import CustomRange from "components/CustomRange";
import { Icon } from "Icon";
import { useSelector } from "react-redux";
import secondsToTime from "utils";

function FullScreenPlayer({ toggle, state, controls, volumeIcon }) {
  const { current } = useSelector((state) => state.player);

  return (
    <div className="h-full relative" onClick={controls[state?.playing ? "pause" : "play"]}>
      <div
        className="absolute inset-0 object-cover bg-center bg-cover blur-md opacity-30"
        style={{ backgroundImage: `url(${current.image})` }}>
            </div>

            <div className={"absolute opacity-70 top-16 left-8 text-white flex items-center"}>
                    <Icon name="logoIcon" size="34"/>
                    <div className="text-xs px-2">
                        <p>
                           PLAYING FROM PLAYLIST 
                        </p>
                        <h6 className="font-semibold mt-0.5">
                            {current.title}
                        </h6>
                    </div>

                </div>
            <div className="absolute left-8 bottom-36  flex items-center gap-x-5">
            <img src={current.image} className="w-24 h-24 object-cover"></img>
            <div className="self-end ">
                <h3 className="text-2xl font-semibold">{current.title}</h3>
                <p className="text-sm font-medium opacity-50">{current.description}</p>
            </div>
          </div>
      <div onClick={e=>{
          e.stopPropagation()
      }} className="w-full absolute bottom-4 flex flex-col px-8 items-center">
        <div className="w-full flex items-center mb-1.5 gap-x-2">
          <div className="text-[0.688rem text-white text-opacity-70">
            {secondsToTime(state?.time)}
          </div>
          <CustomRange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={(value) => controls.seek(value)}
          />
          <div className="text-[0.688rem text-white text-opacity-70">
            {secondsToTime(state?.duration)}
          </div>
        </div>
        <div className="flex items-center gap-x-5">
          <button className="w-8 h-8 items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            {" "}
            <Icon name={"shuffle"} size={"24"} />
          </button>
          <button className="w-8 h-8 items-center justify-center text-white text-opacity-70 hover:text-opacity-100 ">
            {" "}
            <Icon name={"playerPrev"} size={"24"} />
          </button>
          <button
            className="w-16 h-16 flex items-center justify-center  text-black bg-white  rounded-full hover:scale-[1.08]"
            onClick={
                controls[state?.playing ? "pause" : "play"]
            }
          >
            {" "}
            <Icon name={state?.playing ? "pause" : "play"} size={"16"} />
          </button>
          <button className="w-8 h-8 items-center justify-center text-white text-opacity-70 hover:text-opacity-100 px-1">
            {" "}
            <Icon name={"playerNext"} size={"24"} />
          </button>
          <button className="w-8 h-8 items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            {" "}
            <Icon name={"repeat"} size={"24"} />
          </button>
        </div>
        <div className="flex items-center absolute bottom-3 right-6 gap-x-3">
          <button
            onClick={
                controls[state.muted ? "unmute" : "mute"]
            }
            className="w-8 h-8 items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
          >
            {" "}
            <Icon name={volumeIcon} size={"16"} />
          </button>
          <div style={{ width: "93px" }}>
            <CustomRange
              step={0.1}
              min={0}
              max={1}
              value={state.muted ? 0 : state?.volume}
              onChange={(value) => {
                controls.unmute();
                controls.volume(value);
              }}
            />
          </div>
          <button
            onClick={()=>
                 toggle(false)
            }
            className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
          >
            <Icon size={16} name="fullScreenOff" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FullScreenPlayer;

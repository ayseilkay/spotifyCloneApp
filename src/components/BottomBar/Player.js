import CustomRange from 'components/CustomRange';
import {useMemo, useState} from 'react'
import {useAudio} from 'react-use';
import { Icon } from 'Icon'
import secondsToTime from 'utils';
function Player() {
  const STEP = 0.1;
  const MIN = 0;
  // const [values,setValues] = useState([50]);//artık react-use dan gelen state deki time benim values degerim olacak
  const [audio, state, controls, ref] = useAudio({
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    autoPlay: true,
  });

  const volumeIcon = useMemo(()=>{
      if(state.volume === 0 || state.muted){
          return 'volumeMute'
      }
      if(state.volume > 0 && state.volume <0.33){
        return 'volumeLow'
      }
      if(state.volume >= 0.33 && state.volume < 0.66){
        return 'volumeNormal'
      }
      else{
        return 'volumeFull'
      }
  },[state.volume,state.muted])
  return (
    <div className='flex justify-between items-center h-full px-4'>
        Player
        <div className='min-w-[11.25rem] w-[30%]'> 
           sol
        </div>
        <div className='max-w-[45.125rem] w-[40%] flex flex-col items-center'>
           <div className='flex items-center gap-x-2'>
              <button className='w-8 h-8 items-center justify-center text-white text-opacity-70 hover:text-opacity-100'> <Icon name={"shuffle"} size={"16"}/></button>
              <button className='w-8 h-8 items-center justify-center text-white text-opacity-70 hover:text-opacity-100 '> <Icon name={"playerPrev"} size={"16"}/></button>
              <button onClick={controls[state?.playing ? 'pause' : 'play' ]} className='w-8 h-8 flex items-center justify-center  text-black bg-white  rounded-full hover:scale-[1.08]'> <Icon name={state?.playing ? 'pause' :'play'} size={"16"}/></button>
              <button className='w-8 h-8 items-center justify-center text-white text-opacity-70 hover:text-opacity-100 px-1'> <Icon name={"playerNext"} size={"16"}/></button>
              <button className='w-8 h-8 items-center justify-center text-white text-opacity-70 hover:text-opacity-100'> <Icon name={"repeat"} size={"16"}/></button>
            </div>
            <div className='w-full flex items-center gap-x-2'>
              {audio}
              <div className='text-[0.688rem text-white text-opacity-70'>
          {secondsToTime(state?.time)}
              </div>
            <CustomRange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={value =>controls.seek(value) }
            />
        <div className='text-[0.688rem text-white text-opacity-70'>
          {secondsToTime(state?.duration)}
        </div>
            </div>
        </div>
        <div className='min-w-[11.25rem] w-[30%] flex items-center justify-end'>
        <button className='w-8 h-8 items-center justify-center text-white text-opacity-70 hover:text-opacity-100'> <Icon name={"lyrics"} size={"16"}/></button>
        <button className='w-8 h-8 items-center justify-center text-white text-opacity-70 hover:text-opacity-100'> <Icon name={"queue"} size={"16"}/></button>
        <button className='w-8 h-8 items-center justify-center text-white text-opacity-70 hover:text-opacity-100'> <Icon name={"device"} size={"16"}/></button>
        <button onClick = {controls[state.muted ? 'unmute' : 'mute']} className='w-8 h-8 items-center justify-center text-white text-opacity-70 hover:text-opacity-100'> <Icon name={volumeIcon} size={"16"}/></button>
          <div style={{width:"93px"}}>
            <CustomRange
                    step={0.1}
                    min={0}
                    max={1}
                    value={state.muted ? 0 : state?.volume }
                    onChange={value => {
                      controls.unmute()
                      controls.volume(value)}}
                    />
          </div>
        </div>
    </div>
  )
}

export default Player
import CustomRange from 'components/CustomRange';
import {useEffect, useMemo, useState} from 'react'
import {useAudio} from 'react-use';
import { Icon } from 'Icon'
import secondsToTime from 'utils';
import { useDispatch, useSelector } from 'react-redux';
import { setControls,setPlaying,setSideBar } from 'components/stores/player';
function Player() {
  const STEP = 0.1;
  const MIN = 0;

  const dispatch = useDispatch()
  const {current,sidebar} = useSelector(state => state.player)
  // const [values,setValues] = useState([50]);//artık react-use dan gelen state deki time benim values degerim olacak
  const [audio, state, controls, ref] = useAudio({
    src: current?.src ,
    autoPlay: true,
  });

  useEffect(()=>{
    controls.play()
  },[current])

  // useEffect(()=>{
  //   // dispatch(setControls(controls))
  // })

  useEffect(()=>{
    dispatch(setPlaying(state.playing))
  },[state.playing])
 
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
    <div className='flex px-4 justify-between items-center h-full '>
        <div className='min-w-[11.25rem] w-[30%]'> 
           
                {current && (
                  <div className='flex items-center'>
                      <div className='flex items-center mr-3'>
                        {!sidebar && (
                                <div className='w-14 h-14 mr-3 relative group flex-shrink-0'>
                                
                                <button onClick={()=>dispatch(setSideBar(true))} className='w-6 h-6 bg-black opacity-0 group-hover:opacity-100 hover:scale-[1.06] rotate-90 rounded-full absolute top-1 right-1  flex items-center justify-center mr-4'>
                                  <Icon name={"arrowIcon"} size={24} />
                                </button>
                                <img style={{width:"50px"}} src={current.image}/>
                                </div>
                        )}
                   
                        <div style={{marginLeft:"10px"}}>
                          <h6 className='text-sm line-clamp-1'>{current.title}</h6>
                          <p className='text-[0.688rem] text-white text-opacity-70'>{current.artist}</p>
                        </div>
                  </div>
                  <button className='w-8 h-8 items-center justify-center text-white text-opacity-70 hover:text-opacity-100 px-1'> <Icon name={"heartFilled"} size={"16"}/></button>
                  <button className='w-8 h-8 items-center justify-center text-white text-opacity-70 hover:text-opacity-100 px-1'> <Icon name={"pictureInpicture"} size={"16"}/></button>
                  </div>
                  
                ) }
             
        </div>
        <div className='max-w-[45.125rem] w-[40%] flex flex-col px-4 items-center'>
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
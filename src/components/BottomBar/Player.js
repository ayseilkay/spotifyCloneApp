import { Icon } from 'Icon'
import React, { useState } from 'react'
import { Range, getTrackBackground } from "react-range";

function Player() {
  const STEP = 0.1;
  const MIN = 0;
  const MAX = 100;
  const [values,setValues] = useState([50]);
  return (
    <div className='flex justify-between items-center h-full px-4'>
        Player
        <div className='min-w-[11.25rem] w-[30%]'> 
            sol
        </div>
        <div className='max-w-[45.125rem] w-[40%] flex flex-col items-center'>
           <div className='flex items-center gap-x-2'>
              <button className='w-8 h-8 items-center justify-center text-white text-opacity-70 hover:text-opacity-100'> <Icon name={"shuffle"} size={"16"}/></button>
              <button className='w-8 h-8 items-center justify-center text-white text-opacity-70 hover:text-opacity-100'> <Icon name={"playerPrev"} size={"16"}/></button>
              <button className='w-8 h-8 flex items-center justify-center align-middle text-black bg-white  rounded-full hover:scale-[1.08]'> <Icon name={"play"} size={"16"}/></button>
              <button className='w-8 h-8 items-center justify-center text-white text-opacity-70 hover:text-opacity-100'> <Icon name={"playerNext"} size={"16"}/></button>
              <button className='w-8 h-8 items-center justify-center text-white text-opacity-70 hover:text-opacity-100'> <Icon name={"repeat"} size={"16"}/></button>
            </div>
            <div className='w-full'>
            <Range
          values={values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => setValues(values )}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              className='w-full h-7 flex group'
              style={{
                ...props.style
              }}
            >
              <div
                ref={props.ref}
                className='h-1 w-full rounded-md self-center'
                style={{
                  background: getTrackBackground({
                    values: values,
                    colors: ["#1db954", "#535353"],
                    min: MIN,
                    max: MAX
                  })
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              className={`h-3 w-3 rounded-full bg-white ${!isDragged ? 'opacity-0' : ''} group-hover:opacity-100 `}
              style={{
                ...props.style,
                boxShadow: "0px 2px 4px 0 rgb(0 0 0 / 50%)"
              }}
           />
          
          )}
        />
            </div>
        </div>
        <div className='min-w-[11.25rem] w-[30%] flex justify-end'>
            sağ
        </div>
    </div>
  )
}

export default Player
import React from 'react'
import '../styles/LongContentCard.css'

const LongContentCard = (props) => {
  return (
    <div className="w-1/2">
      <div className="longcontentcard_wrap">
        <div className="longcontentcard_img_wrap rounded-lg">
          <img src={props.imageUrl} alt={props.nation} />
        </div>
        <div className="longcontentcard_subtitle">
          {props.nation}
        </div>
        <div>
          {props.desc}
        </div>
        <div>
          {props.price}
        </div>
        <div className="longcontentcard_subtitle">
          ★ {props.stats} ({props.reviews})
        </div>
      </div>
    </div>
  )
}

export default LongContentCard
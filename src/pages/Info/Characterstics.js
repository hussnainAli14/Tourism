import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useLangTranslation } from '../../languageSupport/useLangTranslation';
import CharactersticsItem from '../../components/InfoPageComponents/CharactersticsItem';
import './infoStyles.css'
const Characterstics = () => {
    const language = useSelector((state) => state.language.lang);
    const [screenText, setScreenText] = useState({});
    const text = useLangTranslation(language, "infoPage");
    useEffect(() => {
      setScreenText(text);
    }, [language, text]);
    const characterstic=[
        {
            title:screenText.year,
            context:'2023'
        },{
            title:screenText.body,
            context:'SUV'
        },{
            title:screenText.power,
            context:'380 ch'
        },{
            title:screenText.engine,
            context:'V8'
        },{
            title:screenText.fuel,
            context:'Essence'
        },{
            title:screenText.gear,
            context:'Automatique'
        },{
            title:screenText.consumption,
            context:'6,6l/100 Km'
        },{
            title:screenText.co2,
            context:'256 - 251 g/km'
        },
    ]
  return (
    <div className='characterstic_main' >
      <p className='characterstic_heading' >{screenText.charcterstics}</p>
      <div className='characterstic_items_container' >
        {
            characterstic.map((item,index)=>(
                <CharactersticsItem title={item.title} context={item.context} key={index} />
            ))
        }
      </div>
    </div>
  )
}

export default Characterstics

import { useState, useEffect } from 'react'
import HetkeIlm from "../HetkeIlm"
import IlmaEnnustus from "../IlmaEnnustus"

const IlmaInfo = () => {
    const [ilm, setIlm] = useState({})

    useEffect(() => {
        const kysiIlmateadet = async () => {
            const ilmaDataJson = await fetch('https://goweather.herokuapp.com/weather/Tallinn')
            const ilmaData = await ilmaDataJson.json()
            setIlm(ilmaData)
        }
        kysiIlmateadet();
    }, [])

    return (
        <div>
            <HetkeIlm temp={ilm.temperature} tuul={ilm.wind} kirjeldus={ilm.description} />
            <IlmaEnnustus forecast={ilm.forecast} />
        </div>
    )
}

export default IlmaInfo
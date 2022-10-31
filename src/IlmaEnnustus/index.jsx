const IlmaEnnustus = (props) => {
    console.log(props.forecast);
    return <div>
        {props.forecast && props.forecast.map((ilm) => <YhePaevaEnnustus ilm={ilm} />)}
    </div>
}

export default IlmaEnnustus
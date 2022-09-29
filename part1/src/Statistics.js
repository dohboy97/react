function Statistics (props){
    let avg = (((props.good)-(props.bad))/(props.good+props.bad+props.neutral))
    let positive = (props.good/(props.good+props.bad+props.neutral))*100


    if(props.good+props.bad+props.neutral === 0){
        return(
        
        <div>
            <p>Nothing to display</p>
        </div>
    )
        }
        return(
            <div>
            <p>{`Average:${avg}`}</p>
            <p>{`Positive:${positive}%`}</p>
        </div>
        )
    
}
export default Statistics
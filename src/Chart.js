import classes from './Chart.module.css'
import ChartBar from './ChartBar'

const Chart = (props) => {


    let procentageCSS = props.procentage + "%"
  
    return <div >
        <div className={classes.wrapper}>{props.procentage &&
            <p className={classes.badge}> {props.procentage} %</p>}

            <h3 >completed </h3>

        </div>
        <ChartBar procentageCSS={procentageCSS} />
    </div>
}

export default Chart
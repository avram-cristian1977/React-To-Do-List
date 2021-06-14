import classes from './Chart.module.css'
const ChartBar = (props) => {
    return <div className={classes.fullChart}>
    <div className={classes.taskFill} style={{ width: props.procentageCSS }}></div>
</div>
}

export default ChartBar
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const overallMax = Math.max(...dataValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={overallMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

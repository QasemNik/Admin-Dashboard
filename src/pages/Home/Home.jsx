import Features from "../../components/Features/Features"
import './Home.css'
import ReChart
  from "../../components/Charts/ReCharts"
import {XAxisData, years} from "../../../data.js"
import WidgetSm from "../../components/widgets/widgetsm/WidgetSm.jsx"
import WidgetLg from "../../components/widgets/WidgetLg.jsx"
function Home() {
  return (
    <>
      <div className="home">
        <Features />
        <ReChart grid title="Monthly" data={XAxisData} dataKey="sale" />
        <ReChart grid title="Yearly" data={years} dataKey="sale" />
        <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
        
        </div>
      </div>
    </>
  )
}

export default Home

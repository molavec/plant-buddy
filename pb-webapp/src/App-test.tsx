import './App.css';
import ChartBox from './components/ChartBox';
import CardContainer from './components/CardContainer';
import NivoLineChartExample from './components/NivoLineChartExample';

import EChartTemp from './components/EChartTemperature';
import EChartPH from './components/EChartPH';
import EChartH from './components/EChartHumidity';
import EChartHth from './components/EChartHealth';
const App = () => {

  return (
    <>

      <div className="text-3xl text-rose-600">
        Wellcome to Tailwind CSS
      </div>
      
      <CardContainer>
        <ChartBox>
          <NivoLineChartExample/>
        </ChartBox>
      </CardContainer>
      
      <ChartBox>
        <EChartTemp/>
      </ChartBox>
      <ChartBox>
        <EChartH />
      </ChartBox>
      <ChartBox>
        <EChartPH/>
      </ChartBox>
      <ChartBox>
        <EChartHth/>
      </ChartBox>

    </>
  );
}

export default App;

import GlobalStyle from "./styles/globalStyle";
import { FormInvest } from "./components/form/index";
import { InvestSimulator } from "./components/investSimulation";

function App() {
	return (
		<>
			<div className="App">
				<InvestSimulator />
			</div>
		</>
	);
}

export default App;

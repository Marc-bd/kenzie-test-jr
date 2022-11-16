import { FormInvest } from "./../form/index";
import { Background, Container, ContentForm, ContentResult } from "./style";
import { useSelector } from "react-redux";

export const InvestSimulator = () => {
	const valuesStore = useSelector(({ values }) => values.payload);

	return (
		<>
			{" "}
			<Background>
				<Container>
					<ContentForm>
						<h1>Simule sua Antecipação</h1>
						<FormInvest />
					</ContentForm>

					<ContentResult>
						<div className="titleResult">
							<h2>você receberá:</h2>
						</div>
						<ul>
							{valuesStore ? (
								Object.keys(valuesStore[0]).map((key, index) => {
									return (
										<li key={index}>
											{key}
											<span className="prefix">
												<span className="value"> {valuesStore[0][key]}</span>
											</span>
										</li>
									);
								})
							) : (
								<>
									<li>
										amanhã:{" "}
										<span className="prefix">
											R$<span className="value">0,00</span>
										</span>
									</li>
									<li>
										Em 15 dias:{" "}
										<span className="prefix">
											R$<span className="value">0,00</span>
										</span>
									</li>
									<li>
										Em 30 dias:{" "}
										<span className="prefix">
											R$<span className="value">0,00</span>
										</span>
									</li>
									<li>
										Em 90 dias:{" "}
										<span className="prefix">
											R$<span className="value">0,00</span>
										</span>
									</li>
								</>
							)}
						</ul>
					</ContentResult>
				</Container>
			</Background>
		</>
	);
};

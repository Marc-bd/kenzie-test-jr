import { FormInvest } from "./../form/index";
import { Background, Container, ContentForm, ContentResult } from "./style";

export const InvestSimulator = () => {
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
						</ul>
					</ContentResult>
				</Container>
			</Background>
		</>
	);
};

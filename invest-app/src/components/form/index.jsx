import { BaseInput } from "../baseInput";
import { Container } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const FormInvest = () => {
	const formSchema = yup.object().shape({
		ammount: yup
			.number()
			.required("Campo obrigatório!!")
			.typeError("Apenas números"),
		installments: yup
			.number()
			.required("Campo obrigatório!!")
			.typeError("Apenas números")
			.min(1, "Numero mínimo: 1")
			.max(12, "Excedido nº de parcelas"),
		mdr: yup
			.number()
			.required("Campo obrigatório!!")
			.typeError("Apenas números"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(formSchema) });

	const onSubmitData = (data) => {
		console.log(data);
	};

	return (
		<>
			<Container onSubmit={handleSubmit(onSubmitData)}>
				<BaseInput
					register={register}
					name="ammount"
					id="ammount"
					label="Informe o valor da venda *"
					placeholder="Ex: 400"
					prefix="R$"
					type="text"
					error={errors.ammount?.message}
				/>
				<BaseInput
					register={register}
					name="installments"
					id="installments"
					label="Em quantas parcelas *"
					placeholder="Ex: 12"
					legend="Numero máximo de 12 parcelas"
					type="text"
					error={errors.installments?.message}
				/>

				<BaseInput
					register={register}
					name="mdr"
					id="mdr"
					label="Informe o percentual de MDR *"
					placeholder="Ex: 4"
					type="text"
					error={errors.mdr?.message}
				/>

				<button type="submit">Enviar</button>
			</Container>
		</>
	);
};

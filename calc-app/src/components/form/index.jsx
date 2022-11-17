import { BaseInput } from "../baseInput";
import { Container } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useDispatch } from "react-redux";
import { addValuesThunk } from "../../store/modules/values/thunk";
import { useEffect, useState } from "react";

export const FormInvest = () => {
	const dispatch = useDispatch();
	const [dataForm, setDataForm] = useState();

	const formSchema = yup.object().shape({
		amount: yup
			.number()
			.lessThan(1000, "Valor deve ser maior que 1000")
			.max(100000000, "Valor deve ser menor que 100000000")
			.required("Campo obrigatório!!"),
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

	const onSubmitData = ({ amount, installments, mdr }) => {
		const values = { amount, installments, mdr };

		api
			.post("/", values)
			.then((response) => dispatch(addValuesThunk(response.data)));
	};

	return (
		<>
			<Container onSubmit={handleSubmit(onSubmitData)}>
				<BaseInput
					register={register}
					name="amount"
					id="amount"
					label="Informe o valor da venda *"
					placeholder="Ex: 400"
					prefix="R$"
					type="number"
					legend="De 1.000 até 1.000,000,00"
					error={errors.ammount?.message}
					onClick={(e) => setDataForm({ ...dataForm, amount: e.target.value })}
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
					onClick={(e) =>
						setDataForm({ ...dataForm, installments: e.target.value })
					}
				/>

				<BaseInput
					register={register}
					name="mdr"
					id="mdr"
					label="Informe o percentual de MDR *"
					placeholder="Ex: 4"
					type="text"
					error={errors.mdr?.message}
					onClick={(e) => setDataForm({ ...dataForm, mdr: e.target.value })}
				/>

				<button type="submit">Enviar</button>
			</Container>
		</>
	);
};

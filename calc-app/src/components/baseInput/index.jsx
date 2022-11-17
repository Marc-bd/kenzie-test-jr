import { Container, InputContainer } from "./style";

const BaseInput = ({
	label,
	prefix,
	legend,
	register,
	name,
	error,
	...rest
}) => {
	return (
		<Container>
			<div className="label">{label}</div>
			<InputContainer errors={error}>
				<p>{prefix}</p>
				<input {...rest} {...register(name)} />
			</InputContainer>
			<span className="legend">{legend}</span>
			{error && <span className="errors">{error}</span>}
		</Container>
	);
};

export { BaseInput };

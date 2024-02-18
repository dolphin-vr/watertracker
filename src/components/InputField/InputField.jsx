import { Field } from "formik"
import { StyledField } from "./InputField.styled"

export const InputField = ({ name, type, placeholder }) => {
	return (
		<Field name={name} >
			{ ({ field, meta: { touched, error } }) => <StyledField type={type} placeholder={placeholder} className={ touched && error ? "invalid" : "" } { ...field } /> }
		</Field>
	)
}
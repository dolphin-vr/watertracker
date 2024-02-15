import { Field } from "formik"
import { StyledField } from "./InputField.styled"

export const InputField = ({name, type, placeholder}) => {
	return (
		<Field name={name} type={type} placeholder={placeholder} >
			{ ({ field, meta: { touched, error } }) => <StyledField className={ touched && error ? "invalid" : "" } { ...field } /> }
		</Field>
	)
}
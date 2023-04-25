import { TextField } from "@mui/material";

function STextField(props) {
	const {
		name = "",
		label,
		type = "text",
		size = "normal",
		variant = "outlined",
		placeholder = "",
		fullWidth = true,
		className = "",
		disabled = false,
		multiline = false,
		rows = 2,
		maxRows = 4,
		style,
		value,
		margin = "normal",
		required = true,
		autoFocus = false
	} = props;
	return (
		<TextField
			className={className}
			value={value}
			name={name}
			label={label}
			disabled={disabled}
			fullWidth={fullWidth}
			variant={variant}
			size={size}
			multiline={multiline}
			rows={rows || 1}
			maxRows={maxRows}
			type={type}
			placeholder={placeholder}
			style={style}
			margin={margin}
			required={required}
			autoFocus={autoFocus}
		/>
	);
}

export default STextField;

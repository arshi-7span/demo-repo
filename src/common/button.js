import { Button } from "@mui/material";

function SButton({ children, ...props }) {
	const {
		name = "",
		label,
		size = "normal",
		variant = "contained",
		placeholder = "",
		fullWidth = true,
		className = "",
		disabled = false,
		style,
		value,
		margin = "normal",
		autoFocus = false,
		color = "primary",
		type
	} = props;
	return (
		<Button
			className={className}
			value={value}
			name={name}
			label={label}
			disabled={disabled}
			fullWidth={fullWidth}
			variant={variant}
			size={size}
			type={type}
			placeholder={placeholder}
			style={style}
			margin={margin}
			autoFocus={autoFocus}
			color={color}
		>
			{children}
		</Button>
	);
}

export default SButton;

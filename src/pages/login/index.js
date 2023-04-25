import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import swal from "sweetalert";
import axios from "axios";
import { useState } from "react";
import { API_IP, API_LOGIN, API_PORT, SUCCESS_RESPONSE } from "../../common/constants";
import STextField from "../../common/textField";
import SButton from "../../common/button";

function LoginPage() {
	const [errorMessage, setErroMessage] = useState("");

	async function loginUser(body) {
		console.log(body);
		axios({
			method: "post",
			baseURL: `${API_IP}:${API_PORT}`,
			url: `/${API_LOGIN}/`,
			headers: {},
			data: body
		})
			.then((response) => {
				console.log(response);
				if (response.data.resultCode === SUCCESS_RESPONSE) {
					setErroMessage();
					swal("Success", response.data.resultMessage, "success", {
						buttons: false,
						timer: 2000
					}).then(() => {
						localStorage.setItem("accessToken", response.data.accessToken);
					});
				} else {
					setErroMessage("Incorrect username or password");
				}
			})
			.catch((error) => {
				swal("Error", "Faild", "Error");
				alert(error);
			});
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get("email"),
			password: data.get("password")
		});

		const username = data.get("email");
		const password = data.get("password");
		await loginUser({
			username,
			password
		});
	};

	return (
		<Container component="main" maxWidth="xs">
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center"
				}}
			>
				<Typography component="h1" variant="h5">
					Log in
				</Typography>
				<Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
					{/* textField need seprate component */}
					<STextField
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<STextField
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					<span color="alert">
						<Typography color="red"> {errorMessage} </Typography>
					</span>
					{/* <FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/> */}

					{/* Button Component */}
					<SButton type="submit">Sign In</SButton>

					{/* <Grid container>
						<Grid item xs>
							<Link href="#" variant="body2">
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link href="#" variant="body2">
								Sign Up
							</Link>
						</Grid>
					</Grid> */}
				</Box>
			</Box>
		</Container>
	);
}

export default LoginPage;

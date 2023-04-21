import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const navigate = useNavigate();
	// Axios
	// Axios Utilitys - error handling, common service
	async function loginUser(credentials) {
		return fetch("http://192.168.0.172:8091/login/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(credentials)
		}).then((data) => data.json());
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
		const response = await loginUser({
			username,
			password
		});

		if ("data" in response) {
			swal("Success", response.resultMessage, "success", {
				buttons: false,
				timer: 2000
			}).then(() => {
				localStorage.setItem("accessToken", response.data.accessToken);
				navigate("/home");
			});
		} else {
			swal("Failed", response.resultMessage, "error");
		}
	};

	const handleEnter = async (event) => {
		if (event.key === "Enter") {
			handleSubmit(event);
		}
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
				<Box component="form" onSubmit={handleSubmit} onKeyDownCapture={handleEnter} sx={{ mt: 1 }}>
					{/* textField need seprate component */}
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						// type="email"
						autoComplete="email"
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					{/* Button Component */}
					<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
						Sign In
					</Button>
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
	// return (
	//   <BrowserRouter >
	//     <div className="App">
	//       <Sidebar />
	//     </div>
	//   </BrowserRouter>
	// );
}

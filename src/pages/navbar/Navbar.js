/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
	const [wrapper, setWrapper] = useState("wrapper");
	const handleToggle = () => {
		const wrapperValue = wrapper === "wrapper" ? "wrapper collapse" : "wrapper";
		setWrapper(wrapperValue);
	};

	return (
		<div>
			<div className={wrapper}>
				<div className="header">
					<div className="header-menu">
						<div className="title">
							Exam <span>Portal</span>
						</div>
						<div className="sidebar-btn" onClick={handleToggle} role="button" tabIndex={0}>
							<i className="fas fa-bars" />
						</div>
						<ul>
							{/* <li>
								<a href="/">
									<i className="fas fa-search" />
								</a>
							</li>
							<li>
								<a href="/">
									<i className="fas fa-bell" />
								</a>
							</li> */}
							<li>
								<Link to="/">
									<i className="fas fa-power-off" />
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="sidebar">
					<div className="sidebar-menu">
						<center className="profile">
							<img src="exam-portal.png" alt="" />
						</center>
						<li className="item">
							<a href="/" className="menu-btn">
								<i className="fas fa-desktop" />
								<span>Dashboard</span>
							</a>
						</li>
						<li className="item" id="messages">
							<a href="#messages" className="menu-btn">
								<i className="fas fa-envelope" />
								<span>
									Exam <i className="fas fa-chevron-down drop-down" />
								</span>
							</a>
							<div className="sub-menu">
								<Link to="/">
									<i className="fas fa-envelope" />
									<span>Exam List</span>
								</Link>
								<Link to="/">
									<i className="fas fa-envelope-square" />
									<span>New Exam</span>
								</Link>
								<Link to="/">
									<i className="fas fa-exclamation-circle" />
									<span>View Exam</span>
								</Link>
							</div>
						</li>
					</div>
				</div>

				<div className="main-container">
					<div className="card">
						<p>text</p>
					</div>
					<div className="card">
						<p>text</p>
					</div>
					<div className="card">
						<p>text</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;

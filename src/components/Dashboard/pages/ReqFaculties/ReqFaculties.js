import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CheckIcon from "@mui/icons-material/Check";
import BanIcon from "@mui/icons-material/Close";
import "./ReqFaculties.css";
const ReqFaculties = () => {
	const [reqFac, setReqFac] = useState([]);
	const [reqFac0, setReqFac0] = useState([]);
	const handleYes = (id) => {
		// /admin/verifyOneFaculty/:id
		let formData = new FormData(); 

		formData.append("tag", "verified"); 
		const config = {
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data",
              },
              withCredentials: true
		};
		
		axios
			.put(`http://unionboard-backend.smitghelani.xyz/admin/verifyOneFaculty/${id}`, 
			formData,
			config
			)
			.then((response) => {
				console.log(response.data.faculties);
				setReqFac(response.data.faculties);
			})
			.catch((err) => {
				console.log(err);
			});
			const newItem = reqFac0.filter((newVal) => {
				// return newVal.city === curcat;
				return newVal._id !== id;
			});
			setReqFac(newItem);
	};
	const handleNo = (id) => {
		let formData = new FormData(); 

		formData.append("tag", "unverified"); 
		const config = {
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data",
              },
              withCredentials: true
		};
		axios
			.put(`http://unionboard-backend.smitghelani.xyz/admin/verifyOneFaculty/${id}`,
			formData,
			config
			)
			.then((response) => {
				console.log(response.data.faculties);
				setReqFac(response.data.faculties);
			})
			.catch((err) => {
				console.log(err);
			});
			const newItem = reqFac0.filter((newVal) => {
				// return newVal.city === curcat;
				return newVal._id !== id;
			});
			setReqFac(newItem);
	};
	useEffect(() => {
		//admin/getRequestedFaculties
		axios
			.get("http://unionboard-backend.smitghelani.xyz/admin/getRequestedFaculties",{
				headers: {
						   Accept: "application/json",
						   "Content-Type": 'application/json',
						 },
						 withCredentials: true
			  })
			.then((response) => {
				console.log(response.data.faculties);
				setReqFac0(response.data.faculties);
				setReqFac(response.data.faculties);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<>
			<h1>Requested Faculties</h1>
			<div className="container" style={{display:"flex", flexWrap:"wrap"}}>
				{reqFac.map((data, index) => (
					<>
					<form method="POST" encType="multipart/form-data">
						<div className="container1">
							<div className="product-details">
								<h1>{data.name}</h1>
								<p className="information">{data.email}</p>
								<div className="control">
									<button
										className="btn"
										style={{ backgroundColor: "red" }}
										onClick={() => handleNo(data._id)}
									>
										{/* <span className="price"></span> */}
										<span className="shopping-cart" onClick={() => handleNo(data._id)}>
											<BanIcon style={{ color: "white" }} />
										</span>
										<span className="buy">Deny</span>
									</button>
									<button
										className="btn"
										style={{ backgroundColor: "green" }}
										onClick={() => handleYes(data._id)}
									>
										{/* <span className="price"></span> */}
										<span className="shopping-cart" onClick={() => handleYes(data._id)}>
											<CheckIcon style={{ color: "white" }} />
										</span>
										<span className="buy">Approve</span>
									</button>
								</div>
							</div>

							<div className="product-image">
								<img src={data.IDProff.secure_url} alt="" />
							</div>
						</div>
						</form>
					</>
					
				))}
			</div>
		</>
	);
};

export default ReqFaculties;

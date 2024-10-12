import React from "react";
import { useState,useEffect } from "react";
import "./RankPredictor.css";
const RankPredictor = () => {
	const [gujcetpr, setGujcetpr] = useState(0);
	const [sciencepr, setSciencepr] = useState(0);
	const [rank, setRank] = useState(0);
	const findRank = (event) => {
        event.preventDefault();
		const config = {
			headers: {
				Accept: "application/json",
                "content-Type":"multipart/form-data"
			},
			withCredentials: true,
		};
		let body = new FormData();
		body.append("gujcetPR",gujcetpr);
		body.append("sciencePR",sciencepr);
		// var body = { gujcetPR: gujcetpr, sciencePR: sciencepr };
        console.log(gujcetpr);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ gujcetPR: gujcetpr, sciencePR: sciencepr })
        };
        fetch('https://unionboard-backend.smitghelani.xyz/calculateRank', requestOptions)
            .then(response => response.json())
            .then(data => setRank(data.rank));
		// axios
		// 	.get("https://unionboard-backend.smitghelani.xyz/calculateRank", body, config)
		// 	.then(async(res) => {
		// 	console.log(res);

		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});
		
	};
    useEffect(
        ()=>{

        },[]
    )
	return (
		<>
			<div className="login-root">
				<div
					className="box-root flex-flex flex-direction--column"
					style={{ minHeight: "100vh", flexGrow: "1" }}
				>
					<div className="loginbackground box-background--white padding-top--64">
						<div className="loginbackground-gridContainer">
							<div
								className="box-root flex-flex"
								style={{ gridArea: "top / start / 8 / end" }}
							>
								<div
									className="box-root"
									style={{
										backgroundImage:
											"linear-gradient(white 0%, rgb(247, 250, 252) 33%)",
										flexGrow: "1",
									}}
								></div>
							</div>
							<div
								className="box-root flex-flex"
								style={{ gridArea: "4 / 2 / auto / 5" }}
							>
								<div
									className="box-root box-divider--light-all-2 animationLeftRight tans3s"
									style={{ flexGrow: "1" }}
								></div>
							</div>
							<div
								className="box-root flex-flex"
								style={{ gridArea: "6 / start / auto / 2" }}
							>
								<div
									className="box-root box-background--blue800"
									style={{ flexGrow: "1" }}
								></div>
							</div>
							<div
								className="box-root flex-flex"
								style={{ gridArea: "7 / start / auto / 4" }}
							>
								<div
									className="box-root box-background--blue animationLeftRight"
									style={{ flexGrow: "1" }}
								></div>
							</div>
							<div
								className="box-root flex-flex"
								style={{ gridArea: " 8 / 4 / auto / end" }}
							>
								<div
									className="box-root box-background--gray100 animationLeftRight tans3s"
									style={{ flexGrow: "1" }}
								></div>
							</div>
							<div
								className="box-root flex-flex"
								style={{ gridArea: " 2 / 15 / auto / end" }}
							>
								<div
									className="box-root box-background--cyan200 animationRightLeft tans4s"
									style={{ flexGrow: "1" }}
								></div>
							</div>
							<div
								className="box-root flex-flex"
								style={{ gridArea: " 3 / 14 / auto / end" }}
							>
								<div
									className="box-root box-background--blue animationRightLeft"
									style={{ flexGrow: "1" }}
								></div>
							</div>
							<div
								className="box-root flex-flex"
								style={{ gridArea: " 4 / 17 / auto / 20" }}
							>
								<div
									className="box-root box-background--gray100 animationRightLeft tans4s"
									style={{ flexGrow: "1" }}
								></div>
							</div>
							<div
								className="box-root flex-flex"
								style={{ gridArea: " 5 / 14 / auto / 17" }}
							>
								<div
									className="box-root box-divider--light-all-2 animationRightLeft tans3s"
									style={{ flexGrow: "1" }}
								></div>
							</div>
						</div>
					</div>
					<div
						className="box-root padding-top--24 flex-flex flex-direction--column"
						style={{ flexGrow: "1", zIndex: "9" }}
					>
						<div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center"></div>
						<div className="formbg-outer row">
							<div className="formbg col">
								<div className="formbg-inner padding-horizontal--48">
									<h1>Rank Predictor</h1>
                                
									<span className="padding-bottom--15">
										Enter your Gujcet and Board PR
									</span>
										<div className="field padding-bottom--24">
											<label>Board PR</label>
											<input
												type="text"
												name="sciencepr"
												value={sciencepr}
												onChange={(e) =>
													setSciencepr(e.target.value)
												}
											/>
										</div>
										<div className="field padding-bottom--24">
											<div className="grid--50-50">
												<label>Gujcet PR</label>
											</div>
											<input
												type="text"
												name="gujcetpr"
												value={gujcetpr}
												onChange={(e) =>
													setGujcetpr(e.target.value)
												}
											/>
										</div>

										<div className="field padding-bottom--24">
											<input
												type="submit"
												name="submit"
												onClick={(e) => findRank(e)}
											/>
										</div>
										
								</div>
							</div>
							<div className="col">
								<h1 style={{ fontSize: "70px", marginTop: "50px" }}>
									Your ACPC Rank
								</h1>
                                {rank === 0 && (
                                    <h1 style={{ fontSize: "250px", marginTop: "50px" }}>
									- -
								</h1>
                                )}
                                {rank !== 0 && (
                                    <h1 style={{ fontSize: "250px", marginTop: "50px" }}>
									{rank}
								</h1>
                                )}
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default RankPredictor;

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast-configuration method,
// it is compulsory method.
toast.configure();


const Addreview = ({id}) => {
	const [rating, setRating] = useState(0);
	const [comment, setComment] = useState("");

	const sleep = (milliseconds) => {
		return new Promise(resolve => setTimeout(resolve, milliseconds))
	  }

	const submitData = async (event) => {
		event.preventDefault();

		let formData = new FormData(); //formdata object

		formData.append("rating", rating); //append the values with key, value pair
		formData.append("comment", comment);

		const config = {
			headers: {
				Accept: "application/json",
				"Content-Type": "multipart/form-data",
			},
			withCredentials: true,
		};

			axios
			.put(`https://unionboard-backend.smitghelani.xyz/review/${id}`, formData, config)
			.then(async(response) => {

				setComment('') 
				setRating(0)
				
				toast("Review Added")
				document.location.reload();
			})
			.catch((error) => {
				console.log(error);
				toast(error.message)
			});

	};

	return (
		<div className="ArticleContainer">
			<div className="AddArticle">
				<form>
					<h2>Add Review</h2>
					<input
						type="number"
						value={rating}
						name="Rating"
						placeholder="Rating"
						onChange={(e) => setRating(e.target.value)}
					/>
					<textarea
						onChange={(e) => setComment(e.target.value)}
						name="comment"
						placeholder="Enter Content"
						value={comment}
					></textarea>

					<button
						type="submit"
						className="btn btn-style w-100"
						onClick={submitData
						}
					>
						Submit

					</button>
				</form>
			</div>
		</div>
	);
};
export default Addreview;

import React, { useState } from "react";
import "./AddBlog.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast-configuration method,
// it is compulsory method.
toast.configure();

const AddBlog = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [photo, setPhoto] = useState(null);

	const submitData = async (event) => {
		
		event.preventDefault();

		let formData = new FormData(); 

		formData.append("title", title); 
		formData.append("content", content);
		formData.append("photo", photo);

		const config = {
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data",
              },
              withCredentials: true
		};
		
		 axios
			.post("http://unionboard-backend.smitghelani.xyz/faculty/blog/add", formData, config)
			.then(async(res) => {
				setTitle('')
				setContent('')
				setPhoto({})

				toast(res.message)
				

			})
			.catch((error) => {
				console.log(error);
				toast(error.message)
			});
			
		
	};

	return (
		<div className="ArticleContainer">
			<div className="AddArticle">
				<form method="POST" encType="multipart/form-data">
					<h2>Add Blog</h2>
					<input
						type="text"
						value={title}
						placeholder="Title"
						name="title"
						onChange={(e) => setTitle(e.target.value)}
					/>
					<textarea
						onChange={(e) => setContent(e.target.value)}
						name="content"
						placeholder="Enter Content"
						value={content}
					></textarea>
					<input
						type="file"
						onChange={(e) => setPhoto(e.target.files[0])}
					/>
					<button
						type="submit"
						className="btn btn-style w-100"
						onClick={submitData}
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddBlog;

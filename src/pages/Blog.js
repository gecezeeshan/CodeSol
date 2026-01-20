import { useEffect, useState } from "react";
import "../styles/Blog.css";

export default function Blog() {
	const [blogData, setBlogData] = useState(null);
	const [selectedBlog, setSelectedBlog] = useState(null);

	useEffect(() => {
		fetch("/blog-data.json")
			.then((res) => res.json())
			.then((data) => {
				setBlogData(data);
				if (data.categories?.[0]?.topics?.[0]?.blogs?.[0]) {
					setSelectedBlog(data.categories[0].topics[0].blogs[0]);
				}
			});
	}, []);

	// Re-init Limitless navigation after render
	useEffect(() => {
		document.dispatchEvent(new Event("DOMContentLoaded"));
	}, [blogData]);

	if (!blogData) return <div>Loading...</div>;

	return (
		<div className="d-flex align-items-start flex-column flex-md-row">

			{/* SIDEBAR */}
			<div className="sidebar sidebar-light bg-white sidebar-component sidebar-component-left border-0 shadow-0 sidebar-expand-md">
				<div className="sidebar-content">

					<ul
						className="nav nav-sidebar nav-sidebar-sm px-2 mx-1"
						data-nav-type="accordion"
					>
						{blogData.categories.map((category) => (
							<div key={category.id}>

								{/* CATEGORY HEADER */}
								<li className="nav-item nav-item-header bg-teal">
									<h4 className="text-uppercase fs-sm lh-sm text-white mb-0 ">
										{category.title}
									</h4>
								</li>

								{/* TOPICS */}
								{category.topics.map((topic) => (
									<li key={topic.id} className="nav-item nav-item-submenu">

										<a
											href={`#topic-${topic.id}`}
											className="nav-link rounded"
											data-bs-toggle="collapse"
										>
											<i className="ph-file-text me-2"></i>
											<span>{topic.title}</span>
										</a>

										<ul
											id={`topic-${topic.id}`}
											className="nav-group-sub collapse"
										>
											{topic.blogs.map((blog) => (
												<li key={blog.id} className="nav-item">
													<a
														href="#"
														className={`nav-link rounded ${selectedBlog?.id === blog.id ? "active" : ""
															}`}
														onClick={(e) => {
															e.preventDefault();
															setSelectedBlog(blog);
														}}
													>
														{blog.title}
													</a>
												</li>
											))}
										</ul>

									</li>
								))}
							</div>
						))}
					</ul>
				</div>
			</div>

			{/* CONTENT */}
			<div className="w-100 overflow-auto ms-3">
				<div className="card">
					<div className="card-header border-bottom-1">
						<h5 className="card-title">{selectedBlog?.title}</h5>
					</div>

					<div className="card-body text-left">
						{selectedBlog && (
							<div
								dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

import { useEffect, useState } from "react";
import "../styles/Blog.css";
import BlogContent from "../components/BlogContent";
export default function Blog() {
	const [blogData, setBlogData] = useState(null);
	const [selectedBlog, setSelectedBlog] = useState(null);
	const [expandedTopics, setExpandedTopics] = useState({});



	useEffect(() => {
		fetch("/blog-data.json")
			.then((res) => res.json())
			.then((data) => {
				setBlogData(data);
				if (data.categories?.[0]?.topics?.[0]?.blogs?.[0]) {
					setSelectedBlog(data.categories[0].topics[0].blogs[0]);
					// Auto-expand first topic
					if (data.categories[0].topics[0].id) {
						setExpandedTopics({ [data.categories[0].topics[0].id]: true });
					}
				}
			});
	}, []);

	const toggleTopic = (topicId) => {
		setExpandedTopics((prev) => ({
			...prev,
			[topicId]: !prev[topicId],
		}));
	};

	if (!blogData) return <div>Loading...</div>;

	return (
		<div className="d-flex align-items-start flex-column flex-md-row">

			{/* SIDEBAR */}
			<div className="sidebar sidebar-light bg-white sidebar-component sidebar-component-left border-0 shadow-0">
				<div className="sidebar-content">

					<ul
						className="nav nav-sidebar nav-sidebar-sm px-2 mx-1"
						data-nav-type="accordion"
					>
						{blogData.categories.map((category) => (
							<div key={category.id}>

								{/* CATEGORY HEADER */}
								<li className="nav-item nav-item-header bg-teal">
									<h5 className="text-uppercase fs-sm lh-sm text-white mb-0 ">
										{category.title}
									</h5>
								</li>

								{/* TOPICS */}
								{category.topics.map((topic) => (
									<li
										key={topic.id}
										className={`nav-item nav-item-submenu ${expandedTopics[topic.id] ? "nav-item-open" : ""
											}`}
									>

										<button
											type="button"
											className="nav-link rounded w-100 text-start d-flex align-items-center"
											style={{ border: 'none', padding: '0.625rem 0.625rem', cursor: 'pointer' }}
											onClick={() => {
												toggleTopic(topic.id);
											}}
										>
											<i className="ph-file-text me-2"></i>
											<span>{topic.title}</span>
										</button>

										<ul
											className={`nav-group-sub collapse ${expandedTopics[topic.id] ? 'show' : ''}`}
											style={{ display: expandedTopics[topic.id] ? 'block' : 'none' }}
										>
											{topic.blogs.map((blog) => (
												<li key={blog.id} className="nav-item">
													<button
														type="button"
														className={`nav-link rounded w-100 text-start d-flex align-items-center ${selectedBlog?.id === blog.id ? "active" : ""
															}`}
														style={{ border: 'none', padding: '0.5rem 0.625rem', cursor: 'pointer' }}
														onClick={() => {
															setSelectedBlog(blog);
														}}
													>
														{blog.title}
													</button>
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

					<div className="card-body text-left">
						{selectedBlog && (
							<BlogContent contentFile={selectedBlog.content} />
							// <div
							// 	dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
							// />
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

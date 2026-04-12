'use client';
import { projects } from "@/data/projects";
import * as motion from "motion/react-client";

const Projects = () => {
	return (
		<>
			<section
				id="projects"
				className="min-h-screen flex justify-center items-center bg-[#06000f] py-16"
			>
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1.5 }}
				>
					<div className="mx-auto w-full max-w-7xl px-9 grid grid-cols-1 md:grid-cols-3 items-center gap-8">
						{projects.map((project, idx) => (
							<div
								key={idx}
								className={`rounded-3xl p-8 ring-1 ring-gray-900/10 transition-transform
                			${project.bgColor} ${project.textColor}
                			${project.featured ? "md:scale-112 md:-my-8 shadow-2xl md:col-span-1 z-10 md:col-span-1 z-10" : ""}
              `}
							>
								<h3
									className={`text-base font-semibold ${project.accentColor}`}
								>
									{project.title}
								</h3>
								<p className={`mt-2 text-lg font-semibold ${project.textColor}`}>
									{project.heading}
								</p>
								<p
									className={`mt-6 text-base ${project.textColor === "text-white"
										? "text-gray-300"
										: "text-gray-600"
										}`}
								>
									{project.description}
								</p>
								<ul
									role="list"
									className={`mt-8 space-y-3 text-sm ${project.textColor === "text-white"
										? "text-gray-300"
										: "text-gray-600"
										}`}
								>
									{project.features.map((feature) => (
										<li className="flex gap-x-3" key={feature}>
											<svg
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className={`h-6 w-5 flex-none ${project.accentColor}`}
											>
												<path
													d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
													clipRule="evenodd"
													fillRule="evenodd"
												/>
											</svg>
											{feature}
										</li>
									))}
								</ul>
								<a
									href={project.buttonHref}
									target={project.external ? "_blank" : undefined}
									rel={
										project.external
											? "noopener noreferrer"
											: undefined
									}
									className={`mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 ${project.buttonStyle}`}
								>
									{project.buttonText}
								</a>
							</div>
						))}
					</div>
				</motion.div>
			</section>
		</>
	);
};

export default Projects;
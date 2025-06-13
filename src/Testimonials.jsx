import { useState } from "react";

const testimonials = [
	{
		company: "Serene Living",
		logo: "/images/serene_living.png",
		text: "Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.",
		name: "Ethan Morgan",
		title: "Founder and CEO, Serene Living Products",
		avatar: "/images/ethan_morgan.png",
	},
	{
		company: "Starlight Creations",
		logo: "/images/starlight_creations.png",
		text: "Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.",
		name: "Olivia Hayes",
		title: "Owner, Starlight Creations",
		avatar: "/images/oliver_hayes.png",
	},
	{
		company: "Opulent Living Group",
		logo: "/images/opulent_living_group.png",
		text: "Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.",
		name: "Alexander Reed",
		title: "Co-Founder, Opulent Living Group",
		avatar: "/images/alexander_reed.png",
	},
];

const logoDimensions = {
	"Serene Living": { width: "157px", height: "91px" },
	"Starlight Creations": { width: "229px", height: "44px" },
	"Opulent Living Group": { width: "272px", height: "62px" },
};

export default function Testimonials() {
	const [index, setIndex] = useState(0);

	const prev = () =>
		setIndex((index - 1 + testimonials.length) % testimonials.length);
	const next = () => setIndex((index + 1) % testimonials.length);

	const visibleTestimonials = [
		testimonials[index],
		testimonials[(index + 1) % testimonials.length],
		testimonials[(index + 2) % testimonials.length],
	];

	return (
		<div
			className="relative w-full px-4 py-12 bg-cover bg-center bg-no-repeat"
			style={{ backgroundImage: "url('/images/bg.jpg')" }}
		>
			<div className="absolute inset-0 bg-black opacity-80 z-0"></div>

			<div className="relative z-10">
				<h1 className="font-spaceGrotesk text-[48px] md:text-[64px] font-bold text-center text-black mb-16 max-w-[903px] mx-auto leading-[77px]">
					Voices of Success with Sales Fortuna
				</h1>
				<div className="relative flex items-center justify-center h-full w-full overflow-visible">
					{/* Left Arrow */}
					<button
						onClick={prev}
						className="absolute left-[-24px] z-10 rounded-full bg-white shadow-lg transition-all duration-200 flex items-center justify-center border border-gray-200 group"
						style={{ width: '68px', height: '68px', top: '50%', transform: 'translateY(-50%)', left: '-2px', cursor: 'pointer' }}
						aria-label="Previous testimonial"
					>
						<svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="34" cy="34" r="33.5" fill="white" stroke="#D1CFCF" className="group-hover:stroke-[#6366f1] transition-colors duration-200"/>
							<path d="M40.0781 19.5234L23.3438 32.9766L40.0547 46.6641L42.3516 44.1562L29.9063 32.8359L42.1875 22.125L40.0781 19.5234Z" fill="#707070" className="group-hover:fill-[#6366f1] transition-colors duration-200"/>
						</svg>
					</button>

					{/* Testimonials */}
					<div className="flex gap-8 overflow-visible">
						{visibleTestimonials.map((t, i) => (
							<div
								key={i}
								className="bg-white shadow-lg flex flex-col relative border border-gray-200"
								style={{
									width: "380px",
									height: "502px",
									borderRadius: "12px",
									padding: "24px",
									boxSizing: "border-box",
									display: "flex",
									flexDirection: "column",
									justifyContent: "flex-start",
									alignItems: "flex-start",
									background: "#ffffff",
									marginLeft: i !== 0 ? '24px' : 0,
								}}
							>
								<div style={{ marginBottom: "24px" }}>
									<img
										src={t.logo}
										alt={t.company + " logo"}
										style={{
											width:
												logoDimensions[t.company]?.width ||
												"100px",
											height:
												logoDimensions[t.company]?.height ||
												"48px",
											objectFit: "contain",
                      paddingTop: "2rem",
											marginBottom: "4px",
											display: "block",
										}}
									/>
								</div>

								<div
									style={{
										flex: 1,
										marginBottom: "24px",
										// width: "100%",
                    width: "318px",
                    height: "133px",
									}}
								>
									<p
										style={{
											color: "#6b7280",
											fontSize: "20px",
											lineHeight: "35px",
											margin: 0,
											fontWeight: 500,
											width: "100%",
										}}
									>
										{t.text}
									</p>
									<div
										style={{
											display: "flex",
											justifyContent: "flex-end",
											marginTop: "16px",
										}}
									>
										<img
											src="/images/quote.svg"
											alt="quote"
											style={{
												width: "38px",
												height: "36px",
												objectFit: "contain",
												opacity: 0.4,
											}}
										/>
									</div>
								</div>

								<div
									style={{
										display: "flex",
										alignItems: "center",
										gap: "16px",
										width: "100%",
									}}
								>
									<img
										src={t.avatar}
										alt={t.name}
										style={{
											width: "60px",
											height: "60px",
											borderRadius: "50%",
											objectFit: "cover",
											border: "2px solid #e5e7eb",
										}}
									/>
									<div>
										<div
											style={{
												fontWeight: 700,
												fontSize: "24px",
												color: "#111827",
												lineHeight: "30px",
											}}
										>
											{t.name}
										</div>
										<div
											style={{
												fontSize: "20px",
												color: "#111827",
												fontWeight: 500,
												lineHeight: "30px",
											}}
										>
											{t.title}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Right Arrow */}
					<button
						onClick={next}
						className="absolute right-[-24px] z-10 rounded-full bg-white shadow-lg transition-all duration-200 flex items-center justify-center border border-gray-200 group"
						style={{ width: '68px', height: '68px', top: '50%', transform: 'translateY(-50%)', right: '-2px', cursor: 'pointer' }}
						aria-label="Next testimonial"
					>
						<svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="34" cy="34" r="33.5" transform="matrix(-1 0 0 1 68 0)" fill="white" stroke="#D1CFCF" className="group-hover:stroke-[#6366f1] transition-colors duration-200"/>
							<path d="M27.9219 19.5234L44.6562 32.9766L27.9453 46.6641L25.6484 44.1562L38.0937 32.8359L25.8125 22.125L27.9219 19.5234Z" fill="#707070" className="group-hover:fill-[#6366f1] transition-colors duration-200"/>
						</svg>
					</button>
				</div>

				{/* Dots navigation */}
				<div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px', gap: '16px', paddingBottom: '8px' }}>
					{testimonials.map((_, i) => (
						<button
							key={i}
							onClick={() => setIndex(i)}
							style={{
								width: '14px',
								height: '14px',
								borderRadius: '50%',
								background: i === index ? '#111827' : '#d1d5db',
								border: 'none',
								transition: 'background 0.3s',
								outline: 'none',
								cursor: 'pointer',
								padding: 0,
							}}
							aria-label={`Go to testimonial ${i + 1}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

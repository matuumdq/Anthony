import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
const Hero = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const images = [
		{
			id: "1",
			img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1686076778/wallpaperbetter.com_1920x1080_2_n7di0a.jpg",
		},
		{
			id: "2",
			img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1686076739/wallpaperbetter.com_1920x1080_kcwiip.jpg",
		},
		{
			id: "3",
			img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1686076734/wallpaperbetter.com_1920x1080_1_l3d2po.jpg",
		},
	];

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIndex((currentIndex + 1) % images.length);
		}, 5000);

		return () => {
			clearInterval(intervalId);
		};
	}, [currentIndex, images.length]);
	return (
		<div className="max-w-full h-screen bg-black">
			{images.map((imgage, index) => (
				<div key={index} className="">
					<div
						className={`absolute w-full z-10 slide transition-all h-screen duration-500 ease-in-out flex flex-col justify-center items-center md:items-start ${
							index === currentIndex ? "block" : "hidden"
						}`}
					>
						<CSSTransition
							key={index}
							timeout={500}
							classNames="images"
							appear={true}
							in={index === currentIndex}
						>
							<img
								className="h-screen w-full object-cover"
								src={imgage.img}
								alt={imgage.id}
							/>
						</CSSTransition>
					</div>
				</div>
			))}

			<div className=" max-w-full h-full flex flex-col justify-center mx-5 md:mx-20 gap-4 relative z-20">
				<div className="flex flex-col justify-center mx-5 md:mx-20 gap-4 w-fit bg-black bg-opacity-40 rounded-md p-4">
					<h1 className="text-4xl text-teal-500 font-semibold ">
						CIAO!<strong> Sono Anthony</strong>
					</h1>
					<p className="font-semibold text-teal-600">
						Tu profesor de italiano{" "}
					</p>
					<a
						href="#form"
						className="font-light bg-emerald-500 shadow-xl mx-auto ml-0 px-4 py-2 rounded-md hover:scale-105 ease-in duration-300 text-white"
					>
						Contactame{" "}
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;

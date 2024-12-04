import React, { useEffect } from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";
import { useNavigate } from "react-router-dom";

type Props = {};

function HomePage({}: Props) {
	const [counter, setCounter] = React.useState(0);
	const ref = React.useRef(0);

	useEffect(() => {
		console.log("counter", counter);
	}, [counter]);

	useEffect(() => {
		console.log("ref", ref.current);
	}, [ref.current]);

	const CarouselItems = ["1", "2", "3", "4"];

	const navigate = useNavigate();

	return (
		<div className='min-h-screen flexCenter relative'>
			<Carousel>
				<CarouselContent className='flex w-[50rem] bg-gray-50 aspect-video relative'>
					{CarouselItems.map((i) => {
						return (
							<CarouselItem key={i}>
								<img
									className='w-full object-cover absolute inset-0'
									alt=''
									src='https://images.unsplash.com/photo-1732559797723-4af87682e682?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								/>
								<button
									className='z-50 bg-white size-36'
									onClick={() => {
										navigate("/product-archive");
									}}>
									Buy now
								</button>
							</CarouselItem>
						);
					})}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
}

export default HomePage;

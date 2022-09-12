import { useEffect, useState } from "react";
import useCountDown from "./utils/use-count-down";

const FlipCard: React.FC<{ value?: string }> = ({ value }) => {
	const [animate, setAnimate] = useState(false);
	const previousValue = parseFloat(value!) - 1;

	useEffect(() => {
		if (parseFloat(value!) !== previousValue) {
			setAnimate(true);
		}
	}, [value]);

	const topStyles =
		"bg-[#f7f7f7]  rounded-t-lg p-6 leading-none h-16 border-b border-black border-opacity-10";
	const bottomStyles =
		"bg-white p-6 leading-none flex items-end rounded-b-lg h-16";
	const beforeStyle =
		" w-full overflow-hidden text-center absolute origin-bottom";
	const afterStyle =
		"w-full bottom-0 text-center overflow-hidden absolute origin-top";

	return (
		<div
			className={`text-[5rem] relative text-red-500 flex rounded-lg flex-col shadow-xl`}>
			<div className={topStyles}>{value}</div>

			<div
				className={`${topStyles} ${
					animate ? beforeStyle + " animate-flip-up" : beforeStyle
				}`}>
				{value}
			</div>

			<div className={bottomStyles}>{value}</div>

			<div
				onAnimationEnd={() => setAnimate(false)}
				className={`${
					animate ? afterStyle + " animate-flip-down" : afterStyle
				} ${bottomStyles}`}>
				{value}
			</div>
		</div>
	);
};

const App = () => {
	const { hrs, mins, secs } = useCountDown("2022-09-14T10:31:00");

	return (
		<div className="flex items-center space-x-10">
			<div className="flex flex-col space-y-3">
				<p className="text-center font-sans text-neutral-800 text-xl font-medium">
					Hours
				</p>
				<div className="flex items-center space-x-2">
					<FlipCard value={hrs[0]} />
					<FlipCard value={hrs[1]} />
				</div>
			</div>{" "}
			<div className="flex flex-col space-y-3">
				<p className="text-center font-sans text-neutral-800 text-xl font-medium">
					Minutes
				</p>
				<div className="flex items-center space-x-2">
					<FlipCard value={mins[0]} />
					<FlipCard value={mins[1]} />
				</div>
			</div>{" "}
			<div className="flex flex-col space-y-3">
				<p className="text-center font-sans text-neutral-800 text-xl font-medium">
					Seconds
				</p>
				<div className="flex items-center space-x-2">
					<FlipCard value={secs[0]} />
					<FlipCard value={secs[1]} />
				</div>
			</div>
		</div>
	);
};

export default App;

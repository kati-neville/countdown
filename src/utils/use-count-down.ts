import { useEffect, useState } from "react";

export function splitValue(value: number) {
	const time = Math.floor(value).toString();
	if (time.length === 1) {
		return "0" + time;
	}
	return time;
}

function getTImeValue(difference: number) {
	const hrs = splitValue(
		(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	).split("");

	const mins = splitValue((difference % (1000 * 60 * 60)) / (1000 * 60)).split(
		""
	);
	const secs = splitValue((difference % (1000 * 60)) / 1000).split("");

	return { hrs, mins, secs };
}

function useCountDown(targetDate: string) {
	const countDownDate = new Date(targetDate).getTime();
	const [countDown, setCountDown] = useState(
		countDownDate - new Date().getTime()
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setCountDown(countDownDate - new Date().getTime());
		}, 1000);

		return () => clearInterval(interval);
	}, [countDown]);

	return getTImeValue(countDown);
}

export default useCountDown;

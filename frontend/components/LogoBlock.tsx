import C from 'public/images/letters/C/c.svg';
import CondensedC from 'public/images/letters/C/c-condensed.svg';
import HalfSun from 'public/images/letters/C/half-sun.svg';
import HalfMoon from 'public/images/letters/C/half-moon.svg';
import I from 'public/images/letters/I/i.svg';
import I2 from 'public/images/letters/I/i-caps.svg';
import CircleStack from 'public/images/letters/I/circle-stack.svg';
import OutlineStack from 'public/images/letters/I/outline-stack.svg';
import R from 'public/images/letters/R/r.svg';
import HalfStar from 'public/images/letters/R/half-star-invert.svg';
import D from 'public/images/letters/D/d.svg';
import Petals from 'public/images/letters/D/petals.svg';
import E2 from 'public/images/letters/E/e-caps.svg';
import HalfOvalsThree from 'public/images/letters/E/half-ovals-three.svg';
import HalfOvalsFour from 'public/images/letters/E/half-ovals-four.svg';
import S from 'public/images/letters/S/s.svg';
import OvalsStacked from 'public/images/letters/S/ovals-stacked.svg';
import OvalsStackedOutline from 'public/images/letters/S/ovals-stacked-outline.svg';
import G from 'public/images/letters/G/g.svg';
import CircleOvalOutline from 'public/images/letters/G/circle-oval-outline.svg';
import CurvyG from 'public/images/letters/G/curvy-g.svg';
import N from 'public/images/letters/N/n.svg';
import Arch from 'public/images/letters/N/arch.svg';
import { cn } from 'utils/classNameUtils';
import { useState } from 'react';

export const LogoBlock = () => {
	return (
		<div className="w-full flex items-center logo-block">
			<Letter
				defaultValue="c"
				data={[
					{ value: 'c', component: <C /> },
					{ value: 'half-sun', component: <HalfSun /> },
				]}
				width={9.1}
			/>
			<Letter
				defaultValue="i-caps"
				data={[
					{ value: 'outline-stack', component: <OutlineStack /> },
					{ value: 'i-caps', component: <I2 /> },
				]}
				width={7.3}
			/>
			<Letter
				defaultValue="r"
				data={[
					{ value: 'r', component: <R /> },
					{ value: 'half-star', component: <HalfStar /> },
				]}
				width={8.8}
			/>
			<Letter
				defaultValue="c"
				data={[
					{ value: 'c', component: <C /> },
					{ value: 'half-moon', component: <HalfMoon /> },
				]}
				width={9.1}
			/>
			<div className="w-[6%] h-full"></div>
			<Letter
				defaultValue="d"
				data={[
					{ value: 'd', component: <D /> },
					{ value: 'petals', component: <Petals /> },
				]}
				width={9.4}
			/>
			<Letter
				defaultValue="e-caps"
				data={[
					{ value: 'half-ovals', component: <HalfOvalsThree /> },
					{ value: 'e-caps', component: <E2 /> },
				]}
				width={12.1}
				noSpacing
			/>
			<Letter
				defaultValue="s"
				data={[
					{ value: 's', component: <S /> },
					{ value: 'ovals-stacked', component: <OvalsStacked /> },
				]}
				width={9.3}
			/>
			<Letter
				defaultValue="i"
				data={[
					{ value: 'i', component: <I /> },
					{ value: 'circle-stack', component: <CircleStack /> },
				]}
				width={2.9}
			/>
			<Letter
				defaultValue="g"
				data={[
					{ value: 'g', component: <G /> },
					{ value: 'circle-oval-outline', component: <CircleOvalOutline /> },
				]}
				width={9.1}
			/>
			<Letter
				defaultValue="n"
				data={[
					{ value: 'n', component: <N /> },
					{ value: 'arch', component: <Arch /> },
				]}
				width={9.5}
				noSpacing
			/>
		</div>
	);
};

const Letter = ({ defaultValue, data, width, noSpacing = false }) => {
	const [currentValue, setCurrentValue] = useState(defaultValue);

	const handleMouseEnter = () => {
		// Randomly select another letter from the data array
		const randomValue = getRandomLetter(data, defaultValue).value;

		// Set the current value to the randomly selected letter
		setCurrentValue(randomValue);

		// After 5 seconds, revert back to the default value
		setTimeout(() => {
			setCurrentValue(defaultValue);
		}, 800);
	};

	return data.map((letter, i) => (
		<div
			key={i}
			style={{ width: `${width}%` }}
			className={cn(
				'flex-grow h-full letter',
				!noSpacing && 'mr-[0.925%]',
				letter.value !== currentValue && 'hidden'
			)}
			onMouseEnter={handleMouseEnter}
		>
			{letter.component}
		</div>
	));
};

const getRandomLetter = (data, defaultValue) => {
	let randomIndex = Math.floor(Math.random() * data.length);
	let randomLetter = data[randomIndex];

	// regenerate random index and letter if it matches the default value
	while (randomLetter.value === defaultValue) {
		randomIndex = Math.floor(Math.random() * data.length);
		randomLetter = data[randomIndex];
	}

	return randomLetter;
};

import C from 'public/images/letters/C/c.svg';
import I from 'public/images/letters/I/i-caps.svg';
import R from 'public/images/letters/R/r.svg';
import C2 from 'public/images/letters/C/c.svg';
import D from 'public/images/letters/D/d.svg';
import E from 'public/images/letters/E/e-caps.svg';
import S from 'public/images/letters/S/s.svg';
import I2 from 'public/images/letters/I/i.svg';
import G from 'public/images/letters/G/g.svg';
import N from 'public/images/letters/N/n.svg';
import { cn } from 'utils/classNameUtils';

export const LogoBlock = () => {
	return (
		<div className="w-full flex items-center logo-block">
			<Letter letter={<C />} width={9.1} />
			<Letter letter={<I />} width={7.3} />
			<Letter letter={<R />} width={8.8} />
			<Letter letter={<C2 />} width={9.1} />
			<div className="w-[6%] h-full"></div>
			<Letter letter={<D />} width={9.4} />
			<Letter letter={<E />} width={12.1} noSpacing />
			<Letter letter={<S />} width={9.3} />
			<Letter letter={<I2 />} width={2.9} />
			<Letter letter={<G />} width={9.1} />
			<Letter letter={<N />} width={9.5} />
		</div>
	);
};

const Letter = ({ letter, width, noSpacing = false }) => {
	return (
		<div
			style={{ width: `${width}%` }}
			className={cn('flex-grow h-full letter', !noSpacing && 'mr-[0.925%]')}
		>
			{letter}
		</div>
	);
};

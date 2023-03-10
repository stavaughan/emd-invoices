import { useState, useEffect } from 'react';
import { ClipboardCopyBtn } from 'components/Buttons/Type';
import clsx from 'clsx';

import Classes from './styles/JsonCodeBlock.module.css';

const CodeBlockCard = ({
	data,
	isLoading,
	label,
	hasData
}) => {

	const style = {
		opacity: isLoading ? .7 : 1,
		transition: 'opacity 1.2s ease-in-out'
	};

	const [showCopy, setShowCopy] = useState({ opacity: 0 });
	const [hideCopy, setHideCopy] = useState(false);

	const codeOutput = JSON.stringify(data, null, 2);
	const copyOutput = JSON.stringify(data);

	const titleValue = isLoading
		? 'Please wait...'
		: hasData
			? codeOutput
			: `No ${label} data...`;

	useEffect(() => {
		if (hasData) {
			let timeout = setTimeout(() => {
				setShowCopy(prev => ({
					...prev,
					opacity: 1,
					transition: 'opacity 1.2s ease-in-out'
				}));
			}, 800);
			return () => clearTimeout(timeout);
		} else {
			setShowCopy(prev => ({
				...prev,
				opacity: 0,
				transition: 'opacity .4s ease-out'
			}));
		}
	}, [hasData]);

	useEffect(() => {
		if (hideCopy) {
			setShowCopy(prev => ({
				...prev,
				opacity: 0,
				transition: 'opacity .4s ease-out'
			}));
			let timeout = setTimeout(() => {
				setHideCopy(false);
			}, 500);
			return () => clearTimeout(timeout);
		}
	}, [hideCopy]);

	return (
		<div className={clsx(
			Classes["code-block"],
			"position-relative"
		)}>
			{hasData ? (
				<span
					className="position-absolute top-0 end-0 pe-3 pt-3 d-print-none"
					{...(style && hasData) && { style: showCopy }}
				>
					<ClipboardCopyBtn
						string={copyOutput}
						mode="dark"
						item="result"
					/>
				</span>
			) : null}
			<pre
				className={clsx(
					Classes["code-block--pre"],
					"my-3 p-4 rounded-3"
				)}
				{...style && { style }}
			>
				<code>{titleValue}</code>
			</pre>
		</div>
	)
}

export default CodeBlockCard

import { useState, useEffect } from 'react';
import { ClipboardCopyBtn } from 'components/Buttons/Type';
import { Button } from 'components/Buttons';
import { useMobile } from 'hooks';
import clsx from 'clsx';

import Classes from './styles/JsonCodeBlock.module.css';


const JsonCodeBlock = ({
	data,
	hasData,
	titleKey,
	titleValue,
	onClickHandler,
	generatorButton,
	style
}) => {

	const { isXSmall } = useMobile();

	const [showCopy, setShowCopy] = useState({ opacity: 0 });
	const [hideCopy, setHideCopy] = useState(false);

	const codeOutput = JSON.stringify(data, null, 2);
	const copyOutput = JSON.stringify(data);

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
				!!onClickHandler && onClickHandler();
				setHideCopy(false);
			}, 500);
			return () => clearTimeout(timeout);
		}
	}, [hideCopy, onClickHandler]);

	const handleClose = (e) => {
		e.preventDefault();
		setHideCopy(true);
	};

	return (
		<div>
			<div className="mb-3 px-2 d-flex justify-content-between align-items-center">
				<div className="text-secondary mb-2">
					{!isXSmall && (
						<span className="me-2">{titleKey}:</span>
					)}
					<span className="text-slate-600 font-bold">{titleValue}</span>
				</div>
				<div>
					{hasData ? (
						<Button
							className="btn-close bg-primary-soft shadow-sm rounded-circle d-print-none"
							rest={{
								onClick: handleClose,
								...style && { style }
							}}
						/>
					) : (generatorButton || null)}
				</div>
			</div>
			<div className={clsx(
				Classes["code-block"],
				'position-relative'
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
					<code>{codeOutput}</code>
				</pre>
			</div>
		</div>
	)
}

export default JsonCodeBlock

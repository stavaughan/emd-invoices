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
				<div className="d-flex justify-content-start align-items-center mb-2">
					{!isXSmall && (
						<div className="me-2 text-slate-400 h4">{titleKey}:</div>
					)}
					<div className="text-slate-500 font-bold h4">{titleValue}</div>
					{!onClickHandler && (
						<div className="badge rounded-pill bg-primary-soft mb-auto ms-3">
							{data?.length + `${data?.length === 1 ? ' Item' : ' Items'}`}
						</div>
					)}
				</div>
				<div>
					{(hasData && !!onClickHandler) ? (
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
			<div className={Classes["code-block"]}>
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

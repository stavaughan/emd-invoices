import React from 'react';
import { BulletNumberedList } from '..';
import { CodeBlockTextCard } from 'components/Blocks';

const FormattingDescription = ({ isXSmall, text }) => {

	return (
		<div
			className="d-flex flex-column gap3"
		>
			<h5>{text.textCopy.title}</h5>
			<h6 className="my-3">Formatting Rules</h6>
			<BulletNumberedList
				isXSmall={isXSmall}
				text={text.formattingList}
			/>
			<hr className="text-slate-400"/>
			<h6 className="mb-3 mt-2">Single Item Structure</h6>
			<CodeBlockTextCard content={text.structureText} />
			<BulletNumberedList
				isXSmall={isXSmall}
				text={text.instructions}
			/>
			<hr className="text-slate-400"/>
			<h6 className="mb-3 mt-2">Sample Text</h6>
			<CodeBlockTextCard content={text.sampleText} />
		</div>
	);
}

export default FormattingDescription

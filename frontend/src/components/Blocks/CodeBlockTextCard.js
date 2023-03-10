import React from 'react'
import clsx from "clsx";

import Classes from '../Blocks/styles/JsonCodeBlock.module.css'

const CodeBlockTextCard = ({ content }) => {
	return (
		<div className={Classes["code-block"]}>
			<pre className={clsx(Classes["code-block--pre"], "px-4 py-3 rounded-3")}>
				{content}
			</pre>
		</div>
	)
}

export default CodeBlockTextCard

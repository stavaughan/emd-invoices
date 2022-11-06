import { useState, useEffect } from 'react';
import { IconButton } from '.';
import { ToolTip } from 'components/ToolTip';
import { toast } from 'react-toastify'

const ClipboardCopyBtn = ({ string, item, mode }) => {

	const [clicked, setClicked] = useState(false)
	const [message, setMessage] = useState('');

	useEffect(() => {
		if (clicked) {
			toast.success(message)
		}
		return () => {
			setClicked(false);
			setMessage('');
		}
	}, [clicked, message])

	const handleCopyClick = (e) => {
		e.preventDefault()
		navigator.clipboard.writeText(string);
		setMessage(`${item} copied to clipboard`);
		setClicked(true)
	};

	return (
		<ToolTip tip={`copy ${item}`} span>
			<IconButton
				icon={["far", "copy"]}
				mode={mode || 'light'}
				onClick={handleCopyClick}
				className="ms-2"
			/>
		</ToolTip>
	);
};

export default ClipboardCopyBtn

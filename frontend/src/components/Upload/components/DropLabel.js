import React from 'react'
import { ImageIcon } from '.';

const DropLabel = ({ noLabel, type, maxSize }) => {
	return (
		<>
			{noLabel ? <ImageIcon noLabel /> : (
				<>
					<ImageIcon />
					<div className="small text-secondary">
						<div>
							Drag or <span className="text-primary">browse</span> for {type} to upload.
						</div>
						<div className="text-sm font-normal">
							Allowable image size under {maxSize}
						</div>
					</div>
				</>
			)}
		</>
	)
}

export default DropLabel

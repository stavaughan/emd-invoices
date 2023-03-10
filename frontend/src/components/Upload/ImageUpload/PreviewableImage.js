import { useCallback } from "react";
import { ImageDropThumbnail, PreviewImage } from ".";
import { PreviewWrapper } from "components/Avatars/components";

const PreviewableImage = ({
	pid,
	type,
	width,
	height,
	loading,
	selectedName,
	selectedURL
}) => {

	const phStyle = { width, height: height || width * 3 / 4 }

	const imagePreview = useCallback(() => (
		<PreviewImage
			pid={pid}
			width={width}
			height={height}
			loading={loading}
			selectedName={selectedName}
			selectedURL={selectedURL}
		/>
	), [height,loading, pid, selectedName, selectedURL, width]);

	return (
		<>
			{(pid || selectedURL) ? (
				<>
					{type !== 'logo'
						? <PreviewWrapper>{imagePreview()}</PreviewWrapper>
						: imagePreview()}
				</>
			) : <ImageDropThumbnail {...phStyle} />}
		</>
	);
};

export default PreviewableImage;

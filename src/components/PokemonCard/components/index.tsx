import { useEffect, useState } from "react";
import { Image } from "expo-image";

interface Props {
	lowRes?: string;
	highRes?: string;
	style: any;
}

export default function ProgressiveImage({ lowRes, highRes, style }: Props) {
	const base = lowRes ?? highRes;
	const [uri, setUri] = useState(base);

	useEffect(() => {
		let active = true;

		setUri(lowRes);

		if (highRes) {
			Image.prefetch(highRes)
				.then(() => {
					if (active) {
						setUri(highRes);
					}
				})
				.catch(() => {
					console.log("Failed to load high-res image");
				});
		}

		return () => {
			active = false;
		};
	}, [lowRes, highRes]);

	return (
		<Image
			source={{ uri }}
			style={style}
			contentFit="contain"
			transition={300}
			cachePolicy="memory-disk"
		/>
	);
}

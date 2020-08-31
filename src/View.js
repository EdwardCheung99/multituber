import React from 'react';
import { useParams } from "react-router";

const View = (props) => {
	let { id } = useParams();
	const videos = id.split("/");

	return (
		videos.map(videoID => (
			<div>
				<iframe className="video" src={`https://www.youtube.com/embed/${videoID}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</div>
			<div>
				<iframe className="chat" src={`https://www.youtube.com/live_chat?v=${videoID}&embed_domain=localhost`} frameBorder="0"></iframe>
			</div>
		))
	);
};

export default View;
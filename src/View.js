import React from 'react';
import { useParams } from "react-router";

const View = (props) => {
	let { id } = useParams();
	let count = 1;
	const videos = id.split("/");

	const optimizeChats = () => {
		const chatboxes = document.getElementsByClassName('chat');
		const betterHeight = window.innerHeight - 16;
		for(let i=0; i<chatboxes.length; i++){
			chatboxes[i].style.height = betterHeight; 
		}
	}

	return (
		<div>
			{videos.map(videoID => (
				<div>
					<iframe className="video" src={`https://www.youtube.com/embed/${videoID}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</div>
			))}
			<div id="chatbox">
				<ul id="tablist">
					{videos.map(videoID => (
						<div>
							<input type="checkbox" class="check" />
							<span>Chat {count++}</span>
						</div>
						
					))}
				</ul>
				<div className="none">{ count = 1 }</div>
				{videos.map(videoID => (
					<div id={`#chat-${count++}`} className="stream_chat">
						<iframe className="chat" src={`https://www.youtube.com/live_chat?v=${videoID}&embed_domain=localhost`} frameBorder="0"></iframe>
					</div>
				))}
			</div>
		</div>
	);
};

export default View;
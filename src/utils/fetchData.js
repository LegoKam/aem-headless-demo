const {REACT_APP_AEM_AUTHOR, REACT_APP_AEM_PUBLISH} = process.env;

let options = {credentials: "include"};

export const fetchData = async (path) => {

	let hostUrl = getAuthorHost();
	if (window.location && window.location.ancestorOrigins.length > 0) {
	} else {
		hostUrl = getPublishHost();
	}
	const url = `${hostUrl}/${path.split(":/")[1]}.infinity.json`;
	console.log("fetchData: " + url);
	const data = await fetch(url, options);
	console.log("DATA========");
	console.log(data);
	const json = await data.json();
	console.log("fetchData: " + json);
	return json;
};
export const getAuthorHost = () => {
	const url = new URL(window.location.href);
	const searchParams = new URLSearchParams(url.search);
	console.log("authorHost: " + REACT_APP_AEM_AUTHOR);
	return REACT_APP_AEM_AUTHOR;
}

export const getProtocol = () => {
	const url = new URL(window.location.href);
	const searchParams = new URLSearchParams(url.search);
	if (searchParams.has("protocol")) {
		return searchParams.get("protocol");
	} else {
		return "aem";
	}
}

export const getService = () => {
	const url = new URL(window.location.href);
	const searchParams = new URLSearchParams(url.search);
	if (searchParams.has("service")) {
		return searchParams.get("service");
	}
	return null;
}

export const getPublishHost = () => {
	const url = new URL(window.location.href);
	const searchParams = new URLSearchParams(url.search);
	return REACT_APP_AEM_PUBLISH;
}
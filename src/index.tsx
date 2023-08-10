import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import { App } from "./components";
import { SearchContextProvider } from "./context/SearchContext";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<SearchContextProvider>
			<App />
		</SearchContextProvider>
	</React.StrictMode>
);

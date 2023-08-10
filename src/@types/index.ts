export interface RouteBase {
	label: string;
	href: string;
}

export interface Route extends RouteBase {
	children?: RouteBase[];
}

export type RouteList = Route[];

export interface IWrappedComponentProps {
	open: boolean;
	setOpen: (arg0: boolean) => void;
}

export enum FetchingStatus {
	IDLE = "idle",
	PENDING = "pending",
	FULFILLED = "fulfilled",
	FAILURE = "FAILURE",
}

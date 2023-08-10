import { ReactNode } from "react";

export interface PopupProps {
	open: boolean;
	togglePopup: () => void;
	children: ReactNode;
}

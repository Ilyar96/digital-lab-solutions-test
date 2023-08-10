import { FC, ReactNode, createContext, useState } from "react";

interface InitialState {
	searchValue: string;
	changeSearchValue: (val: string) => void;
}

interface SearchContextProviderProps {
	children: ReactNode;
}

const initialState: InitialState = {
	searchValue: "",
	changeSearchValue() {},
};

export const SearchContext = createContext<InitialState>(initialState);

export const SearchContextProvider: FC<SearchContextProviderProps> = ({
	children,
}) => {
	const [searchValue, setSearchValue] = useState("");

	const changeSearchValue = (val: string) => {
		setSearchValue(val);
	};

	return (
		<SearchContext.Provider value={{ searchValue, changeSearchValue }}>
			{children}
		</SearchContext.Provider>
	);
};

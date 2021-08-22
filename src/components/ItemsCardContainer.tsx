import "../static/css/fonts.css";

export const ItemsCardContainer = ({ children }) => {
	return (
		<div className="pb-28 min-h-screen relative">
			<div className="min-w-screen animated fadeIn faster left-0 top-0 grid grid-cols-2 md:grid-cols-3 place-items-center items-center inset-0 gap-5 p-5">
				{children}
			</div>
		</div>
	);
};

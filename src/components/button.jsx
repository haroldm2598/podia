function button({ name, customStyle }) {
	return <button className={`${customStyle} btn`}>{name}</button>;
}

export default button;

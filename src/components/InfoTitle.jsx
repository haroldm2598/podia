function InfoTitle({ title, description, customTitle, customDescription }) {
	return (
		<div className='max-w-5xl mx-auto text-center'>
			<h1 className={`${customTitle} titleInfo`}>{title}</h1>
			<p className={`${customDescription} infoTitle descriptionInfo`}>
				{description}
			</p>
		</div>
	);
}

export default InfoTitle;

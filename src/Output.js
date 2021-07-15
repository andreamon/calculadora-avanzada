function Output(props) {
	const { list } = props;
	return (
		<div className="results">
			<h3>Resultados</h3>
			{list.map((el, index) => {
				return (
					<div key={index} class="view-results">
						<span>{el.res}</span>
						<span class="type-result">{el.type}</span>
					</div>
				);
			})}
		</div>
	);
}

export default Output;

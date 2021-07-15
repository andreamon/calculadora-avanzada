import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
function Output(props) {
	const { listRes, setListRes } = props;

	const reorder = (list, startIndex, endIndex) => {
		const result = [...list];
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);

		return result;
	};

	return (
		<DragDropContext
			onDragEnd={(result) => {
				const { source, destination } = result;
				if (!destination) {
					return;
				}
				if (
					source.index === destination.index &&
					source.droppableId === destination.droppableId
				) {
					return;
				}
				setListRes((prevListRes) =>
					reorder(prevListRes, source.index, destination.index)
				);
			}}
		>
			<div className="results">
				<h3>Resultados</h3>
				<Droppable droppableId="listRes">
					{(droppableProvided) => (
						<ul
							{...droppableProvided.droppableProps}
							ref={droppableProvided.innerRef}
						>
							{listRes.map((el, index) => {
								return (
									<Draggable key={index} draggableId={el.type} index={index}>
										{(draggableProvided) => (
											<li
												{...draggableProvided.draggableProps}
												ref={draggableProvided.innerRef}
												{...draggableProvided.dragHandleProps}
												key={index}
												className="view-results"
											>
												<span>{el.res}</span>
												<span className="type-result">{el.type}</span>
											</li>
										)}
									</Draggable>
								);
							})}
							{droppableProvided.placeholder}
						</ul>
					)}
				</Droppable>
			</div>
		</DragDropContext>
	);
}

export default Output;

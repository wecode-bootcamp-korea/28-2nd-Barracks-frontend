import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Button from 'components/Button/Button';
import CardListItem from './CardListItem';

function ContainerCardList({
  uploadImages,
  addCardList,
  addImage,
  deleteImage,
  reorderImages,
}) {
  const onDragEnd = ({ destination, source, draggableId }) => {
    reorderImages(destination, source, draggableId);
  };

  const isImageFilled = uploadImages[uploadImages.length - 1].url !== 'default';

  return (
    <Wrapper>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="imageDrop">
          {provided => (
            <CardListOl ref={provided.innerRef} {...provided.droppableProps}>
              {uploadImages.map((image, index) => (
                <Draggable
                  key={image.url}
                  draggableId={image.url}
                  index={index}
                >
                  {provided => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <CardListItem
                        key={image.url}
                        index={index}
                        addImage={addImage}
                        deleteImage={deleteImage}
                        image={image}
                      />
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </CardListOl>
          )}
        </Droppable>
      </DragDropContext>

      {isImageFilled && (
        <Button styleType="outline" btnSize="fullSize" onClick={addCardList}>
          사진 추가하기
        </Button>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 48%;
  margin: 0 12px;
`;

const CardListOl = styled.ol``;

export default ContainerCardList;

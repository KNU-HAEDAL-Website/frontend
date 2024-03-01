import { BoardListItem } from '@/components/board-list-item'

export const BoardList = ({ boardListData }: { boardListData: Board[] }) => {
  return (
    <div>
      {boardListData.map((board) => (
        <div key={board.id}>
          <BoardListItem
            id={board.id}
            name={board.name}
            intro={board.intro}
            image={board.image}
            user={board.user}
          />
        </div>
      ))}
    </div>
  )
}

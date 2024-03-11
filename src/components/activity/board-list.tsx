'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'

import { BoardListItem } from '@/components/activity/board-list-item'
import { CreateBoardButton } from '@/components/activity/create-board-button'
import { PaginationButton } from '@/components/pagination-button'
import { boardDB, boardPaging } from '@/lib/data'

export const BoardList = ({ viewPage }: { viewPage: number }) => {
  //DB 연결 전 메타 데이터 사용..
  const [currentPage, setCurrentPage] = useState(1)
  const [boards, setBoards] = useState(boardPaging[1])
  const totalPageNum = Math.ceil(boardDB.length / viewPage)

  const pageChange = async (page: number) => {
    // const res = await fetch(`/api/semesters/${semesterId}/activities/${activityId}/boards/${pageNum}`)
    // const newBoards = await res.json()
    setBoards(boardPaging[page])
    setCurrentPage(page)
    console.log(page)
  }

  useEffect(() => {
    setCurrentPage(1)
  }, [])

  return (
    <div>
      {boards.map((board) => (
        <Link key={board.id} href={`/activity/${board.id}`}>
          <BoardListItem
            id={board.id}
            name={board.name}
            intro={board.intro}
            image={board.image}
            user={board.user}
          />
        </Link>
      ))}
      <div className="pb-4 mx-10 flex justify-end md:mx-20">
        <CreateBoardButton />
      </div>
      <div className="pb-6">
        <PaginationButton
          totalPageNum={totalPageNum}
          currentPage={currentPage}
          onPageChange={pageChange}
        />
      </div>
    </div>
  )
}

'use client'

import { BlockNoteEditor, PartialBlock } from '@blocknote/core'
import { BlockNoteView } from '@blocknote/react'
import '@blocknote/react/style.css'

interface postContentProps {
  content: string
}

export const PostContent = ({ content }: postContentProps) => {
  const initialContent = content
    ? (JSON.parse(content) as PartialBlock[])
    : undefined
  const editor = BlockNoteEditor.create({ initialContent })

  return (
    <BlockNoteView
      editor={editor}
      editable={false}
      className="px-8 md:px-20"
    ></BlockNoteView>
  )
}

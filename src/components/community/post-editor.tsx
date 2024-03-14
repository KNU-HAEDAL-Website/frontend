'use client'

import { useEffect, useMemo, useState } from 'react'

import { usePathname } from 'next/navigation'

import { Block, BlockNoteEditor, PartialBlock } from '@blocknote/core'
import { BlockNoteView } from '@blocknote/react'
import '@blocknote/react/style.css'

async function saveToStorage(jsonBlocks: Block[]) {
  localStorage.setItem('editorContent', JSON.stringify(jsonBlocks))
}

async function loadFromStorage() {
  const storage = localStorage.getItem('editorContent')

  return storage ? (JSON.parse(storage) as PartialBlock[]) : undefined
}

export const PostEditor = () => {
  const pathname = usePathname()
  const [initialContent, setInitialContent] = useState<
    'loading' | PartialBlock[] | undefined
  >('loading')

  useEffect(() => {
    loadFromStorage().then((content) => {
      setInitialContent(content)
    })
  }, [])

  useEffect(() => {
    const lastPath = sessionStorage.getItem('lastPath')
    sessionStorage.setItem('lastPath', pathname)

    if (lastPath && lastPath !== pathname) {
      const resetContent = () => {
        localStorage.removeItem('editorContent')
      }
      resetContent()
    }
  }, [pathname])

  const editor = useMemo(() => {
    if (initialContent === 'loading') {
      return undefined
    }
    return BlockNoteEditor.create({ initialContent })
  }, [initialContent])

  if (editor === undefined) {
    return 'Loading content...'
  }

  return (
    <BlockNoteView
      editor={editor}
      onChange={() => {
        saveToStorage(editor.document)
      }}
    />
  )
}

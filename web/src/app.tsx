import { useState } from 'react'
import logo from './assets/logo-nlw-expert.svg'

import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'

interface Note {
  id: string
  date: Date
  content: string
}

export function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: crypto.randomUUID(),
      date: new Date(),
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil in consequuntur quisquam quidem esse? Sapiente culpa alias adipisci aperiam officiis quisquam aspernatur ut neque. Ut quo ipsum reiciendis veritatis eaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil in consequuntur quisquam quidem esse? Sapiente culpa alias adipisci aperiam officiis quisquam aspernatur ut neque. Ut quo ipsum reiciendis veritatis eaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil in consequuntur quisquam quidem esse? Sapiente culpa alias adipisci aperiam officiis quisquam aspernatur ut neque. Ut quo ipsum reiciendis veritatis eaque."
    },
    {
      id: crypto.randomUUID(),
      date: new Date(2024, 1, 24),
      content: "Note 2"
    }
  ])

  function oneNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content
    }

    setNotes([newNote, ...notes])
  }

  return (
    <div className="mx-auto max-w-6xl mt-12 space-y-6">
      <img alt="NLW Expert" src={logo} />

      <form className="w-full">
        <input
          className="w-full bg-transparent font-semibold text-3xl tracking-tight placeholder:text-slate-500 outline-none"
          placeholder="Busque em suas notas..."
          type="text"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard onNoteCreated={oneNoteCreated}  />

        {notes.map(note => {
          return <NoteCard key={note.id} note={note} />
        })}
      </div>
    </div>
  )
}

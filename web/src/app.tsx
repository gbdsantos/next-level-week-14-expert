import { ChangeEvent, useState } from 'react'
import logo from './assets/logo-nlw-expert.svg'

import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'

interface Note {
  id: string
  date: Date
  content: string
}

const SAMPLE_NOTES = [
  {
    id: crypto.randomUUID(),
    date: new Date(),
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil in consequuntur quisquam quidem esse? Sapiente culpa alias adipisci aperiam officiis quisquam aspernatur ut neque. Ut quo ipsum reiciendis veritatis eaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil in consequuntur quisquam quidem esse? Sapiente culpa alias adipisci aperiam officiis quisquam aspernatur ut neque. Ut quo ipsum reiciendis veritatis eaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil in consequuntur quisquam quidem esse? Sapiente culpa alias adipisci aperiam officiis quisquam aspernatur ut neque. Ut quo ipsum reiciendis veritatis eaque."
  },
  {
    id: crypto.randomUUID(),
    date: new Date(2024, 1, 24),
    content: "Note example 1"
  }
]

export function App() {
  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem('gbdsantos@notes')

    if (notesOnStorage) {
      return JSON.parse(notesOnStorage)
    }

    return SAMPLE_NOTES
  })

  function oneNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content
    }

    const notesArray = [newNote, ...notes]

    setNotes(notesArray)

    localStorage.setItem('gbdsantos@notes', JSON.stringify(notesArray))
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value

    setSearch(query)
  }

  const filteredNotes = search !== ''
    ? notes.filter(note => note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    : notes

  return (
    <div className="mx-auto max-w-6xl mt-12 space-y-6 px-5">
      <img alt="NLW Expert" src={logo} />

      <form className="w-full">
        <input
          className="w-full bg-transparent font-semibold text-3xl tracking-tight placeholder:text-slate-500 outline-none"
          onChange={handleSearch}
          placeholder="Busque em suas notas..."
          type="text"
          value={search}
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard onNoteCreated={oneNoteCreated}  />

        {filteredNotes.map(note => {
          return <NoteCard key={note.id} note={note} />
        })}
      </div>
    </div>
  )
}

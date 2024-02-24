import logo from './assets/logo-nlw-expert.svg'

import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'

export function App() {
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
        <NewNoteCard />
        <NoteCard note={{
          date: new Date(),
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil in consequuntur quisquam quidem esse? Sapiente culpa alias adipisci aperiam officiis quisquam aspernatur ut neque. Ut quo ipsum reiciendis veritatis eaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil in consequuntur quisquam quidem esse? Sapiente culpa alias adipisci aperiam officiis quisquam aspernatur ut neque. Ut quo ipsum reiciendis veritatis eaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil in consequuntur quisquam quidem esse? Sapiente culpa alias adipisci aperiam officiis quisquam aspernatur ut neque. Ut quo ipsum reiciendis veritatis eaque."
          }}
        />
        <NoteCard note={{
          date: new Date(2024, 2, 7),
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil in consequuntur quisquam quidem esse? Sapiente culpa alias adipisci aperiam officiis quisquam aspernatur ut neque. Ut quo ipsum reiciendis veritatis eaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil in consequuntur quisquam quidem esse? Sapiente culpa alias adipisci aperiam officiis quisquam aspernatur ut neque. Ut quo ipsum reiciendis veritatis eaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil in consequuntur quisquam quidem esse? Sapiente culpa alias adipisci aperiam officiis quisquam aspernatur ut neque. Ut quo ipsum reiciendis veritatis eaque."
          }}
        />
      </div>
    </div>
  )
}

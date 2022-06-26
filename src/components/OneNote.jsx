import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"

const OneNote = (props) => {
    const context = useContext(noteContext);
    const { deleteNote, editNote } = context;
    const { note, updateNote } = props;
    return (
        <div>
            <div className='m-3'>
                <div class="block p-3 max-w-xs min-w-min bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {note.title}
                    </h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">
                        {note.description}
                    </p>
                    <div className="flex justify-between ">

                        <svg onClick={() => { updateNote(note) }} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                        <svg onClick={() => { deleteNote(note._id) }} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default OneNote
import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext"
const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" })
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div className='my-6 md:flex md:justify-center md:items-center'>
                <form className='md:w-1/3 '>
                    <div class="">
                        <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-tr-lg rounded-tl-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Title" required="" name="title" value={note.title} onChange={onChange} minLength={5} />
                    </div>
                    <div class="">
                        <textarea id="description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Description" name="description" value={note.description} onChange={onChange} minLength={5} />
                    </div>
                    <div class="mb-6">
                        <input type="text" id="tag" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  rounded-br-lg rounded-bl-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Tag' name="tag" value={note.tag} onChange={onChange} />
                    </div>

                    <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" class=" md:place-items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleClick}>Submit</button>
                </form>

            </div>
        </div>)
}

export default AddNote

import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from "../context/notes/noteContext"
import AddNote from './AddNote'
import OneNote from './OneNote'

// const notes = [
//     {
//         "_id": "623ec8cda516ffbc7203f4de",
//         "user": "623eaf25efbbeffac72e6213",
//         "title": "Title 1",
//         "description": "Description 1sfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
//         "tag": "this is ",
//         "date": "2022-03-26T08:03:25.755Z",
//         "__v": 0
//     },
//     {
//         "_id": "623ec8d7a516ffbc7203f4e0",
//         "user": "623eaf25efbbeffac72e6213",
//         "title": "My Title 22222222 222222222 22222222222222222",
//         "description": " 2 Description ",
//         "tag": "this is ",
//         "date": "2022-03-26T08:03:35.380Z",
//         "__v": 0
//     }
// ]
const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context;
    const ref = useRef(null);
    const refClose = useRef(null);
    const [showModal, setShowModal] = useState(false)

    const [updateNotes, setUpdateNotes] = useState({ id: "", etitle: "", edescription: "", etag: "" });
    const updates = (currentNote) => {
        ref.current.click();
        setUpdateNotes({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }
    const handleClick = (e) => {
        editNote(updateNotes.id, updateNotes.etitle, updateNotes.edescription, updateNotes.etag)
        setShowModal(false)
        refClose.current.click();
    }
    const onChange = (e) => {
        setUpdateNotes({ ...updateNotes, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        getNotes()
        console.log("GetNotes is called");
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <AddNote />
            <div className="editNotes">
                <button ref={ref}
                    className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 hidden"
                    type="button"
                    onClick={() => setShowModal(true)}
                >

                </button>
                {showModal ? (
                    <>
                        <div className="flex bg-gray-600 bg-opacity-70 justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                            <div className="relative w-1/3 my-6 mx-auto max-w-3xl">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <div className="relative p-2 flex-auto">
                                        <form className=''>
                                            <div class="">
                                                <input type="text" id="etitle" name="etitle" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-tr-lg rounded-tl-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Title" required="" value={updateNotes.etitle} onChange={onChange} minLength={5} />
                                            </div>
                                            <div class="">
                                                <textarea id="edescription" name="edescription" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Description" value={updateNotes.edescription} onChange={onChange} minLength={5} required />
                                            </div>
                                            <div class="mb-6">
                                                <input type="text" id="etag" name="etag" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  rounded-br-lg rounded-bl-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Tag' value={updateNotes.etag} onChange={onChange} />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="flex items-center justify-end mb-5 mr-5  rounded-b">
                                        <button ref={refClose}
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        <button
                                            className=" md:place-items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            type="button"
                                            onClick={handleClick} disabled={updateNotes.etitle.length < 5 || updateNotes.edescription.length < 5}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : null}
            </div>
            <div className='md:flex md:flex-wrap md:flex-row'>

                {notes.map((note) => { return <OneNote key={note._id} updateNote={updates} note={note} /> })}
                {console.log(notes)}
            </div>
        </div>
    )
}

export default Notes
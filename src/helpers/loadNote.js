import { db } from "../firebase/firebase-config"

export const loadNote = async (uid, noteid) => {
    const noteSnap = await db.collection(`${ uid }/journal/notes`).doc(noteid).get()

    return noteSnap.data();
}
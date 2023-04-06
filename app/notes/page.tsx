// import pocket base to implement sdk
// import PocketBase from "pocketbase";
import Link from "next/link";
import styles from "./Notes.module.css";
import CreateNote from "./CreateNotes";

// caching setting for packetbase sdk
// export const dynamic = "auto",
//   dynamicParams = true,
//   revalidate = 0,
//   fetchCache = "auto",
//   runtime = "nodejs",
//   preferredRegion = "auto";

async function getNotes() {
  //                      FETCHING THROUGH POCKET BASE API
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/notes_app/records",
    { cache: "no-store" }
  );
  const data = await res.json();

  return data?.items as any[];

  //                    FETCHING WITH POCKETBASE SDK
  // const db = new PocketBase("http://127.0.0.1:8090");
  // const data = await db.collection("notes_app").getFullList({
  //   sort: "-created",
  // });
  // return data as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();
  return (
    <div>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
      <CreateNote />
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, field, created } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2>{title}</h2>
        <h5>{field}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
}

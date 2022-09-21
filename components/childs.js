import Link from 'next/link'

export function childLink ( { tag, id, name }) {
  return <Link key={"link"+id} href={tag+id}>
            <a key={id} className="list-group-item list-group-item-action">{name}</a>
         </Link>
}

export function childListTitle ( { isChild } ) {
  let text = (isChild) ? "Child of Children" : "Is this Child Adult?";
  return <h2>{text}</h2>
}

export default function PersonList ( { peeps, isChild } ) {
    let tag = (isChild) ? '/children/' : '/grownup/';
    return <article className="col-md-5 col-12 bg-secondary mx-auto border border-2 rounded">
      <childListTitle isChild={isChild} />
      <div className="list-group">
        {peeps.map( ({id, name}) => <childLink key={"pl"+id} tag={tag} id={id} name={name} /> )}
      </div>
    </article>
    
}
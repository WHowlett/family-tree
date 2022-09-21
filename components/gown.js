import Link from 'next/link'


export function personLink ( { name, family, id } ) {
  let tag = (family) ? "/grownup/" : "/children/";
  return <div className="my-3 p-2 border-top">
    <h7>Adults in the family:</h7>
    <div className="list-group">
          <Link key={"link" + id} href={tag + id}>
            <a key={id} className="list-group-item list-group-item-action">{name}</a>
          </Link>
    </div>  
  </div>
  

}



export default function whichPerson ( { info } ) {
  console.log(info);
    return ( <>
      <div className="row text-center">
        <h1>{info.name}</h1>
      </div>
      <article className="card col-6 m-auto my-3">
        <div className="card-body">
            <h5 className="card-title">{info.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{info.who}</h6>
            <h6 className="card-subtitle mb-2 text-muted">{
                (info.age) ? "Adult" : "Child"
            }</h6>
            <p className="card-text">Born on: {info.birthdate}</p>
            <p className="card-text">Place of birth: {info.birthplace}</p>
            <personLink name={info.nemData.name} family={!info.age} id={info.nemData.id}></personLink>
        </div>
      </article>
      </>
    );
}
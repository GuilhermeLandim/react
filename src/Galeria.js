import {getImageUrl} from './utils.js'

function Avatar(props){
  let person = props.person;
  let size = props.size;
  return(
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  )
}

function Card({children}){
  return(
    <div className="card">
      {children}
    </div>
  )
}
export function Perfil() {
  return (
    <>
    <Avatar person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }} size={100} />
    <Avatar person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }} size={80} />
    <Avatar person={{ name: 'Aklilu Lemma', imageId: 'OKS67lh' }} size={50} />
    </>
  );
}

export default function Galeria (){
  return(
    <section>
      <h1>Cientistas incriveis</h1>
      <Perfil/>
    </section>
  )
}
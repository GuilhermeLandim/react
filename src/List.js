import { getImageUrl } from "./utils";
const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
}, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
}, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
}, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids',
    imageId: 'IOjWm71'
}, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx81'
}];

const chemists = people.filter(person =>
    person.profession === 'chemist'
);

export default function List() {
    const listItems = people.map(person =>
        <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name}></img>
            <p>
                <b>{person.name}: </b>
                {' ' + person.profession + ' '}
                por enquanto {person.accomplishment}
            </p>
        </li>
    );
    return <ul>{listItems}</ul>
}
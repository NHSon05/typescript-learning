interface IPerson {
    readonly firstName: string;
    lastName?: string;
    address: string
}

type Person41 = {
    firstName: string;
    lastName: string
}


function getFullName(person: IPerson) {
    person.firstName = 'Son';
    return `${person.firstName} ${person.lastName}`;
}

const person40 = {
    firstName: 'Son',
    lastName: 'Hehe Boy',
    address: "Ha Noi"
};
console.log(getFullName(person40));

function Interfaces() {
    return (  
        <h1>Hehe</h1>
    );
}

export default Interfaces;
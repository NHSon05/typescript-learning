class Circle{
    static pi: number = 3.14;
    public test: number = 69;

    static calculateArea(radius:number){
        return this.pi * radius * radius;
    }
}

console.log(Circle.calculateArea(5));

function StaticMethod() {
    return (  
        <h1>Phải chịu</h1>
    );
}

export default StaticMethod;
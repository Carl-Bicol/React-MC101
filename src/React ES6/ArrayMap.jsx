function ArrayMap() {

    const fruitlist = ['apple', 'banana', 'cherry'];

    return (
        <ul>
        {fruitlist.map((fruit, index, array) => {
            return (
            <li key={fruit}>
                Number: {fruit}, Index: {index}, Array: {array}
            </li>
            );
        })}
        </ul>
    );
}

export default ArrayMap;
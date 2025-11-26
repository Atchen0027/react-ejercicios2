function Test() {
    const [contador, setContador] = React.useState(0);
    const handleIncrementar = () => {
        setContador(contador + 1);
    };
    const handleDecrementar = () => {
        setContador(contador - 1);
    };
    
    
    return (
        <div>
            <h1>Contador</h1>
            <p>{contador}</p>
            <button onClick={handleIncrementar}>Incrementar</button>
            <button onClick={handleDecrementar}>Decrementar</button>
        </div>
    );
}
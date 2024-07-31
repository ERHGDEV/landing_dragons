const Card = ({ 
    name, 
    called, 
    riders, 
    notes, 
    image
}) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={name} />
            </div>
            <div className="card-content">
                <h2>{name}</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Called:</td>
                            <td>{called}</td>
                        </tr>
                        <tr>
                            <td>Riders:</td>
                            <td>{riders}</td>
                        </tr>
                        <tr>
                            <td>Notes:</td>
                            <td>{notes}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Card

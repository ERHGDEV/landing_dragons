const Documentation = () => {
    return (
        <div className="documentation" id="documentation">
        <h1>Documentation</h1>
        <p>Dragons are mythical creatures from the world of "A Song of Ice and Fire." 
            They can be ridden by Targaryens and are known for their formidable power and intelligence. 
            Each dragon has unique characteristics, including its size, color, and fire-breathing abilities. 
            This API provides detailed information about each dragon, 
            including its name, aliases, riders, and other notable features.</p>
        <p>The base URL for the API is <a target="_blank" href="https://dragons-api-ten.vercel.app/api/dragons"><strong>https://dragons-api-ten.vercel.app/api/dragons</strong></a></p>

        <p>The API has two main endpoints:</p>
        <ul>
            <li><strong>GET /api/dragons</strong>: Returns a list of all dragons in the database.</li>
            <li><strong>GET /api/dragons/:id</strong>: Returns detailed information about a specific dragon based on its ID.</li>
        </ul>

        <h2>Dragon Object (type)</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>id</td>
                        <td>The identifier for this resource.</td>
                        <td>string</td>
                    </tr>
                    <tr>
                        <td>name</td>
                        <td>The name of the dragon.</td>
                        <td>string</td>
                    </tr>
                    <tr>
                        <td>called</td>
                        <td>A title or alias for the dragon.</td>
                        <td>string</td>
                    </tr>
                    <tr>
                        <td>riders</td>
                        <td>The character(s) who have ridden the dragon.</td>
                        <td>string</td>
                    </tr>
                    <tr>
                        <td>colors</td>
                        <td>The color description of the dragon.</td>
                        <td>string</td>
                    </tr>
                    <tr>
                        <td>notes</td>
                        <td>Additional information about the dragon.</td>
                        <td>string</td>
                    </tr>
                    <tr>
                        <td>hatched</td>
                        <td>The year the dragon hatched.</td>
                        <td>string</td>
                    </tr>
                    <tr>
                        <td>died</td>
                        <td>The year the dragon died (if applicable).</td>
                        <td>string</td>
                    </tr>
                    <tr>
                        <td>books</td>
                        <td>The books in which the dragon appears.</td>
                        <td>string</td>
                    </tr>
                    <tr>
                        <td>tv_series</td>
                        <td>The TV series in which the dragon appears.</td>
                        <td>string</td>
                    </tr>
                    <tr>
                        <td>image</td>
                        <td>A URL to an image of the dragon.</td>
                        <td>string</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Documentation
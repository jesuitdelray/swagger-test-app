import "./App.css"
import { Api } from "./api/yourApi"

function App() {
    const api = new Api({ baseURL: "https://jsonplaceholder.typicode.com/todos/" })

    async function getVersionInfo() {
        try {
            const response = await api.v10.getVersionInfo()
            console.log("Response: ", response.data)
        } catch (error) {
            console.error("Error fetching version info:", error)
        }
    }

    return (
        <>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => getVersionInfo()}>Get Version Info</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </>
    )
}

export default App

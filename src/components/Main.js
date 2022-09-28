export default function Main(props) {
    return (
        <main 
            style={props.darkMode ? props.styles.dark.mainBgc : props.styles.light.mainBgc}
            className="facts-container"
        >
            <h1 
                className="facts-title"
                style={props.darkMode ? props.styles.dark.font : props.styles.dark.font}
            >
                Fun facts about React
            </h1>
            <ul className="facts-list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}

// git add .
// git commit -m "conditional styling"
// git push -u origin main
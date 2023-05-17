import{ useState, createContext } from 'react';

const themeContext = createContext()

function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false)

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	}

    const value = {
        darkMode,
        toggleDarkMode
    }

	return (
		<themeContext.Provider value={ value }>
            {children}
		</themeContext.Provider>
	)
}

export { themeContext, ThemeProvider }
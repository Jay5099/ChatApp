// routes
import Router from "./routes/index"
// themeProvider
import  ThemeProvider  from "./theme/index"
// components
import ThemeSettings from './components/settings/index'

function App (){
  return (
    <ThemeProvider>
      <ThemeSettings>
        <Router/>
      </ThemeSettings>
    </ThemeProvider>
  )
}
export default App
import LoginForm from "./Components/FormLogin"
import Listing from "./Components/Listing"
import MainForm from "./Components/MainForm"
import SideBar from "./Components/NavigateBar"


function App() {
return(
<>
  <main>
    <section>
      <div className="container">
        {/* <LoginForm/> */}
        {/* <Listing/> */}
        {/* <SideBar/> */}
        <MainForm/>
      </div> 
    </section>
  </main>
</>
)

}

export default App
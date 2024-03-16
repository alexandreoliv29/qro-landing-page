import { Blog } from "../Blog/Blog"
import { Feedback } from "../Feedback/Feedback"
import { Footer } from "../Footer/Footer"
import { FreeText } from "../FreeTest/FreeTest"
import { Header } from "../Header/Header"
import { Management } from "../Management/Management"
import { PlayNow } from "../PlayNow/PlayNow"
import { Prices } from "../Prices/Prices"


export const LandingPage = () => {
    return (
        <>
            <Header />
            <Management />
            <FreeText />
            {/* <Powerful /> */}
            <Feedback />
            <Prices />
            <PlayNow />
            <Blog />
            <Footer />
        </>
    )
}
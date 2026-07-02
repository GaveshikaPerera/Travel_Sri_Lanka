import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import HotelsPage from "./HotelsPage";
import TransportPage from "./TransportPage";
import ToursPage from "./ToursPage";
import GuidesPage from "./Guides/GuidesPage";
import GuideProfilePage from "./Guides/GuideProfilePage";
import GuideMessagePage from "./Guides/GuideMessagePage";

export default function HomePage() {
	return (
		<div className="w-full h-full bg-primary text-secondary">
			<Navbar />
			<div className="h-[calc(100%-100px)] w-full ">
                <Routes>
                    <Route path="/" element={<h1>Home Page</h1>} />

                    <Route path="/hotels" element={<HotelsPage />} /> 

                    <Route path="/transport" element={<TransportPage />} />

                    <Route path="/tours" element={<ToursPage />} />
                    
                    
                    <Route path="/guides" element={<GuidesPage />} />

                    <Route path="/contact-us" element={<h1>Contact Us Page</h1>} />
                    
                    <Route path="/about-us" element={<h1>About Us Page</h1>} />
                    
                    <Route path="/guides/:id" element={<GuideProfilePage />} />
                    <Route path="/guides/:id/message" element={<GuideMessagePage />} />

                    <Route path="/*" element={<h1>404 Not Found</h1>} />
                </Routes>
			</div>
		</div>
	);
}
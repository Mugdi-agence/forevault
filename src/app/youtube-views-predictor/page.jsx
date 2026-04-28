import dynamic from "next/dynamic";
import Navbar  from "../nav";
import Footer  from "../footer";
import YtViewsPredictorContent from "./Ytviewpredictorcontent";
import "../yt_views_predictor.scss";

export const metadata = {
    title: "YouTube Views Predictor — 90-Day Forecast Tool",
    description:
        "Estimate how your YouTube video will perform over the next 90 days. " +
        "Enter CTR, retention, engagement and channel data to get a realistic view curve.",
};

// PredictorEngine est 100 % client (états, GSAP, Recharts…)
// ssr: false évite toute tentative de rendu serveur du composant
const PredictorEngine = dynamic(
    () => import("../Predictor-Engine"),
    {
        ssr: true,
        loading: () => (
            <div className="ytp-ssr-loader" aria-label="Loading predictor…">
                <span className="ytp-ssr-spinner" />
            </div>
        ),
    }
);

export default function YtViewsPredictorPage() {
    return (
        <>
        <div className="containering">
            
            <Navbar />
            
            
            <div className="ytp-root">
                <PredictorEngine />
            </div>

            <YtViewsPredictorContent />

            <Footer />
        </div>
        <div className="fonds"/>
        </>
        
    );
}
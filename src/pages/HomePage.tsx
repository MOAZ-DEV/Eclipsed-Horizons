import { NavBar } from "../components/NavBar.tsx";
import introbg from "../assets/DesignRes/introbg.png"
import gphcx from "../assets/DesignRes/gphcx.png"
import lnv from "../assets/DesignRes/lnv.mp4";
import { TweenMax } from "gsap";

TweenMax

import "./styling.scss";

export const HomePage = (_props: any) => {

    return <div className="HomePage">
        <span className="gphcx">
            <img src={gphcx} alt="moon" loading="lazy" />
        </span>
        <NavBar />

        <div className="heroWrap">
            <h6 className="BR14">
                An amazing journey supported <br /> with learning games</h6>
            <h2 className="HB64">
                The Eclipse Season: <br />
                A Guide to Understanding <br /> and Observing</h2>
        </div>

        <div className="introWrap">
            <img src={introbg} alt="Moon eclipse" loading="lazy" />
            <h6 className="BM18">
                Have you ever seen the Moon <br /> disappear behind the Sun and <br /> wondered why?</h6>
            <h4 className="HR24">
                Well, here at Eclipsed Horizons,
                we're going to teach you all about the amazing world of eclipses!
                Get ready for an adventure that will take you from mythical stories to scientific fact!
                So come along and let's dive right in to eclipse world!</h4>
        </div>

        <div className="pnlWrap">
            <h3 className="HB36">
                Learn And Play. <br /> Explore Our Fun <br /> Games Now!</h3>

            <ul>
                <li><a href="">
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 13L12.5 1M12.5 1H1.5M12.5 1V11" stroke="black" /></svg>
                    <h5 className="BB18">
                        Case Matching</h5>
                    <h6 className="BM12">
                        A win that depends on the right learnings</h6></a></li>
                <li><a href="">
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 13L12.5 1M12.5 1H1.5M12.5 1V11" stroke="black" /></svg>
                    <h5 className="BB18">
                        Case Matching</h5>
                    <h6 className="BM12">
                        A win that depends on the right learnings</h6></a></li>
                <li><a href="">
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 13L12.5 1M12.5 1H1.5M12.5 1V11" stroke="black" /></svg>
                    <h5 className="BB18">
                        Case Matching</h5>
                    <h6 className="BM12">
                        A win that depends on the right learnings</h6></a></li>
                <li><a href="">
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 13L12.5 1M12.5 1H1.5M12.5 1V11" stroke="black" /></svg>
                    <h5 className="BB18">
                        Case Matching</h5>
                    <h6 className="BM12">
                        A win that depends on the right learnings</h6></a></li>
            </ul>
        </div>
        <footer>
            <div>
                <h3 className="HB36">
                    This website made with team full with passion. Targeted to deliver knowledge to the young generation!

                </h3>
                <div className="wrap">
                    <div className="video">
                        <video src={lnv} autoPlay={true} playsInline={true} loop={true} ></video>
                        <h4 className="HR18">
                            Some eclipses could cause eye damage to us. Get know to it and learn how to avoid getting harm from it.</h4>
                    </div>
                    <ul>
                        <li className="BR14"><a>Mechanics of an eclipse</a></li>
                        <li className="BR14"><a>Solar vs lunar</a></li>
                        <li className="BR14"><a>Safety while watching an eclipse</a></li>
                    </ul>
                </div>
            </div>
            <div>        
            <h6 className="BM12">
                    @SpaceAppChallenge Project</h6>
                    <h6 className="BM12">
                    Last Updated: 29 September, 2023</h6>
            </div>
        </footer>
    </div>;
}

/**
 * 
 * <h6 className="BM12">
                    Credits. <br />
                    Moaaz - Mohammed - Sandy - Sara</h6>
 * 
 How_to_Safely_Watch_a_Solar_Eclipse_ExonFXrnHKE_298
 * 
 * Some eclipses could cause eye damage to us. Get know to it and learn how to avoid getting harm from it
 
<div className="paperWrap">
            <img src={exp} alt="" />
            <section>
                <h6 className="BM14">The phenomena of an eclipse</h6>
                <div className="BR18">
                    <h4>
                        A solar eclipse occurs when the Moon passes directly between the Earth and the Sun,
                        blocking the Sun's light and creating a dark shadow on the Earth. A lunar eclipse occurs when
                        the Earth's shadow falls on the Moon, causing it to appear darker during this period.
                        Depending on the location, the duration of the eclipse can range from a few minutes
                        to several hours.</h4>
                    <h4>
                        The phenomenon of an eclipse refers to the event when the Moon passes between the Earth
                        and Sun and blocks the light that reaches the Earth. Eclipses can be categorized into
                        two types: solar and lunar.</h4>
                </div>
            </section>
        </div>


Intro
Mechanics of an eclipse 
Solar vs lunar
Safety while watching an eclipse





 */
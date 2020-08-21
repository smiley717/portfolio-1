import React,{useEffect} from 'react'
import {FaReact} from 'react-icons/fa'
import {GrGatsbyjs} from 'react-icons/gr'
import {SiKubernetes} from 'react-icons/si'
import {DiJavascript} from 'react-icons/di'
import gsap from "gsap";

import { Container,Row,Col,Card,Button } from 'react-bootstrap';

function Ourskills() {
    useEffect(()=>{
        const z2=gsap.timeline();
        z2
        .from(".left",{
            ease:"none",
            xPercent:-50,
            autoAlpha:0,
            scrollTrigger:{
                trigger:".trigger1",
                end:"center top+=20%",
                scrub:true,
                pin:true,
            },
            stagger:0.2
        })
        .from(".violet",{
            ease:"none",
            scrollTrigger:{
                trigger:".trigger1",
                scrub:true,
            },
            rotate:450,
            stagger:0.2

        },"0")
        .from(".timeline-ic",{
            ease:"none",
            scrollTrigger:{
                trigger:".trigger1",
                scrub:true,
            },
            rotate:720,
            stagger:0.2

        },"0")
        .from(".right",{
            ease:"none",
            xPercent:50,
            autoAlpha:0,
            scrollTrigger:{
                trigger:".trigger1",
                end:"center top+=20%",
                scrub:true,
                pin:true,
            },
            stagger:0.2
        },"0.5")
    })
    return (
        <div className="project-section trigger1 " id="skills">
           
        <Container  className="project  ">
        <div className="project-heading text-left"><h3 className="basic-heading">Skills !</h3></div>
        <div class="container skills ">
     
            <div class="row">
                <div class="col-md-12">
                    <div class="main-timeline">
                        <a href="#" class="timeline">
                            <div class="timeline-icon left"><GrGatsbyjs className="timeline-ic violet"/></div>
                            <div class="timeline-content right">
                                <h3 class="title">Web Designer</h3>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                </p>
                            </div>
                        </a>
                        <a href="#" class="timeline">
                            <div class="timeline-icon right"><FaReact className="timeline-ic"/></div>
                            <div class="timeline-content left">
                                <h3 class="title">Web Developer</h3>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                </p>
                            </div>
                        </a>
                        <a href="#" class="timeline">
                            <div class="timeline-icon left">< SiKubernetes className="timeline-ic"/></div>
                            <div class="timeline-content right">
                                <h3 class="title">Web Designer</h3>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                </p>
                            </div>
                        </a>
                        <a href="#" class="timeline">
                            <div class="timeline-icon right">< DiJavascript className="timeline-ic text-warning"/></div>
                            <div class="timeline-content left">
                                <h3 class="title">Web Developer</h3>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>


        </Container>
        </div>
    )
}

export default Ourskills

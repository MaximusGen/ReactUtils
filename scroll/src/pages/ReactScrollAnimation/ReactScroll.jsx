import React from "react";
import "./reactscroll.css";
import {
  Animator,
  batch,
  ScrollContainer,
  ScrollPage,
  Sticky,
  Zoom,
  Fade,
  MoveOut,
  StickyIn,
  FadeIn,
  ZoomIn,
  Move,
  MoveIn,
} from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Sticky(), Move());


const ReactScroll = () => {
  return (
    <>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -500))}>
            <div className="img one"></div>
          </Animator>
        </ScrollPage>

        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
          <div className="img two"></div>
          </Animator>
        </ScrollPage>

        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
          <div className="img three "></div>
          </Animator>
        </ScrollPage>

        <ScrollPage page={3}>
            <div className="section-3">
            <Animator animation={MoveIn(-1000, 0)}>
            <div className="img-section  one"></div>
            </Animator>
            <Animator animation={MoveIn(1000, 0)}>
            <div className="img-section two"></div> 
            </Animator>
            <Animator animation={MoveOut(-500, -1000)}>
            <div className="img-section three"></div>
            </Animator>
            <Animator animation={MoveOut(-500, 1000)}>
            <div className="img-section four"></div>
            </Animator>         
            </div>
        </ScrollPage>

        <ScrollPage page={4}>
            <Animator animation={FadeUp}>
            <div className="img four"></div>
            </Animator>
        </ScrollPage>
      </ScrollContainer>
    </>
  );
};

export default ReactScroll;

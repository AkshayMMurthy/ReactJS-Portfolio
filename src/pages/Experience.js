import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="blue">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019"

        >
          <h3 className="vertical-timeline-element-title">
            Ryan International School
          </h3>
          <p> ICSE Class X</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021"

        >
          <h3 className="vertical-timeline-element-title">
            Ekya School ITPL
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            
          </h4>

          <p> CBSE Class XII</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - Present">

          <h3 className="vertical-timeline-element-title">
            VIT
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            
          </h4>
          <p>Pursuing B.Tech in Computer Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="August 2023 - Sept 2023"

        >
          <h3 className="vertical-timeline-element-title">
            Web Developer Intern at MYn
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            
          </h4>
          <p>
            Worked on ReactJS
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
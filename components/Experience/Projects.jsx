import Highlight from '../Highlight';
import TagList from '../TagList';
import { Segment, SubSegment } from '../Segment';

function ExpHeader({ title, company, date_range }) {
  return (
    <div className="exp-header">
      <div className="header">
        <h2>{title}</h2>
        <div className="date-range">
          <Highlight text={date_range} bg />
        </div>
      </div>
      <div>{company}</div>
    </div>
  );
};

function ExpDetails({ title = '', children = [], id = '' }) {
  return (
    <div className="exp-details" id={id}>
      <h3 className="header"><Highlight text={title} /></h3>
      <div className="content">{children}</div>
    </div>
  );
}

function ExpFooter({ tags = [] }) {
  return (
    <div className="exp-footer">
      <div>Technologies & skills</div>
      <div><TagList tags={tags} /></div>
    </div>
  )
};

function Projects() {
  return (
    <>
      <Segment id="ci-cd-pipeline">
        <ExpHeader
          title="CI/CD Pipeline"
          company="AdBridg" 
          date_range="January 2020 - April 2024"
        />

        <hr />
        
        <ExpDetails title="Design Concept" id="ci-cd-pipeline">
          <SubSegment>
            Integrated the new <Highlight text="NextJS" /> system to the existing CI/CD pipeline
          </SubSegment>
        </ExpDetails>

        <ExpDetails title="Pre-existing applications">
          <SubSegment>
            Enhanced web application with new features, increasing user engagement by 
            <Highlight text="10%" />and client retention by<Highlight text="14%" />
          </SubSegment>
        </ExpDetails>

        <ExpDetails title="Implementation">
          <SubSegment>
            Enhanced web application with new features, increasing user engagement by 
            <Highlight text="10%" />and client retention by<Highlight text="14%" />
          </SubSegment>
        </ExpDetails>

        <ExpDetails title="Iteration">
          <SubSegment>
            Enhanced web application with new features, increasing user engagement by 
            <Highlight text="10%" />and client retention by<Highlight text="14%" />
          </SubSegment>
        </ExpDetails>

        <ExpDetails title="Upgrades">
          <SubSegment>
            Enhanced web application with new features, increasing user engagement by 
            <Highlight text="10%" />and client retention by<Highlight text="14%" />
          </SubSegment>
        </ExpDetails>

        <ExpDetails title="Challanges">
          <SubSegment>
            Enhanced web application with new features, increasing user engagement by 
            <Highlight text="10%" />and client retention by<Highlight text="14%" />
          </SubSegment>
        </ExpDetails>

        <hr />

        <ExpFooter tags={[
          'Redis',
          'Next.js',
          'git',
          'Jasmine',
          'DevOps',
          'Integration Testing',
        ]} />
      </Segment>


      {/* --------------- Inhouse MVC -------------------- */}
      <Segment id="inhouse-mvc">
        <ExpHeader
          title="Inhouse MVC"
          company="AdBridg" 
          date_range="January 2020 - April 2024"
        />

        <hr />
        
        {/* Don't forget to mention the API layer but not in detail for security reasons */}
        <ExpDetails title="Why do it at all?" id="ci-cd-pipeline">
          <SubSegment>
            Integrated the new <Highlight text="NextJS" /> system to the existing CI/CD pipeline
          </SubSegment>
        </ExpDetails>

        <ExpDetails title="Keeping it simple">
          <SubSegment>
            Enhanced web application with new features, increasing user engagement by 
            <Highlight text="10%" />and client retention by<Highlight text="14%" />
          </SubSegment>
        </ExpDetails>

        <ExpDetails title="Implementation">
          <SubSegment>
            Enhanced web application with new features, increasing user engagement by 
            <Highlight text="10%" />and client retention by<Highlight text="14%" />
          </SubSegment>
        </ExpDetails>

        <ExpDetails title="The good">
          <SubSegment>
            Enhanced web application with new features, increasing user engagement by 
            <Highlight text="10%" />and client retention by<Highlight text="14%" />
          </SubSegment>
        </ExpDetails>

        <ExpDetails title="The bad">
          <SubSegment>
            Enhanced web application with new features, increasing user engagement by 
            <Highlight text="10%" />and client retention by<Highlight text="14%" />
          </SubSegment>
        </ExpDetails>

        <ExpDetails title="Challanges">
          <SubSegment>
            Enhanced web application with new features, increasing user engagement by 
            <Highlight text="10%" />and client retention by<Highlight text="14%" />
          </SubSegment>
        </ExpDetails>

        <hr />

        <ExpFooter tags={[
          'VanillaJS',
          'git',
          'Plotly.js',
        ]} />
      </Segment>
    </>
  );
}

export default Projects;

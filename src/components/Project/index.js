import React from "react";
import Card from "react-bootstrap/Card";

function Project(props) {
  // This imports the information for the current project sent down.
  const { name, description, image, technologies, deployed, github } =
    props.project;

  // const name = currentProject.name;
  // console.log(currentProject);
  // const description = currentProject.description;
  // const image = currentProject.image;
  const techs = technologies;
  const appLink = deployed;
  const gitLink = github;

  // This function parses the information from the array and creates a list.
  function getTechs(techArray) {
    let techList = "";

    for (var i = 0; i < techArray.length; i++) {
      if (i === techArray.length - 1) {
        techList += techArray[i];
      } else {
        techList += techArray[i] + ", ";
      }
    }

    return techList;
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={require(`../../assets/images/${image}`)}
        className="card-image"
      />
      <div className="center">
        <Card.Body>
          <Card.Title className="card-title">{name}</Card.Title>
          <Card.Text className="card-text">{description}</Card.Text>
          <Card.Subtitle className="card-subtitle">Techs Used</Card.Subtitle>
          <Card.Text className="card-techs">{getTechs(techs)}</Card.Text>
          <Card.Link href={appLink} target="_blank" className="card-link">
            {name} App
          </Card.Link>
          <br></br>
          <Card.Link href={gitLink} target="_blank" className="card-link">
            {name} Github
          </Card.Link>
        </Card.Body>
      </div>
    </Card>
  );
}

export default Project;

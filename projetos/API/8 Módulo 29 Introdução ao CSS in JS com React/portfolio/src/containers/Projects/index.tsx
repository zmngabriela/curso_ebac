import Title from '../../components/Title';
import Project from '../../components/Project';
import { ProjectsStyle } from './styles';

const Projects = () => {
  return (
    <section>
      <Title fontSize={16}>Projetos</Title>
      <ProjectsStyle>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
      </ProjectsStyle>
    </section>
  );
};

export default Projects;

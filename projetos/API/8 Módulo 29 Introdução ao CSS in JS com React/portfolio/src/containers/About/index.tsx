import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import { GithubSection } from './styles';

const About = () => {
  return (
    <section>
      <Title fontSize={16}>Sobre</Title>
      {/* a propriedade type esta tipada como 'principal' ou 'secondary. entao se colocar qqr coisa coisa vai dar erro' */}
      <Paragraph type="principal">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
        voluptates, vitae neque, veniam cupiditate laborum, harum assumenda
        suscipit beatae fugit repellat temporibus sed ea! Mollitia dicta at
        numquam incidunt ad!
      </Paragraph>
      <GithubSection>
        <img
          src="https://github-readme-stats.vercel.app/api?username=zmngabriela&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
          alt="GitHub Stats"
          className="github-images"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=zmngabriela&layout=compact&langs_count=7&theme=dracula"
          alt="GitHub Most Used Languages"
          className="github-images"
        />
      </GithubSection>
    </section>
  );
};

export default About;

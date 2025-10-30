import { DiscordOutlined, GithubFilled, YoutubeOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import "./Footer.scss";

const { Footer } = Layout;

export function AppFooter() {
  return (
  <Footer className="footer">
    <a href="https://github.com/EndToEndLabCR" target="_blank">
      <GithubFilled className="github-icon"/>
    </a>

    <a href="https://www.youtube.com/@endtoendlabcr" target="_blank">
      <YoutubeOutlined className="youtube-icon"/>
    </a>

    <a href="https://discord.gg/EdtfSM4tXm" target="_blank">
      <DiscordOutlined className="discord-icon"/>
    </a>

    <div className = "footer-text">
    To-Do App ©{new Date().getFullYear()} Created by EndToEndLabCR
    </div>
    
    </Footer>);
}

import React from "react";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <IndexNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/profilepic.png").default}
              />
            </div>
            <div className="name">
              <h4 className="title">
                ASTHA BAFNA <br />
              </h4>
              <h6 className="description">Owner, Creator</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="12">
              <h5>
              I remember the day crystal clear when I asked my mom to bring me a sketchbook and some colour pencils, it all began from there. I was 19 years old then, studying BCom and one day suddenly a quote popped up while scrolling on Pinterest “ don’t spend another year doing the same shit! “ And not a single year has been the same since then.
              <br/><br/>
              While growing up in school, I was always the artistic kid , but eventually this was discouraged considering the fact that studies are more important so I continued with my bachelors degree but my mom fought for me and my interest in art, she saw the potential in me which even I couldn’t see. Animation VFX was the next chapter, it took me only a few days to figure out how to paint digitally and then there was no going back from art now . I started posting my artworks on Instagram and people appreciate it a lot. Portraits always fascinated me so I practised a lot of portraits and began to draw faces of influencers in Bollywood stars side-by-side I completed my BCom and started with MCom .
              In May 2020 during lockdown I learnt resin art  and started making my own products with that I started curating hampers too, it is so much fun. You can create anything you imagine. I have sold these products all across India and the best part is that, this is just the beginning.
              </h5>
              <br />
            </Col>
          </Row>
          <br />
        </Container>
      </div>
    </>
  );
}

export default ProfilePage;

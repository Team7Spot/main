import * as S from "./styles";

import React from "react";

// core components
import Header from "components/Header/Header.jsx";
import headerLinksStyle from "assets/jss/components/headerLinksStyle.jsx";
import NoAuthHeaderLinks from "components/Header/NoAuthHeaderLinks.jsx";
import AuthHeaderLinks from "components/Header/AuthHeaderLinks.jsx";
import TournamentList from "components/Tournament/TournamentList.jsx";

import Authentication from "components/API/Authentication.js";

//Teamspot
import Outline from "../../components/Outline/Outline";
import Comments from "../../components/Comments/Comments";
import Timeline from "../../components/Timeline/Timeline";

const HomePage = () => {
  return (
    <S.HomePage>
      <Outline />
      <Timeline />
      <Comments />
    </S.HomePage>
  );
};

// class HomePage extends React.Component {
//   render() {
//     const { classes, login, register, ...rest } = this.props;
//     return (
//       <div>
//         <div>
//           <Outline />
//           <Comments />
//           {/* <Ribbon /> */}
//           {/* <Header
//             color="primary"
//             brand="Teamspot"
//             rightLinks={
//               Authentication.loggedIn() ? (
//                 <AuthHeaderLinks />
//               ) : (
//                 <NoAuthHeaderLinks loginPage={login} registerPage={register} />
//               )
//             }
//             {...rest}
//           /> */}
//         </div>
//         {/* <TournamentList /> */}
//       </div>
//     );
//   }
// }

export default HomePage;

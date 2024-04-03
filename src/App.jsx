import BigSocialCard from "./components/BigSocialCard";
import { Container, GridContainer } from "./components/Container";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";
import { Data, SMALL_CARD_DATA } from "./assets/data/data";
import SmallSocialCard from "./components/SmallSocialCard";
import classes from "./App.module.css";
function App() {
  return (
    <ThemeProvider>
      <Container>
        <Header />
        <GridContainer>
          {Data.map(
            ({
              id,
              plateformIcon,
              userName,
              followersNumber,
              dateIcon,
              date,
            }) => (
              <BigSocialCard
                key={id}
                dateIcon={dateIcon}
                date={date}
                followersNumber={followersNumber}
                plateformIcon={plateformIcon}
                userName={userName}
              />
            )
          )}
        </GridContainer>
        <h2 className={classes["middle-header"]}>Overview - Today</h2>
        <GridContainer>
          {SMALL_CARD_DATA.map(
            ({ title, plateformIcon, views, percentage, percentageIcon }) => (
              <SmallSocialCard
                percentageIcon={percentageIcon}
                percentage={percentage}
                views={views}
                title={title}
                plateformIcon={plateformIcon}
              />
            )
          )}
        </GridContainer>
      </Container>
    </ThemeProvider>
  );
}

export default App;

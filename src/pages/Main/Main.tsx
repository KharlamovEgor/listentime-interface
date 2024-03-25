import { BigLink } from "../../components/BigLink/BigLink";
import { UserData } from "../../components/UserData/UserData";
import { BottomPanel } from "../../layout/BottomPanel/BottomPanel";
import { LeftPanel } from "../../layout/LeftPanel/LeftPanel";
import styles from "./Main.module.css";
import RoomsSrc from "../../assets/rooms.svg";
import FriendsSrc from "../../assets/friends.svg";
import TracksSrc from "../../assets/tracks.svg";

export function Main() {
  return (
    <main className={styles.main}>
      <LeftPanel className={styles["left-panel"]}>
        <UserData />
        <BigLink src={RoomsSrc}>Rooms</BigLink>
        <BigLink src={FriendsSrc}>Friends</BigLink>
        <BigLink src={TracksSrc}>Tracks</BigLink>
      </LeftPanel>
      <div className={styles.container}>
        <div className={styles.header}>
          <img src={RoomsSrc} alt=""/>
          <h1>Rooms List</h1>
        </div>
        <div className={styles.rooms}></div>
      </div>
      <BottomPanel className={styles["bottom-panel"]} />
    </main>
  );
}

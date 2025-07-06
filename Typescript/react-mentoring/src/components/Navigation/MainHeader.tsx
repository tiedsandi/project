import Button from "../UI/Button";
import { NavLink } from "react-router";
import UpcomingSessions from "../Sessions/UpcomingSessions";
import { useState } from "react";

export default function MainHeader() {
  const [upcomingSessionsVisible, setUpcomingSessionsVisible] = useState(false);

  function showUpcomingSessions() {
    setUpcomingSessionsVisible(true);
  }

  function hideUpcomingSessions() {
    setUpcomingSessionsVisible(false);
  }

  return (
    <>
      {upcomingSessionsVisible && (
        <UpcomingSessions onClose={hideUpcomingSessions} />
      )}
      <header id="main-header">
        <h1>ReactMentoring</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                end
              >
                Our Mission
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sessions"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Browse Sessions
              </NavLink>
            </li>
            <li>
              <Button onClick={showUpcomingSessions}>Upcoming Sessions</Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

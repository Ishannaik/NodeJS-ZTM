import { useCallback, useEffect, useState } from "react";
import { httpGetLaunches, httpSubmitLaunch, httpAbortLaunch } from "./requests";

function useLaunches(onSuccessSound, onAbortSound, onFailureSound) {
  const [launches, setLaunches] = useState([]);
  const [isPendingLaunch, setPendingLaunch] = useState(false);

  const getLaunches = useCallback(async () => {
    const fetchedLaunches = await httpGetLaunches();
    console.log("Fetched launches:", fetchedLaunches);
    setLaunches(fetchedLaunches);
  }, []);

  useEffect(() => {
    getLaunches();
  }, [getLaunches]);

  const submitLaunch = useCallback(
    async (e) => {
      e.preventDefault();
      setPendingLaunch(true);
      const data = new FormData(e.target);
      const launch = {
        launchDate: new Date(data.get("launch-day")),
        mission: data.get("mission-name"),
        rocket: data.get("rocket-name"),
        target: data.get("planets-selector"),
      };

      const response = await httpSubmitLaunch(launch);
      console.log("Submit Launch Response:", response);

      if (response.success) {
        onSuccessSound();
        getLaunches(); // Refresh launches to include the new one
      } else {
        onFailureSound();
      }
      setPendingLaunch(false);
    },
    [getLaunches, onSuccessSound, onFailureSound]
  );

  const abortLaunch = useCallback(
    async (id) => {
      const response = await httpAbortLaunch(id);
      console.log(`Abort Launch Response for ID ${id}:`, response);

      if (response.ok) {
        onAbortSound();
        getLaunches(); // Refresh launches after aborting
      } else {
        onFailureSound();
      }
    },
    [getLaunches, onAbortSound, onFailureSound]
  );

  return {
    launches,
    isPendingLaunch,
    submitLaunch,
    abortLaunch,
  };
}

export default useLaunches;

const API_URL = "http://localhost:8000";

async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planets`);
  return await response.json();
}

async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`);
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sort((a, b) => a.flightNumber - b.flightNumber);
}

async function httpSubmitLaunch(launch) {
  const response = await fetch(`${API_URL}/launches`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(launch),
  });
  if (!response.ok) {
    console.error("Failed to submit launch");
    return { ok: false };
  }
  const responseData = await response.json(); // Ensure we return JSON data
  console.log("Launch submitted, response data:", responseData);
  return responseData; // Return the parsed JSON data
}

async function httpAbortLaunch(id) {
  const response = await fetch(`${API_URL}/launches/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    console.error(`Failed to abort launch with ID: ${id}`);
    return { ok: false };
  }
  console.log(`Launch with ID: ${id} aborted successfully`);
  return { ok: true };
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };

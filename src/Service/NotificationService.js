import { googleScriptURL } from "../constants";

export const notifyVisitation = async (visitorInfo) => {
  const vistorMessage = `
  New Visitor Alert! :
  
  IP: ${visitorInfo.ip}
  City: ${visitorInfo.city}
  Region: ${visitorInfo.region}
  Country: ${visitorInfo.country}
  Location: ${visitorInfo.loc}
  ISP: ${visitorInfo.org}
  Timezone: ${visitorInfo.timezone}
  Postal: ${visitorInfo.postal}`;

  await fetch(googleScriptURL, {
    method: "POST",
    body: JSON.stringify({ message: vistorMessage }),
  });
};

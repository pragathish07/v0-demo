import telnyx from "telnyx";

const client = new telnyx(process.env.TELNYX_API_KEY as string);

export default client;

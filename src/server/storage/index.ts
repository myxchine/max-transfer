import { Storage } from "@google-cloud/storage";

const storage = new Storage({
  projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
  credentials: {
    private_key: process.env.GOOGLE_CLOUD_PRIVATE_KEY?.replace(/\\n/g, "\n"), // replace escaped newlines
    client_email: process.env.GOOGLE_CLOUD_CLIENT_EMAIL,
  },
});

export { storage };

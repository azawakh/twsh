import type { TwitterError } from "../../../types/twitter-error";
import twitterOauth from "../twitter-oauth";

export default (): Promise<{
  err: TwitterError | null;
  requestToken: string;
  requestTokenSecret: string;
}> =>
  new Promise((resolve: Function): void => {
    twitterOauth.getOAuthRequestToken(
      (err: TwitterError | null, token: string, secret: string): void => {
        if (err) {
          resolve({ err, requestToken: token, requestTokenSecret: secret });
          return;
        }
        resolve({
          err: null,
          requestToken: token,
          requestTokenSecret: secret,
        });
      }
    );
  });

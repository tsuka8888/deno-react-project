import { urlJoin } from "https://deno.land/x/url_join/mod.ts";

export default function Index() {
  const fullUrl = urlJoin("http://www.google.com", "a", "/b/cd", "?foo=123");

  console.log(fullUrl);

  return <></>;
}

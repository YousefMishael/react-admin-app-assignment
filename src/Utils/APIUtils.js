const API_KEY = "AIzaSyC7la03ntr18tbHFlWmAZxbuhpFM4eipNA";

/**
 *
 * @param {*} url requested URL
 * @param {*} method GET or POST
 * @param {*} body Used in creating new user to send the email and password
 * @returns request status and response data
 */
export function request(
  url,
  method,
  body = {},
  options = {
    headers: {
      "Content-Type": "application/json",
    },
  }
) {
  let _options = {
    ...options,
  };
  if (method.toUpperCase() === "POST") {
    _options.body = JSON.stringify(body);
  }

  let _url = url;
  if (_url.includes("API_KEY")) _url = _url.replace("API_KEY", API_KEY);
  return fetch(_url, {
    method,
    ..._options,
  }).then(async (resp) => {
    const status = resp.status;
    if (status === 200)
      return {
        data: await resp.json(),
        status,
      };
    else
      return {
        data: [],
        status,
      };
  });
}

export const getJson = async function (url) {
  try {
    // const fetchPro = fetch(url);
    // // const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

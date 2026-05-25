let browser_info = ["Chrome", "Firefox", "Safari", "Edge"];
browser_info.push("Opera");
for (let i = 0; i < browser_info.length; i++) {
    console.log(browser_info[i]);
    if (browser_info[i] === "Safari") {
        browser_info.splice(i, 1,   "Found Safari browser!");
        break;
    }
}
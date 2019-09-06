const childProcess = require("child_process");
const url = require("url");

let baseUrl;
let sessionPath;
let sessionId;

const getBaseUrl = function() {
    if (baseUrl === undefined) {
        getSession();
    }
    return baseUrl;
};

const getSession = function() {
    /*
    var jwtOAuthOrg = [
        "force:auth:jwt:grant",
        "--clientid",
        "3MVG9yZ.WNe6byQD2iMzzDcneLv1EUGD8f33sTa3J.qgqof9QqJJEQTTf8lY8RPn7j4qWobBFnmz7HtSGYeze",
        "--jwtkeyfile",
        "../server.key",
        "--username",
        "as.auto.test@as.com",
        "--loglevel",
        "TRACE",
        "--json"
    ];

    var jwtOAuthOrgJSON = childProcess.execFileSync("sfdx", jwtOAuthOrg, {
        encoding: "utf8"
    });

    try {
        //console.log(jwtOAuthOrgJSON)
        instanceUrl = JSON.parse(jwtOAuthOrgJSON).result.instanceUrl;
        /*console.log(
            "\n\n\n\n\n\n\n\nresult " +
                JSON.stringify(
                    JSON.parse(jwtOAuthOrgJSON).result.instanceUrl,
                    null,
                    4
                )
        );
        console.log("\n\n\n\n\n\n\n\n\ninstanceUrl : " + instanceUrl);
    } catch (err) {}*/

    let orgOpen = ["force:org:open", "-u", "as.auto.test@as.com", "-r"];
    let orgOpenResult = childProcess.execFileSync("sfdx", orgOpen, {
        encoding: "utf8"
    });

    let sessionLoginUrl = orgOpenResult
        .toString("utf8")
        .trim()
        .split(" ")[10];
    //console.log(sessionLoginUrl);

    const orgURL = new URL(sessionLoginUrl);
    baseUrl = orgURL.origin;
    sessionPath = orgURL.pathname;
    sessionId = orgURL.searchParams.get("sid");

    //console.log("this is the baseUrl ", baseUrl);
    //console.log("this is the sessionPath ", sessionPath);
    //console.log("this is the sessionId ", sessionId);
};

const getSessionLoginUrl = function() {
    if (baseUrl === undefined) {
        getSession();
    }
    //console.log("orgLogin ");
    const orgURL = new URL(baseUrl + sessionPath);
    //const newSearchParams = new URLSearchParams(orgURL.searchParams);
    orgURL.searchParams.append("sid", sessionId);
    //console.log("orgLogin " + orgURL.href);
    return orgURL.href;
};

module.exports = {
    getSessionLoginUrl,
    getBaseUrl
};

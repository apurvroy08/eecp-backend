import moment from "moment-timezone";

export function convertToIST(utcTime) {
    return moment.utc(utcTime).tz('Asia/Kolkata').format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
}

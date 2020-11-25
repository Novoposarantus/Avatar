function timeFormat(time) {
    return time < 10 ? `0${time}` : time;
}

export const minutesToTime = (minutes) => {
    const h = Math.trunc(minutes/60);
    const m = minutes % 60
    return `${timeFormat(h)}:${timeFormat(m)}`;
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function sleep(sleepTime) {
    await timeout(sleepTime);
}


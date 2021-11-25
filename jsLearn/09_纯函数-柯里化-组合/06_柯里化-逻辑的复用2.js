

const log = date => type => message => {
    console.log(`${date.getHours()} :${date.getMinutes()}:${date.getSeconds()}, ${type}+'  '${message}`);
}

const nowlog = log(new Date());

nowlog('debug')('bug1')
nowlog('filter')('bug2')
nowlog('debug')('bug13')


setTimeout(() => {
    const nowlogBUg = log(new Date)('Debug')
    nowlogBUg('8')
}, 1000);
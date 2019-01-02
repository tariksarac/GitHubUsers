import moment from "moment";


export function getDateTime(dateString) {
    return moment(dateString).calendar(null, {
        sameDay: 'h:mm A',
        lastDay: '[YESTERDAY]',
        lastWeek: 'dddd',
        sameElse: 'MMM D'
    });

}
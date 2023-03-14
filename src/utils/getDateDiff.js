import moment from 'moment';

export default function getDateDiff(date) {
  const currentDate = moment();
  const olderDate = moment(date);

  const diff = currentDate.diff(olderDate, 'minutes');

  if (diff < 60) {
    if (diff === 0) {
      return 'agora';
    }
    return `${diff} minuto${diff > 1 ? 's' : ''} atrás`;
  } else if (diff < 1440) {
    return `${Math.ceil(diff / 60)} horas atrás`;
  } else {
    return olderDate.format('DD/MM/YYYY HH[h]mm');
  }
}

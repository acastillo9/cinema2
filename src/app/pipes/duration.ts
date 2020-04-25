import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'duration' })
export class Duration implements PipeTransform {

  transform(value: any, ...args: any[]) {
    let result = '';
    const totalSeconds = value / 1000;
    const totalMinutes = totalSeconds / 60;
    const totalHours = totalMinutes / 60;

    const seconds = Math.floor(totalSeconds) % 60;
    const minutes = Math.floor(totalMinutes) % 60;
    const hours = Math.floor(totalHours) % 60;

    let minutesString;
    let secondsString;

    if (hours !== 0) {
      result += hours + ' hr: ';

      if (minutes.toString().length === 1) {
        minutesString = '0' + minutes;
      } else {
        minutesString = minutes;
      }
    }

    result += minutesString + ' min ';

    if (seconds.toString().length === 1) {
      secondsString = '0' + seconds;
    } else {
      secondsString = seconds;
    }

    result += secondsString;

    return result;
  }
}

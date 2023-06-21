const appointmentForm = document.querySelector('form');
const appointmentList = document.querySelector('.appointment__list');
const endTime = document.querySelector('#end__time');
const durationSpan = appointmentForm.querySelector('.duration');
let list = localStorage.appointmentList ? JSON.parse(localStorage.appointmentList) : [];
let duration = {
    hour: 0,
    min: 0,
}

function fromStringToData(s){
    let [hour, min] = s.split(':');
    let meridian = 'AM';

    if(min.includes('AM') || min.includes('PM'))
        [min, meridian] = min.split(' ');
    
    [hour, min] = [Number(hour), Number(min)];

    if(hour === 12)
        meridian = 'PM';

    if(hour === 0){
        hour = 12;
        meridian = 'AM';
    }

    if(hour > 12){
        hour -= 12;
        meridian = 'PM';
    }

    return {hour, min, meridian};
}

function fromDataToString(data){
    if(data.meridian === 'PM' && data.hour < 12)
        data.hour += 12;

    if(data.hour === 12 && data.meridian === 'AM')
        data.hour = 0;

    if(data.hour < 10)
        data.hour = '0' + data.hour;
    if(data.min < 10)
        data.min = '0' + data.min;

    return `${data.hour}:${data.min}`;
}

function getInFormat({hour, min, meridian}){
    if(hour < 10)
            hour = '0' + hour;
    if(min < 10)
        min = '0' + min;

    return `${hour}:${min} ${meridian}`;
}

function addTime(key, time, amount){
    const hour = time.hour;
    if(key === 'hour'){
        time.hour += amount;
    }
    if(key === 'min'){
        time.min += amount;
        if(time.min >= 60){
            time.hour += Math.round(time.min / 60);
            time.min = time.min % 60;
        }
    }
    if(time.hour > 12)
        time.hour -= 12;

    if(hour < time.hour && time.hour >= 12){
        if(time.meridian === 'AM')
            time.meridian = "PM";
        else time.meridian = "AM";
    }
    return time;
}

function handleSubmit(e){
    e.preventDefault();
    
    const appointment = {
        startTime: this.startInput.value,
        endTime: fromDataToString(fromStringToData(endTime.value)),
        duration: {...duration}
    };
    
    list.push(appointment);
    localStorage.appointmentList = JSON.stringify(list);

    this.reset();
    durationSpan.textContent = "00:00";
    displayAppointments(list);
}

function displayAppointments(itemList){
    appointmentList.innerHTML = itemList.map((item, i) => {
        const startTime = getInFormat(fromStringToData(item.startTime));
        const endTime = getInFormat(fromStringToData(item.endTime));

        return `
        <li>
            <span>${startTime} - ${endTime}</span>
            <button class="cancel" data-id="${i}">Cancel</button
        </li>
        `;
    }).join('');
}

function displayTime(time){
    let data = fromStringToData(time);
    data = addTime('hour', data, 1);
    endTime.textContent = getInFormat(data);
}

function upgradation(id){
    if(id === list.length - 1){
        list.splice(list.length - 1, 1);
        localStorage.appointmentList = JSON.stringify(list);
        displayAppointments(list);
        return;
    }

    const gap = Number(list[id + 1].duration.hour) * 60 + Number(list[id + 1].duration.min);

    if(id === 0){
        list[id].startTime = `09:00 AM`;
        const eTime =  addTime(
            'min', 
            fromStringToData(list[id].startTime), gap
        );
        list[id].endTime = fromDataToString(eTime);
        upgradation(id + 1);
        return;
    }
    
    let {endTime : prevEnd} = list[id - 1];
    prevEnd = fromStringToData(prevEnd);

    let currStart = addTime('min', {...prevEnd}, 30);
    let currEnd = addTime('min', {...currStart}, gap);

    currStart = fromDataToString(currStart);
    currEnd  = fromDataToString(currEnd);

    list[id].startTime = currStart;
    list[id].endTime = currEnd;

    upgradation(id + 1);
}

function handleDeleteButton(e){
    if(e.target.matches('button')){
        upgradation(Number(e.target.dataset.id));
    }
}

function getMinimum(){
    if(list.length === 0){
        return `09:00`;
    }
    if(list.length >= 1){
        let prevEnd = list[list.length - 1].endTime;
        prevEnd = fromStringToData(prevEnd);
    
        let minTime = addTime('min', prevEnd, 30); 
        minTime = fromDataToString(minTime);
    
        return minTime;
    }
}

function disableButton(){
    const button = appointmentForm.querySelector('button');
    button.disabled = true;
    button.title = 'Done for the day!! See you tomorrow';
    button.style.opacity = 0.5;
}

function enableButton(){
    const button = appointmentForm.querySelector('button');
    button.disabled = false;
    button.title = '';
    button.style.opacity = 1;
}

function differenceTime(time1, time2){
    let [hour1, min1] = time1.split(':');
    let [hour2, min2] = time2.split(':');

    [hour1, hour2, min1, min2] = [Number(hour1), Number(hour2), Number(min1), Number(min2)]

    let diff1 = 720 - (hour1 * 60 + min1)
    let diff2 = (hour2 * 60 + min2) - 720;

    return diff1 + diff2;
}

function handleEndTime(){
    let sTime = appointmentForm.startInput.value;
    let eTime = this.value;

    const difference = differenceTime(sTime, eTime);

    duration = {
        hour: Math.floor(difference / 60),
        min: difference % 60
    }

    if(duration.hour >= 0 && duration.min >= 0)
        durationSpan.textContent = fromDataToString(duration);
    const minTime = addTime('min', fromStringToData(appointmentForm.startInput.value), 1);
    
    this.min = fromDataToString(minTime);
}

appointmentForm.addEventListener('submit', handleSubmit);
appointmentForm.startInput.addEventListener('input', (e) => {
    e.currentTarget.min = getMinimum();
    if(e.currentTarget.min > e.currentTarget.max){
       e.currentTarget.min = '09:00';
       disableButton();
    } else{
        enableButton();
    }
    displayTime(e.currentTarget.value);
});

appointmentList.addEventListener('click', handleDeleteButton);
endTime.addEventListener('input', handleEndTime);

displayAppointments(list);
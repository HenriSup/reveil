cycleTime = 5400*1000;
jetLag = 2*60*60*1000;



timestamp1 = getDateTime("couche");
timestamp2 = getDateTime("leve");

gap = getGapBetweenTwoTimestamp(timestamp1, timestamp2);



cycleNumber = getCycleNumber(gap);

wakeUpDateTime = getWakeUpDateTime(timestamp1, cycleNumber, cycleTime);




function getDateTime (selector)
{
	dateTime = $('#'+selector).val();
	date = new Date(dateTime);
	return date.getTime();
}


function getGapBetweenTwoTimestamp(timestamp1,timestamp2)
{
	return timestamp2-timestamp1;
}

function getCycleNumber(gap)
{
	return Math.floor(gap/cycleTime) ;

}


function getWakeUpDateTime(timestamp,cycleNumber,cycleTime)
{
	return (timestamp1+(cycleNumber*cycleTime)) ;

	}

function numcycle()
{
document.cycy.ch1.value=cycleNumber; 
}
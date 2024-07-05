document.addEventListener('DOMContentLoaded', function () {

    let newData = [];

    fetch("json/date.json")
        .then(res => res.json())
        .then(data => {

            for (let i = 0; i < data.length; i++) {
                newData.push({ 
                    title: data[i].Name, 
                    start: data[i].DateTime, 
                    
                    display: 'block',
                    borderColor: "pink", 
                    backgroundColor: "black" })
            }
            let calendarEl = document.getElementById('calendar');
            let calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth',
                progressiveEventRendering: true,
                events: newData,
                views: {
                    timeGrid: {
                        dayMaxEventRows: 1
                    }
                }
            });
            calendar.render();
            calendar.setOption('locale', 'fr');
        })

});
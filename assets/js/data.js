const data = [
    {
        date: 'Mon, 15 March',
        time:  '4:00 PM',
        title: 'Sights & Sounds Exhibition',
        img : '/assets/picture1.png',
    },
    {
        date: 'Mon, 15 March',
        time:  '7:00 PM',
        title: 'Maleficent',
        img : '/assets/picture2.png',
    },
    {
        date: 'Fri, 31 March',
        time:  '8:30 PM',
        title: 'Persija vs Persib',
        img : '/assets/persija.jpg',
    },
    {
        date: 'Sun, 1 April',
        time:  '7:00 PM',
        title: 'Born Pink, BLACKPINK World Tour JAKARTA',
        img : '/assets/blackpink.jpg',
    }

]


// const dataFetch = data;
const parentBanner = document.querySelector('.parent-event-banner');
let parent = ''
data.forEach((event) => {
parent +=` <div class="overflow-hidden rounded-3xl w-[260px] h- mt-14 relative">
                <img class="w-full h-full object-cover" src="${event.img}" alt="picture2">
                <div>
                    <div class="absolute bottom-0 text-white flex flex-col gap-5 p-5 bg-gradient-to-b from-[rgba(0,0,0,0.01)] to-[rgba(0,0,0,0.5)]">
                    <div>${event.date},${event.time}</div>
                    <div class="font-bold text-2xl tracking-wide"><a href="/event.html">${event.title}</a></div>
                    <div class="flex">
                        <div class="w-12 h-12 rounded-full overflow-hidden border-2 -ml-2">
                            <img class="object-cover w-full h-full" src="/assets/profile1.jpg" alt="profile1">
                        </div>
                        <div class="w-12 h-12 rounded-full overflow-hidden border-2 -ml-2">
                            <img class="object-cover w-full h-full" src="/assets/profile2.jpg" alt="profile2">
                        </div>
                        <div class="w-12 h-12 rounded-full overflow-hidden border-2 -ml-2">
                            <img class="object-cover w-full h-full" src="/assets/profile3.jpg" alt="profile3">
                        </div>
                        <div class="w-12 h-12 rounded-full overflow-hidden border-2 -ml-2">
                            <img class="object-cover w-full h-full" src="/assets/profile4.jpg" alt="profile4">
                        </div>
                    </div>
                </div>
                </div>
            </div>>
`
})
parentBanner.innerHTML = parent;


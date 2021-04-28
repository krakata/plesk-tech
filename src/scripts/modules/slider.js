const swiper = new Swiper('.swiper-container', {
    watchOverflow: true,
    // loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const teams = [
    'Core',
    'MetaCloud',
    'Modules',
    'DevOps',
    'Security',
    'Licensing &amp;&nbsp;Partner Services',
    'UI/UX Design',
    'Solus',
    'Tools &amp;&nbsp;Infrastructure',
    'Technical writing &amp;&nbsp;Localization',
    'Program Managers'
];

const swiperTeams = new Swiper ('.teams__swiper', {
    spaceBetween: 100,
    speed: 600,
    autoHeight: true,

    pagination: {
        el: '.teams__list',
        clickable: true,
        bulletClass: 'teams__item',
        bulletActiveClass: 'teams__item--active',
        renderBullet: function (index, className) {
            return '<button type="button" class="' + className + '">' + (teams[index]) + '</button>';
        },
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

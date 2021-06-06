var myCarousel = document.querySelector('#myCarousel')
// var carousel = new bootstrap.Carousel(myCarousel, {
//   interval: 2000,
//   wrap: true
// })

let portfolio_div = document.querySelector('.single_portfolio');
let portfolios = ['assets/images/blog1.png', 'assets/images/blog2.png', 'assets/images/blog3.png', 'assets/images/blog4.png', '../assets/images/blog5.png', '../assets/images/blog6.png']

let team_div = document.querySelector('.team_content')
let teams = [
    {
        id: 1,
        img: 'assets/images/char-1.png',
        social_handle: '../assets/images/fb.png',
        name: 'Hugo Saavedra',
        designation: 'Developer'
    },
    {
        id: 2,
        img: 'assets/images/char2.png',
        social_handle: '../assets/images/inst.png',
        name: 'Angu Tamba',
        designation: 'Manager'
    },
    {
        id: 3,
        img: 'assets/images/char3.png',
        social_handle: '../assets/images/tw.png',
        name: 'Oka Tomoaki',
        designation: 'Designer'
    },
    {
        id: 4,
        img: 'assets/images/char-1.png',
        social_handle: '../assets/images/fb.png',
        name: 'Hugo Saavedra',
        designation: 'Developer'
    },
    {
        id: 5,
        img: 'assets/images/char2.png',
        social_handle: '../assets/images/inst.png',
        name: 'Angu Tamba',
        designation: 'Manager'
    },
    {
        id: 6,
        img: 'assets/images/char3.png',
        social_handle: '../assets/images/tw.png',
        name: 'Oka Tomoaki',
        designation: 'Designer'
    },
    {
        id: 7,
        img: 'assets/images/char-1.png',
        social_handle: '../assets/images/fb.png',
        name: 'Hugo Saavedra',
        designation: 'Developer'
    },
    {
        id: 8,
        img: 'assets/images/char2.png',
        social_handle: '../assets/images/inst.png',
        name: 'Angu Tamba',
        designation: 'Manager'
    },
    {
        id: 9,
        img: 'assets/images/char3.png',
        social_handle: '../assets/images/tw.png',
        name: 'Oka Tomoaki',
        designation: 'Designer'
    }
]

let blog_div = document.querySelector('.blog_content')
let blogs = [
    {
        img: 'assets/images/blog(1).png',
        title: 'Web Design',
        content: 'Almost before we knew it, we had left the ground',
        userName: 'Nicolina Lindholm',
        day: 'Feb 20, 2020'
    },
    {
        img: 'assets/images/blog(2).png',
        title: 'Trends',
        content: 'Before we knew it, we had left the ground',
        userName: 'Shen Zhi',
        day: 'Feb 19, 2020'
    },
    {
        img: 'assets/images/blog(3).png',
        title: 'Marketing',
        content: 'We knew it, we had left the ground almost',
        userName: 'Stephanie Bailey',
        day: 'Feb 18, 2020'
    },
    {
        img: 'assets/images/blog(1).png',
        title: 'Web Design',
        content: 'Almost before we knew it, we had left the ground',
        userName: 'Nicolina Lindholm',
        day: 'Feb 20, 2020'
    },
    {
        img: 'assets/images/blog(2).png',
        title: 'Trends',
        content: 'Before we knew it, we had left the ground',
        userName: 'Shen Zhi',
        day: 'Feb 19, 2020'
    },
    {
        img: 'assets/images/blog(3).png',
        title: 'Marketing',
        content: 'We knew it, we had left the ground almost',
        userName: 'Stephanie Bailey',
        day: 'Feb 18, 2020'
    },
    {
        img: 'assets/images/blog(1).png',
        title: 'Web Design',
        content: 'Almost before we knew it, we had left the ground',
        userName: 'Nicolina Lindholm',
        day: 'Feb 20, 2020'
    },
    {
        img: 'assets/images/blog(2).png',
        title: 'Trends',
        content: 'Before we knew it, we had left the ground',
        userName: 'Shen Zhi',
        day: 'Feb 19, 2020'
    },
    {
        img: 'assets/images/blog(3).png',
        title: 'Marketing',
        content: 'We knew it, we had left the ground almost',
        userName: 'Stephanie Bailey',
        day: 'Feb 18, 2020'
    }
]

function getBlogs() {
    let blog_html = blogs.map(blog => `
        <div class="item">
            <img src="${blog.img}" alt="blog" srcset="">
            <div class="single_blog blog_3" style=""></div>
            <h5>${blog.title}</h5>
            <p>${blog.content}</p>
            <div class="info">
                <p>${blog.userName}</p>
                <span>${blog.day}</span>
            </div>
        </div>
    `).join('')

    blog_div.innerHTML = blog_html
}

function getTeamMembers() {
    let team_html = teams.map(function(currentMember) {
        return `<div class="item">
            <img src='${currentMember.img}' class="team_member" alt="team member" srcset="">
            <img src='${currentMember.social_handle}' alt='${currentMember.social_handle} icon' class="icon">
            <h5>${currentMember.name}</h5>
            <p>${currentMember.designation}</p>
        </div>`
    }).join('')

    team_div.innerHTML = team_html
}

function getPortfolio() {
    let portfolio_html = portfolios.map(function(portfolio) {
        console.log(portfolio)
        return `
            <div class="col-lg-4 col-md-6 portfolio_content">
                <div class="portfolio_cover portfolio_1" style="background-image: url(${portfolio})">
                    <div class="portfolio_info">
                        <img src="assets/images/Shape (5).png" alt="plus icon" srcset="">
    
                        <div>
                            <h4>Web Design</h4>
                            <p>Almost Landing</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('')

    portfolio_div.innerHTML = portfolio_html
}

window.addEventListener('DOMContentLoaded', function() {
    getPortfolio();
    getTeamMembers();
    getBlogs();

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            768:{
                items:3,
                nav:true,
                loop:false
            }
        }
    })
})
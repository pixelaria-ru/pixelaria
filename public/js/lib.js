"use strict";

window.onscroll = function () {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop,
      screenHeight = window.screen.height,
      downScreen = scrolled + screenHeight,
      partfolioArticle = document.querySelectorAll('.section--partfolio__article'),
      partfolioLength = partfolioArticle.length - 1,
      section = document.querySelectorAll('.section'),
      sectionLength = section.length - 1;

  if (scrolled > document.querySelector('.section--initial-screen').offsetHeight) {
    document.querySelector('.header').classList.add('fixed');
  } else {
    document.querySelector('.header').classList.remove('fixed');
  }

  if (window.screen.width > 1000) {
    for (var i = 0; i < partfolioLength; i++) {
      scrolledPartfolio(i);
    }
  }

  function scrolledPartfolio(i) {
    var doubleI = i;
    doubleI++;

    if (downScreen >= partfolioArticle[i].offsetTop + partfolioArticle[i].offsetHeight) {
      partfolioArticle[doubleI].style.marginTop = -screenHeight + 88 + 'px';
    } else {
      partfolioArticle[doubleI].style.marginTop = 0 + 'px';
    }
  }
};

if (window.screen.width <= 720) {
  (function () {
    var mobileSide = document.createElement('div');
    var mobileMenu = document.createElement('div');
    var mobileMenuSpan = document.createElement('span');
    var mobileMenuSvg = document.createElement('svg');
    mobileSide.className = 'header__mobile-side flex';
    mobileMenu.className = 'mobile-menu flex';
    document.querySelector('.header .container').appendChild(mobileSide);
    document.querySelector('.header__mobile-side').appendChild(document.querySelector('.header .icon'));
    document.querySelector('.header__mobile-side').appendChild(mobileMenu);
    document.querySelector('.mobile-menu').appendChild(mobileMenuSpan);
    document.querySelector('.mobile-menu').addEventListener('click', function () {
      document.querySelector('.header__nav').classList.toggle('active');
      document.querySelector('.header').classList.toggle('open');
      document.querySelector('.zak a').classList.add('button', 'button--green');
    });
  })();

  (function heading() {
    var heading = document.createElement('div');
    var headingH2 = document.createElement('h2');
    var headingHr = document.createElement('hr');
    headingH2.innerHTML = 'Стоимость услуг';
    heading.className = 'heading flex';
    document.querySelector('.section--price .container').prepend(heading);
    document.querySelector('.section--price .heading').appendChild(headingH2);
    document.querySelector('.section--price .heading').appendChild(headingHr);
  })();

  (function () {
    (function heading() {
      var heading = document.createElement('div');
      var headingH2 = document.createElement('h2');
      var headingHr = document.createElement('hr');
      headingH2.innerHTML = 'Портфолио';
      heading.className = 'heading flex';
      document.querySelector('.section--partfolio').prepend(heading);
      document.querySelector('.section--partfolio .heading').appendChild(headingH2);
      document.querySelector('.section--partfolio .heading').appendChild(headingHr);
    })();

    var buttonGreen = document.createElement('button');
    var partLeftSide = document.querySelectorAll('.partfolio-article__left-side');
    var partfolioArticle = document.querySelectorAll('.section--partfolio__article');
    var partfolioArticleLength = partfolioArticle.length;
    buttonGreen.innerHTML = 'Смотреть проект';
    buttonGreen.className = 'button button--green';
    var buttonGreen2 = buttonGreen.cloneNode(true);
    var buttonGreen3 = buttonGreen.cloneNode(true);
    partfolioArticle[0].querySelectorAll('.partfolio-list__item')[1].append(buttonGreen);
    partfolioArticle[1].querySelectorAll('.partfolio-list__item')[1].append(buttonGreen2);
    partfolioArticle[2].querySelectorAll('.partfolio-list__item')[1].append(buttonGreen3);

    for (var i = 0; i < partfolioArticleLength; i++) {
      partLeftSide[i].removeChild(partfolioArticle[i].querySelector('p'));
      partLeftSide[i].appendChild(partfolioArticle[i].querySelector('h2'));
      partLeftSide[i].appendChild(partfolioArticle[i].querySelector('span'));
    }
  })();

  (function () {
    (function heading() {
      var heading = document.createElement('div');
      var headingH2 = document.createElement('h2');
      var headingHr = document.createElement('hr');
      headingH2.innerHTML = 'О нас';
      heading.className = 'heading flex';
      document.querySelector('.section--about').prepend(heading);
      document.querySelector('.section--about .heading').appendChild(headingH2);
      document.querySelector('.section--about .heading').appendChild(headingHr);
    })();
  })();
}
"use strict";

;

(function (window, document) {
  var file = 'images/svg/sprite.svg',
      revision = 1;
  if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) return true;

  var isLocalStorage = 'localStorage' in window && window['localStorage'] !== null,
      request,
      data,
      insertIT = function insertIT() {
    document.body.insertAdjacentHTML('afterbegin', data);
  },
      insert = function insert() {
    if (document.body) insertIT();else document.addEventListener('DOMContentLoaded', insertIT);
  };

  if (isLocalStorage && localStorage.getItem('inlineSVGrev') == revision) {
    data = localStorage.getItem('inlineSVGdata');

    if (data) {
      insert();
      return true;
    }
  }

  try {
    request = new XMLHttpRequest();
    request.open('GET', file, true);

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        data = request.responseText;
        insert();

        if (isLocalStorage) {
          localStorage.setItem('inlineSVGdata', data);
          localStorage.setItem('inlineSVGrev', revision);
        }
      }
    };

    request.send();
  } catch (e) {}
})(window, document);
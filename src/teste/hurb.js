//var bloco = document.getElementsByClassName('afiliateHu');
var idPublisher = document.getElementById('afiliateHu').getAttribute('data-ad-client');
var width = document.getElementById('afiliateHu').getAttribute('data-ad-width');
var height = document.getElementById('afiliateHu').getAttribute('data-ad-height');
var link = document.getElementById('afiliateHu').getAttribute('data-ad-link');
var parceiroFixo = document.getElementById('afiliateHu').getAttribute('data-ad-parceiro');
var utmCampaign = document.getElementById('afiliateHu').getAttribute('data-ad-utm-campaign');
var cor = document.getElementById('afiliateHu').getAttribute('data-ad-cor');
var a = document.createElement('iframe');
a.src =
    'https://www.clubehu.com.br/assets/cmp/vertical.php?idPublisher=' +
    idPublisher +
    '&width=' +
    width +
    '&height=' +
    height +
    '&link=' +
    link +
    '&parceiroFixo=' +
    parceiroFixo +
    '&utmCampaign=' +
    utmCampaign +
    '&cor=' +
    cor;
a.width = width;
a.height = height;
a.scrolling = 'no';
a.frameBorder = 0;
document.getElementById('afiliateHu').appendChild(a);
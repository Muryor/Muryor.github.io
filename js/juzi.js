if (Math.random() < 0.5) {
  fetch('https://v2.jinrishici.com/one.json')
      .then(function (res) {
          return res.json();
      })
      .then(function (data) {
          var hitokoto = document.getElementById('hitokotoOrJinrishici');
          var hitokotoOrJinrishici = data.data.content + '<br>' +
              '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
              '——' + data.data.origin.dynasty + '·' + data.data.origin.author + '<br>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
              '《' + data.data.origin.title + '》';
          var typed = new Typed(
              '#hitokotoOrJinrishici',
              {strings: [hitokotoOrJinrishici], startDelay: 300,typeSpeed: 100});
      })
      .catch(function (err) {
          console.error(err);
      })
} else {
  fetch('https://v1.hitokoto.cn')
      .then(function (res) {
          return res.json();
      })
      .then(function (data) {
          var hitokoto = document.getElementById('hitokotoOrJinrishici');
          var hitokotoOrJinrishici = data.hitokoto + '<br>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '——  By ' + data.from;
          var typed = new Typed(
              '#hitokotoOrJinrishici',
              {strings: [hitokotoOrJinrishici], startDelay: 300,typeSpeed: 100});
      })
      .catch(function (err) {
          console.error(err);
      })

}